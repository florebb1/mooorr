$(function () {
    // get user infomation
    var idx = getCookie('idx');
    if(idx != "" && idx != null && idx != undefined) {
        $("#userIdx").val(idx);
        $("#modal-userIdx").val(idx);
        scheduleInfo(idx);
        // if(idx != loginIdx) {
        //     $("#switch-normal-span").addClass('d-none');
        //     $("#scheduleAddBtn").addClass('d-none');
        //     $("#saveBtn").addClass('d-none');
        // }
    }else {
        Swal.fire({
            text: '해당 회원정보가 존재하지 않습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            history.back();
        });
    }

    // info onoff
    $("#switch-normal").change(function () {
        if($(this).is(":checked")) {
            $("#onoff").val('0');
        }else {
            $("#onoff").val('1');
        }
    });

    // modal datetimepicker
    $('.datetimepicker-input').datetimepicker({
        icons: {
            time: 'far fa-clock',
            date: 'far fa-calendar',
            today: 'far fa-calendar',
            clear: 'far fa-trash',
            close: 'far fa-times'
        },
        format: 'YYYY-MM-DD'
    });

    // modal date change
    $("#datetimepicker1").on('change.datetimepicker', function (change, viewDate) {
        var selectDate = moment(new Date(change.date._i)).format("YYYY-MM-DD HH:mm:ss");
        $("#startDate").val(selectDate);
    });
    $("#datetimepicker2").on('change.datetimepicker', function (change, viewDate) {
        var selectDate = moment(new Date(change.date._i)).format("YYYY-MM-DD HH:mm:ss");
        $("#endDate").val(selectDate);
    });


});
function scheduleInfo(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/schedule?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                var html = "";
                // onoff check
                $("#onoff").val(response.onoff);
                if (response.onoff == "0") {
                    $("#switch-normal").attr('checked', true);
                } else {
                    $("#switch-normal").attr('checked', false);
                }
                // schedule content
                if (response.scheduleList != "" && response.scheduleList != null && response.scheduleList != undefined && response.scheduleList.length > 0) {
                    for (var i = 0; i < response.scheduleList.length; i++) {
                        html += '<div class="schedule-list-box row">'
                            + '<div class="col">'
                            + '<div class="font-weight-bold">' + moment(response.scheduleList[i].startDate).format("MM.DD") + ' ~ ' + moment(response.scheduleList[i].endDate).format("MM.DD") + '</div>'
                            + '<div class="font-weight-bold text-dark font-15">' + response.scheduleList[i].sdTitle + '</div>'
                            + '<div class="font-weight-light text-dark">' + response.scheduleList[i].sdContent + '</div>'
                            + '</div>'
                            + '<div class="col-auto"><button class="btn btn-link schedule-closer" onclick="scheduleDel(' + response.scheduleList[i].sdIdx + ')">x</button></div>'
                            + '</div>';
                    }
                    $("#schedule_content").empty();
                    $("#schedule_content").append(html);
                } else {
                    html += '<div class="text-center">등록된 일정이 없습니다</div>';
                    $("#schedule_content").empty();
                    $("#schedule_content").append(html);
                }
            }else{
                Swal.fire({
                    text: response.msg,
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                });
                return false;
            }
        }
    });
}
function scheduleDel(idx) {
    Swal.fire({
        text: '해당 일정을 삭제하시겠습니까?',
        showCancelButton: true,
        cancelButtonText: '취소',
        confirmButtonText: '확인',
        allowOutsideClick: false,
        reverseButtons: true
    }).then(function (isConfirm) {
        if(isConfirm.value) {
            var apiAddress = $("#apiAddress").val();
            $.ajax({
                url: apiAddress+"/api/delSchedule?sdIdx=" + idx,
                type: 'GET',
                dataType: 'JSON',
                success: function (response) {
                    // console.log(response);
                    if(response.result == true) {
                        location.reload();
                    }else {
                        Swal.fire({
                                text: response.msg,
                            confirmButtonText: '확인',
                            allowOutsideClick: false
                        });
                        return false;
                    }
                }
            });
        }
    });
}
function scheduleAdd() {
    var start = $("#datetimepicker1").val();
    var startDate = $("#startDate").val();
    var end = $("#datetimepicker1").val();
    var endDate = $("#endDate").val();
    var title = $("#sdTitle").val();
    var content = $("#sdContent").val();
    endDate = moment(endDate).format('YYYY-MM-DD 23:59:59');
    $("#endDate").val(endDate);
    if(start == "" || startDate == "") {
        Swal.fire({
            text: '시작일을 선택해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }else if(end == "" || endDate == "") {
        Swal.fire({
            text: '종료일을 선택해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }else if(parseInt(moment(startDate).format('YYYYMMDD')) - parseInt(moment(endDate).format('YYYYMMDD')) > 0) {
        Swal.fire({
            text: '종료일은 시작일보다 미래 날짜만 입력 가능합니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }else if(title == "") {
        Swal.fire({
            text: '일정 제목을 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }else if(content == "") {
        Swal.fire({
            text: '일정 내용을 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    var apiAddress = $("#apiAddress").val();
    var datas = $("#scheduleModalForm").serialize();
    $.ajax({
        url: apiAddress+"/api/saveSchedule",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                location.reload();
            }else{
                Swal.fire({
                    text: response.msg,
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                });
                return false;
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}

function onoff() {
    var apiAddress = $("#apiAddress").val();
    var datas = $("#scheduleForm").serialize();
    $.ajax({
        url: apiAddress+"/api/setScheduleOnoff",
        type: 'GET',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                Swal.fire({
                    title: '수정 완료',
                    text: '수정이 완료되었습니다',
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                }).then(function() {
                    var name = getCookie('name');
                    if(name != "" && name != null && name != undefined) {
                        location.href='/'+name;
                    }else {
                        location.href='/';
                    }
                });
            }else {
                Swal.fire({
                    text: response.msg,
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                });
                return false;
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}
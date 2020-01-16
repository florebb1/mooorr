$(function () {
    // get user infomation
    // var loginIdx = getCookie('idx');
    var idx = getParameter('idx');
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
    // $("#switch-normal").change(function () {
    //     if($(this).is(":checked")) {
    //         $("#onoff").val('0');
    //     }else {
    //         $("#onoff").val('1');
    //     }
    // });

    // // modal datetimepicker
    // $('.datetimepicker-input').datetimepicker({
    //     icons: {
    //         time: 'far fa-clock',
    //         date: 'far fa-calendar',
    //         today: 'far fa-calendar',
    //         clear: 'far fa-trash',
    //         close: 'far fa-times'
    //     },
    //     format: 'YYYY-MM-DD'
    // });
    //
    // // modal date change
    // $("#datetimepicker1").on('change.datetimepicker', function (change, viewDate) {
    //     var selectDate = moment(new Date(change.date._i)).format("YYYY-MM-DD HH:mm:ss");
    //     $("#startDate").val(selectDate);
    // });
    // $("#datetimepicker2").on('change.datetimepicker', function (change, viewDate) {
    //     var selectDate = moment(new Date(change.date._i)).format("YYYY-MM-DD HH:mm:ss");
    //     $("#endDate").val(selectDate);
    // });


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
                console.log(response.scheduleList);
                if (response.scheduleList != "" && response.scheduleList != null && response.scheduleList != undefined && response.scheduleList.length > 0) {
                    // var loginIdx = getCookie('idx');
                    for (var i = 0; i < response.scheduleList.length; i++) {
                        html += '<div class="schedule-list-box row">'
                            + '<div class="col-11">'
                            + '<div class="font-weight-bold">' + moment(response.scheduleList[i].startDate).format("MM.DD") + ' ~ ' + moment(response.scheduleList[i].endDate).format("MM.DD") + '</div>'
                            + '<div class="font-weight-bold text-dark font-15">' + response.scheduleList[i].sdTitle + '</div>'
                            + '<div class="font-weight-light text-dark">' + response.scheduleList[i].sdContent + '</div>'
                            + '</div>';
                        // if(idx == loginIdx) {
                        //     html += '<div class="col1"><button class="btn btn-link schedule-closer" onclick="scheduleDel('+response.scheduleList[i].sdIdx+')">x</button></div>';
                        // }
                        html += '</div>';
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
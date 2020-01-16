$(function () {
    var idx = getCookie('idx');
    if(idx != "" && idx != null && idx != undefined) {
        $("#userIdx").val(idx);
        interestList(idx);
    }else {
        Swal.fire({
            text: '해당 회원정보가 존재하지 않습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            history.back();
        });
    }

    // 스위치 온/오프
    $("#switch-normal").change(function () {
        if($("#switch-normal").is(":checked") == true) {
            $("#onoff").val(0);
        }else {
            $("#onoff").val(1);
        }
    });

    // 항목추가버튼
    $("#itemAddBtn").click(function () {
        var html = "";
        var count = $(".interest_count").length;
        if(count < 10) {
            // html = '<div class="form-row w-100 mb-3 interest_count">'
            //     + '<div class="col-3 d-flex align-items-center"><span class="span_tw">관심분야 '+parseInt(count+1)+'</span></div>'
            //     + '<div class="col-8">'
            //     + '<input type="text" name="contentArr" class="form-control" value="">'
            //     + '</div>'
            //     + '<div class="col-1 d-flex align-items-center">'
            //     + '<button type="button" class="btn btn-link interestDelete"><img src="/assets/images/cross-out.png" style="width:16px;height:16px;"/></button>'
            //     + '</div>'
            //     + '</div>';

            html += '<div class="form-row w-100 mb-3 interest_count">'
                + '<div class="col-3 d-flex align-items-center justify-content-center"><span class="span_tw">관심분야 ' + parseInt(count + 1) + '</span></div>'
                + '<div class="col-8">'
                + '<input type="text" name="contentArr" class="form-control" value="">'
                + '</div>'
                + '<div class="col-1 d-flex align-items-center">'
                + '<button type="button" class="btn btn-link interestDelete"><img src="/assets/images/cross-out.png" style="width:16px;height:16px;"/></button>'
                + '</div>'
                + '</div>';



            $("#interest_content").append(html);
        }else {
            Swal.fire({
                text: '설정 가능한 최대치입니다',
                confirmButtonText: '확인',
                allowOutsideClick: false
            });
            return false;
        }
    });
    // 삭제버튼
    $(document).on('click', '.interestDelete', function(){
       $(this).parent().parent().remove();
    });


});
function interestList(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/editAboutInterest?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            console.log(response);
            var html = "";
            if(response.result==true) {
                if (response.onoff == 0) {
                    $("#switch-normal").attr("checked", true);
                    $("#onoff").val("0");
                } else {
                    $("#switch-normal").attr("checked", false);
                    $("#onoff").val("1");
                }
                if (response.interestList.length > 0) {
                    for (var i = 0; i < response.interestList.length; i++) {
                        if(response.interestList[i] != "" && response.interestList[i] != null && response.interestList[i] != undefined) {
                            html += '<div class="form-row w-100 mb-3 interest_count">'
                                + '<div class="col-3 d-flex align-items-center justify-content-center"><span class="span_tw">관심분야 ' + parseInt(i + 1) + '</span></div>'
                                + '<div class="col-8">'
                                + '<input type="text" name="contentArr" class="form-control" value="' + response.interestList[i] + '">'
                                + '</div>'
                                + '<div class="col-1 d-flex align-items-center">'
                                + '<button type="button" class="btn btn-link interestDelete"><img src="/assets/images/cross-out.png" style="width:16px;height:16px;"/></button>'
                                + '</div>'
                                + '</div>';
                        }
                    }
                }
                $("#interest_content").empty();
                $("#interest_content").append(html);
            }else{
                Swal.fire({
                    text: response.msg,
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                });
                return false;
            }
        }, error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}
function interestEdit() {
    // input value -> array
    var valArr = $("input[name=contentArr]");
    var send_array = Array();
    var send_cnt = 0;
    for(var i=0; i<valArr.length; i++) {
        send_array[send_cnt] = valArr[i].value;
        send_cnt++;
    }
    $("#content").val(send_array);
    var apiAddress = $("#apiAddress").val();
    var datas = $("#interestListForm").serialize();
    $.ajax({
        url: apiAddress+"/api/saveAboutInterest",
        type: 'POST',
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
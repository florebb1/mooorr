$(function () {
    // get user infomation
    var idx = getParameter('idx');
    if(idx != "" && idx != null && idx != undefined) {
        $("#userIdx").val(idx);
        flagList(idx);
    }else {
        Swal.fire({
            text: '해당 회원정보가 존재하지 않습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            history.back();
        });

    }

    $(".flag-ipt").click(function () {
        $(".flag-ipt").prop('checked', false);
        $(this).prop('checked', true);
        var id = $(this).attr('id');
        $("#nation").val(id);

        var ori_content = $("#ori_content").val();
        if(ori_content != "" && ori_content != null && ori_content != undefined) {
            var new_content = ori_content +","+id;
            $("#content").val(new_content);
        }else {
            $("#content").val(id);
        }
    })
});
function flagList(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/editAboutTravel?userIdx="+idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result==true) {
                if (response.onoff == "0") {
                    $("#switch-normal").attr('checked', true);
                    $("#onoff").val("0");
                } else {
                    $("#switch-normal").attr('checked', false);
                    $("#onoff").val("1");
                }
                if (response.travelList != "" && response.travelList != null && response.travelList != undefined) {
                    var send_array = Array();
                    for (var i = 0; i < response.travelList.length; i++) {
                        send_array[i] = response.travelList[i];
                    }
                    $("#ori_content").val(send_array);
                }
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
function flagAdd() {
    var apiAddress = $("#apiAddress").val();
    var nation = $("#nation").val();
    if(nation == "" || nation == null || nation == undefined) {
        Swal.fire({
            text: '여행국가를 선택해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    var datas = $("#travelForm").serialize();
    $.ajax({
        url: apiAddress+"/api/saveAboutTravel",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                history.back();
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
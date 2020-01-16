$(function () {
    var targetIdx = getParameter('targetIdx');
    var idx = getCookie('idx');
    $("#userIdx").val(idx);
    $("#targetIdx").val(targetIdx);
    declaration(targetIdx);
});

function declaration(targetIdx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/userInfo?userIdx="+targetIdx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            // 타겟 프로필 사진
            $(".maspro-img").css('background-image', 'url('+apiAddress+response.user.profileImage+')');
            // 타겟 이름
            $(".nick-asd-msg").text(response.user.userName);
            $("#infoUserStatusMGS").text(response.user.statusMessage);
        }
    });
}
function decSave() {
    var category = $("#category").val();
    var rpContent = $("#rpContent").val();

    if(category == "" || category == null || category == undefined) {
        Swal.fire({
            text: '카테고리를 선택해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }else if(rpContent == ""){
        Swal.fire({
            text: '내용을 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    var apiAddress = $("#apiAddress").val();
    var targetIdx = $("#targetIdx").val();
    var datas = $("#decForm").serialize();
    $.ajax({
        url: apiAddress+"/api/saveReport",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                Swal.fire({
                    text: "신고접수되었습니다",
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                }).then(function() {
                    location.href='/chat_detail?targetIdx='+targetIdx;
                });
            }else {
                Swal.fire({
                    text: response.msg,
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                }).then(function() {
                    location.reload();
                });
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}

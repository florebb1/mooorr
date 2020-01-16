$(function () {
   var id = getParameter('id');
   if(id == "" || id == null || id == undefined) {
       Swal.fire({
           text: '회원정보가 존재하지 않습니다',
           confirmButtonText: '확인',
           allowOutsideClick: false
       }).then(function() {
           history.back();
       });
   }else {
        $("#loginId").val(id);
   }

    $("#pwd").on('keyup', function (event) {
        if(event.which == 13) {
            userCheck();
        }
    });
});
function userCheck() {
    var apiAddress = $("#apiAddress").val();
    var id = $("#loginId").val();
    var pw = $("#pwd").val();
    if(id == "" || id == null || id == undefined) {
        Swal.fire({
            text: '아이디를 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }else if(pw == "" || pw == null || pw == undefined) {
        Swal.fire({
            text: '비밀번호를 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    var datas = $("#changePwForm").serialize();
    $.ajax({
        url: apiAddress+"/api/signIn",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                location.href = '/change_pw2?id='+response.user.loginId;
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
$(function () {
    var signId = getCookie('signEmail');
    var signPw = getCookie('signPwd');

    $("#completBtn").click(function () {
        if(signId != "" && signId != null && signId != undefined && signPw != "" && signPw != null && signPw != undefined) {
            login(signId, signPw);
        }else {
            Swal.fire({
                text: '사용자 정보가 존재하지 않습니다',
                confirmButtonText: '확인',
                allowOutsideClick: false
            }).then(function () {
                location.href='/login';
            });
        }
    });
});
function login(id, pw) {
    var apiAddress = $("#apiAddress").val();
    var datas = {
        loginId: id,
        pwd: pw
    };
    $.ajax({
        url: apiAddress+"/api/signIn",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                setCookie('id', '', -1);
                setCookie('pw', '', -1);
                setCookie('idx', response.user.userIdx, 7);
                setCookie('email', response.user.loginId, 7);
                setCookie('name', response.user.userName, 7);
                location.href = '/'+response.user.userName;
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
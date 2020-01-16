$(function () {
   var email = getParameter('email');
   $("#loginId").val(email);
});
function changePw() {
    var pwExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/i;
    var apiAddress = $("#apiAddress").val();
    var pw = $("#newPwd").val();
    var pw2 = $("#newPwd2").val();
    if(pw == "" || pw == null || pw == undefined) {
        Swal.fire({
            text: '새 비밀번호를 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }else if(pw.match(pwExp) == null) {
        Swal.fire({
            text: '비밀번호 양식은 영문+숫자+특문을 혼용하여 8~20자를 사용해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }else if(pw != pw2) {
        Swal.fire({
            text: '새 비밀번호 확인이 일치하지 않습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    var datas = $("#findPwForm").serialize();
    $.ajax({
        url: apiAddress+"/api/saveNewPwd",
        type: 'GET',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                Swal.fire({
                    text: '비밀번호가 변경되었습니다\n로그인페이지로 이동합니다',
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                }).then(function() {
                    location.href='/login';
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
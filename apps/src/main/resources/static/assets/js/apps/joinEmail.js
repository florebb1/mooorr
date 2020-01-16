$(function () {
    $(".form-control").keyup(function (event) {
        if(event.which === 13) {
            sendEmail();
        }
    });
});
function sendEmail() {
    var apiAddress = $("#apiAddress").val();
    var emailVal = $("#loginId").val();
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(emailVal == "") {
        Swal.fire({
            text: '이메일을 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    if (emailVal.match(regExp) == null) {
        Swal.fire({
            text: '잘못된 이메일 형식입니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    var datas = $("#EmailAuthForm").serialize();
    $.ajax({
        url: apiAddress+"/api/emailChk",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
             console.log(response);
            if(response.result == true) {
                Swal.fire({
                    text: '인증번호가 발송되었습니다',
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                }).then(function() {
                    location.href='/emailAuthentication?email='+emailVal;
                });
            }else if(response.code ==0){
                Swal.fire({
                    text: '이메일 정보를 확인해주세요',
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                });
                return false;
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
$(function () {
    var email = getParameter('email');
    $("#loginId").val(email);

    $(".form-control").keyup(function (event) {
        if(event.which === 13) {
            checkEmail();
        }
    });
});
function checkEmail() {
    var apiAddress = $("#apiAddress").val();
    var email = $("#loginId").val();
    var auth = $("#emailChkCode").val();
    if(auth == "" || auth == null || auth == undefined) {
        Swal.fire({
            text: '인증번호를 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    $.ajax({
        url: apiAddress+"/api/certCodeChk?emailChkCode="+auth+"&loginId="+email,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                Swal.fire({
                    title: '메일 인증 완료',
                    text: '해당 이메일로 회원가입을 진행합니다',
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                }).then(function() {
                    location.href='/joinDetail?email='+email;
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
function sendEmail() {
    var apiAddress = $("#apiAddress").val();
    var emailVal = $("#loginId").val();
    if(emailVal == "") {
        Swal.fire({
            text: '이메일 주소가 존재하지 않습니다',
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
            // console.log(response);
            if(response.result == true) {
                Swal.fire({
                    text: '인증번호가 발송되었습니다',
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                }).then(function() {
                    location.reload();
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
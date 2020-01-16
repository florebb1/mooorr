$(function () {
    var email = getParameter('email');
    $("#loginId").val(email);
    var name = getParameter('name');
    $("#userName").val(name);

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
                location.href='/find_pw_result?email='+email;
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
    var datas = $("#EmailAuthForm").serialize();
    $.ajax({
        url: apiAddress+"/api/findPwd",
        type: 'GET',
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
                    location.reload();
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
            return false;
        }
    });
}
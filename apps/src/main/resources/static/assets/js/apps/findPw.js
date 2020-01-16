function findPw() {
    var apiAddress = $("#apiAddress").val();
    var email = $("#loginId").val();
    var name = $("#userName").val();
    if(email == "" || email == null || email == undefined) {
        Swal.fire({
            text: '아이디를 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }else if(name == "" || name == null || name == undefined) {
        Swal.fire({
            text: '닉네임을 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    var datas = $("#findPwForm").serialize();
    $.ajax({
        url: apiAddress+"/api/findPwd",
        type: 'GET',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            var loginId = $("#loginId").val();
            var userName = $("#userName").val();
            if(response.result == true) {
                Swal.fire({
                    text: '인증번호가 발송되었습니다',
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                }).then(function() {
                    location.href='/find_pw_authentication?email='+loginId+"&name="+userName;
                });
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
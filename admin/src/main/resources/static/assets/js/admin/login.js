$(function () {
   $(".form-control").keyup(function (event) {
       if(event.which == 13) {
           login();
       }
   });
   var id = getCookie('adminId');
   if(id != "" && id != null && id != undefined) {
       location.href='/member/memberlist';
   }
});
function login() {
    var id = $("#loginId").val();
    var pw = $("#pwd").val();
    if(id == "") {
        alert('아이디를 입력해주세요.');
        return false;
    }else if(pw == "") {
        alert('비밀번호를 입력해주세요.');
        return false;
    }
    var api = $("#apiAddress").val();
    var datas = $("#loginForm").serialize();
    $.ajax({
        url: api+"/adminapi/adminSignin",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                setCookie('adminId', response.admin.adminId, 7);
                setCookie('adminName', response.admin.adminName, 7);
                setCookie('adminIdx', response.admin.seq, 7);
                location.href='/member/memberlist';
            }else {
                    alert(response.msg);
                    return false;
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}
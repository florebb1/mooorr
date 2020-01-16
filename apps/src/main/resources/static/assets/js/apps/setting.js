$(function () {
    var idx = getCookie('idx');
    if(idx == "" || idx == null || idx == undefined) {
        Swal.fire({
            text: '해당 회원정보가 존재하지 않습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            history.back();
        });
    }
    $("#changePwBtn").click(function () {
        userSeach(idx);
    });
});
function userSeach(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/userInfo?userIdx="+idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response.user);
            if (response.user.userIdx != "") {
                if(response.user.fToken != "" && response.user.fToken != null && response.user.fToken != undefined) {
                    Swal.fire({
                        text: '간편 로그인 이용자는 비밀번호 변경이 불가능합니다',
                        confirmButtonText: '확인',
                        allowOutsideClick: false
                    });
                    return false;
                }else if(response.user.gToken != "" && response.user.gToken != null && response.user.gToken != undefined) {
                    Swal.fire({
                        text: '간편 로그인 이용자는 비밀번호 변경이 불가능합니다',
                        confirmButtonText: '확인',
                        allowOutsideClick: false
                    });
                    return false;
                }else {
                    location.href='/change_pw?id='+response.user.loginId;
                }
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
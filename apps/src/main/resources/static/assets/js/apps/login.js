$(function () {
    var name = getCookie('name');
    var idx = getCookie('idx');
    var email = getCookie('email');
    if(name != "" && name != null && name != undefined && idx != "" && idx != null && idx != undefined && email != "" && email != null && email != undefined) {
        location.href='/'+name;
    }
    var user_id = getCookie('id');
    var user_pw = getCookie('pw');
    if(user_id != "" && user_pw != "") {
        $("#loginId").val(user_id);
        $("#pwd").val(user_pw);
        login();
    }
    $("#autoLogin").change(function () {
       if($(this).is(":checked") == true) {
           Swal.fire({
               title: '자동 로그인 안내',
               text: '모어에 자동으로 로그인 되어 편하게 이용 가능합니다',
               confirmButtonText: '확인',
               allowOutsideClick: false
           });
       }
    });
    $(".login-input").on('keyup', function (event) {
        if(event.which == 13) {
            login();
        }
    });

    $(".google-btn").click(function () {
       onSignIn();
    });

    // facebook app info
    window.fbAsyncInit = function() {
        FB.init({
            appId      : 2496151190451458,
            cookie     : true,
            xfbml      : true,
            version    : 'v5.0'
        });

        FB.AppEvents.logPageView();

    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    $(".facebook-btn").click(function () {
        var apiAddress = $("#apiAddress").val();
        FB.login(function(response) {
            if(response.status === 'connected') {
                // console.log(response);
                $.ajax({
                    url: apiAddress + "/api/facebookcallback",
                    type: 'POST',
                    dataType: 'JSON',
                    data: {userId:response.authResponse.userID},
                    success: function (response) {
                        // console.log(response);
                        if(response.result) {
                            if(response.user.loginId == "" || response.user.loginId == null || response.user.loginId == undefined) {
                                Swal.fire({
                                    text: '해당 계정의 이메일정보가 존재하지 않습니다\n이메일 등록페이지로 이동합니다',
                                    confirmButtonText: '확인',
                                    allowOutsideClick: false
                                }).then(function () {
                                    location.href = '/login_facebook_registration?idx='+response.user.userIdx;
                                });
                            }else {
                                setCookie('loginAfterUrl', '', -1);
                                setCookie('idx', response.user.userIdx, 7);
                                setCookie('email', response.user.loginId, 7);
                                setCookie('name', response.user.userNAme, 7);
                                if(profile != "" && profile != null && profile != undefined) {
                                    location.href = profile;
                                }else {
                                    location.href = '/'+response.user.userName;
                                }
                            }
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
        });
    });
});
function onSignIn(googleUser) {
    var idToken = googleUser.getAuthResponse().id_token;
    var apiAddress = $("#apiAddress").val();
    var profile = getCookie('loginAfterUrl');
    $.ajax({
        url: apiAddress+"/api/googlecallback",
        type: 'POST',
        dataType: 'JSON',
        data: {idTokenString:idToken},
        success :  function (response) {
            if(response.result){
                // console.log(response);
                var auth2 = gapi.auth2.getAuthInstance();
                auth2.disconnect();
                setCookie('loginAfterUrl', '', -1);
                setCookie('idx', response.user.userIdx, 7);
                setCookie('email', response.user.loginId, 7);
                setCookie('name', response.user.userName, 7);
                if(profile != "" && profile != null && profile != undefined) {
                    location.href = profile;
                }else {
                    location.href = '/'+response.user.userName;
                }
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
function login() {
    var apiAddress = $("#apiAddress").val();
    var profile = getCookie('loginAfterUrl');
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
    var datas = $("#loginForm").serialize();
    $.ajax({
        url: apiAddress+"/api/signIn",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                setCookie('loginAfterUrl', '', -1);
                setCookie('idx', response.user.userIdx, 7);
                setCookie('email', response.user.loginId, 7);
                setCookie('name', response.user.userName, 7);
                if($("#autoLogin").is(":checked") == true) {
                    setCookie('id', id, 999);
                    setCookie('pw', pw, 999);
                }else {
                    setCookie('id', '', -1);
                    setCookie('pw', '', -1);
                }
                if(profile != "" && profile != null && profile != undefined) {
                    location.href = profile;
                }else {
                    location.href = '/'+response.user.userName;
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
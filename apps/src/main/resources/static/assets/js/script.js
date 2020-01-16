$(function () {
    if (window.location.protocol == 'http:' && window.location.hostname != "localhost") {
        window.location.href = window.location.href.replace('http:', 'https:');
    }

    $(document).ajaxStart(function() {
        setTimeout($.unblockUI, 2000);
    });

    // user block check
    if(getCookie('idx') != "" && getCookie('idx') != null && getCookie('idx') != undefined) {
        userBlockCheck(getCookie('idx'));
    }

    // 스크롤 이벤트
    $(window).scroll(function(e){
        var header = $('.header');
        if(header.offset().top !== 0){
            if(!header.hasClass('shadow')){
                header.addClass('shadow');
            }
        }else{
            header.removeClass('shadow');
        }
    });
    $('.modal-body').on("scroll", function() {
        if($(this).scrollTop() !== 0) {
            if(!$(this).prev().hasClass('shadow')) {
                $(this).prev().addClass('shadow');
            }
        }else {
            $(this).prev().removeClass('shadow');
        }
    });

    var idx = getCookie('idx');
    if(idx != "" && idx != null && idx != undefined) {
        loginCheck(idx);
        // top login menu
        $("#loginBf").removeClass('d-flex');
        $("#loginBf").addClass('d-none');
        $("#loginAf").removeClass('d-none');
        $("#loginAf").addClass('d-flex');
        // side login menu
        $("#loginBf2").addClass('d-none');
        $("#loginAf2").removeClass('d-none');

        // nav login menu
        $("#loginBf3").addClass('d-none');
        $("#loginAf3").removeClass('d-none');
        // 좌측 메세지함 count 체크
        chatRoomCounts(idx);
    }else {
        // top login menu
        $("#loginBf").removeClass('d-none');
        $("#loginBf").addClass('d-flex');
        $("#loginAf").removeClass('d-flex');
        $("#loginAf").addClass('d-none');
        // side login menu
        $("#loginBf2").removeClass('d-none');
        $("#loginAf2").addClass('d-none');
        // side login menu
        $("#loginBf3").removeClass('d-none');
        $("#loginAf3").addClass('d-none');
    }

    // login 후 이동 URL 제거
    // var loginAfterUrl = getCookie('loginAfterUrl');
    // if(loginAfterUrl != "" && loginAfterUrl != null && loginAfterUrl != undefined) {
    //     setCookie('loginAfterUrl', "", -1);
    // }

    // 로그아웃 이벤트
    $(".logoutBtn").click(function () {
        var url = window.location.pathname;
        setCookie('idx', '', -1);
        setCookie('email', '', -1);
        setCookie('id', '', -1);
        setCookie('pw', '', -1);
        setCookie('name', '', -1);
        setCookie('loginAfterUrl', '', -1);
        logoutCheck(url);
        FB.logout(function(response) {
            // Person is now logged out
        });

    });

    $("#nav_open").click(function () {
        $(".left-sidenav").css('width', '85%');
        $("#inactiveBackground").removeClass('d-none');
    });
    $('html').click(function(e) {
        if($(e.target).hasClass("inactiveBackground")) {
            $(".left-sidenav").css('width', '0');
            $("#inactiveBackground").addClass('d-none');
        }
    });
});

$(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);


var getParameter = function (param) {
    var returnValue;
    var url = location.href;
    var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
    for (var i = 0; i < parameters.length; i++) {
        var varName = parameters[i].split('=')[0];
        if (varName.toUpperCase() == param.toUpperCase()) {
            returnValue = parameters[i].split('=')[1];
            return decodeURIComponent(returnValue);
        }
    }
};
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 쿠키 생성
function setCookie(cName, cValue, cDay){
    var expire = new Date();
    expire.setDate(expire.getDate() + cDay);
    cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
    if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
    document.cookie = cookies;
}

// 쿠키 가져오기
function getCookie(cName) {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if(start != -1){
        start += cName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
}

function loginCheck(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/finalAct?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            if(response.result == true) {
                $.ajax({
                    url: apiAddress+"/api/finalAct?userIdx=" + idx,
                    type: 'GET',
                    dataType: 'JSON',
                    success: function (response){
                        // console.log(response);
                    }
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

//
function userBlockCheck(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress + "/api/blockChk?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            if (!response.result) {
                Swal.fire({
                    text: response.msg,
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                }).then(function () {
                    setCookie('idx', '', -1);
                    setCookie('email', '', -1);
                    setCookie('id', '', -1);
                    setCookie('pw', '', -1);
                    setCookie('name', '', -1);
                    setCookie('loginAfterUrl', '', -1);
                    location.href='/';
                });
            }
        }
    });
}

function logoutCheck(url) {
    switch (url) {
        case "/profile":
            location.href='/login';
            break;
        case "/profile_notice":
            location.href='/login';
            break;
        case "/travel":
            location.href='/login';
            break;
        case "/travel_list":
            location.href='/login';
            break;
        case "/my_links":
            location.href='/login';
            break;
        case "/my_links_input":
            location.href='/login';
            break;
        case "/favorite":
            location.href='/login';
            break;
        case "/interests":
            location.href='/login';
            break;
        case "/portrait":
            location.href='/login';
            break;
        case "/portrait_input":
            location.href='/login';
            break;
        case "/info_edit":
            location.href='/login';
            break;
        case "/point":
            location.href='/login';
            break;
        case "/charge":
            location.href='/login';
            break;
        case "/exchange":
            location.href='/login';
            break;
        case "/payment_history":
            location.href='/login';
            break;
        case "/point_use":
            location.href='/login';
            break;
        case "/exchange_history":
            location.href='/login';
            break;
        case "/donation":
            location.href='/login';
            break;
        case "/follow":
            location.href='/login';
            break;
        case "/help":
            location.href='/login';
            break;
        case "/setting":
            location.href='/login';
            break;
        case "/chat_list":
            location.href='/login';
            break;
        case "/chat_info":
            location.href='/login';
            break;
        case "/chat_detail":
            location.href='/login';
            break;
        default:
            location.reload();
    }
}
function chatRoomCounts(idx) {
    var apiAddress = $("#apiAddress").val();
    var count;
    $.ajax({
        url: apiAddress+"/api/chatList?userIdx="+idx,
        type: 'GET',
        async: false,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if (response.result == true) {
                if (response.chatList.length > 0) {
                    var userCount = 0;
                    for (var i = 0; i < response.chatList.length; i++) {
                        if (idx == response.chatList[i].user.userIdx) {
                            userCount = parseInt(userCount) + parseInt(response.chatList[i].u1NoRead);
                        } else {
                            userCount = parseInt(userCount) + parseInt(response.chatList[i].u2NoRead);
                        }
                    }
                    if (userCount > 0) {
                        $(".chat-room-count").text('N');
                    } else {
                        $(".chat-room-count").hide();
                    }
                } else {
                    $(".chat-room-count").hide();
                }
            }else{
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
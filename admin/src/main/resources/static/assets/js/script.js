$(function () {
    // HTTP프로토콜 HTTPS로 변경
    if (document.location.protocol == 'http:'&& window.location.hostname != "localhost" && window.location.hostname != "10.10.10.86") {
        document.location.href = document.location.href.replace('http:', 'https:');
    }

    $('.custom-file-input').on('change',function(){
        //get the file name
        var fileName = $(this)[0].files[0].name;
        console.log(fileName);
        //replace the "Choose a file" label
        $(this).next('.custom-file-label').html(fileName);
    });

    $("#logout").click(function () {
        setCookie('adminId', "", -1);
        setCookie('adminName', "", -1);
        setCookie('adminIdx', "", -1);
        location.href='/';
    });
});
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


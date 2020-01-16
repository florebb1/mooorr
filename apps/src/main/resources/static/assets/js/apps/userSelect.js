$(function () {
    var user = getCookie('idx');
    if(user != "" && user != null && user != undefined) {
        info(user);
    }
});
function info(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/userInfo?userIdx="+idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response.user);
            if (response.user.userIdx != "") {
                var html = "";
                if(response.user.profileImage != "" && response.user.profileImage != null && response.user.profileImage != undefined) {
                    html = '<div class="profile-img" style="background-image: url('+apiAddress+response.user.profileImage+'), url(/assets/images/user-bg.png)" onclick="location.href=\'/'+response.user.userName+'\'"></div>';
                }else {
                    html = '<div class="profile-img" style="background-image: url(assets/images/user.png)" onclick="location.href=\'/'+response.user.userName+'\'"></div>';
                }
                $("#myProfile").empty();
                $("#myProfile").append(html);
                $("#myProfile2").empty();
                $("#myProfile2").append(html);
                setCookie('name', response.user.userName, 7);
                $("#my_nicName").text(response.user.userName);
                $("#my_nicName").attr("onclick", "location.href='/"+response.user.userName+"'");
                $("#my_text").text(response.user.statusMessage);
                if(response.user.nowp != "" && response.user.nowp != null && response.user.nowp != undefined) {
                    $("#total_point").text(numberWithCommas(response.user.nowp));
                }else {
                    $("#total_point").text("0");
                }
                $("#total_point").text(numberWithCommas(response.user.nowp));
                $("#my_profile").attr('href', '/'+response.user.userName);

                //mobile
                $("#my_nicName2").text(response.user.userName);
                $("#my_nicName2").attr("onclick", "location.href='/"+response.user.userName+"'");
                $("#my_text2").text(response.user.statusMessage);
                if(response.user.nowp != "" && response.user.nowp != null && response.user.nowp != undefined) {
                    $("#total_point2").text(numberWithCommas(response.user.nowp));
                }else {
                    $("#total_point2").text("0");
                }
                $("#main_logo").attr('href', '/'+response.user.userName);
                $("#mobile_follower").text(numberWithCommas(response.user.follower));
                $("#mobile_following").text(numberWithCommas(response.user.following));
            }else {
                $("#logoutBtn").click();
            }
        }
    });
}
function ad() {
    var apiAddress = $("#apiAddress").val();
    // AD info search
    $.ajax({
        url: apiAddress+"/api/getBanner",
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.bannerList.length > 0){
                var html = "";
                $("#main_advertising").removeClass('d-none');
                for (var i = 0; i < response.bannerList.length; i++) {
                    if(i == 0) {
                        if(response.bannerList[i].link != "" && response.bannerList[i].link != null && response.bannerList[i].link != undefined) {
                            if(response.bannerList[i].link.indexOf("http://") !== -1 || response.bannerList[i].link.indexOf("https://") !== -1) {
                                html += '<a href="'+response.bannerList[i].link+'" target="_blank"><div class="carousel-item active"  onclick="window.open('+response.bannerList[i].link+')"><img src="'+ apiAddress + response.bannerList[i].saveName +'" class="w-100 h-100 border-radius-10" onerror="this.src=\'/assets/images/no_image_available.jpg\'"></div></a>';
                            }else {
                                html += '<a href="http://'+response.bannerList[i].link+'" target="_blank"><div class="carousel-item active"  onclick="window.open('+response.bannerList[i].link+')"><img src="'+ apiAddress + response.bannerList[i].saveName +'" class="w-100 h-100 border-radius-10" onerror="this.src=\'/assets/images/no_image_available.jpg\'"></div></a>';
                            }
                        }else {
                            html += '<div class="carousel-item active"><img src="'+apiAddress+response.bannerList[i].saveName+'" class="w-100 h-100 border-radius-10" onerror="this.src=\'/assets/images/no_image_available.jpg\'"></div>';
                        }
                    }else {
                        if(response.bannerList[i].link != "" && response.bannerList[i].link != null && response.bannerList[i].link != undefined) {
                            var link = response.bannerList[i].link;
                            if(link.indexOf("http://") !== -1 || link.indexOf("https://") !== -1) {
                                html += '<a href="'+response.bannerList[i].link+'"><div class="carousel-item"  onclick="window.open('+response.bannerList[i].link+')"><img src="'+ apiAddress + response.bannerList[i].saveName +'" class="w-100 h-100 border-radius-10" onerror="this.src=\'/assets/images/no_image_available.jpg\'"></div></a>';
                            }else {
                                html += '<a href="http://'+response.bannerList[i].link+'"><div class="carousel-item"  onclick="window.open('+response.bannerList[i].link+')"><img src="'+ apiAddress + response.bannerList[i].saveName +'" class="w-100 h-100 border-radius-10" onerror="this.src=\'/assets/images/no_image_available.jpg\'"></div></a>';
                            }
                        }else {
                            html += '<div class="carousel-item"><img src="'+apiAddress+response.bannerList[i].saveName+'" class="w-100 h-100 border-radius-10" onerror="this.src=\'/assets/images/no_image_available.jpg\'"></div>';
                        }
                    }
                }
                $("#adList").empty();
                $("#adList").append(html);
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}
function mainLoad(userName, userIdx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/profile?userName="+userName+"&userIdx="+userIdx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                if (response.user != "" && response.user != null && response.user != undefined) {
                    var loginIdx = parseInt(getCookie('idx'));
                    $("#main_loginIdx").val(loginIdx);
                    var searchIdx = parseInt(response.user.userIdx);
                    $("#main_targetIdx").val(searchIdx);

                    // info
                    if(loginIdx == searchIdx) {
                        var html = "";
                        $("#main_info").removeClass('d-none');
                        // 프로필 이미지
                        if(response.user.profileImage != "" && response.user.profileImage != null && response.user.profileImage != undefined) {
                            html = '<div class="profile-img mx-0" style="background-size: cover; background-image: url(' + apiAddress + response.user.profileImage + '), url(/assets/images/user-bg.png);" onclick="location.href=\'/'+response.user.userName+'\'"></div>';
                            $("#main_profileImage").empty();
                            $("#main_profileImage").append(html);
                        }else {
                            html = '<div class="profile-img mx-0" style="background-image: url(/assets/images/user.png)" onclick="location.href=\'/'+response.user.userName+'\'"></div>';
                            $("#main_profileImage").empty();
                            $("#main_profileImage").append(html);
                        }
                        // 프로필 배경이미지
                        if(response.user.backgroundImage != "" && response.user.backgroundImage != null && response.user.backgroundImage != undefined) {
                            $("#main_bg_profileImage").css('background-image', 'url(' + apiAddress + response.user.backgroundImage + ')');
                            $(".mobile-bg-background-mo").css('background-image', 'url(' + apiAddress + response.user.backgroundImage + ')');
                            $(".mobile-bg-background").css('background', 'url(' + apiAddress + response.user.backgroundImage + ') no-repeat fixed 0 0/cover');
                            $(".overlay_before").css('background', 'url(' + apiAddress + response.user.backgroundImage + ') no-repeat fixed 0 0/cover');
                        }else {
                            $("#main_bg_profileImage").css('background-image', '');
                            $(".mobile-bg-background-mo").css('background-image', 'url(/assets/images/mobile-base-bgimg.png)');
                            $(".mobile-bg-background").css('background-image', '');
                            $(".overlay_before").css('background-image', '');
                        }
                        // 닉네임
                        $("#main_nicName").text(response.user.userName);
                        $("#main_nicName").attr("onclick", "location.href='/"+response.user.userName+"'");
                        // 상태메세지
                        $("#main_text").text(response.user.statusMessage);
                        // 팔로우
                        $("#main_follower").text(numberWithCommas(response.user.follower));
                        $("#main_following").text(numberWithCommas(response.user.following));
                        $("#main_follower").parent().click(function () {
                            location.href = '/follow';
                        });
                        $("#main_following").parent().click(function () {
                            location.href = '/follow';
                        });
                        // badges
                        if(response.user.badges.length > 0) {
                            var j = 0;
                            for (var i = 0; i < response.user.badges.length; i++) {
                                // if(response.user.badges[i].badgeType == "1") {
                                //     j++;
                                //     $("#batge_star").attr('src', '/assets/images/badge/star.png');
                                // }else if (j != 1) {
                                //     $("#batge_star").remove();
                                // }

                                if(response.user.badges[i].badgeType == "1") {
                                    $("#batge_star").attr('src', '/assets/images/badge/star.png');
                                }else if (response.user.badges[i].badgeType == "2") {
                                    $("#batge1").attr('src', '/assets/images/badge/1st.png');
                                }else if (response.user.badges[i].badgeType == "3") {
                                    $("#batge2").attr('src', '/assets/images/badge/2nd.png');
                                }else if (response.user.badges[i].badgeType == "4") {
                                    $("#batge3").attr('src', '/assets/images/badge/3rd.png');
                                }
                            }
                        }
                    }else {
                        if(response.infoOn == 0) {
                            $("#main_info").removeClass('d-none');
                            // 프로필 이미지
                            if(response.user.profileImage != "" && response.user.profileImage != null && response.user.profileImage != undefined) {
                                html = '<div class="profile-img" style="background-size: cover; background-image: url(' + apiAddress + response.user.profileImage + '), url(/assets/images/user-bg.png);" onclick="location.href=\'/'+response.user.userName+'\'"></div>';
                                $("#main_profileImage").empty();
                                $("#main_profileImage").append(html);
                            }else {
                                html = '<div class="profile-img" style="background-image: url(assets/images/user.png)" onclick="location.href=\'/'+response.user.userName+'\'"></div>';
                                $("#main_profileImage").empty();
                                $("#main_profileImage").append(html);
                            }
                            // 프로필 배경이미지
                            if(response.user.backgroundImage != "" && response.user.backgroundImage != null && response.user.backgroundImage != undefined) {
                                $("#main_bg_profileImage").css('background-image', 'url(' + apiAddress + response.user.backgroundImage + ')');
                                $(".mobile-bg-background-mo").css('background-image', 'url(' + apiAddress + response.user.backgroundImage + ')');
                                $(".mobile-bg-background").css('background', 'url(' + apiAddress + response.user.backgroundImage + ')  no-repeat fixed 0 0/cover');
                                $(".overlay_before").css('background', 'url(' + apiAddress + response.user.backgroundImage + ')  no-repeat fixed 0 0/cover');
                            }else {
                                $("#main_bg_profileImage").css('background-image', '');
                                $(".mobile-bg-background-mo").css('background-image', 'url(/assets/images/mobile-base-bgimg.png)');
                                $(".mobile-bg-background").css('background', '');
                                $(".overlay_before").css('background', '');
                            }
                            // 닉네임
                            $("#main_nicName").text(response.user.userName);
                            // 상태메세지
                            $("#main_text").text(response.user.statusMessage);
                            // 팔로우
                            $("#main_follower").text(numberWithCommas(response.user.follower));
                            $("#main_following").text(numberWithCommas(response.user.following));
                            if(response.follow == "" || response.follow == null || response.follow == undefined || response.follow == "0" || response.follow == "3") {
                                $("#plus_follow").removeClass('d-none');
                            }else {
                                $("#followed").removeClass('d-none');
                            }
                            $("#main_follower").parent().click(function () {
                                location.href = '/follow?target='+response.user.userIdx;
                            });
                            $("#main_following").parent().click(function () {
                                location.href = '/follow?target='+response.user.userIdx;
                            });
                            // badges
                            if(response.user.badges.length > 0) {
                                var j = 0;
                                for (var i = 0; i < response.user.badges.length; i++) {
                                    // if(response.user.badges[i].badgeType == "1") {
                                    //     j++;
                                    //     $("#batge_star").attr('src', '/assets/images/badge/star.png');
                                    // }else if (j != 1) {
                                    //     $("#batge_star").remove();
                                    // }

                                    if(response.user.badges[i].badgeType == "1") {
                                        $("#batge_star").attr('src', '/assets/images/badge/star.png');
                                    }else if (response.user.badges[i].badgeType == "2") {
                                        $("#batge1").attr('src', '/assets/images/badge/1st.png');
                                    }else if (response.user.badges[i].badgeType == "3") {
                                        $("#batge2").attr('src', '/assets/images/badge/2nd.png');
                                    }else if (response.user.badges[i].badgeType == "4") {
                                        $("#batge3").attr('src', '/assets/images/badge/3rd.png');
                                    }
                                }
                                // } else {
                                //     $("#batge_star").remove();
                            }
                        }
                    }

                    // notice
                    if(loginIdx == searchIdx) {
                        $("#main_notice").removeClass('d-none');
                        if(response.user.noticeOn == 0) {
                            // 프로필 & 공지
                            if(response.aboutNotice != "" && response.aboutNotice != null && response.aboutNotice != undefined) {
                                var text = response.aboutNotice.notice;
                                if(text.length > 200) {
                                    $("#notice_content").html(text.substring(0, 200));
                                }else if (text.length == 0) {
                                    $("#notice_content").html("<p class='text-lg-left text-center'>등록된 내용이 없습니다</p>");
                                    $("#notice_more").addClass('d-none');
                                }else {
                                    $("#notice_content").html(text);
                                    $("#notice_more").addClass('d-none');
                                }
                            }else {
                                var blankText = "<p class='text-lg-left text-center'>등록된 내용이 없습니다</p>";
                                $("#notice_content").html(blankText);
                                $("#notice_more").addClass('d-none');
                            }
                        }else {
                            var blankText = "<p class='text-lg-left text-center'>비공개 설정</p>";
                            $("#notice_content").html(blankText);
                            $("#notice_more").addClass('d-none');
                        }
                    }else {
                        if(response.user.noticeOn == 0) {
                            $("#main_notice").removeClass('d-none');
                            // 프로필 & 공지
                            if(response.aboutNotice != null && response.aboutNotice.notice != "" && response.aboutNotice.notice != null && response.aboutNotice.notice != undefined) {
                                var text = response.aboutNotice.notice;
                                if(text.length > 200) {
                                    $("#notice_content").html(text.substring(0, 200));
                                }else {
                                    $("#notice_content").html(text);
                                    $("#notice_more").addClass('d-none');
                                }
                            }else {
                                $("#notice_content").html("<p class='momo-text-center'>등록된 내용이 없습니다</p>");
                                $("#notice_more").addClass('d-none');
                            }
                        }
                    }

                    // travel
                    if(loginIdx == searchIdx) {
                        $("#main_travel").removeClass('d-none');
                        if(response.user.travelOn == 0) {
                            // 여행지 리스트
                            if(response.travelList != null && response.travelList.length > 0) {
                                var html = "";
                                for (var i = 0; i < response.travelList.length; i++) {
                                    html += '<div class="con-div">'
                                        + '<img src="assets/images/flag/' + response.travelList[i] + '.png">'
                                        + '</div>';
                                }
                                $("#travel_content").empty();
                                $("#travel_content").append(html);
                            }else {
                                html += '<div class="card-right overlay block-margin-30"><p>등록된 여행국가가 없습니다.</p></div>';
                                $("#travel_content").empty();
                                $("#travel_content").html(html);
                                $("#travel_content").parent().css('padding', '0');
                            }
                        }else {
                            var blankText = "<div class='card-right overlay block-margin-30'><p>비공개 설정</p></div>";
                            $("#travel_content").empty();
                            $("#travel_content").html(blankText);
                            $("#travel_content").parent().css('padding', '0');
                        }
                    }else {
                        if(response.user.travelOn == 0) {
                            $("#main_travel").removeClass('d-none');
                            // 여행지 리스트
                            if(response.travelList != null &&response.travelList.length > 0) {
                                var html = "";
                                for (var i = 0; i < response.travelList.length; i++) {
                                    html += '<div class="con-div">'
                                        + '<img src="assets/images/flag/' + response.travelList[i] + '.png">'
                                        + '</div>';
                                }
                                $("#travel_content").empty();
                                $("#travel_content").append(html);
                            }else {
                                html += '<div class="card-right overlay block-margin-30">'
                                    + '<p>등록된 여행국가가 없습니다.</p>'
                                    + '</div>';
                                $("#travel_content").empty();
                                $("#travel_content").html(html);
                                $("#travel_content").parent().css('padding', '0');
                            }
                        }
                    }

                    // my links
                    if (loginIdx == searchIdx) {
                        $("#main_links").removeClass('d-none');
                        if (response.user.myLinksOn == 0) {
                            // link list
                            if (response.linkList.length > 0) {
                                var html = "";
                                for (var i = 0; i < response.linkList.length; i++) {
                                    if(parseInt(i+1) == response.linkList.length) {
                                        if(response.linkList[i].type == "mail") {
                                            html += '<a href="mailto:'+response.linkList[i].link+'" class="card-right overlay" style="margin-bottom: 0 !important;">';
                                        }else {
                                            html += '<a href="'+response.linkList[i].link+'" target="_blank" class="card-right overlay" style="margin-bottom: 0 !important;">';
                                        }
                                    }else {
                                        if(response.linkList[i].type == "mail") {
                                            html += '<a href="mailto:'+response.linkList[i].link+'" class="card-right overlay">';
                                        }else {
                                            html += '<a href="'+response.linkList[i].link+'" target="_blank" class="card-right overlay">';
                                        }
                                    }
                                    html += '<div><img src="assets/images/sns/' + response.linkList[i].type + '.png" style="width: 25px;"></div>'
                                        + '<div><b class="font-15">' + response.linkList[i].type.replace(/^./, response.linkList[i].type[0].toUpperCase()) + '</b></div>'
                                        + '<div>' + response.linkList[i].detail + '</div>'
                                        + '<div class="overlay_before" style="background:url(' + apiAddress + response.user.backgroundImage + ')  no-repeat fixed 0 0/cover;"></div>'
                                        + '</a>';
                                }
                                $("#link_content").empty();
                                $("#link_content").append(html);
                                $("#myLinksMore").attr('href', '/my_links_more?idx=' + response.user.userIdx);
                            } else {
                                var blankText = "<div class='card-right overlay block-mo-link'><p>등록된 링크가 없습니다.</p><div class='overlay_before' style='background:url(" + apiAddress + response.user.backgroundImage + ")  no-repeat fixed 0 0/cover;'></div></div>";
                                $("#link_content").html(blankText);
                                $("#link_content").parent().next().remove();
                                // $("#myLinksMore").attr('href', '/my_links_more?idx=' + response.user.userIdx);
                            }
                        } else {
                            var blankText = "<div class='card-right overlay block-mo-link'><p>비공개 설정</p><div class='overlay_before' style='background:url(" + apiAddress + response.user.backgroundImage + ")  no-repeat fixed 0 0/cover;'></div></div>";
                            $("#link_content").html(blankText);
                            $("#link_content").parent().next().remove();
                            // $("#myLinksMore").attr('href', '/my_links_more?idx=' + response.user.userIdx);
                        }
                    } else {
                        if (response.user.myLinksOn == 0) {
                            $("#main_links").removeClass('d-none');
                            // link list
                            if (response.linkList.length > 0) {
                                var html = "";
                                for (var i = 0; i < response.linkList.length; i++) {
                                    if(parseInt(i+1) == response.linkList.length) {
                                        if(response.linkList[i].type == "mail") {
                                            html += '<a href="mailto:'+response.linkList[i].link+'" class="card-right overlay" style="margin-bottom: 0 !important;">';
                                        }else {
                                            html += '<a href="'+response.linkList[i].link+'" target="_blank" class="card-right overlay" style="margin-bottom: 0 !important;">';
                                        }
                                    }else {
                                        if(response.linkList[i].type == "mail") {
                                            html += '<a href="mailto:'+response.linkList[i].link+'" class="card-right overlay">';
                                        }else {
                                            html += '<a href="'+response.linkList[i].link+'" target="_blank" class="card-right overlay">';
                                        }
                                    }
                                    html += '<div><img src="assets/images/sns/' + response.linkList[i].type + '.png" style="width: 25px;"></div>'
                                        + '<div><b class="font-15">' + response.linkList[i].type.replace(/^./, response.linkList[i].type[0].toUpperCase()) + '</b></div>'
                                        + '<div>' + response.linkList[i].detail + '</div>'
                                        + '<div class="overlay_before" style="background:url(' + apiAddress + response.user.backgroundImage + ')  no-repeat fixed 0 0/cover;"></div>'
                                        + '</a>';
                                }
                                $("#link_content").empty();
                                $("#link_content").append(html);
                                $("#myLinksMore").attr('href', '/my_links_more?idx=' + response.user.userIdx);
                            } else {
                                var blankText = "<div class='card-right overlay block-mo-link'><p>등록된 링크가 없습니다.</p><div class='overlay_before' style='background:url(" + apiAddress + response.user.backgroundImage + ")  no-repeat fixed 0 0/cover;'></div></div>";
                                $("#link_content").html(blankText);
                                $("#link_content").parent().next().remove();
                                $("#myLinksMore").attr('href', '/my_links_more?idx=' + response.user.userIdx);
                            }
                        }
                    }

                    // favorite
                    if (loginIdx == searchIdx) {
                        $("#main_favorite").removeClass('d-none');
                        if (response.user.favoriteOn == 0) {
                            // favorite list
                            if (response.favoriteList.length > 0) {
                                var html = "";
                                for (var i = 0; i < response.favoriteList.length; i++) {
                                    html += '<a href="' + response.favoriteList[i].link + '" target="_blank" class="card-right overlay">'
                                        + '<div class="btn btn-link btn-block edit-btn-color"><b>' + response.favoriteList[i].detail + '</b><br>' + response.favoriteList[i].link + '</div>'
                                        + '<div class="overlay_before" style="background:url(' + apiAddress + response.user.backgroundImage + ')  no-repeat fixed 0 0/cover;"></div>'
                                        + '</a>';
                                }
                                $("#favorite_content").removeClass('d-none');
                                $("#favorite_content").empty();
                                $("#favorite_content").append(html);
                            } else {
                                $("#favorite_content").removeClass('d-none');
                                var html = "<div class='card-right overlay block-mo-link'><p>등록된 페이버릿이 없습니다.</p><div class='overlay_before' style='background:url(" + apiAddress + response.user.backgroundImage + ")  no-repeat fixed 0 0/cover;'></div></div>";
                                $("#favorite_content").html(html);
                            }
                        } else {
                            $("#favorite_content").removeClass('d-none');
                            var html = "<div class='card-right overlay'><p>비공개 설정</p><div class='overlay_before' style='background:url(" + apiAddress + response.user.backgroundImage + ")  no-repeat fixed 0 0/cover;'></div></div>";
                            $("#favorite_content").html(html);
                        }
                    } else {
                        if (response.user.favoriteOn == 0) {
                            var html = "";
                            $("#main_favorite").removeClass('d-none');
                            // favorite list
                            if (response.favoriteList.length > 0) {
                                for (var i = 0; i < response.favoriteList.length; i++) {
                                    html += '<a href="' + response.favoriteList[i].link + '" target="_blank" class="card-right overlay">'
                                        + '<div class="btn btn-link btn-block edit-btn-color"><b>' + response.favoriteList[i].detail + '</b><br>' + response.favoriteList[i].link + '</div>'
                                        + '<div class="overlay_before" style="background:url(' + apiAddress + response.user.backgroundImage + ')  no-repeat fixed 0 0/cover;"></div>'
                                        + '</a>';
                                }
                                $("#favorite_content").empty();
                                $("#favorite_content").append(html);
                            } else {
                                var html = "<div class='card-right overlay block-mo-link'><p>등록된 페이버릿이 없습니다.</p><div class='overlay_before' style='background:url(" + apiAddress + response.user.backgroundImage + ")  no-repeat fixed 0 0/cover;'></div></div>";
                                $("#favorite_content").html(html);
                            }
                        }
                    }

                    // interests
                    if (loginIdx == searchIdx) {
                        var html = "";
                        $("#main_interests").removeClass('d-none');
                        if (response.user.interestsOn == 0) {
                            // interests list
                            if (response.interestList.length > 0) {
                                for (var i = 0; i < response.interestList.length; i++) {
                                    if (response.interestList[i] != "" && response.interestList[i] != null && response.interestList[i] != undefined) {
                                        html += '<div class="con-divs">'
                                            + '<span class="text-white" style="background-color: #000;"># ' + response.interestList[i] + '</span>'
                                            + '</div>';
                                    } else {
                                        html += '<div class="card-right overlay">'
                                            + '<p>등록된 관심사가 없습니다.</p>'
                                            + '<div class="overlay_before" style="background:url(' + apiAddress + response.user.backgroundImage + ')  no-repeat fixed 0 0/cover;"></div>'
                                            + '</div>';
                                        $("#interests_content").parent().removeClass('content-md-box-in');
                                        $("#interests_content").parent().parent().removeClass('content-md-box');
                                    }
                                }
                                $("#interests_content").empty();
                                $("#interests_content").append(html);
                            } else {
                                html += '<div class="card-right overlay">'
                                    + '<p>등록된 관심사가 없습니다.</p>'
                                    + '<div class="overlay_before" style="background:url(' + apiAddress + response.user.backgroundImage + ')  no-repeat fixed 0 0/cover;"></div>'
                                    + '</div>';
                                $("#interests_content").html(html);
                                $("#interests_content").parent().removeClass('content-md-box-in');
                                $("#interests_content").parent().parent().removeClass('content-md-box');
                            }
                        } else {
                            var html = "<div class='card-right overlay'><p>비공개 설정</p><div class='overlay_before' style='background:url(" + apiAddress + response.user.backgroundImage + ")  no-repeat fixed 0 0/cover;'></div></div>";
                            $("#interests_content").html(html);
                            $("#interests_content").parent().removeClass('content-md-box-in');
                            $("#interests_content").parent().parent().removeClass('content-md-box');
                        }
                    } else {
                        if (response.user.interestsOn == 0) {
                            var html = "";
                            $("#main_interests").removeClass('d-none');
                            // interests list
                            if (response.interestList.length > 0) {
                                for (var i = 0; i < response.interestList.length; i++) {
                                    if (response.interestList[i] != "" && response.interestList[i] != null && response.interestList[i] != undefined) {
                                        html += '<div class="con-divs">'
                                            + '<span class="text-white" style="background-color: #000;"># ' + response.interestList[i] + '</span>'
                                            + '</div>';
                                    } else {
                                        html += '<div class="card-right overlay">'
                                            + '<p>등록된 관심사가 없습니다.</p>'
                                            + '<div class="overlay_before" style="background:url(' + apiAddress + response.user.backgroundImage + ')  no-repeat fixed 0 0/cover;"></div>'
                                            + '</div>';
                                        $("#interests_content").parent().removeClass('content-md-box-in');
                                        $("#interests_content").parent().parent().removeClass('content-md-box');
                                    }
                                }
                                $("#interests_content").empty();
                                $("#interests_content").append(html);
                            } else {
                                html += '<div class="card-right overlay">'
                                    + '<p>등록된 관심사가 없습니다.</p>'
                                    + '<div class="overlay_before" style="background:url(' + apiAddress + response.user.backgroundImage + ')  no-repeat fixed 0 0/cover;"></div>'
                                    + '</div>';
                                $("#interests_content").html(html);
                                $("#interests_content").parent().removeClass('content-md-box-in');
                                $("#interests_content").parent().parent().removeClass('content-md-box');
                            }
                        }
                    }


                    // portrait9
                    if (loginIdx == searchIdx) {
                        $("#main_life").removeClass('d-none');
                        // portrait list
                        var html = "";
                        if (response.user.myLifeOn == 0) {
                            if (response.lifeList.length > 0) {
                                for (var i = 0; i < response.lifeList.length; i++) {
                                    if(i < 4) {
                                        html += '<div class="col-auto example-image-link"><a href="' + apiAddress + response.lifeList[i].saveName + '" class="life-img portrait" style="background-image:url(' + apiAddress + response.lifeList[i].saveName + ');" data-lightbox="roadtrip"></a></div>';
                                    }else {
                                        html += '<div class="col-auto example-image-link dt-none"><a href="' + apiAddress + response.lifeList[i].saveName + '" class="life-img portrait" style="background-image:url(' + apiAddress + response.lifeList[i].saveName + ');" data-lightbox="roadtrip"></a></div>';
                                    }
                                    // html += '<div class="col-auto example-image-link"><a href="' + apiAddress + response.lifeList[i].saveName + '" class="life-img portrait" style="background-image:url(' + apiAddress + response.lifeList[i].saveName + ');" data-lightbox="roadtrip"></a></div>';
                                }
                                $("#life_content").empty();
                                $("#life_content").append(html);
                                $("#life_content").parent().removeClass('overlay');
                                $("#life_content").next().removeClass('overlay_before');
                                $("#portraitMore").attr('href', '/portrait_more?idx=' + response.user.userIdx);
                            } else {
                                html += '<div class="card-right w-100">'
                                    + '<p>등록된 사진이 없습니다.</p>'
                                    + '</div>';
                                $("#life_content").empty();
                                $("#life_content").append(html);
                                $("#life_content").parent().removeClass('portrait-md-box');
                                $("#life_content").next().remove();
                                // $("#portraitMore").attr('href', '/portrait_more?idx=' + response.user.userIdx);
                            }
                        } else {
                            html += '<div class="card-right w-100"><p>비공개 설정</p></div>';
                            $("#life_content").empty();
                            $("#life_content").append(html);
                            $("#life_content").parent().removeClass('portrait-md-box');
                            $("#life_content").next().remove();
                            // $("#portraitMore").attr('href', '/portrait_more?idx=' + response.user.userIdx);
                        }
                    }else {
                        var html = "";
                        if(response.user.myLifeOn == 0) {
                            $("#main_life").removeClass('d-none');
                            // life list
                            if(response.lifeList.length > 0) {
                                for (var i = 0; i < response.lifeList.length; i++) {
                                    if(i < 4) {
                                        html += '<div class="col-auto example-image-link"><a href="' + apiAddress + response.lifeList[i].saveName + '" class="life-img portrait" style="background-image:url(' + apiAddress + response.lifeList[i].saveName + ');" data-lightbox="roadtrip"></a></div>';
                                    }else {
                                        html += '<div class="col-auto example-image-link dt-none"><a href="' + apiAddress + response.lifeList[i].saveName + '" class="life-img portrait" style="background-image:url(' + apiAddress + response.lifeList[i].saveName + ');" data-lightbox="roadtrip"></a></div>';
                                    }
                                    // html += '<div class="col-auto example-image-link"><a href="' + apiAddress + response.lifeList[i].saveName + '" class="life-img portrait" style="background-image:url(' + apiAddress + response.lifeList[i].saveName + ');" data-lightbox="roadtrip"></a></div>';
                                }
                                $("#life_content").empty();
                                $("#life_content").append(html);
                                $("#life_content").parent().removeClass('overlay');
                                $("#life_content").next().removeClass('overlay_before');
                                $("#portraitMore").attr('href', '/portrait_more?idx=' + response.user.userIdx);
                            }else {
                                html += '<div class="card-right w-100">'
                                    + '<p>등록된 사진이 없습니다.</p>'
                                    + '</div>';
                                $("#life_content").empty();
                                $("#life_content").append(html);
                                $("#life_content").parent().removeClass('portrait-md-box');
                                $("#life_content").next().remove();
                                // $("#portraitMore").attr('href', '/portrait_more?idx=' + response.user.userIdx);
                            }
                        }
                    }


                    // comments
                    if (loginIdx == searchIdx) {
                        var html = "";
                        $("#main_comments").removeClass('d-none');
                        // comment list
                        if (response.user.commentsOn == 0) {
                            if (response.pcList.length > 0) {
                                for (var i = 0; i < response.pcList.length; i++) {
                                    if(parseInt(i+1) == response.pcList.length) {
                                        html += '<div class="row">';
                                    }else {
                                        html += '<div class="row" style="margin-bottom: 15px;">';
                                    }
                                    html += '<div class="col-auto" style="padding-right: 4px;">';
                                    if (response.pcList[i].user2.profileImage != "" && response.pcList[i].user2.profileImage != null && response.pcList[i].user2.profileImage != undefined) {
                                        html += '<div class="follo-img" style="background-image: url(' + apiAddress + response.pcList[i].user2.profileImage + ')" onclick="location.href=\''+response.pcList[i].user2.userName+'\'"></div>';
                                    } else {
                                        html += '<div class="follo-img" onclick="location.href=\''+response.pcList[i].user2.userName+'\'"></div>';
                                    }
                                    html += '</div>'
                                        + '<div class="col d-flex flex-column justify-content-center align-items-start" style="padding-left: 4px;">'
                                        + '<a href="/' + response.pcList[i].user2.userName + '" class="text-decoration-none"><span class="m-0 font-15 font-weight-bold">' + response.pcList[i].user2.userName + '</span></a>'
                                        + '<div>' + response.pcList[i].pcContent + '</div>'
                                        + '</div>'
                                        + '</div>';
                                }
                                $("#comment_content").empty();
                                $("#comment_content").append(html);
                                $("#comment_more").attr('href', '/comment_more?idx=' + response.user.userIdx);
                            } else {
                                var html = "<p>등록된 코멘트가 없습니다</p>";
                                $("#comment_content").empty();
                                $("#comment_content").html(html);
                                $("#comment_more").attr('href', '/comment_more?idx=' + response.user.userIdx);
                            }
                        } else {
                            var html = "<p>비공개 설정</p>";
                            $("#comment_content").empty();
                            $("#comment_content").html(html);
                            $("#comment_more").attr('href', '/comment_more?idx=' + response.user.userIdx);
                        }
                    }else {
                        var html = "";
                        if(response.user.commentsOn == 0) {
                            $("#main_comments").removeClass('d-none');
                            // comment list
                            if(response.pcList.length > 0) {
                                for(var i = 0; i < response.pcList.length; i++) {
                                    if(parseInt(i+1) == response.pcList.length) {
                                        html += '<div class="row">';
                                    }else {
                                        html += '<div class="row" style="margin-bottom: 15px;">';
                                    }
                                    html += '<div class="col-auto" style="padding-right: 4px;">';
                                    if(response.pcList[i].user2.profileImage != "" && response.pcList[i].user2.profileImage != null && response.pcList[i].user2.profileImage != undefined) {
                                        html += '<div class="follo-img" style="background-image: url(' + apiAddress + response.pcList[i].user2.profileImage + ')" onclick="location.href=\''+response.pcList[i].user2.userName+'\'"></div>';
                                    }else {
                                        html += '<div class="follo-img" onclick="location.href=\''+response.pcList[i].user2.userName+'\'"></div>';
                                    }
                                    html += '</div>'
                                        + '<div class="col d-flex flex-column justify-content-center align-items-start" style="padding-left: 4px;">'
                                        + '<a href="/' + response.pcList[i].user2.userName + '" class="text-decoration-none"><span class="m-0 font-15 font-weight-bold">' + response.pcList[i].user2.userName + '</span></a>'
                                        + '<div>' + response.pcList[i].pcContent + '</div>'
                                        + '</div>'
                                        + '</div>';
                                }
                                $("#comment_content").empty();
                                $("#comment_content").append(html);
                                $("#comment_more").attr('href', '/comment_more?idx=' + response.user.userIdx);
                            }else {
                                var html = "<p>등록된 코멘트가 없습니다</p>";
                                $("#comment_content").empty();
                                $("#comment_content").html(html);
                                $("#comment_more").attr('href', '/comment_more?idx=' + response.user.userIdx);
                            }
                        }
                    }
                    // commentsAmount
                    if (response.commentsAmount > 0) {
                        if (response.commentsAmount > 999) {
                            $("#commentCount").text('+999');
                        } else {
                            $("#commentCount").text(response.commentsAmount);
                        }
                    } else {
                        $("#commentCount").text('0');
                    }


                    // schedules
                    if(loginIdx == searchIdx) {
                        var html = "";
                        $("#main_schedule").removeClass('d-none');
                        if(response.user.scheduleOn == 0) {
                            // schedule list
                            if(response.scheduleList.length > 0) {
                                for(var i = 0; i < response.scheduleList.length; i++) {
                                    html += '<div class="schedule-list-box">'
                                        + '<div style="font-weight: 900;">' + moment(response.scheduleList[i].startDate).format("MM.DD") + ' ~ ' + moment(response.scheduleList[i].endDate).format("MM.DD") + '</div>'
                                        + '<p class="font-weight-bold">' + response.scheduleList[i].sdTitle + '</p>'
                                        + '<p>' + response.scheduleList[i].sdContent + '</p>'
                                        + '</div>';
                                }
                                $("#schedule_content").empty();
                                $("#schedule_content").append(html);
                                $("#schedule_more").attr('href', '/schedule_more?idx=' + response.user.userIdx);
                            }else {
                                html = '<p>등록된 일정이 없습니다</p>';
                                $("#schedule_content").empty();
                                $("#schedule_content").append(html);
                                $("#schedule_content").next().remove();
                                // $("#schedule_more").attr('href', '/schedule_more?idx=' + response.user.userIdx);
                            }
                        }else {
                            html = '<p>비공개 설정</p>';
                            $("#schedule_content").empty();
                            $("#schedule_content").append(html);
                            $("#schedule_content").next().remove();
                            // $("#schedule_more").attr('href', '/schedule_more?idx=' + response.user.userIdx);
                        }
                    } else {
                        var html = "";
                        if (response.user.scheduleOn == 0) {
                            $("#main_schedule").removeClass('d-none');
                            // schedule list
                            if (response.scheduleList.length > 0) {
                                for (var i = 0; i < response.scheduleList.length; i++) {
                                    html += '<div class="schedule-list-box">'
                                        + '<div style="font-weight: 900;">' + moment(response.scheduleList[i].startDate).format("MM.DD") + ' ~ ' + moment(response.scheduleList[i].endDate).format("MM.DD") + '</div>'
                                        + '<p class="font-weight-bold">' + response.scheduleList[i].sdTitle + '</p>'
                                        + '<p>' + response.scheduleList[i].sdContent + '</p>'
                                        + '</div>'
                                }
                                $("#schedule_content").empty();
                                $("#schedule_content").append(html);
                                $("#schedule_more").attr('href', '/schedule_more?idx=' + response.user.userIdx);
                            } else {
                                html = '<p>등록된 일정이 없습니다</p>';
                                $("#schedule_content").empty();
                                $("#schedule_content").append(html);
                                $("#schedule_content").next().remove();
                                // $("#schedule_more").attr('href', '/schedule_more?idx=' + response.user.userIdx);
                            }
                        }
                    }

                    // 페이지 본인 확인
                    if (loginIdx != searchIdx) {
                        $("#otherMenu").removeClass('d-none');
                        $("#otherMenus").removeClass('d-none');
                        if (response.user.certificationDate == "" || response.user.certificationDate == null || response.user.certificationDate == undefined || response.user.account == "" || response.user.account == null || response.user.account == undefined) {
                            $("#orderMSG").removeClass('btn-primary');
                            $("#orderMSG").addClass('btn-secondary');
                            $("#orderMSG").attr("disabled", "disabled");
                        } else {
                            $("#orderMSG").attr("data-url", "/chat_info?targetIdx=" + searchIdx);
                        }
                        $("div .myProfileEdit").each(function () {
                            $(this).addClass('d-none');
                        });
                        $("#shareLink").val("https://mooorr.com/"+response.user.userName);
                        $("#shareReport").parents().removeClass('d-none');
                        $("#shareReport").attr('href', '/declaration?targetIdx='+response.user.userIdx);
                    }  else {
                        // chat room count
                        chatRoomCount(loginIdx);
                        $("#myMenu").removeClass('d-none');

                        // chatRoomCounts(loginIdx);
                        $("#myMenus").removeClass('d-none');
                        // 수정버튼 링크 설정
                        $("#portraitMore").attr('href', '/portrait_more?idx=' + searchIdx);
                        $("#myLinksMore").attr('href', '/my_links_more?idx=' + searchIdx);
                        $("#shareLink").val("https://mooorr.com/"+response.user.userName);

                    }
                } else {
                    var errText = '<div class="col d-flex flex-column justify-content-center align-items-center card-right" style="min-height: 500px;"><img src="/assets/images/email-logo-nonbox.png" class="w-25"/><br>해당 유저를 찾을 수 없습니다</div>';
                    $("#mainForm").next().append(errText);

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

function follow(text) {
    var apiAddress = $("#apiAddress").val();
    var loginUser = $("#main_loginIdx").val();
    if(isNaN(loginUser)) {
        Swal.fire({
            title: '로그인 필요',
            text: '해당 서비스는 로그인이 필요한 서비스입니다.',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            location.href='/login';
        });
    }else {
        if(loginUser == "" || loginUser == null || loginUser == undefined || loginUser == NaN) {
            Swal.fire({
                title: '로그인 필요',
                text: '해당 서비스는 로그인이 필요한 서비스입니다.',
                confirmButtonText: '확인',
                allowOutsideClick: false
            }).then(function() {
                location.href='/login';
            });
        }
        var datas = $("#mainForm").serialize();
        $.ajax({
            url: apiAddress+"/api/modFollow",
            type: 'POST',
            data: datas,
            dataType: 'JSON',
            success: function (response) {
                // console.log(response);
                if(response.result == true) {
                    $(".followBtn").addClass('d-none');
                    if(text == "plus") {
                        $("#followed").removeClass('d-none');
                    }else if(text == "check") {
                        $("#plus_follow").removeClass('d-none');
                    }
                    $.ajax({
                        url: apiAddress + "/api/userInfo?userIdx=" + response.target.userIdx,
                        type: 'GET',
                        dataType: 'JSON',
                        success: function (data) {
                            console.log(data.user);
                            if(data.user.follower != "" && data.user.follower != null && data.user.follower != undefined) {
                                $("#main_follower").text(numberWithCommas(data.user.follower));
                            }else {
                                $("#main_follower").text("0");
                            }
                            if(data.user.following != "" && data.user.following != null && data.user.following != undefined) {
                                $("#main_following").text(numberWithCommas(data.user.following));
                            }else {
                                $("#main_following").text("0");
                            }
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
            },error: function (jqXHR) {
                console.log(jqXHR.responseText);
            }
        });
    }
}

// function shareReport() {
//
//     var userIdx = getCookie('idx');
//     if(isNaN(loginUser)) {
//         Swal.fire({
//             title: '로그인 필요',
//             text: '해당 서비스는 로그인이 필요한 서비스입니다.',
//             confirmButtonText: '확인',
//             allowOutsideClick: false
//         }).then(function() {
//             location.href='/login';
//         });
//     }else {
//         if(userIdx == "" || userIdx == null || userIdx == undefined) {
//             Swal.fire({
//                 title: '로그인 필요',
//                 text: '해당 서비스는 로그인이 필요한 서비스입니다.',
//                 confirmButtonText: '확인',
//                 allowOutsideClick: false
//             }).then(function() {
//                 location.href='/login';
//             });
//         } else {
//             $("#shareReport").parents().removeClass('d-none');
//             $("#shareReport").attr('href', '/declaration?targetIdx='+response.user.userIdx);
//         }
//     }
// }
function chatRoomCount(idx) {
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

// function chatRoomCounts(idx) {
//     var apiAddress = $("#apiAddress").val();
//     var count;
//     $.ajax({
//         url: apiAddress+"/api/chatList?userIdx="+idx,
//         type: 'GET',
//         async: false,
//         dataType: 'JSON',
//         success: function (response) {
//             // console.log(response);
//             if (response.result == true) {
//                 if (response.chatList.length > 0) {
//                     var userCount = 0;
//                     for (var i = 0; i < response.chatList.length; i++) {
//                         if (idx == response.chatList[i].user.userIdx) {
//                             userCount = parseInt(userCount) + parseInt(response.chatList[i].u1NoRead);
//                         } else {
//                             userCount = parseInt(userCount) + parseInt(response.chatList[i].u2NoRead);
//                         }
//                     }
//                     if (userCount > 0) {
//                         $("#chatRoomCounts").text('N');
//                     } else {
//                         $("#chatRoomCounts").hide();
//                     }
//                 } else {
//                     $("#chatRoomCounts").hide();
//                 }
//             }else{
//                 Swal.fire({
//                     text: response.msg,
//                     confirmButtonText: '확인',
//                     allowOutsideClick: false
//                 });
//                 return false;
//             }
//         }
//     });
// }
$(function () {
    var target = getParameter('target');
    var idx = getCookie('idx');
    if(target != "" && target != null && target != undefined) {
        targetFollowingList(target);
    }else if(idx != "" && idx != null && idx != undefined){
        $("#userIdx").val(idx);
        followingList(idx);
    }else {
        Swal.fire({
            text: '회원정보가 존재하지 않습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            history.back();
        });
    }


    $(".followBtn").click(function () {
        var id = $(this).attr('id');
        if(target != "" && target != null && target != undefined) {
            if(id == "followerBtn") {
                targetFollowerList(target);
            }else {
                targetFollowingList(target);
            }
        }else {
            if(id == "followerBtn") {
                followerList(idx);
            }else {
                followingList(idx);
            }
        }
    });

    $(document).on('click', '.userFollowBtn', function () {
        var idx = $(this).attr('data-idx');
        var type = $(this).attr('data-type');
        follow(idx, type);
    });


});
function followingList(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/followList?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                var html = "";
                if (response.followList.length > 0) {
                    $("#followingCount").text(response.followList.length);
                    for (var i = 0; i < response.followList.length; i++) {
                        html += '<div class="form-row mb-3">'
                            + '<div class="col-auto">';
                        if (response.followList[i].user2.profileImage != "" && response.followList[i].user2.profileImage != null && response.followList[i].user2.profileImage != undefined) {
                            html += '<div class="follo-img" style="background-image:url(' + apiAddress + response.followList[i].user2.profileImage + ');" onclick="location.href=\'/'+response.followList[i].user2.userName+'\'"></div>';
                        } else {
                            html += '<div class="follo-img" onclick="location.href=\'/'+response.followList[i].user2.userName+'\'"></div>';
                        }
                        html += '</div>'
                            + '<div class="col d-flex flex-column justify-content-center align-items-start">'
                            + '<a href="/' + response.followList[i].user2.userName + '" class="text-decoration-none"><span class="m-0 font-15 font-weight-bold text-dark">' + response.followList[i].user2.userName + '</span></a>';
                        if (response.followList[i].user2.statusMessage != "" && response.followList[i].user2.statusMessage != null && response.followList[i].user2.statusMessage != undefined) {
                            html += '<div class="text-black-50">' + response.followList[i].user2.statusMessage + '</div>';
                        } else {
                            html += '<div class="text-black-50"></div>';
                        }
                        html += '</div>'
                            + '<div class="col-auto d-flex justify-content-center align-items-center">'
                            + '<button type="button" class="btn btn-before userFollowBtn" data-idx="'+response.followList[i].user2.userIdx+'" data-type="followingList">'
                            + '<img src="/assets/images/user-sb.png" style="width:14px;"/>'
                            + '<img src="/assets/images/check-b.png" style="width:8px;"/>';
                        html += '</button>'
                            + '</div>'
                            + '</div>';
                    }
                    $("#follow_content").empty();
                    $("#follow_content").append(html);
                } else {
                    $("#followingCount").text('0');
                    html += '<div class="text-center">Follow/Follower 리스트가 존재하지 않습니다</div>';
                    $("#follow_content").empty();
                    $("#follow_content").append(html);
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
function followerList(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/followerList?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                var html = "";
                if (response.followerList.length > 0) {
                    $("#followerCount").text(response.followerList.length);
                    for (var i = 0; i < response.followerList.length; i++) {
                        html += '<div class="form-row mb-3">'
                            + '<div class="col-auto">';
                        if (response.followerList[i].user.profileImage != "" && response.followerList[i].user.profileImage != null && response.followerList[i].user.profileImage != undefined) {
                            html += '<div class="follo-img" style="background-image:url(' + apiAddress + response.followerList[i].user.profileImage + ');" onclick="location.href=\'/'+response.followerList[i].user.userName+'\'"></div>';
                        } else {
                            html += '<div class="follo-img" onclick="location.href=\'/'+response.followerList[i].user.userName+'\'"></div>';
                        }
                        html += '</div>'
                            + '<div class="col d-flex flex-column justify-content-center align-items-start">'
                            + '<a href="/' + response.followerList[i].user.userName + '" class="text-decoration-none"><span class="m-0 font-15 font-weight-bold text-dark">' + response.followerList[i].user.userName + '</span></a>';
                        if (response.followerList[i].user.statusMessage != "" && response.followerList[i].user.statusMessage != null && response.followerList[i].user.statusMessage != undefined) {
                            html += '<div class="text-black-50">' + response.followerList[i].user.statusMessage + '</div>';
                        } else {
                            html += '<div class="text-black-50"></div>';
                        }
                        html += '</div>'
                            + '<div class="col-auto d-flex justify-content-center align-items-center">';
                        if (response.followerList[i].both == "1") {
                            html += '<button type="button" class="btn btn-before userFollowBtn" data-idx="'+response.followerList[i].user.userIdx+'" data-type="followerList">'
                                + '<img src="/assets/images/user-sb.png" style="width:14px;"/>'
                                + '<img src="/assets/images/check-b.png" style="width:8px;"/>';
                        } else {
                            html += '<button type="button" class="btn btn-info userFollowBtn" data-idx="'+response.followerList[i].user.userIdx+'" data-type="followerList">'
                                + '<img src="/assets/images/user-sw.png" style="width:14px;"/>'
                                + '<img src="/assets/images/plus-sign.png" style="width:8px;"/>'
                        }
                        html += '</button>'
                            + '</div>'
                            + '</div>';
                    }
                    $("#follower_content").empty();
                    $("#follower_content").append(html);
                } else {
                    $("#followerCount").text('0');
                    html += '<div class="text-center">Follow/Follower 리스트가 존재하지 않습니다</div>';
                    $("#follower_content").empty();
                    $("#follower_content").append(html);
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
function follow(idx, type) {
    $("#targetIdx").val(idx);
    var apiAddress = $("#apiAddress").val();
    var datas = $("#followForm").serialize();
    $.ajax({
        url: apiAddress+"/api/modFollow",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                if(type == "followingList") {
                    followingList($("#userIdx").val());
                }else if(type == "followerList"){
                    followerList($("#userIdx").val());
                }
            }else {
                Swal.fire({
                    text: response.msg,
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                }).then(function() {
                    location.reload();
                });
            }
        }
    });
}

function targetFollowingList(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/followList?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                var html = "";
                if (response.followList.length > 0) {
                    $("#followingCount").text(response.followList.length);
                    for (var i = 0; i < response.followList.length; i++) {
                        html += '<div class="form-row mb-3">'
                            + '<div class="col-auto">';
                        if (response.followList[i].user2.profileImage != "" && response.followList[i].user2.profileImage != null && response.followList[i].user2.profileImage != undefined) {
                            html += '<div class="follo-img" style="background-image:url(' + apiAddress + response.followList[i].user2.profileImage + ');" onclick="location.href=\'/'+response.followList[i].user2.userName+'\'"></div>';
                        } else {
                            html += '<div class="follo-img" onclick="location.href=\'/'+response.followList[i].user2.userName+'\'"></div>';
                        }
                        html += '</div>'
                            + '<div class="col d-flex flex-column justify-content-center align-items-start">'
                            + '<a href="/' + response.followList[i].user2.userName + '" class="text-decoration-none"><span class="m-0 font-15 font-weight-bold text-dark">' + response.followList[i].user2.userName + '</span></a>';
                        if (response.followList[i].user2.statusMessage != "" && response.followList[i].user2.statusMessage != null && response.followList[i].user2.statusMessage != undefined) {
                            html += '<div class="text-black-50">' + response.followList[i].user2.statusMessage + '</div>';
                        } else {
                            html += '<div class="text-black-50"></div>';
                        }
                        html += '</div>'
                            + '</div>';
                    }
                    $("#follow_content").empty();
                    $("#follow_content").append(html);
                } else {
                    $("#followingCount").text('0');
                    html += '<div class="text-center">Follow/Follower 리스트가 존재하지 않습니다</div>';
                    $("#follow_content").empty();
                    $("#follow_content").append(html);
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
function targetFollowerList(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/followerList?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                var html = "";
                if (response.followerList.length > 0) {
                    $("#followerCount").text(response.followerList.length);
                    for (var i = 0; i < response.followerList.length; i++) {
                        html += '<div class="form-row mb-3">'
                            + '<div class="col-auto">';
                        if (response.followerList[i].user.profileImage != "" && response.followerList[i].user.profileImage != null && response.followerList[i].user.profileImage != undefined) {
                            html += '<div class="follo-img" style="background-image:url(' + apiAddress + response.followerList[i].user.profileImage + ');" onclick="location.href=\'/'+response.followerList[i].user.userName+'\'"></div>';
                        } else {
                            html += '<div class="follo-img" onclick="location.href=\'/'+response.followerList[i].user.userName+'\'"></div>';
                        }
                        html += '</div>'
                            + '<div class="col d-flex flex-column justify-content-center align-items-start">'
                            + '<a href="/' + response.followerList[i].user.userName + '" class="text-decoration-none"><span class="m-0 font-15 font-weight-bold text-dark">' + response.followerList[i].user.userName + '</span></a>';
                        if (response.followerList[i].user.statusMessage != "" && response.followerList[i].user.statusMessage != null && response.followerList[i].user.statusMessage != undefined) {
                            html += '<div class="text-black-50">' + response.followerList[i].user.statusMessage + '</div>';
                        } else {
                            html += '<div class="text-black-50"></div>';
                        }
                        html += '</div>'
                            + '</div>';
                    }
                    $("#follower_content").empty();
                    $("#follower_content").append(html);
                } else {
                    $("#followerCount").text('0');
                    html += '<div class="text-center">Follow/Follower 리스트가 존재하지 않습니다</div>';
                    $("#follower_content").empty();
                    $("#follower_content").append(html);
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
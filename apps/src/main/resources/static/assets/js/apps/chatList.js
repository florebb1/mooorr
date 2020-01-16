    $(function () {
    // get user infomation
    var idx = getCookie('idx');
    if(idx != "" && idx != null && idx != undefined) {
        $("#userIdx").val(idx);
        chatList(idx);
    }else {
        Swal.fire({
            text: '해당 회원정보가 존재하지 않습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            history.back();
        });
    }

    $(document).on('click', '.msg-box', function() {
        var idx = $(this).attr('data-idx');
        var apiAddress = $("#apiAddress").val();
        $.ajax({
            url: apiAddress+"/api/userInfo?userIdx=" + idx,
            type: 'GET',
            dataType: 'JSON',
            success: function (response) {
                // console.log(response);
                if(response.result == true) {
                    if(response.user.intro != "" && response.user.intro != null && response.user.intro != undefined) {
                        location.href='/chat_info?targetIdx='+idx;
                        return false;
                    }else {
                        location.href='/chat_detail?targetIdx='+idx;
                        return false;
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
    });
});
function chatList(idx) {
    var apiAddress = $("#apiAddress").val();
    var html = "";
    $.ajax({
        url: apiAddress+"/api/chatList?userIdx="+idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                if (response.chatList.length > 0) {
                    for (var i = 0; i < response.chatList.length; i++) {
                        var user = "";
                        var noRead = "";
                        if (idx == response.chatList[i].user.userIdx) { //지금유저가 최초발신자라면
                            user = response.chatList[i].user2; // 유저2가 수신자
                            noRead = response.chatList[i].u1NoRead;
                        } else {
                            user = response.chatList[i].user; // 유저1이 수신자
                            noRead = response.chatList[i].u2NoRead;
                        }
                        // html += '<a href="/chat_info?targetIdx=' + user.userIdx + '" class="row msg-box">'
                        html += '<a class="row msg-box" data-idx="'+user.userIdx+'">'
                            + '<div class="col-auto d-flex justify-content-center align-items-center">';
                        if (user.profileImage != "" && user.profileImage != null && user.profileImage != undefined) {
                            var profileImageUrl = apiAddress + user.profileImage;
                            if (user.loginStatus == 1) {
                                html += '<div class="maspro-img" style="background-image:url(' + profileImageUrl + ');"><span class="user-online"></span></div>';
                            } else {
                                html += '<div class="maspro-img" style="background-image:url(' + profileImageUrl + ');"><span class="user-offline"></span></div>';
                            }
                        } else {
                            if (user.loginStatus == 1) {
                                html += '<div class="maspro-img"><span class="user-online"></span></div>';
                            } else {
                                html += '<div class="maspro-img"><span class="user-offline"></span></div>';
                            }
                        }
                        html += '</div>'
                            + '<div class="col d-flex flex-column justify-content-center align-items-start">'
                            + '<span class="nick-asd">' + user.userName + '</span>'
                            + '<h6 class="m-0" style="word-break: break-word;">' + response.chatList[i].finContent + '</h6>'
                            + '<p>' + moment(response.chatList[i].finDate).format("YYYY-MM-DD hh:mm:ss a") + '</p>'
                            + '</div>'
                            + '<div class="col-auto d-flex justify-content-center align-items-center">';
                        if (noRead != 0) {
                            html += '<span class="badge badge-pill badge-mooorr">' + noRead + '</span>';
                        } else {
                            html += '<span class="badge badge-pill badge-mooorr"></span>';
                        }
                        html += '</div>'
                            + '</a>';
                    }
                    $("#chat_list_content").empty();
                    $("#chat_list_content").append(html);
                } else {
                    html += '<div class="text-center">대화중인 채팅방이 없습니다</div>';
                    $("#chat_list_content").empty();
                    $("#chat_list_content").append(html);
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

function user_search(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/userInfo?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            if(response.result == true) {
                status = response.user.loginStatus;
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
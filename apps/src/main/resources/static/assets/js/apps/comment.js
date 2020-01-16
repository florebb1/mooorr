$(function () {
    var idx = getCookie('idx');

    if(idx != "" && idx != null && idx != undefined) {
        $("#userIdx").val(idx);
        $("#ownerIdx").val(idx);
        commentList(idx);
    }else {
        Swal.fire({
            text: '해당 회원정보가 존재하지 않습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            history.back();
        });
    }

    $("#switch-normal").change(function () {
        if($("#switch-normal").is(":checked") == true) {
            $("#onoff").val(0);
        }else {
            $("#onoff").val(1);
        }
    });
});
function commentList(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/editCommentsList?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            var html = "";
            if(response.result) {
                if (response.onoff == 0) {
                    $("#switch-normal").attr("checked", true);
                    $("#onoff").val("0");
                } else {
                    $("#switch-normal").attr("checked", false);
                    $("#onoff").val("1");
                }
                if (response.pcList.length > 0) {
                    var loginIdx = getCookie('idx');
                    for (var i = 0; i < response.pcList.length; i++) {
                        if(parseInt(i+1) == response.pcList.length) {
                            html += '<div class="row">';
                        }else {
                            html += '<div class="row" style="margin-bottom: 15px;">';
                        }
                        html += '<div class="col-auto" style="padding-right: 4px;">';
                        if (response.pcList[i].user2.profileImage != "" && response.pcList[i].user2.profileImage != null && response.pcList[i].user2.profileImage != undefined) {
                            html += '<div class="follo-img" style="background-image:url(' + apiAddress + response.pcList[i].user2.profileImage + ');" onclick="location.href=\'/'+response.pcList[i].user2.userName+'\'"></div>';
                        } else {
                            html += '<div class="follo-img" onclick="location.href=\'/'+response.pcList[i].user2.userName+'\'"></div>';
                        }
                        html += '</div>'
                            + '<div class="col d-flex flex-column justify-content-center align-items-start" style="padding-left: 4px;">'
                            + '<a href="/' + response.pcList[i].user2.userName + '" class="text-decoration-none"><span class="m-0 font-15 font-weight-bold text-dark">' + response.pcList[i].user2.userName + '</span></a>'
                            + '<div class="text-black-50">' + response.pcList[i].pcContent + '</div>'
                            + '</div>';
                        if (loginIdx == idx || loginIdx == response.pcList[i].user2.userIdx) {
                            html += '<div class="col-auto d-flex justify-content-center align-items-center">'
                                + '<a onclick="commentDel(' + response.pcList[i].pcIdx + ')"><img src="/assets/images/cross-out.png" style="width:16px;height:16px;"/></a>'
                                + '</div>';
                        }
                        html += '</div>';
                    }
                    $("#comment_content").empty();
                    $("#comment_content").append(html);
                } else {
                    html += '<div class="d-flex justify-content-center align-items-center" style="min-height: 500px;"><p class="text-center">등록된 코멘트가 없습니다<br>코멘트는 맞팔로우 경우에만 작성 가능합니다.</p></div>';
                    $("#comment_content").empty();
                    $("#comment_content").append(html);
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
function commentDel(idx) {
    var apiAddress = $("#apiAddress").val();
    Swal.fire({
        text: '해당 코멘트를 삭제하시겠습니까?',
        showCancelButton: true,
        cancelButtonText: '취소',
        confirmButtonText: '확인',
        allowOutsideClick: false,
        reverseButtons: true
    }).then(function (isConfirm) {
        if(isConfirm.value) {
            $.ajax({
                url: apiAddress+"/api/deleteComment?pcIdx=" + idx,
                type: 'GET',
                dataType: 'JSON',
                success: function (response) {
                    // console.log(response);
                    if(response.result == true) {
                        location.reload();
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
    });
}
function commentEdit() {
    var apiAddress = $("#apiAddress").val();
    var datas = $("#commentForm").serialize();
    $.ajax({
        url: apiAddress+"/api/saveCommentsList",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                Swal.fire({
                    title: '수정 완료',
                    text: '수정이 완료되었습니다',
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                }).then(function() {
                    var name = getCookie('name');
                    if(name != "" && name != null && name != undefined) {
                        location.href='/'+name;
                    }else {
                        location.href='/';
                    }
                });
            }else {
                Swal.fire({
                    text: response.msg,
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                }).then(function() {
                    location.reload();
                });
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}
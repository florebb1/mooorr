$(function () {
    var loginIdx = getCookie('idx');
    var idx = getParameter('idx');

    if(idx != "" && idx != null && idx != undefined) {
        $("#userIdx").val(loginIdx);
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

    //본인이 아닌 맞팔로우 글쓰기 버튼 활성화
    if(loginIdx != idx) {
        if(loginIdx != "" && loginIdx != null && loginIdx != undefined) {
            followCheck(loginIdx, idx);
        }
    }

    //enter 적용
    $("#pcContent").on('keyup', function (event) {
        if(event.which == 13) {
            commentWrite();
        }
    });

    $("#pcContent").on('keyup', function () {
        var text = $(this).val();
        if(text.length < 250) {
            $("#statusMessageCount").text(text.length);
        }else {
            Swal.fire({
                text: '코멘트는 250자이내로 작성해주세요',
                confirmButtonText: '확인',
                allowOutsideClick: false
            });
            return false;
        }
    });

    //코멘트 추가
    $("#commentAddBtn").click(function () {
       $(this).parent().parent().toggle();
       $("#orther_menu").toggleClass('d-none');
    });

    //코멘트 작성 취소
    $("#cancelBtn").click(function () {
        $("#orther_menu").toggleClass('d-none');
        $(this).parent().parent().next().toggle();
    });

});
function commentList(idx) {
    var apiAddress = $("#apiAddress").val();
    var html = "";
    $.ajax({
        url: apiAddress+"/api/editCommentsList?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.pcList.length > 0) {
                var loginIdx = getCookie('idx');
                for (var i = 0; i < response.pcList.length; i++) {
                    if(parseInt(i+1) == response.pcList.length) {
                        html += '<div class="row">';
                    }else {
                        html += '<div class="row" style="margin-bottom: 15px;">';
                    }
                    html += '<div class="col-auto" style="padding-right: 4px;">';
                    if(response.pcList[i].user2.profileImage != "" && response.pcList[i].user2.profileImage != null && response.pcList[i].user2.profileImage != undefined) {
                        html += '<div class="follo-img" style="background-image:url('+apiAddress+response.pcList[i].user2.profileImage+');" onclick="location.href=\'/'+response.pcList[i].user2.userName+'\'"></div>';
                    }else {
                        html += '<div class="follo-img" onclick="location.href=\'/'+response.pcList[i].user2.userName+'\'"></div>';
                    }
                        html += '</div>'
                            + '<div class="col d-flex flex-column justify-content-center align-items-start" style="padding-left: 4px;">'
                            + '<a href="/'+response.pcList[i].user2.userName+'" class="text-decoration-none"><span class="m-0 font-15 font-weight-bold text-dark">'+response.pcList[i].user2.userName+'</span></a>'
                            + '<div class="text-black-50">'+response.pcList[i].pcContent+'</div>'
                            + '</div>';
                        if(loginIdx == response.pcList[i].user2.userIdx) {
                            html += '<div class="col-auto d-flex justify-content-center align-items-center">'
                            + '<a onclick="commentDel('+response.pcList[i].pcIdx+')"><img src="/assets/images/cross-out.png" style="width:16px;height:16px;"/></a>'
                            + '</div>';
                        }
                            html += '</div>';
                }
                $("#comment_content").empty();
                $("#comment_content").append(html);
            }else {
                html += '<div class="d-flex justify-content-center align-items-center" style="min-height: 500px;"><p class="text-center">등록된 코멘트가 없습니다<br>코멘트는 맞팔로우 경우에만 작성 가능합니다.</p></div>';
                $("#comment_content").empty();
                $("#comment_content").append(html);
            }
        }
    });
}
function commentWrite() {
    var loginIdx = getCookie('idx');
    var target = getParameter('idx');
    if(loginIdx == "" || loginIdx == null || loginIdx == undefined) {
        Swal.fire({
            title: '로그인 필요',
            text: '해당 서비스는 로그인이 필요한 서비스 입니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            location.href='/login';
        });
    }
    var pcContent = $("#pcContent").val();
    if (pcContent == "" || pcContent == null || pcContent == undefined) {
        Swal.fire({
            text: '코멘트 내용을 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    $("#writerIdx").val(loginIdx);
    var apiAddress = $("#apiAddress").val();
    var datas = $("#commentWriteForm").serialize();
    $.ajax({
        url: apiAddress+"/api/saveComment",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                commentList(target);
                $("#pcContent").val("");
            }else {
                if(response.code==20){
                    Swal.fire({
                        text: response.msg,
                        showCancelButton: true,
                        confirmButtonText: '확인',
                        cancelButtonText: '취소',
                        allowOutsideClick: false,
                        reverseButtons: true
                    }).then(function (isConfirm) {
                        if(isConfirm.value) {
                            // console.log(response.lastPc);
                            $.ajax({
                                //배열로 삭제
                                url: apiAddress+"/api/deleteCommentList?pcList=" + response.lastPc,
                                type: 'GET',
                                dataType: 'JSON',
                                success: function (response) {
                                    if(response.result == true) {
                                        commentWrite();
                                        $("#pcContent").val("");
                                        $("#statusMessageCount").text("0");
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

                        }else{
                            return false;
                        }
                    });
                }else{
                    Swal.fire({
                        text: response.msg,
                        confirmButtonText: '확인',
                        allowOutsideClick: false
                    });
                    return false;
                }
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}
function commentDel(idx) {
    var apiAddress = $("#apiAddress").val();
    var target = getParameter('idx');
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
                        commentList(target);
                        $("#pcContent").val("");
                        $("#statusMessageCount").text("0");
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
    });
}
function followCheck(loginIdx, targetIdx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/both?userIdx="+loginIdx+"&targetIdx="+targetIdx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                $("#commentAddBtn").removeClass('d-none');
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}
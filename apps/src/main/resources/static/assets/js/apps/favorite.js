$(function () {
    var idx = getCookie('idx');
    if(idx != "" && idx != null && idx != undefined) {
        $("#userIdx").val(idx);
        $("#modal-userIdx").val(idx);
        favoriteList(idx);
    }else {
        Swal.fire({
            text: '해당 회원정보가 존재하지 않습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            history.back();
        });
    }

    // 갯수 제한
    $("#favoritAddBtn").click(function () {
        var count = $("#count").val();
        if(count >= 2) {
            Swal.fire({
                text: '설정 가능한 최대치입니다',
                confirmButtonText: '확인',
                allowOutsideClick: false
            });
            return false;
        }
    });

    $("#switch-normal").change(function () {
        if($("#switch-normal").is(":checked") == true) {
            $("#onoff").val(0);
        }else {
            $("#onoff").val(1);
        }
    });
});
function favoriteList(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/favorite?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                var html = "";
                if (response.onoff == 0) {
                    $("#switch-normal").attr("checked", true);
                    $("#onoff").val("0");
                } else {
                    $("#switch-normal").attr("checked", false);
                    $("#onoff").val("1");
                }
                if (response.favoriteList.length > 0) {
                    $("#count").val(response.favoriteList.length);
                    for (var i = 0; i < response.favoriteList.length; i++) {
                        html += '<div class="form-row w-100 my-3">'
                            + '<div class="col-2 d-flex align-items-start justify-content-center p-0"><b class="span_tw">링크 ' + parseInt(i + 1) + '</b></div>'
                            + '<div class="col-9 d-flex flex-column p-0">'
                            + '<div class="text-center border-bottom py-1 mb-2 overflow-hidden">' + response.favoriteList[i].link + '</div>'
                            + '<div class="text-center border-bottom py-1 mb-2 overflow-hidden">' + response.favoriteList[i].detail + '</div>'
                            + '</div>'
                            + '<div class="col-1 d-flex align-items-start p-0">'
                            + '<button class="btn btn-link" onclick="favoriteDel(' + response.favoriteList[i].abfvIdx + ')"><img src="/assets/images/cross-out.png" style="width:16px;height:16px;"/></button>'
                            + '</div>'
                            + '</div>';
                    }
                    $("#favorite_content").empty();
                    $("#favorite_content").append(html);
                }
            }else {
                Swal.fire({
                    text: response.msg,
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                });
                return false;
            }
        }, error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}
function favoriteDel(idx) {
    Swal.fire({
        text: "등록된 사이트를 삭제하시겠습니까?",
        showCancelButton: true,
        cancelButtonText: '취소',
        confirmButtonText: '확인',
        allowOutsideClick: false,
        reverseButtons: true
    }).then(function (isConfirm) {
        if(isConfirm.value) {
            var apiAddress = $("#apiAddress").val();
            $.ajax({
                url: apiAddress+"/api/delAboutFavorite?abfvIdx=" + idx,
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
                        });
                        return false;
                    }
                }
            });
        }
    });
}
function favoriteEdit() {
    var apiAddress = $("#apiAddress").val();
    var datas = $("#favoriteListForm").serialize();
    $.ajax({
        url: apiAddress+"/api/setFavoritesOnoff",
        type: 'GET',
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
                });
                return false;
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}
function favoriteAdd() {
    var expUrl = /^http[s]?\:\/\//i;
    var url = $("#modal-link").val();
    var detail = $("#modal-detail").val();
    if(url == "") {
        Swal.fire({
            text: '페이버릿 링크를 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }else if(!expUrl.test(url)) {
        Swal.fire({
            text: '페이버릿 링크에 http:// 또는 https://를 포함해야합니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }else if(detail == "") {
        Swal.fire({
            text: '설명을 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    var apiAddress = $("#apiAddress").val();
    var datas = $("#favoriteModalForm").serialize();
    $.ajax({
        url: apiAddress+"/api/saveAboutFavorite",
        type: 'POST',
        data: datas,
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
                });
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}
$(function () {
    var idx = getCookie('idx');
    if(idx != "" && idx != null && idx != undefined) {
        $("#addPortraitBtn").attr('href','/portrait_input?idx='+idx);
        $("#userIdx").val(idx);
        portraitList(idx);
    }else {
        Swal.fire({
            text: '해당 회원정보가 존재하지 않습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            history.back();
        });
    }

    // 스위치 온/오프
    $("#switch-normal").change(function () {
        if($("#switch-normal").is(":checked") == true) {
            $("#onoff").val(0);
        }else {
            $("#onoff").val(1);
        }
    });

    $("#addPortraitBtn").click(function () {
       var count = $("#listCount").val();
       if(count == "" || count == null || count == undefined || count >= 9) {
           Swal.fire({
               text: '설정 가능한 최대치입니다',
               confirmButtonText: '확인',
               allowOutsideClick: false
           });
           return false;
       }
    });
});
function portraitList(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/life?userIdx="+idx,
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
                if (response.lifeList.length > 0) {
                    $("#listCount").val(response.lifeList.length);
                    for (var i = 0; i < response.lifeList.length; i++) {
                        html += '<div class="col-6 col-md-4 mb-3 d-flex justify-content-center">'
                            + '<div class="profile-img-wrap-port">'
                            + '<div class="position-relative">'
                            + '<div class="position-absolute" style="z-index: 1">'
                            + '<button type="button" class="close" aria-label="Close" onclick="portraitDel(' + response.lifeList[i].ablfIdx + ');"><span aria-hidden="true">&times;</span></button>'
                            + '</div>'
                            + '</div>'
                            + '<label><div class="profile-img-wrap-port-preview" style="background-image:url(' + apiAddress + response.lifeList[i].saveName + ') !important;"></div><span>' + response.lifeList[i].lifeFile + '</span></label>'
                            + '</div>'
                            + '</div>';
                    }
                    $("#portrait_content").empty();
                    $("#portrait_content").append(html);
                } else {
                    html += '<div class="col mb-3 d-flex justify-content-center">등록된 사진이 없습니다</div>';
                    $("#portrait_content").empty();
                    $("#portrait_content").append(html);
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
    })
}

function portraitDel(idx) {
    var apiAddress = $("#apiAddress").val();
    var html = "";
    Swal.fire({
        text: "해당 사진을 삭제하시겠습니까?",
        showCancelButton: true,
        cancelButtonText: '취소',
        confirmButtonText: '확인',
        allowOutsideClick: false,
        reverseButtons: true
    }).then(function (isConfirm) {
        if(isConfirm.value) {
            $.ajax({
                url: apiAddress+"/api/delAboutLife?ablfIdx=" + idx,
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

function portraitEdit() {
    var apiAddress = $("#apiAddress").val();
    var datas = $("#portraitForm").serialize();
    $.ajax({
        url: apiAddress+"/api/setLifeOnoff",
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
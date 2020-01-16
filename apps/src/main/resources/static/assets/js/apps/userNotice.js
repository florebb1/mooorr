$(function () {
    // summernote loading
    $('#summernote').summernote({
        height: 380,
        popover: false,
        toolbar: false
    });
    // get user infomation
    var idx = getCookie('idx');
    if(idx != "" && idx != null && idx != undefined) {
        $("#userIdx").val(idx);
        userNoticeInfo(idx);
    }else {
        Swal.fire({
            text: '해당 회원정보가 존재하지 않습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            history.back();
        });
    }
    // info onoff
    $("#switch-normal").change(function () {
        if($(this).is(":checked")) {
            $("#onoff").val('0');
        }else {
            $("#onoff").val('1');
        }
    });
    // 글자수 제한
    $('#summernote').on('summernote.change', function(we, contents, $editable) {
        if(contents != "" && contents != null && contents != undefined) {
            newText = contents.replace(/(<([^>]+)>)/ig,"");
            $("#contentCount").text(newText.length);
            if(newText.length > 500) {
                Swal.fire({
                    text: '해당 게시글은 최대 500자까지 입력 가능합니다',
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                }).then(function() {
                    var markupStr = newText.substr(0,500);
                    $('#summernote').summernote('code', markupStr);
                });
            }
        }else {
            $("#contentCount").text("0");
        }
    });
});
function userNoticeInfo(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/editAboutNotice?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                if (response.onoff == "0") {
                    $("#onoff").val("0");
                    $("#switch-normal").attr("checked", true);
                } else {
                    $("#onoff").val("1");
                    $("#switch-normal").attr("checked", false);
                }
                // content 내용추가 및 글자수 확인
                if (response.aboutNotice != "" && response.aboutNotice != null && response.aboutNotice != undefined) {
                    var content = response.aboutNotice.notice;
                    $('#summernote').summernote('code', content);
                    $("#contentCount").text(newText.length);
                } else {
                    $("#contentCount").text("0");
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
function userNoticeUpdate() {
    var apiAddress = $("#apiAddress").val();
    var datas = $("#aboutNoticeForm").serialize();
    $.ajax({
        url: apiAddress+"/api/saveAboutNotice",
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
                });
                return false;
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
    
}

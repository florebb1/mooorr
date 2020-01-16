$(function () {
    var idx = getParameter('idx');
    if(idx != "" && idx != null && idx != undefined) {
        $("#editBtn").removeClass('d-none');
        $("#delBtn").removeClass('d-none');
        info(idx);
    }else {
        $("#writeBtn").removeClass('d-none');
        $("#adminIdx").val(getCookie('adminIdx'));
        $("#adminName").val(getCookie('adminName'));
    }

    $('#summernote').summernote({
        height: 300,
        placeholder: '내용을 입력해주세요.'// set editor height
    });

    $("#writeBtn").click(function () {
       write();
    });
});
function info(idx) {
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/noticeDetail?noticeIdx="+idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                // console.log(response.notice.admin.adminName);
                $("#adminIdx").val(response.notice.admin.seq);
                $("#noticeIdx").val(response.notice.noticeIdx);
                $("#title").val(response.notice.title);
                $("#adminName").val(response.notice.admin.adminName);
                $("#summernote").summernote("code", response.notice.content);
                $("#content2").val(response.notice.content);
            }else{
                alert(response.msg);
                return false;
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}

function write() {
    var title = $("#title").val();
    var content = $("#summernote").val();
    if(title == "") {
        alert('제목을 입력해주세요.');
        return false;
    }else if(content == ""){
        alert('내용을 입력해주세요.');
        return false;
    }
    var datas = $("#noticeWriteForm").serialize();
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/addNotice",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            if(response.result == true) {
                alert('등록되었습니다.');
                location.href='/board/noticelist';
            }else {
                if(response.code == 0) {
                    alert(response.msg);
                    return false;
                }
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}

function edit() {
    var title = $("#title").val();
    var content = $("#summernote").val();
    if(title == "") {
        alert('제목을 입력해주세요.');
        return false;
    }else if(content == ""){
        alert('내용을 입력해주세요.');
        return false;
    }
    if(confirm('수정하시겠습니까?')) {
        var api = $("#apiAddress").val();
        var datas = $("#noticeWriteForm").serialize();
        $.ajax({
            url: api+"/adminapi/updateNotice",
            type: 'POST',
            data: datas,
            dataType: 'JSON',
            success: function (response) {
                // console.log(response);
                if(response.result == true) {
                    alert('수정되었습니다');
                    location.href='/board/noticelist';
                }else{
                    alert(response.msg);
                    return false;
                }
            },error: function (jqXHR) {
                console.log(jqXHR.responseText);
            }
        });
    }
}

function del() {
    var api = $("#apiAddress").val();
    if(confirm('삭제하시겠습니까?')) {
        var datas = $("#noticeWriteForm").serialize();
        $.ajax({
            url: api+"/adminapi/deleteNotice",
            type: 'POST',
            data: datas,
            dataType: 'JSON',
            success: function (response) {
                if(response.result == true) {
                    alert('삭제되었습니다');
                    location.href='/board/noticelist';
                }else{
                    alert(response.msg);
                    return false;

                }
            },error: function (jqXHR) {
                console.log(jqXHR.responseText);
            }
        });
    }
}

function history_back() {
    var ori_content = $("#content2").val();
    var new_content = $("#summernote").val();
    if(ori_content != new_content) {
        if (confirm('이 페이지를 벗어나면 마지막 저장 후 수정된 내용은 저장되지 않습니다.')) {
            history.back();
        }
    }else {
        history.back();
    }
}
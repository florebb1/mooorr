$(function(){
    $('#summernote').summernote({
        height: 300,
        placeholder: '내용을 입력해주세요.'// set editor height
    });

    var idx = getParameter('idx');
    info(idx);

    $("#saveBtn").click(function () {
       save();
    });
});

function info(idx) {
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/contactDetail?ctIdx="+idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                $("#ctIdx").val(response.ct.ctIdx);
                $("#ctTitle").val(response.ct.ctTitle);
                $("#userName").val(response.ct.user.userName);
                $("#ctCategory").val(response.ct.ctCategory);
                $("#ctContent").val(response.ct.ctContent);
                $("#summernote").summernote("code", response.ct.asContent);
                $("#content2").val(response.ct.asContent);
            }else{
                alert(response.msg);
                return false;
            }
        }
    });
}

function save() {
    var content = $("#summernote").val();
    if(content == ""){
        alert('내용을 입력해주세요.');
        return false;
    }
    var api = $("#apiAddress").val();
    var datas = $("#qanViewForm").serialize();
    $.ajax({
        url: api+"/adminapi/updateContact",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                alert('등록되었습니다.');
                location.href='/board/qnalist';
            }else {
                alert(response.msg);
                return false;
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
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
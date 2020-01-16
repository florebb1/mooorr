$(function () {
    $("#useLink").change(function () {
        var useLink = $(this).val();
        if(useLink == 0) {
            $("#link").attr('readonly', false);
        }else {
            $("#link").val("");
            $("#link").attr('readonly', true);
        }
    });

    $("#saveBtn").click(function () {
        var title = $("#asTitle").val();
        var content = $("#summernote").val();
        if(title == "") {
            alert('제목을 입력해주세요.');
            return false;
        }else if(content == "") {
            alert('내용을 입력해주세요.');
            return false;
        }
        var datas = $("#newPopupForm").serialize();
        var api = $("#apiAddress").val();
        $('#newPopupForm').ajaxSubmit({
            url: api+"/adminapi/updatePopup",
            processData: false,
            contentType: false,
            type: 'POST',
            dataType: 'JSON',
            data: datas,
            success: function (response) {
                // console.log(response);
                if(response.result == true) {
                    alert('저장되었습니다.');
                    document.location.href='/service/popuplist';
                }else {
                    alert(response.msg);
                    return false;
                }
            },error: function (jqXHR) {
                console.log(jqXHR.responseText);
            }
        });
    });
});
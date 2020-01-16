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
        var file = $("#image").val();
        if(title == "") {
            alert('제목을 입력해주세요.');
            return false;
        }else if(file == "") {
            alert('첨부파일을 등록해주세요.');
            return false;
        }
        var api = $("#apiAddress").val();
        var datas = $("#newBannerForm").serialize();
        $('#newBannerForm').ajaxSubmit({
            url: api+"/adminapi/updateBanner",
            processData: false,
            contentType: false,
            type: 'POST',
            dataType: 'JSON',
            data: datas,
            success: function (response) {
                // console.log(response);
                if(response.result == true) {
                    alert('저장되었습니다.');
                    document.location.href='/service/banner';
                }else {
                    if(response.code == 16) {
                        alert('사용가능한 배너수를 초과하였습니다.\n사용여부를 확인해주세요.');
                        return false;
                    }else {
                        alert(response.msg);
                        return false;
                    }
                }
            },error: function (jqXHR) {
                console.log(jqXHR.responseText);
            }
        });
    });
});
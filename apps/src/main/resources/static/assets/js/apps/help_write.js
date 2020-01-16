$(function () {
    var idx = getCookie('idx');
    $("#userIdx").val(idx);
});

function helpSave() {
    var idx = $("#userIdx").val();
    var ctTitle = $("input[name=ctTitle]").val();
    var ctContent = $("#ctContent").val();
    var ctCategory = $("#ctCategory").val();
    // console.log(ctContent);
    if(ctTitle == "") {
        Swal.fire({
            text: '제목을 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }else if(ctContent == ""){
        Swal.fire({
            text: '내용을 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }else if(ctCategory == "0" || ctCategory == "" || ctCategory == null){
        Swal.fire({
            text: '카테고리를 선택해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    var apiAddress = $("#apiAddress").val();
    var datas = $("#helpForm").serialize();
    $.ajax({
        url: apiAddress+"/api/saveContact",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                location.href='/help?idx'+idx;
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

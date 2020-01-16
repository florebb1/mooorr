$(function () {
    terms();

    $('.summernote').summernote({
        height: 300,
        placeholder: '내용을 입력해주세요.'// set editor height
    });

    // 저장버튼 클릭 이벤트
    $(".saveBtn").click(function () {
        if (confirm('내용을 저장하시겠습니까?')) {
            var datas = $(this).parent().parent().serialize();
            var api = $("#apiAddress").val();
            $.ajax({
                url: api+"/adminapi/updateTerms",
                type: 'POST',
                dataType: 'JSON',
                data: datas,
                success: function (response) {
                    console.log(response);
                    if(response.result == true) {
                        alert('수정되었습니다.');
                        location.reload();
                    }else {
                        alert(response.msg);
                    }
                }
            })
        }
    });

});
function terms() {
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/terms",
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            console.log(response);
            if(response.result) {
                for (var i = 0; i < response.terms.length; i++) {
                    var content = response.terms[i].content;
                    if (response.terms[i].type == '1') {
                        $('#content1').summernote('code', content);
                    } else if (response.terms[i].type == '2') {
                        $('#content2').summernote('code', content);
                    } else if (response.terms[i].type == '3') {
                        $('#content3').summernote('code', content);
                    } else if (response.terms[i].type == '4') {
                        $('#content4').summernote('code', content);
                    } else if (response.terms[i].type == '5') {
                        $('#content5').summernote('code', content);
                    }
                }
            }else{
                alert(response.msg);
                return false;
            }
        }
    });
}
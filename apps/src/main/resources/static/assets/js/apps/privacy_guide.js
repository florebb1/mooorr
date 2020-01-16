$(function () {
    privacy_guide();
});

function privacy_guide() {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/adminapi/terms",
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                if (response.terms.length > 0) {
                    for (var i = 0; i < response.terms.length; i++) {
                        if (response.terms[i].type == 3) {
                            $("#content").html(response.terms[i].content);
                        }
                    }
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

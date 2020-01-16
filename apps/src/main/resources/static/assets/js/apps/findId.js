function findId() {
    var apiAddress = $("#apiAddress").val();
    var name = $("#userName").val();
    if(name == "" || name == null || name == undefined) {
        Swal.fire({
            text: '사용자 이름을 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    var datas = $("#findIdForm").serialize();
    $.ajax({
        url: apiAddress+"/api/findId",
        type: 'GET',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                setCookie('find_id',response.loginId, '1');
                location.href='/find_id_result';
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
$(function () {
    var id = getCookie('find_id');
    if(id == "" || id == null || id == undefined) {
        Swal.fire({
            text: '해당 회원정보가 존재하지 않습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            location.href='/find_id';
        });
    }else {
        id = id.split('@');
        if(id[0].length > 4) {
            var id_front = id[0];
            id_front = id_front.substring(0, 3);
            for (var i = 3; i < id[0].length; i++) {
                id_front = String(id_front) + "*";
            }
            id = id_front + "@" + id[1];
        }else {
            var id_front = id[0];
            id_front = id_front.substring(0, 1);
            for (var i = 1; i < id[0].length; i++) {
                id_front = String(id_front) + "*";
            }
            id = id_front + "@" + id[1];
        }
        $("#find_result").text(id);
    }

    $(".moveBtn").on('click', function () {
        setCookie('find_id', '', -1);
    });
});
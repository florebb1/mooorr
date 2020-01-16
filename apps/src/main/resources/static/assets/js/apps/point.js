$(function () {
    var idx = getCookie('idx');
    userInfo(idx);

    // 외국인 링크 클릭 이벤트
    $(document).on("click", "#foreign", function(){
        $("#modalCenter3").modal('show');
        swal.close();
        return false;
    });

    $("#pointExchange").click(function () {
        var point = $("#myPoint").val();
        var account = $("#myAccount").val();
        var account2 = $("#myAccount2").val();
        if(account2 == "" || account2 == null || account2 == undefined) {
            Swal.fire({
                title: '본인인증 필요',
                html: '<p style="word-break: keep-all;">나의 경험, 정보에 관한 질문을 받을 분만 본인인증 해주세요! 질문 하실 분은 인증을 안하셔도 됩니다</p>',
                showCancelButton: true,
                cancelButtonText: '취소',
                confirmButtonText: '확인',
                allowOutsideClick: false,
                reverseButtons: true,
                footer: '<span id="foreign" class="font-weight-bold pointer-clicker" style="color: #ff4e00;">English</span>'
            }).then(function (isConfirm) {
                if(isConfirm.value) {
                    location.href = '/checkplus_main';
                }
            });
            return false;
        }else if(account == "" || account == null || account == undefined) {
            Swal.fire({
                text: '관리자인증이 필요한 서비스입니다',
                confirmButtonText: '확인',
                allowOutsideClick: false
            }).then(function () {
                $("#modalCenter2").modal('show');
            });
            return false;
        }else if(point < 1000) {
            Swal.fire({
                text: '1000 크레딧이상 정산이 가능합니다',
                confirmButtonText: '확인',
                allowOutsideClick: false
            });
            return false;
        }
    });
});
function userInfo(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/userInfo?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            $("#nowp").text(numberWithCommas(response.user.nowp)+" C");
            $("#myPoint").val(response.user.nowp);
            $("#account").text(response.user.account);
            $("#myAccount").val(response.user.account);
            $("#myAccount2").val(response.user.certificationDate);
        }
    });
}
$(function () {
    var idx = getCookie('idx');
    $("#userIdx").val(idx);
    userInfo(idx);

    $("#ecAmount").on('change',function () {
        var point = $(this).val();
        if(point == "" || point == null || point == undefined) {
            $("#nicCheck").removeClass('icon-checked3');
            $("#nicCheck").removeClass('icon-checked2');
            $("#nicCheck").addClass('icon-checked');
        }
        var myp = $("#myPoint").val();
        var donationYN = $("#donationYN").val();
        if(point == "" || point == null || point == undefined || point <= 0) {
            Swal.fire({
                text: '0보다 큰 숫자만 입력가능합니다',
                confirmButtonText: '확인',
                allowOutsideClick: false
            });
            $("#nicCheck").removeClass('icon-checked');
            $("#nicCheck").removeClass('icon-checked3');
            $("#nicCheck").addClass('icon-checked2');
            return false;
        }else if(point < 1000) {
            Swal.fire({
                text: '정산신청의 최소크레딧은 1,000C 입니다',
                confirmButtonText: '확인',
                allowOutsideClick: false
            });
            $("#nicCheck").removeClass('icon-checked');
            $("#nicCheck").removeClass('icon-checked3');
            $("#nicCheck").addClass('icon-checked2');
            return false;
        }else if(parseInt(point) > parseInt(myp)) {
            Swal.fire({
                text: '잔여크레딧이 부족합니다',
                confirmButtonText: '확인',
                allowOutsideClick: false
            });
            $("#nicCheck").removeClass('icon-checked');
            $("#nicCheck").removeClass('icon-checked3');
            $("#nicCheck").addClass('icon-checked2');
            $(this).val("");
            return false;
        }else {
            if(donationYN == 1) {
                var finalExc = Math.floor((point * 100) * 0.7 * 0.98 * 0.967);
                var donation = Math.floor(point * 0.02);
            }else {
                var finalExc = Math.floor((point * 100) * 0.7 * 0.967);
                var donation = 0;
            }
            $("#do_point").text(donation);
            $("#fi_point").text(numberWithCommas(finalExc));
            $("#nicCheck").removeClass('icon-checked');
            $("#nicCheck").removeClass('icon-checked2');
            $("#nicCheck").addClass('icon-checked3');
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
            $("#nowp").text(numberWithCommas(response.user.nowp)+"C");
            $("#account").text(response.user.account);
            $("#myPoint").val(response.user.nowp);
            $("#donationYN").val(response.user.donation);
        }
    });
}
function exchage() {
    var apiAddress = $("#apiAddress").val();
    if(!$("#nicCheck").hasClass('icon-checked3')) {
        Swal.fire({
            text: '정산 신청 크레딧을 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    var datas = $("#exchangeForm").serialize();
    $.ajax({
        url: apiAddress+"/api/saveExchange",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                Swal.fire({
                    text: '정산 신청 완료되었습니다',
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                }).then(function() {
                    location.href='/point';
                });
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
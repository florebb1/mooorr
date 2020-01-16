$(function () {
    var idx = getCookie('idx');
    $("#idx").val(idx);
    history(idx);
});
function history(idx) {
    var apiAddress = $("#apiAddress").val();
    var page = $("#page").val();
    $.ajax({
        url: apiAddress+"/api/paymentDetailList?userIdx="+idx+"&page="+page,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            var html = "";
            if (response.result) {
                if (response.paymentList.length > 0) {
                    for (var i = 0; i < response.paymentList.length; i++) {
                        html += '<div class="form-row py-2">'
                            + '<div class="col-auto">'
                            + '<div class="plus-pay-img mr-3"></div>'
                            + '</div>'
                            + '<div class="col d-flex p-0 flex-column justify-content-center align-items-start">'
                            + '<h6 class="m-0 font-15">크레딧 구매</h6>'
                            + '<div class="text-black-50 font-11">' + moment(response.paymentList[i].paymentDate).format("YYYY-MM-DD hh:mm:ss a") + '</div>'
                            + '</div>'
                            + '<div class="col-auto d-flex justify-content-center align-items-center">';
                        if (response.paymentList[i].currency == "USD") {
                            html += '<span class="btn btn-info">$' + numberWithCommas(response.paymentList[i].price) + '</span>';
                        } else {
                            html += '<span class="btn btn-info">￦' + numberWithCommas(response.paymentList[i].price) + '</span>';
                        }
                        html += '</div>'
                            + '</div>';
                    }
                    if (response.paymentList.length == 20) {
                        html += '<div class="text-center addBtn"><button class="btn btn-link" onclick="historyPlus();">더보기</button></div>';
                    }
                    $("#payment_content").empty();
                    $("#payment_content").append(html);
                } else {
                    html += '<div class="text-center">결제내역이 존재하지 않습니다</div>';
                    $("#payment_content").empty();
                    $("#payment_content").append(html);
                }
            } else {
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
function historyPlus() {
    var apiAddress = $("#apiAddress").val();
    $(".addBtn").remove();
    var idx = $("#idx").val();
    var beforePage = parseInt($("#page").val()) + 1;
    $("#page").val(beforePage);
    var page = $("#page").val();
    $.ajax({
        url: apiAddress+"/api/paymentDetailList?userIdx="+idx+"&page="+page,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            var html = "";
            if(response.result) {
                if (response.paymentList.length > 0) {
                    for (var i = 0; i < response.paymentList.length; i++) {
                        html += '<div class="row mb-3">'
                            + '<div class="col-auto">'
                            + '<div class="plus-pay-img"></div>'
                            + '</div>'
                            + '<div class="col d-flex flex-column justify-content-center align-items-start">'
                            + '<h6 class="m-0">크레딧 구매</h6>'
                            + '<div class="text-black-50">' + moment(response.paymentList[i].paymentDate).format("YYYY-MM-DD hh:mm:ss a") + '</div>'
                            + '</div>'
                            + '<div class="col-auto d-flex justify-content-center align-items-center">'
                            + '<span class="btn btn-info">' + numberWithCommas(response.paymentList[i].price) + '￦</span>'
                            + '</div>'
                            + '</div>';
                    }
                    if (response.paymentList.length == 20) {
                        html += '<div class="text-center addBtn"><button class="btn btn-link" onclick="historyPlus();">더보기</button></div>';
                    }
                    $("#payment_content").append(html);
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
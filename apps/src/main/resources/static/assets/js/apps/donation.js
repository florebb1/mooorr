$(function () {
    var idx = getCookie('idx');
    $("#idx").val(idx);
    history(idx);
});
function history(idx) {
    var apiAddress = $("#apiAddress").val();
    var page = $("#page").val();
    $.ajax({
        url: apiAddress+"/api/donationList?userIdx="+idx+"&page="+page,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                var html = "";
                if (response.donationList.length > 0) {
                    html += '<span class="btn btn-primary btn-block mb-3">총 기부 금액 ' + numberWithCommas(response.donationSum) + 'C</span>';
                    for (var i = 0; i < response.donationList.length; i++) {
                        html += '<div class="form-row mb-3">'
                            + '<div class="col-auto">'
                            + '<div class="point-donation-img"></div>'
                            + '</div>'
                            + '<div class="col d-flex flex-column justify-content-center align-items-start">'
                            + '<h6 class="m-0">수익금의 3% 기부</h6>'
                            + '<div class="text-black-50">' + moment(response.donationList[i].ecDate).format("YYYY-MM-DD A hh:mm ") + '</div>'
                            + '</div>'
                            + '<div class="col-auto d-flex justify-content-center align-items-center">'
                            + '<span class="btn btn-info">+' + numberWithCommas(response.donationList[i].donation) + 'C</span>'
                            + '</div>'
                            + '</div>';
                    }
                    if (response.donationList.length == 20) {
                        html += '<div class="text-center addBtn"><button class="btn btn-link" onclick="historyPlus();">더보기</button></div>';
                    }
                    $("#donation_content").empty();
                    $("#donation_content").append(html);
                } else {
                    html += '<div class="text-center">기부내역이 존재하지 않습니다</div>';
                    $("#donation_content").empty();
                    $("#donation_content").append(html);
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
function historyPlus() {
    var apiAddress = $("#apiAddress").val();
    $(".addBtn").remove();
    var idx = $("#idx").val();
    var beforePage = parseInt($("#page").val()) + 1;
    $("#page").val(beforePage);
    var page = $("#page").val();
    $.ajax({
        url: apiAddress+"/api/donationList?userIdx="+idx+"&page="+page,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result==true){
            var html = "";
                if(response.donationList.length > 0) {
                    for (var i = 0; i < response.donationList.length; i++) {
                        html += '<div class="row mb-3">'
                            + '<div class="col-auto">'
                            + '<div class="point-donation-img"></div>'
                            + '</div>'
                            + '<div class="col d-flex flex-column justify-content-center align-items-start">'
                            + '<h6 class="m-0">수익금의 3% 기부</h6>'
                            + '<div class="text-black-50">' + moment(response.donationList[i].ecDate).format("YYYY-MM-DD A hh:mm") + '</div>'
                            + '</div>'
                            + '<div class="col-auto d-flex justify-content-center align-items-center">'
                            + '<span class="btn btn-info">' + numberWithCommas(response.donationList[i].donation) + 'C</span>'
                            + '</div>'
                            + '</div>';
                    }
                    if (response.donationList.length == 20) {
                        html += '<div class="text-center addBtn"><button class="btn btn-link" onclick="historyPlus();">더보기</button></div>';
                    }
                    $("#donation_content").append(html);
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
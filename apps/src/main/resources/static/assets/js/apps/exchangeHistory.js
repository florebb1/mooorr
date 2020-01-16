$(function () {
   var idx = getCookie('idx');
   $("#idx").val(idx);
   history(idx);
});
function history(idx) {
   var apiAddress = $("#apiAddress").val();
   var page = $("#page").val();
   $.ajax({
      url: apiAddress+"/adminapi/exchangeList?userIdx="+idx+"&page="+page,
      type: 'GET',
      dataType: 'JSON',
      success: function (response) {
         // console.log(response);
         if(response.result) {
            var html = "";
            if (response.exchangeList.length > 0) {
               for (var i = 0; i < response.exchangeList.length; i++) {
                  html += '<div class="form-row mb-3">'
                      + '<div class="col-auto">';
                  if (response.exchangeList[i].completionDate == null) {
                     html += '<div class="point-history-img-before"></div>';
                  } else {
                     html += '<div class="point-history-img"></div>';
                  }
                  html += '</div>'
                      + '<div class="col d-flex flex-column justify-content-center align-items-start">'
                      + '<h6 class="m-0">크레딧 정산</h6>'
                      + '<div class="text-black-50">' + moment(response.exchangeList[i].ecDate).format("YYYY-MM-DD hh:mm:ss a") + '</div>'
                      + '</div>'
                      + '<div class="col-auto d-flex justify-content-center align-items-center">';
                  if (response.exchangeList[i].completionDate == null) {
                     html += '<span class="btn btn-secondary">-' + numberWithCommas(response.exchangeList[i].ecAmount) + 'C</span>';
                  } else {
                     html += '<span class="btn btn-primary">-' + numberWithCommas(response.exchangeList[i].ecAmount) + 'C</span>';
                  }
                  html += '</div>'
                      + '</div>';
               }
               if (response.exchangeList.length == 20) {
                  html += '<div class="text-center addBtn"><button class="btn btn-link" onclick="historyPlus();">더보기</button></div>';
               }
               $("#exchange_content").empty();
               $("#exchange_content").append(html);
            } else {
               html += '<div class="text-center">정산내역이 존재하지 않습니다</div>';
               $("#exchange_content").empty();
               $("#exchange_content").append(html);
            }
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
function historyPlus() {
   var apiAddress = $("#apiAddress").val();
   $(".addBtn").remove();
   var idx = $("#idx").val();
   var beforePage = parseInt($("#page").val()) + 1;
   $("#page").val(beforePage);
   var page = $("#page").val();
   $.ajax({
      url: apiAddress+"/api/exchangeList?userIdx="+idx+"&page="+page,
      type: 'GET',
      dataType: 'JSON',
      success: function (response) {
         // console.log(response);
         var html = "";
         if(response.result==true){
               if(response.exchangeList.length > 0) {
                  for (var i = 0; i < response.exchangeList.length; i++) {
                     html += '<div class="row mb-3">'
                         + '<div class="col-auto">'
                         + '<div class="plus-pay-img"></div>'
                         + '</div>'
                         + '<div class="col d-flex flex-column justify-content-center align-items-start">'
                         + '<h6 class="m-0">크레딧 구매</h6>'
                         + '<div class="text-black-50">' + moment(response.exchangeList[i].ecDate).format("YYYY-MM-DD hh:mm:ss a") + '</div>'
                         + '</div>'
                         + '<div class="col-auto d-flex justify-content-center align-items-center">'
                         + '<span class="btn btn-info">' + numberWithCommas(response.exchangeList[i].ecAmount) + 'C</span>'
                         + '</div>'
                         + '</div>';
                  }
                  if (response.exchangeList.length == 20) {
                     html += '<div class="text-center addBtn"><button class="btn btn-link" onclick="historyPlus();">더보기</button></div>';
                  }
                  $("#exchange_content").append(html);
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
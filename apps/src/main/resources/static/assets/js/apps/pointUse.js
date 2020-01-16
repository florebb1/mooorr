$(function () {
   var idx = getCookie('idx');
   $("#idx").val(idx);
   history(idx);
});
function history(idx) {
   var apiAddress = $("#apiAddress").val();
   var page = $("#page").val();
   $.ajax({
      url: apiAddress+"/api/usageDetails?userIdx="+idx+"&page="+page,
      type: 'GET',
      dataType: 'JSON',
      success: function (response) {
         // console.log(response);
         var html = "";
         if (response.result == true) {
            if(response.usageList.length > 0) {
                  for (var i = 0; i < response.usageList.length; i++) {
                  html += '<div class="form-row mb-3">'
                      + '<div class="col-auto">';
                  if (response.usageList[i].user2.profileImage != "" && response.usageList[i].user2.profileImage != null && response.usageList[i].user2.profileImage != undefined) {
                     html += '<div class="follo-img" style="background-image:url(' + apiAddress + response.usageList[i].user2.profileImage + ');"></div>';
                  } else {
                     html += '<div class="follo-img"></div>';
                  }
                  html += '</div>'
                      + '<div class="col d-flex flex-column justify-content-center align-items-start">'
                      + '<h6 class="m-0">' + response.usageList[i].user2.userName + '</h6>'
                      + '<div class="text-black-50">' + moment(response.usageList[i].pdDate).format("YYYY-MM-DD hh:mm:ss a") + '</div>'
                      + '</div>'
                      + '<div class="col-auto d-flex justify-content-center align-items-center">'
                      + '<span class="btn btn-primary">' + numberWithCommas(response.usageList[i].pdAmount) + 'C</span>'
                      + '</div>'
                      + '</div>';
               }
               if (response.usageList.length == 20) {
                  html += '<div class="text-center addBtn"><button class="btn btn-link" onclick="historyPlus();">더보기</button></div>';
               }
               $("#use_content").empty();
               $("#use_content").append(html);
            } else {
               html += '<div class="text-center">사용내역이 존재하지 않습니다</div>';
               $("#use_content").empty();
               $("#use_content").append(html);
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
      url: apiAddress+"/api/usageDetails?userIdx="+idx+"&page="+page,
      type: 'GET',
      dataType: 'JSON',
      success: function (response) {
         // console.log(response);
         var html = "";
         if(response.result) {
            if (response.usageList.length > 0) {
               for (var i = 0; i < response.usageList.length; i++) {
                  html += '<div class="row mb-3">'
                      + '<div class="col-auto">';
                  if (response.usageList[i].user2.profileImage != "" && response.usageList[i].user2.profileImage != null && response.usageList[i].user2.profileImage != undefined) {
                     html += '<div class="follo-img" style="background-image:url("' + apiAddress + response.usageList[i].user2.profileImage + '");"></div>';
                  } else {
                     html += '<div class="follo-img"></div>';
                  }
                  html += '</div>'
                      + '<div class="col d-flex flex-column justify-content-center align-items-start">'
                      + '<h6 class="m-0">' + response.usageList[i].user2.userName + '</h6>'
                      + '<div class="text-black-50">' + moment(response.usageList[i].pdDate).format("YYYY-MM-DD hh:mm:ss a") + '</div>'
                      + '</div>'
                      + '<div class="col-auto d-flex justify-content-center align-items-center">'
                      + '<span class="btn btn-primary">' + numberWithCommas(response.usageList[i].pdAmount) + 'C</span>'
                      + '</div>'
                      + '</div>';
               }
               if (response.usageList.length == 20) {
                  html += '<div class="text-center addBtn"><button class="btn btn-link" onclick="historyPlus();">더보기</button></div>';
               }
               $("#use_content6").append(html);
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
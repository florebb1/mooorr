$(function () {
   // getparameter
   var page = getParameter('page');

   // 최초 로딩
   if(page != "" && page != null && page == undefined) {
      reportList(page);
   }else {
      page = 1;
      reportList(page);
   }

   // order or sort 변경시
   $(".sort-order").click(function () {
      var sort = $("#sort").val();
      if(sort > 0) {
         $("#sort").val("0");
      }else {
         $("#sort").val("1");
      }
      var order = $(this).parent().prev().attr("title");
      $("#order").val(order);
      reportList(page);
   });
});
function reportList(page) {
   var html = "";
   var sort = $("#sort").val();
   var order = $("#order").val();
   var api = $("#apiAddress").val();
   $.ajax({
      url: api+"/adminapi/allReportList?page="+page+"&sort="+sort+"&order="+order,
      type: 'GET',
      dataType: 'JSON',
      success: function (response) {
         // console.log(response);
         if (response.result) {
            if (response.allReportList.length > 0) {
               for (var i = 0; i < response.allReportList.length; i++) {
                  html += '<tr>'
                      + '<th scope="row">' + response.allReportList[i].reportIdx + '</th>'
                      + '<td>' + response.allReportList[i].user.userName + '</td>'
                      + '<td>' + response.allReportList[i].target.userName + '</td>';
                  if(response.allReportList[i].category == "0") {
                     html += '<td>부적절한 메세지</td>';
                  }else if(response.allReportList[i].category == "1") {
                     html += '<td>스팸 메세지</td>';
                  }else if(response.allReportList[i].category == "2") {
                     html += '<td>불쾌한 메세지</td>';
                  }else if(response.allReportList[i].category == "3") {
                     html += '<td>타인을 사칭</td>';
                  }else if(response.allReportList[i].category == "4") {
                     html += '<td>지적 재산권 침해</td>';
                  }
                  html += '<td class="ellipsis">' + response.allReportList[i].rpContent + '</td>';
                  if (response.allReportList[i].asRegDate != "" && response.allReportList[i].asRegDate != null && response.allReportList[i].asRegDate != undefined) {
                     html += '<th>' + response.allReportList[i].regDate.replace("T", " ") + '</th>'
                         + '<th><span class="badge badge-pill badge-primary" style="width: 52px;">처리완료</span></th>';
                  } else {
                     html += '<th>-</th>'
                         + '<th><span class="badge badge-pill badge-danger" style="width: 52px;">미처리</span></th>';
                  }
                  html += '<td><a href="reportdetail?idx=' + response.allReportList[i].reportIdx + '" class="btn btn-primary btn-sm"><i class="pe-7s-search"></i>자세히</a></td>'
                      + '</tr>';
               }
               $("#content").empty();
               $("#content").append(html);
               if (response.totalNum % 20 == 0) {
                  var total = (response.totalNum / 20);
               } else {
                  var total = (response.totalNum / 20) + 1;
               }
               $('#paginator').bootpag({
                  total: parseInt(total),
                  page: page,
                  maxVisible: 5
               }).on('page', function (event, num) {
                  location.href = '/service/reportlist?page=' + num;
               });
            } else {
               html = '<tr><th colspan="8" scope="row"><div class="bbs-none d-flex justify-content-center align-items-center">신고내역이 없습니다.</div></th></tr>';
               $("#content").empty();
               $("#content").append(html);
            }
         }else{
            alert(response.msg);
            return false;
         }
      }
   });
}
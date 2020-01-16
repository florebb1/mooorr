$(function () {
   // 페이지 로딩
   var page = getParameter('page');
   if(page != "" && page != null && page != undefined) {
      $("#page").val(page);
   }else {
      page = 1;
      $("#page").val("1");
   }
   list(page, true);
   // 검색 selectbox 변경
   $("#searchKey").change(function () {
      var val = $(this).val();
      if(val == "badge") {
         $("#searchWord").val('');
         $("#searchWord").addClass('d-none');
         $("#searchButton").addClass('d-none');
         $("#serchCheck").removeClass('d-none');
      }else {
         $("#searchWord").removeClass('d-none');
         $("#searchButton").removeClass('d-none');
         $("#serchCheck").addClass('d-none');
         $(".checkSelect").prop('checked', false);
      }
   });

   // 검색어 입력
   $("#searchKeyWord").keyup(function (event) {
      $("#searchValue").val($(this).val());
      if (event.keyCode === 13) {
         $("#searchBtn").click();
      }
   });

   // 검색 버튼 클릭
   $("#searchBtn").click(function () {
      list(1, true);
   });

   // checkbox 선택시
   $(".checkSelect").change(function () {
      var badge = $(".checkSelect");
      var send_array = Array();
      var send_cnt = 0;
      for(i=0; i<badge.length; i++) {
         if (badge[i].checked == true){
            send_array[send_cnt] = badge[i].value;
            send_cnt++;
         }
      }
      $("#searchValue").val(send_array);
      list(1, true);
   });

   // sort 변경시
   $(".sort-order").click(function () {
      var sort = $("#sort").val();
      if(sort > 0) {
         $("#sort").val("0");
      }else {
         $("#sort").val("1");
      }
      var order = $(this).parent().prev().attr("title");
      $("#order").val(order);
      list(1, true);
   });

   // 모달창 open
   // $('#paymentModal').on('show.bs.modal', function (event) {
   //    var idx = $(event.relatedTarget).attr('data-idx');
   //    detail(idx);
   // });
});
function list(page, refresh) {
   $("#page").val(page);
   var datas = $("#listForm").serialize();
   var api = $("#apiAddress").val();
   $.ajax({
      url : api+"/adminapi/paymentList",
      type : 'GET',
      data : datas,
      dataType : 'JSON',
      success:function(response){
         var html = "";
         // console.log(response);
         if(response.result) {
            if (response.paymentList.length > 0) {
               for (var i = 0; i < response.paymentList.length; i++) {
                  html += '<tr>'
                     + '<th scope="row" class="align-middle">' + response.paymentList[i].paymentIdx + '</th>'
                     + '<td>' + response.paymentList[i].impUid + '</td>'
                     + '<td>' + response.paymentList[i].user.loginId + '</td>'
                     + '<td>' + response.paymentList[i].user.userName + '</td>'
                     + '<td>' + response.paymentList[i].currency + '</td>';
                  if(response.paymentList[i].currency == "KRW") {
                     html += '<td>₩' + response.paymentList[i].price + '</td>'
                  }else {
                     html += '<td>$' + response.paymentList[i].price + '</td>'
                  }

                  if (response.paymentList[i].paymentDate != null) {
                     html += '<td>' + moment(response.paymentList[i].paymentDate).format('YYYY-MM-DD HH:mm:ss') + '</td>';
                  } else {
                     html += '<td>-</td>';
                  }
               }
               $("#content").empty();
               $("#content").append(html);
               // 페이징 처리
               if(refresh) {
                  if (response.totalNum % 20 == 0) {
                     var totalNum = (response.totalNum / 20);
                  } else {
                     var totalNum = (response.totalNum / 20) + 1;
                  }
                  $('#paginator').bootpag({
                     total: parseInt(totalNum),
                     page: page,
                     maxVisible: 5
                  }).on('page', function (event, num) {
                     list(num, false);
                     // location.href = '/service/paymentlist?page=' + num + '&sort=' + $("#sort").val() + '&order=' + $("#order").val() + '&searchKey=' + $("#searchKey").val() + '&searchValue=' + $("#searchValue").val();
                  });
               }
            } else {
               html = '<tr><th colspan="9" scope="row"><div class="bbs-none d-flex justify-content-center align-items-center">결제내역이 존재하지 않습니다.</div></th></tr>';
               $("#content").empty();
               $("#content").append(html);
            }
         }else {
            alert(response.msg);
            return false;
         }
      }
   });
}
// function detail(idx) {
//    var apiAddress = $("#apiAddress").val();
//    $.ajax({
//       url: apiAddress + "/adminapi/paymentDetails?userIdx=" + idx,
//       type: 'GET',
//       dataType: 'JSON',
//       success: function (response) {
//          console.log(response);
//          if(response.result) {
//             if (response.paymentList.length > 0) {
//                var html = "";
//                for (var i = 0; i < response.paymentList.length; i++) {
//                   html += '<tr>'
//                       + '<th scope="row">' + moment(response.paymentList[i].paymentDate).tz('Asia/Seoul').format("YYYY-MM-DD hh:mm") + '</th>'
//                       + '<td>'
//                       + '<div>';
//                   if (response.paymentList[i].currency == "USD") {
//                      html += '<span class="badge badge-pill badge-info">Paypal</span> $' + response.paymentList[i].price;
//                   } else {
//                      html += '<span class="badge badge-pill badge-info">Inicis</span> ₩' + response.paymentList[i].price;
//                   }
//                   html += '</div>'
//                       + '</td>'
//                       + '</tr>';
//                }
//                $("#modal-content").empty();
//                $("#modal-content").append(html);
//             } else {
//                html = '<tr><th colspan="2" scope="row"><div class="bbs-none d-flex justify-content-center align-items-center">결제 내역이 없습니다.</div></th></tr>';
//                $("#modal-content").empty();
//                $("#modal-content").append(html);
//             }
//          }else{
//             alert(response.msg);
//             return false;
//          }
//       }
//    })
// }
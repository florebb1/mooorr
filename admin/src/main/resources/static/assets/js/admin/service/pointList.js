$(function () {
   // getparameter
   var page = getParameter('page');

   // 최초 로딩
   if(page != "" && page != null && page == undefined) {
      list(page);
   }else {
      page = 1;
      list(page);
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
      list(page);
   });

   // 모달창 open
   $('#exampleModalCenter').on('show.bs.modal', function (event) {
      var seq = $(event.relatedTarget).attr('data-idx');
      detail(seq);
   });

   // 정산완료
   $("#compBtn").click(function () {
      update();
   });
});

function list(page) {
   var html = "";
   var sort = $("#sort").val();
   var order = $("#order").val();
   var api = $("#apiAddress").val();
   $.ajax({
      url: api+"/adminapi/allExchangeList?page=" + page + "&sort=" + sort + "&order=" + order,
      type: 'GET',
      dataType: 'JSON',
      success: function (response) {
         // console.log(response);
         if(response.result) {
            if (response.exchangeList.length > 0) {
               for (var i = 0; i < response.exchangeList.length; i++) {
                  html += '<tr>'
                      + '<th scope="row">' + response.exchangeList[i].ecIdx + '</th>'
                      + '<td>' + response.exchangeList[i].user.loginId + '</td>'
                      + '<td>' + response.exchangeList[i].user.userName + '</td>'
                      + '<td>' + numberWithCommas(response.exchangeList[i].ecAmount) + 'C</td>';
                  if (response.exchangeList[i].donation > 0) {
                     html += '<td>Y</td>';
                  } else {
                     html += '<td>N</td>';
                  }
                  if (response.exchangeList[i].user.account != "" && response.exchangeList[i].user.account != null && response.exchangeList[i].user.account != undefined) {
                     html += '<td>' + response.exchangeList[i].user.account + '</td>';
                  } else {
                     html += '<td>-</td>';
                  }
                  if (response.exchangeList[i].ecDate != "" && response.exchangeList[i].ecDate != null && response.exchangeList[i].ecDate != undefined) {
                     html += '<th>' + moment(response.exchangeList[i].ecDate).format("YYYY-MM-DD HH:mm:ss") + '</th>';
                  } else {
                     html += '<th>-</th>';
                  }
                  if (response.exchangeList[i].completionDate != "" && response.exchangeList[i].completionDate != null && response.exchangeList[i].completionDate != undefined) {
                     html += '<th>' + moment(response.exchangeList[i].completionDate).format("YYYY-MM-DD HH:mm:ss") + '</th>';
                  } else {
                     html += '<th>-</th>';
                  }
                  html += '<td><a href="#" class="btn btn-primary btn-sm" data-toggle="modal" data-idx="' + response.exchangeList[i].ecIdx + '" data-target="#exampleModalCenter"><i class="pe-7s-search"></i> 자세히</a></td>'
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
                  location.href = '/service/pointlist?page=' + num + '&sort=' + sort + '&order=' + order;
               });
            } else {
               html = '<tr><th colspan=9" scope="row"><div class="bbs-none d-flex justify-content-center align-items-center">신고내역이 없습니다.</div></th></tr>';
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
function detail(idx) {
   var api = $("#apiAddress").val();
   $.ajax({
      url: api+"/adminapi/allExchangeList?ecIdx=" + idx,
      type: 'GET',
      dataType: 'JSON',
      success: function (response) {
         console.log(response);
         if(response.result) {
            $("#ecIdx").val(response.exchange.ecIdx);
            $("#loginId").text(response.exchange.user.loginId);
            $("#userName").text(response.exchange.user.userName);
            $("#ecAmount").text(numberWithCommas(response.exchange.ecAmount) + "C");
            if (response.exchange.donation > 0) {
               $("#donation").text(+response.exchange.donation + 'C');
            } else {
               $("#donation").text(+response.exchange.donation + 'C');
            }
            $("#finalAmount").text(numberWithCommas("￦" + response.exchange.finalAmount));
            if (response.exchange.user.account != "" && response.exchange.user.account != null && response.exchange.user.account != undefined) {
               $("#account").text(+response.exchange.user.account);
            } else {
               $("#account").text('-');
            }
            if (response.exchange.ecDate != "" && response.exchange.ecDate != null && response.exchange.ecDate != undefined) {
               $("#ecDate").text(moment(response.exchange.ecDate).format('YYYY-MM-DD HH:mm:ss'));
            } else {
               $("#ecDate").text('-');
            }
            if (response.exchange.completionDate != "" && response.exchange.completionDate != null && response.exchange.completionDate != undefined) {
               $("#completionDate").text(moment(response.exchange.completionDate).format('YYYY-MM-DD HH:mm:ss'));
               $("#compBtn").hide();
            } else {
               $("#completionDate").text('-');
               $("#compBtn").attr('data-idx', response.exchange.ecIdx);
            }
         }else{
            alert(response.msg);
            return false;
         }
      }
   });
}
function update() {
   var api = $("#apiAddress").val();
   var datas = $("#modalForm").serialize();
   $.ajax({
      url: api+"/adminapi/updateExchange",
      type: 'POST',
      data: datas,
      dataType: 'JSON',
      success: function (response) {
         console.log(response);
         if(response.result == true) {
            alert('정산신청이 완료되었습니다.');
            location.reload();
         }else{
            alert(response.msg);
         }
      }
   });
}
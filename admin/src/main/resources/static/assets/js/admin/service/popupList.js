$(function () {
   // 페이지 로딩
   var page = getParameter('page');
   if(page != "" && page != null && page != undefined) {
      $("#page").val(page);
   }else {
      page = 1;
      $("#page").val("1");
   }
   list(page);

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
      list(page);
   });
   // 모달창 open
   $('#exampleModalCenter').on('show.bs.modal', function (event) {
      var seq = $(event.relatedTarget).attr('data-idx');
      detail(seq);
   });

   // 배너사용여부
   $("input:checkbox[id=chkToggle]").change(function () {
      if($(this).is(":checked") == true) {
         $("#onoff").val(0);
      }else {
         $("#onoff").val(1);
      }
   });

   // 링크사용여부
   $("input:checkbox[id=chkToggle2]").change(function () {
      if($(this).is(":checked") == true) {
         $("#link").attr('readonly', false);
      }else {
         $("#link").val("");
         $("#link").attr('readonly', true);
      }
   });

   // 삭제 버튼 클릭 이벤트
   $("#delBtn").click(function () {
      var seq = $(this).attr('data-idx');
      del(seq);
   });
});
function list(page) {
   var html = "";
   var sort = $("#sort").val();
   var order = $("#order").val();
   var api = $("#apiAddress").val();
   $.ajax({
      url: api+"/adminapi/popupList?page=" + page + "&sort=" + sort + "&order=" + order,
      type : 'GET',
      dataType : 'JSON',
      success:function(response){
         // console.log(response);
         if(response.result) {
            if (response.popupList.length > 0) {
               for (var i = 0; i < response.popupList.length; i++) {
                  html += '<tr>'
                      + '<th scope="row" class="align-middle">' + response.popupList[i].popupIdx + '</th>'
                      + '<td><div class="ellipsis">' + response.popupList[i].title + '</div></td>'
                      + '<td><div class="ellipsis">' + response.popupList[i].content + '</div></td>'
                  if (response.popupList[i].onoff == 0) {
                     html += '<td>Y</td>';
                  } else {
                     html += '<td>N</td>';
                  }
                  html += '<td>' + response.popupList[i].regDate.replace('T', ' ') + '</td>'
                      + '<td><a href="#" class="btn btn-primary btn-sm my-1" data-idx="' + response.popupList[i].popupIdx + '" data-toggle="modal" data-target="#exampleModalCenter"><i class="pe-7s-search"></i> 자세히</a></td>'
                      + '</tr>';
               }
               $("#content").empty();
               $("#content").append(html);
               // 페이징 처리
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
                  location.href = '/service/banner?page=' + num + '&sort=' + $("#sort").val() + '&order=' + $("#order").val();
               });
            } else {
               html = '<tr><th colspan="6" scope="row"><div class="bbs-none d-flex justify-content-center align-items-center">등록된 팝업이 없습니다.</div></th></tr>';
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
      url: api+"/adminapi/popupDetails?popupIdx=" + idx,
      type: 'GET',
      dataType: 'JSON',
      success: function (response) {
         // console.log(response);
         $("#popupIdx").val(response.popup.popupIdx);
         $("#onoff").val(response.popup.onoff);
         $("#title").val(response.popup.title);
         $("#regDate").text(response.popup.regDate.replace('T', ' '));
         if(response.popup.link != "") {
            $("#chkToggle2").parent().removeClass('btn-light off');
            $("#chkToggle2").parent().addClass('btn-primary');
            $("#link").val(response.popup.link);
         }else {
            $("#chkToggle2").parent().removeClass('btn-primary');
            $("#chkToggle2").parent().addClass('btn-light off');
            $("#link").attr('readonly', true);
         }
         if(response.popup.onoff == 0) {
            $("#chkToggle").parent().removeClass('btn-light off');
            $("#chkToggle").parent().addClass('btn-primary');
         }else {
            $("#chkToggle").parent().removeClass('btn-primary');
            $("#chkToggle").parent().addClass('btn-light off');
         }
         if(response.popup.modDate != "" && response.popup.modDate != null && response.popup.modDate != undefined) {
            $("#modDate").text(response.popup.modDate.replace('T', ' '));
         }else {
            $("#modDate").text('-');
         }
         $("#summernote").summernote('code', response.popup.content);
         $("#delBtn").attr("data-idx", response.popup.popupIdx);
      }
   });
}

function del(idx) {
   var api = $("#apiAddress").val();
   $.ajax({
      url: api+"/adminapi/deletePopup?popupIdx="+idx,
      type: 'POST',
      dataType: 'JSON',
      success: function (response) {
         // console.log(response);
         if(response.result == true) {
            alert('팝업이 삭제되었습니다.');
            location.reload();
         }else{
            alert(response.msg);
         }
      }
   });
}

function edit() {
   var datas = $("#modalForm").serialize();
   var api = $("#apiAddress").val();
   $('#modalForm').ajaxSubmit({
      url: api+"/adminapi/updatePopup",
      processData: false,
      contentType: false,
      type: 'POST',
      dataType: 'JSON',
      data: datas,
      success: function (response) {
         console.log(response);
         if(response.result == true) {
            alert('수정되었습니다.');
            location.reload();
         }else {
            alert(response.msg);
            return false;
         }
      },error: function (jqXHR) {
         console.log(jqXHR.responseText);
      }
   });
}
$(function () {
   var idx = getParameter('targetIdx');
   if(idx != "" && idx != null && idx != undefined) {
      chatInfo(idx);
   }else {
      Swal.fire({
         text: '해당 회원정보가 존재하지 않습니다',
         confirmButtonText: '확인',
         allowOutsideClick: false
      }).then(function() {
         history.back();
      });
   }

   // 모달 체크박스 이벤트
   $("#modalChk").change(function(){
      if($(this).is(":checked") == true) {
         setCookie('m_popup', 'checked', 1);
         $("#modalCenter").modal('hide');
      }
   });

});
function chatInfo(idx) {
   var apiAddress = $("#apiAddress").val();
   $.ajax({
      url: apiAddress+"/api/editChatOption?userIdx="+idx,
      type: 'GET',
      dataType: 'JSON',
      success: function (response) {
         // console.log(response);
         var html = "";
        // if(response.code == 0 || response.code == 1 || response.code == 2) {
         if(response.code == 1 || response.code == 2) {
            // 타겟 프로필 사진
            if(response.user.profileImage != "" && response.user.profileImage != null && response.user.profileImage != undefined) {
               $(".maspro-img").css('background-image', 'url('+apiAddress+response.user.profileImage+')');
            }else {
               $(".maspro-img").css('background-image', 'url(/assets/images/user-shape.png)');
            }
            // 타겟 이름
            $(".nick-asd-msg").text(response.user.userName);
            $(".nick-asd-msg").attr('href', '/'+response.user.userName);
            // 상태메세지
            if(response.user.statusMessage != "" && response.user.statusMessage != null) {
               $("#infoUserStatusMGS").text("/ "+response.user.statusMessage);
            }
            // 알림 메세지
            if(response.user.intro != "" && response.user.intro != null) {
               $("#infoUserContent").html(response.user.intro);
            }
            // 관심 태그
            for (var i = 0; i < response.field.length; i++) {
               html += '<div class="text-white p-2 d-inline-block border-radius-10">#'+response.field[i]+'</div>';
            }
            $("#infoUserTag").empty();
            $("#infoUserTag").append(html);
            // 설정 크레딧
            if(response.user.price == "" || response.user.price == null) {
               $("#infoUserSendPoint").text("0 C")
            }else {
               $("#infoUserSendPoint").text(numberWithCommas(response.user.price) + "C")
            }
            // 대화 이동
            $("#sendMsg").attr('href', '/chat_detail?targetIdx='+response.user.userIdx);

            var popup = getCookie('m_popup');
            if(popup == "" || popup == null || popup == undefined) {
               $("#modalCenter").modal('show');
            }
         }else {
            Swal.fire({
               text: response.msg,
               confirmButtonText: '확인',
               allowOutsideClick: false
            }).then(function() {
               location.href='/chat_list';
            });
         }
      },error: function (jqXHR) {
         console.log(jqXHR.responseText);
      }
   });
}
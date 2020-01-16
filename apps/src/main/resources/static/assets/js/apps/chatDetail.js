$(function () {
    var userIdx = getCookie('idx');
    $("#senderIdx").val(userIdx);
    var targetIdx = getParameter('targetIdx');
    if(targetIdx != "" && targetIdx != null && targetIdx != undefined) {
        $("#receiverIdx").val(targetIdx);
        $("#reportBtn").attr('href', '/declaration?targetIdx='+targetIdx);
        chatInfo(userIdx, targetIdx);
        userSearch(targetIdx);
    }else {
        Swal.fire({
            text: '해당 회원정보가 존재하지 않습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            location.href='/chat_list'
        });
    }

    $("#questionBtn").click(function () {
        $(this).parent().parent().parent().addClass('d-none');
        $("#sendText").removeClass('d-none');
        $("#resendText").addClass('d-none');
    });

    $(document).on('click', ".asBtn",function () {
        var chatIdx = $(this).attr('data-chatIdx');
        $("#questionBtn").parent().parent().parent().addClass('d-none');
        $("#resendText").removeClass('d-none');
        $("#sendText").addClass('d-none');
        $("#msIdx").val(chatIdx);
   });

    // $(document).on('keyup', '#msContent', function (event) {
    //     if(event.which == 13) {
    //         sendMail();
    //     }
    //
    // });
    //
    // $(document).on('keyup', '#asContent', function (event) {
    //     if(event.which == 13) {
    //         resendMail();
    //     }
    // });


});
function chatInfo(userIdx, targetIdx) {
   // var userIdx = getCookie('idx');
   var apiAddress = $("#apiAddress").val();
   $.ajax({
      url: apiAddress+"/api/messageDetails?userIdx="+userIdx+"&targetIdx="+targetIdx,
      type: 'GET',
      dataType: 'JSON',
      success: function (response) {
         // console.log(response);
          if(response.result){
              var html = "";
              if (response.messageList.length > 0) {
                  for (var i = 0; i < response.messageList.length; i++) {
                      if (userIdx == response.messageList[i].sender.userIdx) {
                          html += '<div class="form-row chat-box-my">'
                              + '<div class="col-auto d-flex justify-content-center align-items-start">'
                              + '<div style="width:50px;"></div>'
                              + '</div>'
                              + '<div class="col d-flex flex-column justify-content-center align-items-end" style="word-break: break-word;">'
                              + '<p style="word-break: break-word;">' + response.messageList[i].msContent + '</p>'
                              + '<div class="msg-date">' + moment(response.messageList[i].msDate).format("YYYY-MM-DD hh:mm:ss a") + '</div>'
                              + '</div>'
                              + '</div>';
                          if (response.messageList[i].asContent != "" && response.messageList[i].asContent != null) {
                              html += '<div class="form-row chat-box">'
                                  + '<div class="col-auto d-flex justify-content-center align-items-start">'
                                  + '<div class="maspro-img" style="background-image:url(' + apiAddress + response.messageList[i].receiver.profileImage + ');"></div>'
                                  + '</div>'
                                  + '<div class="col d-flex flex-column justify-content-center align-items-start">'
                                  //+ '<a href="/' + response.messageList[i].receiver.userName + '" class="nick-asd-msg text-dark">' + response.messageList[i].receiver.userName + '</a>'
                                  + '<a class="nick-asd-msg text-dark">' + response.messageList[i].receiver.userName + '</a>'
                                  + '<p>' + response.messageList[i].asContent + '</p>'
                                  + '<div class="msg-date">' + moment(response.messageList[i].asDate).format("YYYY-MM-DD hh:mm:ss a") + '</div>'
                                  + '</div>'
                                  + '</div>';
                          }
                      } else {
                          html += '<div class="form-row chat-box">'
                              + '<div class="col-auto d-flex justify-content-center align-items-start">'
                              + '<div class="maspro-img" style="background-image:url(' + apiAddress + response.messageList[i].sender.profileImage + ');"></div>'
                              + '</div>'
                              + '<div class="col d-flex flex-column justify-content-center align-items-start">'
                              //+ '<a href="/' + response.messageList[i].sender.userName + '" class="nick-asd-msg text-dark">' + response.messageList[i].sender.userName + '</a>'
                              + '<a class="nick-asd-msg text-dark">' + response.messageList[i].sender.userName + '</a>'
                              + '<p style="word-break: break-word;">' + response.messageList[i].msContent + '</p>';
                          if (response.messageList[i].asContent != "" && response.messageList[i].asContent != null) {
                              html += '<div class="msg-date"><span>' + moment(response.messageList[i].msDate).format("YYYY-MM-DD hh:mm:ss a") + '</span></div>';
                          } else {
                              html += '<div class="msg-date"><span>' + moment(response.messageList[i].msDate).format("YYYY-MM-DD hh:mm:ss a") + '</span><button class="btn asBtn mx-2" data-chatIdx="' + response.messageList[i].msIdx + '" style="background-color: #f2f2f2;">답장하기</button></div>';
                          }
                          html += '</div>'
                              + '</div>';
                          if (response.messageList[i].asContent != "" && response.messageList[i].asContent != null) {
                              html += '<div class="form-row chat-box-my">'
                                  + '<div class="col-auto d-flex justify-content-center align-items-start">'
                                  + '<div style="width:50px;"></div>'
                                  + '</div>'
                                  + '<div class="col d-flex flex-column justify-content-center align-items-end">'
                                  + '<p>' + response.messageList[i].asContent + '</p>'
                                  + '<div class="msg-date">' + moment(response.messageList[i].asDate).format("YYYY-MM-DD hh:mm:ss a") + '</div>'
                                  + '</div>'
                                  + '</div>';
                          }
                      }
                  }
                  $("#msg_content").empty();
                  $("#msg_content").append(html);
                  $("#msg_content").scrollTop($("#msg_content").height());
              } else {
                  $("#msg_content").empty();
              }
          }else{
              Swal.fire({
                  text: response.msg,
                  confirmButtonText: '확인',
                  allowOutsideClick: false
              });
              return false;
          }
      },error: function (jqXHR) {
        console.log(jqXHR.responseText);
      }
   });
}
function userSearch(idx) {
   var apiAddress = $("#apiAddress").val();
   $.ajax({
      url: apiAddress+"/api/userInfo?userIdx="+idx,
      type: 'GET',
      dataType: 'JSON',
      success: function (response) {
         // console.log(response.user);
         $(".maspro-img").css('background-image', 'url('+apiAddress+response.user.profileImage+')');
         $(".nick-asd-msg").text(response.user.userName);
         $("#infoUserStatusMGS").text(response.user.statusMessage);
         $("#profileBtn").attr('href', '/'+response.user.userName);
         if(response.user.certificationDate == "" || response.user.certificationDate == null || response.user.certificationDate == undefined) {
             if(response.user.account == "" || response.user.account == null || response.user.account == undefined) {
                 $("#questionBtn").attr('disabled', 'disabled');
             }
         }
         if(response.user.price == "" || response.user.price == null) {
            $("#price").val(0);
         }else {
            $("#price").val(response.user.price);
         }
      }
   });
}

function sendMail() {
    var price = numberWithCommas($("#price").val()) + "C";
    var sendText = $("#msContent").val();
    if(sendText == "" || sendText == null || sendText == undefined) {
        Swal.fire({
            text: '메세지 내용을 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    Swal.fire({
        html: "<p>"+price+" 를 사용하여<br>질문을 전송하시겠습니까?</p>",
        showCancelButton: true,
        cancelButtonText: '취소',
        confirmButtonText: '확인',
        allowOutsideClick: false,
        reverseButtons: true
    }).then(function (result) {
        // console.log(result);
        if(result.value) {
            var apiAddress = $("#apiAddress").val();
            var datas = $("#sendMSGForm").serialize();
            $.ajax({
                url: apiAddress+"/api/sendMessage",
                type: 'POST',
                data: datas,
                dataType: 'JSON',
                success: function (response) {
                    // console.log(response);
                    if(response.result == true) {
                        var user = getCookie('idx');
                        var target = getParameter('targetIdx');
                        chatInfo(user, target);
                        $("#msContent").val("");
                    }else {
                        if(response.code == 9){
                            Swal.fire({
                                text: '잔여 크레딧이 부족합니다\n충전페이지로 이동합니다',
                                confirmButtonText: '확인',
                                allowOutsideClick: false
                            }).then(function() {
                                location.href="/charge";
                            });
                        }else{
                            Swal.fire({
                                text: response.msg,
                                confirmButtonText: '확인',
                                allowOutsideClick: false
                            });
                            return false;
                        }
                    }
                },error: function (jqXHR) {
                    console.log(jqXHR.responseText);
                }
            });
        }
    });
}

function resendMail() {
    var sendText = $("#asContent").val();
    if(sendText == "" || sendText == null || sendText == undefined) {
        Swal.fire({
            text: '메세지 내용을 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    var apiAddress = $("#apiAddress").val();
    var datas = $("#sendMSGForm2").serialize();
    $.ajax({
        url: apiAddress+"/api/asMessage",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                var user = getCookie('idx');
                var target = getParameter('targetIdx');
                chatInfo(user, target);
                $("#asContent").val("");
            }else {
                Swal.fire({
                    text: response.msg,
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                });
                return false;
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });

}
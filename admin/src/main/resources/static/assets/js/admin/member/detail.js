$(function () {
    // getparameter
    var seq = getParameter('idx');
    $("input[name=userIdx]").val(seq);

    // tab pagination variable
    var pointPage = getParameter('pointPage');
    var exchangePage = getParameter('exchangePage');
    var reportPage = getParameter('reportPage');
    var chatPage = getParameter('chatPage');

    // 최초 페이지 로딩
    info(seq);
    if (exchangePage != "" && exchangePage != null && exchangePage != undefined) {
        $("#nav-listb-tab").click();
    } else if (reportPage != "" && reportPage != null && reportPage != undefined) {
        $("#nav-listc-tab").click();
    } else if (chatPage != "" && chatPage != null && chatPage != undefined) {
        $("#nav-listd-tab").click();
    } else {
        if (pointPage == "" || pointPage == null || pointPage == undefined || pointPage == 0) {
            pointPage = 1;
        }
        $("#nav-lista-tab").click();
        pointList(seq, pointPage);
    }

    // 뱃지정보 업데이트
    $(".badgeCheck").change(function () {
        var value = $(this).val();
        $("#bType").val(value);
        var api = $("#apiAddress").val();
        var datas = $("#userListForm").serialize();
        if ($(this).is(":checked")) {
            $.ajax({
                url: api+"/adminapi/addBadge",
                type: 'POST',
                dataType: 'JSON',
                data: datas,
                success: function (response) {
                    if (response.result) {
                        location.reload();
                    }else{
                        alert(response.msg);
                        return false;
                    }
                }
            });
        } else {
            $.ajax({
                url: api+"/adminapi/deleteBadge",
                type: 'POST',
                dataType: 'JSON',
                data: datas,
                success: function (response) {
                    if (response.result) {
                        location.reload();
                    }else{
                        alert(response.msg);
                        return false;
                    }
                }
            });
        }
    });

    //크레딧증감 설정
    $("#pointInsertBtn").click(function () {
        var pdAmount = $("#pdAmount").val();
        if (pdAmount == "" || pdAmount == 0) {
            alert('부여 크레딧이 존재하지 않거나 0보다 작습니다.');
            return false;
        }
        var api = $("#apiAddress").val();
        var datas = $("#userListForm").serialize();
        $.ajax({
            url: api+"/adminapi/addPoint",
            type: 'POST',
            dataType: 'JSON',
            data: datas,
            success: function (response) {
                if (response.result == true) {
                    alert('크레딧 가감이 적용되었습니다.');
                    $("#pdAmount").val("0");
                    $("#nav-lista-tab").click();
                }else{
                    alert(response.msg);
                    return false;

                }
            }
        });
    });

    // 계좌정보 업데이트
   $("#accountBtn").click(function () {
        var account = $("#account").val();
        if (account == "") {
            alert('계좌정보를 입력해주세요.');
            return false;
        }
        var datas = {
            userIdx: seq,
            account: account
        };
        var api = $("#apiAddress").val();
        $.ajax({
            url: api+"/adminapi/updateAccount",
            type: 'POST',
            dataType: 'JSON',
            data: datas,
            success: function (response) {
                if (response.result) {
                    alert('계좌정보가 저장되었습니다.');
                    location.reload();
                }else{
                    alert(response.msg);
                    return false;
                }
            }
        });
    });

    // 크레딧 내역 조회
    $("#nav-lista-tab").click(function () {
        pointList(seq, 1);
    });
    // 정산&기부 내역 조회
    $("#nav-listb-tab").click(function () {
        exchangeList(seq, 1);
    });
    // 신고 내역 조회
    $("#nav-listc-tab").click(function () {
        reportList(seq, 1);
    });
    // 채팅 내역 조회
    $("#nav-listd-tab").click(function () {
        chatList(seq, 1)
    });

    // 모달창 open
    $('#exampleModalCenter').on('show.bs.modal', function (event) {
        var type = $(event.relatedTarget).attr('data-type');
        if(type == 'report') {
            var user = $(event.relatedTarget).attr('data-useridx');
            var target = $(event.relatedTarget).attr('data-targetidx');
            reportDetails(user, target);
        }else {
            var chat = $(event.relatedTarget).attr('data-chatidx');
            messageDetails(chat);
        }
    });

    // 사용자 본인인증
    $("#certificationDate").change(function () {
        var idx = $("input[name=userIdx]").val();
        var api = $("#apiAddress").val();
        $.ajax({
            url: api + "/adminapi/editCertificationDate?userIdx=" + idx,
            type: 'GET',
            dataType: 'JSON',
            success: function (response) {
                // console.log(response);
                if(response.result == true) {
                    location.reload();
                }
            }
        });
    });

});
// 유저정보 검색
function info(idx) {
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/userDetails?userIdx="+idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                $("#loginId").val(response.user.loginId);
                $("#userName").val(response.user.userName);
                $("#joinDate").val(moment(response.user.joinDate).format('YYYY-MM-DD HH:mm:ss'));
                // 본인인증 체크
                if (response.user.certificationDate != "" && response.user.certificationDate != null && response.user.certificationDate != undefined) {
                    $("input:checkbox[id='certificationDate']").attr('checked', true);
                } else {
                    $("input:checkbox[id='certificationDate']").attr('checked', false);
                }
                // 기부여부 체크
                if (response.user.donation == 1) {
                    $("input:checkbox[id='donation']").attr('checked', true);
                } else {
                    $("input:checkbox[id='donation']").attr('checked', false);
                }
                $("#account").val(response.user.account);
                for (var i = 0; i < response.user.badges.length; i++) {
                    if (response.user.badges[i].badgeType == '1') {
                        $("#badgeType1").prop('checked', true);
                    } else if (response.user.badges[i].badgeType == '2') {
                        $("#badgeType2").prop('checked', true);
                    } else if (response.user.badges[i].badgeType == '3') {
                        $("#badgeType3").prop('checked', true);
                    } else if (response.user.badges[i].badgeType == '4') {
                        $("#badgeType4").prop('checked', true);
                    }
                }
                // 생년월일
                if(response.user.birthdate != "" && response.user.birthdate != null && response.user.birthdate != undefined) {
                    $("#birthday").val(moment(response.user.birthdate).format('YYYY-MM-DD'));
                }
                //국적?
                if(response.user.nation != "" && response.user.nation != null && response.user.nation != undefined) {
                    $("#nation").val(response.user.nation);
                }
                // 국가
               // if(response.user.nation != "" && response.user.nation != null && response.user.nation != undefined) {
               //      var dictObject = {};
               //      $.ajax({
               //          url: api + "/api/countryList",
               //          type: 'GET',
               //          dataType: 'JSON',
               //          success: function (data) {
               //              if(data.countryList != null && data.countryList.length > 0) {
               //                  for (var i = 0; i < data.countryList.length; i++) {
               //                      dictObject[data.countryList[i].code] = data.countryList[i].countryKr;
               //                  }
               //              }
               //              $("#nation").val(dictObject[response.user.nation]);
               //          }
               //      });
               // }
                // 성별
                if(response.user.gender != "" && response.user.gender != null && response.user.gender != undefined) {
                    if(response.user.gender == "M") {
                        $("#gender").val("남");
                    }else if(response.user.gender == "F"){
                        $("#gender").val("여");
                    }
                }
            }else {
                alert(response.msg);
                return false;
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}
// 크레딧내역 조회
function pointList(idx, page) {
    var html = "";
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/pointTotal?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            $("#nowp").text(numberWithCommas(response.nowp) + "C");
            $("#chargep").text(numberWithCommas(response.chargep) + "C");
            $("#incomep").text(numberWithCommas(response.incomep)+ "C");
            $("#costp").text(numberWithCommas(response.costp)+ "C");
        }
    });
    $.ajax({
        url: api+"/adminapi/pointList?userIdx="+idx+"&page="+page,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            if(response.result) {
                if (response.pointList.length > 0) {
                    for (var i = 0; i < response.pointList.length; i++) {
                        html += '<tr>'
                            + '<th scope="row">' + response.pointList[i].pdIdx + '</th>'
                            + '<td>' + moment(response.pointList[i].pdDate).format('YYYY-MM-DD HH:mm:ss') + '</td>'
                        if (response.pointList[i].pdType == 1) {
                            html += '<td>충전</td>';
                        } else if (response.pointList[i].pdType == 2) {
                            html += '<td>수익</td>';
                        } else if (response.pointList[i].pdType == 3) {
                            html += '<td>이벤트성 지급</td>';
                        } else if (response.pointList[i].pdType == 4) {
                            html += '<td>지출</td>';
                        } else if (response.pointList[i].pdType == 5) {
                            html += '<td>정산</td>';
                        } else if (response.pointList[i].pdType == 6) {
                            html += '<td>정책상회수</td>';
                        }
                        html += '<td>' + response.pointList[i].pdAmount + '</td>'
                            + '</tr>';
                    }
                    $("#content1").empty();
                    $("#content1").append(html);
                    if (response.pointListTotal % 20 == 0) {
                        var total = (response.pointListTotal / 20);
                    } else {
                        var total = (response.pointListTotal / 20) + 1;
                    }
                    $('#paginator1').bootpag({
                        total: parseInt(total),
                        page: page,
                        maxVisible: 5
                    }).on('page', function (event, num) {
                        location.href = '/member/memberdetail?idx=' + idx + '&pointPage=' + num;
                    });
                } else {
                    html = '<tr><th colspan="4" scope="row"><div class="bbs-none d-flex justify-content-center align-items-center">크레딧 내역이 없습니다.</div></th></tr>';
                    $("#content1").empty();
                    $("#content1").append(html);
                }
            }else{
                alert(response.msg);
                return false;
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}
// 정산&기부 내역 조회
function exchangeList(idx, page) {
    var html = "";
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/exchangeTotal?userIdx="+idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            $("#finalSum").text(numberWithCommas(response.finalSum) + "C");
            $("#donationSum").text(numberWithCommas(response.donationSum) + "C");
        }
    });
    $.ajax({
        url: api+"/adminapi/exchangeList?userIdx="+idx+"&page="+page,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                if (response.exchangeList.length > 0) {
                    for (var i = 0; i < response.exchangeList.length; i++) {
                        html += '<tr>'
                            + '<th scope="row">' + response.exchangeList[i].ecIdx + '</th>'
                            + '<td>' + moment(response.exchangeList[i].ecDate).format('YYYY-MM-DD HH:mm:ss') + '</td>'
                            + '<td>' + response.exchangeList[i].ecAmount + '</td>'
                            + '<td>' + response.exchangeList[i].donation + '</td>'
                            + '<td>' + response.exchangeList[i].finalAmount + '</td>';
                        if (response.exchangeList[i].completionDate == null) {
                            html += '<td>-</td>';
                        } else {
                            html += '<td>' + moment(response.exchangeList[i].completionDate).format('YYYY-MM-DD HH:mm:ss') + '</td>';
                        }
                        html += '</tr>';
                    }
                    $("#content2").empty();
                    $("#content2").append(html);
                    if (response.exchangeListTotal % 20 == 0) {
                        var total = (response.exchangeListTotal / 20);
                    } else {
                        var total = (response.exchangeListTotal / 20) + 1;
                    }
                    $('#paginator2').bootpag({
                        total: parseInt(total),
                        page: page,
                        maxVisible: 5
                    }).on('page', function (event, num) {
                        location.href = '/member/memberdetail?idx=' + idx + '&exchangePage=' + num;
                    });
                } else {
                    html = '<tr><th colspan="6" scope="row"><div class="bbs-none d-flex justify-content-center align-items-center">정산&기부 내역이 없습니다.</div></th></tr>';
                    $("#content2").empty();
                    $("#content2").append(html);
                }
            }else {
                alert(response.msg);
                return false;
            }
        }
    });
}
// 신고내역 조회
function reportList(idx, page) {
    var html = "";
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/reportList?userIdx="+idx+"&page="+page,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                if (response.reportsList.length > 0) {
                    for (var i = 0; i < response.reportsList.length; i++) {
                        html += '<tr>'
                            + '<th scope="row">' + response.reportsList[i].reportIdx + '</th>'
                            + '<th>' + response.reportsList[i].regDate.replace('T', ' ') + '</th>'
                            + '<td>' + response.reportsList[i].target.userName + '</td>'
                            + '<td>' + response.reportsList[i].rpContent + '</td>'
                            + '<td><button type="button" class="btn btn-primary btn-sm" data-type="report" data-userIdx="' + response.reportsList[i].target.userIdx + '" data-targetIdx="' + response.reportsList[i].user.userIdx + '" data-toggle="modal" data-target="#exampleModalCenter">대화내용 자세히</button></td>'
                            + '</tr>';
                    }
                    $("#content3").empty();
                    $("#content3").append(html);
                } else {
                    html = '<tr><th colspan="5" scope="row"><div class="bbs-none d-flex justify-content-center align-items-center">신고내역이 없습니다.</div></th></tr>';
                    $("#content3").empty();
                    $("#content3").append(html);
                }
                if (response.reportListTotal % 20 == 0) {
                    var total = (response.reportListTotal / 20);
                } else {
                    var total = (response.reportListTotal / 20) + 1;
                }
                $('#paginator3').bootpag({
                    total: parseInt(total),
                    page: page,
                    maxVisible: 5
                }).on('page', function (event, num) {
                    location.href = '/member/memberdetail?idx=' + idx + '&reportPage=' + num;
                });
            }else{
                alert(response.msg);
                return false;

            }
        }
    });
}
// 신고(대화) 상세
function reportDetails(user, target) {
    var html = "";
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/reportDetails?userIdx="+user+"&targetIdx="+target,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                if (response.reportDetailList.length > 0) {
                    for (var i = 0; i < response.reportDetailList.length; i++) {
                        html += "<tr>"
                        if (response.reportDetailList[i].msDate != "" && response.reportDetailList[i].msDate != null) {
                            if (response.reportDetailList[i].asDate != "" && response.reportDetailList[i].asDate != null) {
                                html += "<th scope='row'>" + moment(response.reportDetailList[i].msDate).format('YYYY-MM-DD HH:mm:ss') + "<br>" + moment(response.reportDetailList[i].asDate).format('YYYY-MM-DD HH:mm:ss') + "</th>";
                            } else {
                                html += "<th scope='row'>" + moment(response.reportDetailList[i].msDate).format('YYYY-MM-DD HH:mm:ss') + "</th>";
                            }
                        }
                        html += "<td>"
                            + "<div style='word-break: break-all;'><span class='badge badge-pill badge-success mr-2'>발신</span>" + response.reportDetailList[i].msContent + "</div>";
                        if (response.reportDetailList[i].asContent != "" && response.reportDetailList[i].asContent != null && response.reportDetailList[i].asContent != undefined) {
                            html += "<div style='word-break: break-all;'><span class='badge badge-pill badge-danger mr-2'>수신</span>" + response.reportDetailList[i].asContent + "</div>";
                        }
                        +"</td>"
                        + "</tr>";
                    }
                    $("#modal-content").empty();
                    $("#modal-content").append(html);
                } else {
                    html = '<tr><th colspan="3" scope="row"><div class="bbs-none d-flex justify-content-center align-items-center">대화내역이 없습니다.</div></th></tr>';
                    $("#modal-content").empty();
                    $("#modal-content").append(html);
                }
            }else{
                alert(response.msg);
                return false;
            }
        }
    });
}
// 채팅내역 조회
function chatList(idx, page) {
    var html = "";
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/chatList?userIdx=" + idx + "&page=" + page,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                if (response.chatList.length > 0) {
                    for (var i = 0; i < response.chatList.length; i++) {
                        html += '<tr>'
                            + '<th scope="row">' + response.chatList[i].chatIdx + '</th>'
                            + '<th>' + moment(response.chatList[i].finDate).format('YYYY-MM-DD HH:mm:ss') + '</th>';
                        if (response.chatList[i].user.userIdx == idx) {
                            html += '<td>' + response.chatList[i].user2.userName + '</td>';
                        } else {
                            html += '<td>' + response.chatList[i].user.userName + '</td>';
                        }
                        html += '<td>' + response.chatList[i].finContent + '</td>'
                            + '<td><button type="button" class="btn btn-primary btn-sm" data-type="chat" data-chatIdx="' + response.chatList[i].chatIdx + '" data-toggle="modal" data-target="#exampleModalCenter">대화내용 자세히</button></td>'
                            + '</tr>';
                    }
                    $("#content4").empty();
                    $("#content4").append(html);
                    if (response.chatListTotal % 20 == 0) {
                        var total = (response.chatListTotal / 20);
                    } else {
                        var total = (response.chatListTotal / 20) + 1;
                    }
                    $('#paginator4').bootpag({
                        total: parseInt(total),
                        page: page,
                        maxVisible: 5
                    });
                } else {
                    html = '<tr><th colspan="5" scope="row"><div class="bbs-none d-flex justify-content-center align-items-center">채팅내역이 없습니다.</div></th></tr>';
                    $("#content4").empty();
                    $("#content4").append(html);
                }
            }else{
                alert(response.msg);
                return false;
            }
        }
    });
}

// 채팅상세 조회
function messageDetails(idx) {
    var html = "";
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/messageDetails?chatIdx="+idx+"&sort=1",
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                if (response.messageList.length > 0) {
                    for (var i = 0; i < response.messageList.length; i++) {
                        html += "<tr>";
                        if (response.messageList[i].msDate != "" && response.messageList[i].msDate != null) {
                            if (response.messageList[i].asDate != "" && response.messageList[i].asDate != null && response.messageList[i].asDate != undefined) {
                                html += "<th scope='row'>" + moment(response.messageList[i].msDate).format('YYYY-MM-DD HH:mm:ss') + "<br>" + moment(response.messageList[i].asDate).format('YYYY-MM-DD HH:mm:ss') + "</th>";
                            } else {
                                html += "<th scope='row'>" + moment(response.messageList[i].msDate).format('YYYY-MM-DD HH:mm:ss') + "</th>";
                            }
                        }
                        html += "<td>"
                            + "<div style='word-break: break-all;'><span class='badge badge-pill badge-success mr-2'>발신</span>" + response.messageList[i].msContent + "</div>";
                        if(response.messageList[i].asContent != "" && response.messageList[i].asContent != null && response.messageList[i].asContent != undefined) {
                            html += "<div style='word-break: break-all;'><span class='badge badge-pill badge-danger mr-2'>수신</span>" + response.messageList[i].asContent + "</div>";
                        }
                        html + "</td>"
                            + "</tr>";
                    }
                    $("#modal-content").empty();
                    $("#modal-content").append(html);
                } else {
                    html = '<tr><th colspan="3" scope="row"><div class="bbs-none d-flex justify-content-center align-items-center">대화내역이 없습니다.</div></th></tr>';
                    $("#modal-content").empty();
                    $("#modal-content").append(html);
                }
            }else{
                alert(response.msg);
                return false;
            }
        }
    });
}
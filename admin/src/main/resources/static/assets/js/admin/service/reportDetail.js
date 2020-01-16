$(function () {
    var idx = getParameter('idx');
    $("#reportIdx").val(idx);
    info(idx);

    $("#asSaveBtn").click(function () {
        save();
    });

    $("#cencelBtn").click(function () {
       cencel();
    });

    // 모달창 open
    $('#exampleModalCenter').on('show.bs.modal', function (event) {
        var user = $(event.relatedTarget).attr('data-useridx');
        var target = $(event.relatedTarget).attr('data-targetidx');
        chatList(user, target);
    });
});
function info(idx) {
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/allReportList?reportIdx="+idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            console.log(response);
            if(response.result) {
                $("#regDate").text(moment(response.report.regDate).format("YYYY-MM-DD HH:mm:ss"));
                $("#user").text(response.report.user.userName);
                $("#target").text(response.report.target.userName);
                if(response.report.category == "0") {
                    $("#category").text("부적절한 메세지");
                }else if(response.report.category == "1") {
                    $("#category").text("스팸 메세지");
                }else if(response.report.category == "2") {
                    $("#category").text("불쾌한 메세지");
                }else if(response.report.category == "3") {
                    $("#category").text("타인을 사칭");
                }else if(response.report.category == "4") {
                    $("#category").text("지적 재산권 침해");
                }
                $("#rpContent").text(response.report.rpContent);
                $("#chatBtn").attr("data-useridx", response.report.user.userIdx);
                $("#chatBtn").attr("data-targetIdx", response.report.target.userIdx);
                $("#asTitle").val(response.report.asTitle);
                $("#asContent").val(response.report.asContent);
                $("#asTitle2").val(response.report.asTitle);
                $("#asContent2").val(response.report.asContent);
            }else{
                alert(response.msg);
                return false;
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}

function save() {
    var title = $("#asTitle").val();
    var content = $("#asContent").val();
    if(title == "") {
        alert('답변제목을 입력해주세요.');
        return false;
    }else if(content == "") {
        alert('답변내욕을 입력해주세요.');
        return false;
    }
    var datas = $("#asForm").serialize();
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/updateReport",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                alert('저장되었습니다.');
                location.reload();
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
function cencel() {
    var title = $("#asTitle").val();
    var title2 = $("#asTitle2").val();
    var content = $("#asContent").val();
    var content2 = $("#asContent2").val();
    if(title != title2 || content != content2) {
        if (confirm('이 페이지를 벗어나면 마지막 저장 후 수정된 내용은 저장되지 않습니다.')) {
            history.back();
        }
    }else {
        history.back();
    }

}
// 신고(대화) 상세
function chatList(user, target) {
    var html = "";
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/reportDetails?userIdx="+user+"&targetIdx="+target,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            console.log(response);
            if(response.result) {
                if (response.reportDetailList.length > 0) {
                    for (var i = 0; i < response.reportDetailList.length; i++) {
                        html += "<tr>"
                        if (response.reportDetailList[i].asDate != "" && response.reportDetailList[i].asDate != null && response.reportDetailList[i].asDate != undefined) {
                            html += "<th scope='row'>" + moment(response.reportDetailList[i].msDate).format('YYYY-MM-DD HH:mm:ss') + "<br>" + moment(response.reportDetailList[i].asDate).format('YYYY-MM-DD HH:mm:ss') + "</th>";
                        } else {
                            html += "<th scope='row'>" + moment(response.reportDetailList[i].msDate).format('YYYY-MM-DD HH:mm:ss') + "</th>";
                        }
                        html += "<td>";
                        if (response.reportDetailList[i].msContent != "" && response.reportDetailList[i].msContent != null) {
                            html += "<div><span class='badge badge-pill badge-success mr-2'>발신</span>" + response.reportDetailList[i].msContent + "</div>";
                        }
                        if (response.reportDetailList[i].asContent != "" && response.reportDetailList[i].asContent != null) {
                            html += "<div><span class='badge badge-pill badge-danger mr-2'>수신</span>" + response.reportDetailList[i].asContent + "</div>";
                        }
                        html += "</td>"
                            + "</tr>";
                    }
                    $("#modal-content").empty();
                    $("#modal-content").append(html);
                } else {
                    html = '<tr><th colspan="2" scope="row"><div class="bbs-none d-flex justify-content-center align-items-center">대화내역이 없습니다.</div></th></tr>';
                    $("#modal-content").empty();
                    $("#modal-content").append(html);
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
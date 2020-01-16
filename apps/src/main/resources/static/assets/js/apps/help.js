$(function () {
    var idx = getCookie('idx');
    var page = getParameter('page');
    if(page == "" || page == null || page == undefined) {
        $("#page").val("1");
    }
    list(idx);
});

function list(idx) {
    var apiAddress = $("#apiAddress").val();
    var html = "";
    $.ajax({
        url: apiAddress+"/api/contactList?size=5&userIdx="+idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                if (response.contactList.length > 0) {
                    for (var i = 0; i < response.contactList.length; i++) {
                        html += '<div class="help-body">'
                            + '<h5>';
                        if (response.contactList[i].ctCategory == 1) {
                            html += '가입/계정';
                        }else if (response.contactList[i].ctCategory == 2) {
                            html += '메뉴/기능';
                        }else if (response.contactList[i].ctCategory == 3) {
                            html += 'PM';
                        }else if (response.contactList[i].ctCategory == 4) {
                            html += '크레딧';
                        }else if (response.contactList[i].ctCategory == 5) {
                            html += '기부';
                        }else if (response.contactList[i].ctCategory == 6) {
                            html += '기타';
                        }
                        html += ' - ' + response.contactList[i].ctTitle + '</h5>'
                            + '<div>' + 'Q. ' + response.contactList[i].ctContent + ' - '
                            + '<span class="wdate">' + response.contactList[i].ctRegDate.replace('T', ' ') + '</span>'
                            + '</div>';
                        if (response.contactList[i].asRegDate != null) {
                            html += '<div>' + 'A. ' + response.contactList[i].asContent + ' - '
                                + '<span class="wdate">' + response.contactList[i].asRegDate.replace('T', ' ') + '</span></div>';
                        }
                        html += '</div>';
                    }
                    if (response.contactList.length == 5) {
                        html += '<div class="text-center addBtn"><button class="btn btn-link" onclick="historyPlus(' + idx + ');">더보기</button></div>';

                    }
                    $("#content").empty();
                    $("#content").append(html);

                } else {
                    html = '<div class="text-center">등록된 1:1 문의가 없습니다.</div>';
                    $("#content").empty();
                    $("#content").append(html);
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

function historyPlus(idx) {
    var apiAddress = $("#apiAddress").val();
    $(".addBtn").remove();
    var beforePage = parseInt($("#page").val()) + 1;
    $("#page").val(beforePage);
    var page = $("#page").val();
    $.ajax({
        url: apiAddress+"/api/contactList?size=5&userIdx="+idx+"&page="+page,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                var html = "";
                if (response.contactList.length > 0) {
                    for (var i = 0; i < response.contactList.length; i++) {
                        html += '<div class="help-body">'
                            + '<h5>';
                        if (response.contactList[i].ctCategory == 1) {
                            html += '가입/계정';
                        }else if (response.contactList[i].ctCategory == 2) {
                            html += '메뉴/기능';
                        }else if (response.contactList[i].ctCategory == 3) {
                            html += 'PM';
                        }else if (response.contactList[i].ctCategory == 4) {
                            html += '크레딧';
                        }else if (response.contactList[i].ctCategory == 5) {
                            html += '기부';
                        }else if (response.contactList[i].ctCategory == 6) {
                            html += '기타';
                        }
                        html += ' - ' + response.contactList[i].ctTitle + '</h5>'
                            + '<div>' + 'Q. ' + response.contactList[i].ctContent + ' - '
                            + '<span class="wdate">' + moment(response.contactList[i].ctRegDate).format('YYYY-MM-DD HH:mm:ss') + '</span>'
                            + '</div>';
                        if (response.contactList[i].asRegDate != null) {
                            html += '<div>' + 'A. ' + response.contactList[i].asContent + ' - '
                                + '<span class="wdate">' + moment(response.contactList[i].asRegDate).format('YYYY-MM-DD HH:mm:ss') + '</span></div>';
                        }
                        html += '</div>';
                    }
                    if (response.contactList.length == 5) {
                        html += '<div class="text-center addBtn"><button class="btn btn-link" onclick="historyPlus(' + idx + ');">더보기</button></div>';
                    }
                    $("#content").append(html);
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

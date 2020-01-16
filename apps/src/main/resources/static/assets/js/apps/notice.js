$(function () {
    // 페이지 로딩
    var page = getParameter('page');
    if(page == "" || page == null || page == undefined) {
        $("#page").val("1");
    }
    list();
});

function list() {
    var html = "";
    var apiAddress = $("#apiAddress").val();
    var datas = $("#noticeListForm").serialize();
    $.ajax({
        url: apiAddress+"/adminapi/noticeList?size=5",
        type: 'GET',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                if (response.noticeList.length > 0) {
                    for (var i = 0; i < response.noticeList.length; i++) {
                        html += '<div class="notice-body">'
                            + '<h5>' + response.noticeList[i].title + '</h5>'
                            + '<div>' + response.noticeList[i].content + '</div>'
                            + '<h6>' + response.noticeList[i].regDate.replace('T', ' ') + '</h6>'
                            + '</div>';
                    }
                    if (response.noticeList.length == 5) {
                        html += '<div class="text-center addBtn"><button class="btn btn-link" onclick="historyPlus();">더보기</button></div>';
                    }

                    $("#content").empty();
                    $("#content").append(html);

                } else {
                    html = '<div class="text-center">등록된 공지가 없습니다.</div>';
                    $("#content").empty();
                    $("#content").append(html);
                }
            }else {
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
    $(".addBtn").remove();
    var beforePage = parseInt($("#page").val()) + 1;
    $("#page").val(beforePage);
    var apiAddress = $("#apiAddress").val();
    var page = $("#page").val();
    $.ajax({
        url: apiAddress+"/adminapi/noticeList?size=5&page="+page,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                var html = "";
                if (response.noticeList.length > 0) {
                    for (var i = 0; i < response.noticeList.length; i++) {
                        html += '<div class="notice-body">'
                            + '<h5>' + response.noticeList[i].title + '</h5>'
                            + '<div>' + response.noticeList[i].content + '</div>'
                            + '<h6>' + response.noticeList[i].regDate.replace('T', ' ') + '</h6>'
                            + '</div>';
                    }
                    if (response.noticeList.length == 5) {
                        html += '<div class="text-center addBtn"><button class="btn btn-link" onclick="historyPlus();">더보기</button></div>';
                    }
                    $("#content").append(html);
                }
            }else {
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
$(function () {
    // 페이지 로딩
    var page = getParameter('page');
    if(page == "" || page == null || page == undefined) {
        page = 1;
        $("#page").val("1");
    }
    list(page, true);

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
});

function list(page, callback) {
    var datas = $("#noticeListForm").serialize();
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/noticeList",
        type: 'GET',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            var html = "";
            if (response.result) {
                if (response.noticeList.length > 0) {
                    for (var i = 0; i < response.noticeList.length; i++) {
                        html += '<tr>'
                            + '<th scope="row">' + response.noticeList[i].noticeIdx + '</th>'
                            + '<td>' + response.noticeList[i].admin.adminName + '</td>'
                            + '<td class="ellipsis w-100">' + response.noticeList[i].title + '</td>'
                            + '<td>' + response.noticeList[i].viewCount + '</td>'
                            + '<td>' + moment(response.noticeList[i].regDate).format('YYYY-MM-DD HH:mm:ss') + '</td>'
                            + '<td><a href="/board/noticewrite?idx=' + response.noticeList[i].noticeIdx + '" class="btn btn-primary btn-sm"><i class="pe-7s-search"></i> 자세히</a</td>'
                            + '</tr>';
                    }
                    $("#content").empty();
                    $("#content").append(html);
                    // 페이징 처리
                    if(callback) {
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
                            $("#page").val(num);
                            list(num, false);
                        });
                    }
                } else {
                    html = '<tr><th colspan="6" scope="row"><div class="bbs-none d-flex justify-content-center align-items-center">등록된 공지가 없습니다.</div></th></tr>';
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
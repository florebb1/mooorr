$(function () {
    // 페이지 로딩
    var page = getParameter('page');
    if(page == "" || page == null || page == undefined) {
        $("#page").val("1");
    }
    list(1, true);

    var category = getParameter('category');
    if(category != "" && category != null && category != undefined) {
        $("#category").val("category");
    }
    $(".custom-select").change(function () {
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
});

function list(page, callback) {
    var datas = $("#faqListForm").serialize();
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/faqList",
        type: 'GET',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            var html = "";
            if(response.result) {
                if (response.faqList.length > 0) {
                    for (var i = 0; i < response.faqList.length; i++) {
                        html += '<tr>'
                            + '<th scope="row">' + response.faqList[i].faqIdx + '</th>';
                        if (response.faqList[i].category == 1) {
                            html += '<td>가입/계정</td>';
                        } else if (response.faqList[i].category == 2) {
                            html += '<td>메뉴/기능</td>';
                        } else if (response.faqList[i].category == 3) {
                            html += '<td>PM</td>';
                        } else if (response.faqList[i].category == 4) {
                            html += '<td>크레딧</td>';
                        } else if (response.faqList[i].category == 5) {
                            html += '<td>기부</td>';
                        } else {
                            html += '<td>기타</td>';
                        }
                        html += '<td><div class="ellipsis">' + response.faqList[i].title + '</div></td>'
                            + '<td class="ellipsis">' + response.faqList[i].content + '</td>'
                            + '<td>' + moment(response.faqList[i].regDate).format('YYYY-MM-DD HH:mm:ss') + '</td>'
                            + '<td><a href="/board/faqwrite?idx=' + response.faqList[i].faqIdx + '" class="btn btn-primary btn-sm"><i class="pe-7s-search"></i> 자세히</a</td>'
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
$(function () {
    // 페이지 로딩
    var page = getParameter('page');
    if(page == "" || page == null || page == undefined) {
        page = 1;
        $("#page").val("1");
    }
    list(page, true);

    var answer = getParameter('answer');
    if(answer != "" && answer != null && answer != undefined) {
        $("#answer").val("answer");
    }

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
    var html = "";
    var datas = $("#qanListForm").serialize();
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/contactList",
        type: 'GET',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.contactList.length > 0) {
                for (var i = 0; i < response.contactList.length; i++) {
                    html += '<tr>'
                        + '<th scope="row">'+response.contactList[i].ctIdx+'</th>';
                    if(response.contactList[i].ctCategory == "1") {
                        html += '<th scope="row">가입/계정</th>';
                    }else if(response.contactList[i].ctCategory == "2") {
                        html += '<th scope="row">메뉴/기능</th>';
                    }else if(response.contactList[i].ctCategory == "3") {
                        html += '<th scope="row">PM</th>';
                    }else if(response.contactList[i].ctCategory == "4") {
                        html += '<th scope="row">크레딧</th>';
                    }else if(response.contactList[i].ctCategory == "5") {
                        html += '<th scope="row">기부</th>';
                    }else if(response.contactList[i].ctCategory == "6") {
                        html += '<th scope="row">기타</th>';
                    }
                    html += '<td>'+response.contactList[i].user.userName+'</td>'
                        + '<td><div class="ellipsis">'+response.contactList[i].ctTitle+'</div></td>'
                    if(response.contactList[i].asRegDate != "" && response.contactList[i].asRegDate != null && response.contactList[i].asRegDate != undefined) {
                        html += '<td>답변완료</td>';
                    }else {
                        html += '<td>미완료</td>';
                    }
                    html += '<td>'+moment(response.contactList[i].ctRegDate).format('YYYY-MM-DD HH:mm:ss')+'</td>'
                        + '<td><a href="/board/qnaview?idx='+response.contactList[i].ctIdx+'" class="btn btn-primary btn-sm"><i class="pe-7s-search"></i> 자세히</a</td>'
                        + '</tr>';
                }
                $("#content").empty();
                $("#content").append(html);
                // 페이징 처리
                if(callback) {
                    if(response.totalNum % 20 == 0) {
                        var totalNum = (response.totalNum / 20);
                    }else {
                        var totalNum = (response.totalNum / 20) + 1;
                    }
                    $('#paginator').bootpag({
                        total: parseInt(totalNum),
                        page: page,
                        maxVisible: 5
                    }).on('page', function(event, num) {
                        $("#page").val(num);
                        list(num, false);
                    });
                }
            }else {
                html ='<tr><th colspan="6" scope="row"><div class="bbs-none d-flex justify-content-center align-items-center">등록된 공지가 없습니다.</div></th></tr>';
                $("#content").empty();
                $("#content").append(html);
            }
        }
    });
}
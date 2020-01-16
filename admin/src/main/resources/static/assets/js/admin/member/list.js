$(function () {
    // 페이지 로딩
    var page = getParameter('page');
    if(page != "" && page != null && page != undefined) {
        $("#page").val(page);
    }else {
        page = 1;
        $("#page").val("1");
    }
    getUserList(page, true);

    // 검색 selectbox 변경
    $("#searchKey").change(function () {
       var val = $(this).val();
       if(val == "badge") {
           $("#searchWord").val('');
           $("#searchWord").addClass('d-none');
           $("#searchButton").addClass('d-none');
           $("#serchCheck").removeClass('d-none');
       }else {
           $("#searchWord").removeClass('d-none');
           $("#searchButton").removeClass('d-none');
           $("#serchCheck").addClass('d-none');
           $(".checkSelect").prop('checked', false);
       }
    });

    // 검색어 입력
    $("#searchKeyWord").keyup(function (event) {
        $("#searchValue").val($(this).val());
        if (event.keyCode === 13) {
            $("#searchBtn").click();
        }
    });

    // 검색 버튼 클릭
    $("#searchBtn").click(function () {
        getUserList(1, true);
    });

    // checkbox 선택시
    $(".checkSelect").change(function () {
        var bedge = $(".checkSelect");
        var send_array = Array();
        var send_cnt = 0;
        for(i=0; i<bedge.length; i++) {
            if (bedge[i].checked == true){
                send_array[send_cnt] = bedge[i].value;
                send_cnt++;
            }
        }
        $("#searchValue").val(send_array);
        getUserList(1, true);
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
        getUserList(1, true);
    });
});
function getUserList(page, callback) {
    var html = "";
    var api = $("#apiAddress").val();
    var datas = $("#memberListForm").serialize();
    $.ajax({
        url : api+"/adminapi/userList",
        type : 'GET',
        data : datas,
        dataType : 'JSON',
        success:function(response){
            // console.log(response);
            if(response.result) {
                if (response.userList.length > 0) {
                    for (var i = 0; i < response.userList.length; i++) {
                        html += '<tr>'
                            + '<th scope="row">' + response.userList[i].userIdx + '</th>'
                            + '<td>' + response.userList[i].loginId + '</td>'
                            + '<td>' + response.userList[i].userName + '</td>'
                            + '<td>' + moment(response.userList[i].joinDate).format('YYYY-MM-DD') + '</td>'
                            + '<td class="text-center">' + response.userList[i].nowp + '</td>'
                            + '<td class="text-center">' + response.userList[i].chargep + '</td>'
                            + '<td class="text-center">' + response.userList[i].incomep + '</td>'
                            + '<td class="text-center">' + response.userList[i].costp + '</td>'
                            + '<td class="text-center">' + response.userList[i].pcamount + '</td>'
                            + '<td class="text-center">' + response.userList[i].rpamount + '</td>';
                        if (response.userList[i].certificationDate != null) {
                            html += '<td>' + moment(response.userList[i].certificationDate).format('YYYY-MM-DD') + '</td>';
                        } else {
                            html += '<td>-</td>';
                        }
                        if (response.userList[i].donation == "0") {
                            html += '<td class="text-center">N</td>';
                        } else {
                            html += '<td class="text-center">Y</td>';
                        }
                        html += '<td><a href="/member/memberdetail?idx=' + response.userList[i].userIdx + '" class="btn btn-primary btn-sm"><i class="pe-7s-search"></i> 자세히</a</td>'
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
                        $('#show_paginator').bootpag({
                            total: parseInt(totalNum),
                            page: page,
                            maxVisible: 5
                        }).on('page', function (event, num) {
                            $("#page").val(num);
                            getUserList(num, false);
                            // location.href = '/member/memberlist?page=' + num + '&sort=' + $("#sort").val() + '&order=' + $("#order").val() + '&searchKey=' + $("#searchKey").val() + '&searchValue=' + $("#searchValue").val();
                        });
                    }
                } else {
                    html = '<tr><th colspan="12" scope="row"><div class="bbs-none d-flex justify-content-center align-items-center">등록된 회원이 없습니다.</div></th></tr>';
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
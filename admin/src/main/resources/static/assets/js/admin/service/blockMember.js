$(function () {
    // 페이지 로딩
    var page = getParameter('page');
    if(page != "" && page != null && page != undefined) {
        $("#page").val(page);
    }else {
        page = 1;
        $("#page").val("1");
    }
    list(page);

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

    // 검색어 엔터 이벤트
    $("#searchKeyWord").keyup(function (event) {
        var val = $(this).val();
        $("#searchValue").val(val);
        if (event.keyCode === 13) {
            $("#searchBtn").click();
        }
    });
    $("#m_searchWord").keyup(function (event) {
        if(event.keyCode === 13) {
            $("#memberSearchBtn").click();
        }
    });

    // 검색 버튼 클릭
    $("#searchBtn").click(function () {
        list(page);
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
        list(page);
    });

    // checkbox 선택시
    $(".checkSelect").change(function () {
        var bedge = $(".checkSelect");
        var send_array = Array();
        var send_cnt = 0;
        for (i = 0; i < bedge.length; i++) {
            if (bedge[i].checked == true) {
                send_array[send_cnt] = bedge[i].value;
                send_cnt++;
            }
        }
        $("#searchValue").val(send_array);
        list(page);
    });

    // 모달 유저 검색
    $("#memberSearchBtn").click(function () {
        var html = "";
        var key = $("#m_searchType").val();
        var val = $("#m_searchWord").val();
        if(val == "" || val == null || val == undefined) {
            alert('검색어를 입력해주세요.');
            return false;
        }
        var api = $("#apiAddress").val();
        $.ajax({
            url: api+"/adminapi/searchUser?searchKey="+key+"&searchValue="+val,
            type: 'GET',
            dataType: 'JSON',
            success: function (response) {
                // console.log(response);
                if(response.result) {
                    if (response.userList.length > 0) {
                        for (var i = 0; i < response.userList.length; i++) {
                            html += '<tr>'
                                + '<th scope="row">'
                                + '<div class="form-check">'
                                + '<input type="radio" name="memberSearchNum" class="form-check-input" data-idx="' + response.userList[i].userIdx + '">'
                                + '</div>'
                                + '<td>' + response.userList[i].loginId + '</td>'
                                + '<td>' + response.userList[i].userName + '</td>';
                            if (response.userList[i].joinDate != "" && response.userList[i].joinDate != null && response.userList[i].joinDate != undefined) {
                                html += '<td>' + response.userList[i].joinDate.replace('T', ' ') + '</td>'
                            } else {
                                html += '<td>-</td>'
                            }
                            html += '<td>' + numberWithCommas(response.userList[i].nowp) + 'C</td>'
                            if (response.userList[i].certificationDate != "" && response.userList[i].certificationDate != null && response.userList[i].certificationDate != undefined) {
                                html += '<td>' + response.userList[i].certificationDate.replace('T', ' ') + '</td>'
                            } else {
                                html += '<td>-</td>'
                            }
                        }
                        $("#memContent").empty();
                        $("#memContent").append(html);
                    } else {
                        html += '<tr><td colspan="8" class="member-search-none text-center">회원을 검색해 주세요.</td></tr>';
                        $("#memContent").empty();
                        $("#memContent").append(html);
                    }
                }else{
                    alert(response.msg);
                    return false;
                }

            },error: function (jqXHR) {
                console.log(jqXHR.responseText);
            }
        });
    });

    // 차단 등록
    $(document).on("click", "#blockBtn", function () {
        var idx = $("input:radio[name='memberSearchNum']:checked").attr("data-idx");
        if(idx == "" || idx == null || idx == undefined) {
            alert('선택된 유저가 없습니다.');
            return false;
        }
        $("#userIdx").val(idx);
        var datas = $("#modalForm").serialize();
        var api = $("#apiAddress").val();
        $.ajax({
            url: api+"/adminapi/addBlock",
            type: 'POST',
            data: datas,
            dataType: 'JSON',
            success: function (response) {
                // console.log(response);
                if(response.result == true) {
                    alert('등록되었습니다');
                    location.reload();
                }else {
                    alert(response.msg);
                    return false;
                }
            },error: function (jqXHR) {
                console.log(jqXHR.responseText);
            }
        });
    });
});
function list(page) {
    var html = "";
    var sort = $("#sort").val();
    var order = $("#order").val();
    var key = $("#searchKey").val();
    var value = $("#searchValue").val();
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/blockList?page=" + page + "&sort=" + sort + "&order=" + order + "&searchKey=" + key + "&searchValue=" + value,
        type : 'GET',
        dataType : 'JSON',
        success:function(response) {
            // console.log(response);
            if (response.blockList.length > 0) {
                for (var i = 0; i < response.blockList.length; i++) {
                    html += '<tr>'
                        + '<th scope="row" class="align-middle">' + response.blockList[i].userIdx + '</th>'
                        + '<td>' + response.blockList[i].loginId + '</td>'
                        + '<td>' + response.blockList[i].userName + '</td>'
                        + '<td>' + response.blockList[i].joinDate.replace('T', ' ') + '</td>'
                        + '<td>' + numberWithCommas(response.blockList[i].nowp) + 'C</td>'
                        + '<td>' + numberWithCommas(response.blockList[i].chargep) + 'C</td>'
                        + '<td>' + numberWithCommas(response.blockList[i].incomep) + 'C</td>'
                        + '<td>' + numberWithCommas(response.blockList[i].costp) + 'C</td>'
                        + '<td>' + response.blockList[i].pcamount + '</td>';
                    if (response.blockList[i].certificationDate != "" && response.blockList[i].certificationDate != null && response.blockList[i].certificationDate != undefined) {
                        html += '<td>' + response.blockList[i].certificationDate.replace('T', ' ') + '</td>';
                    } else {
                        html += '<td>-</td>';
                    }
                    html += '<td><a href="#" class="btn btn-danger btn-sm" onclick="del(' + response.blockList[i].userIdx + ')"> 차단해제</a></td>'
                        + '</tr>';
                }
                $("#content").empty();
                $("#content").append(html);
                // 페이징 처리
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
                    location.href = '/service/blockmember?page=' + num + '&sort=' + $("#sort").val() + '&order=' + $("#order").val() + '&&searchKey=' + $("#searchKey").val() + '&searchValue=' + $("#searchValue").val();
                });
            } else {
                html = '<tr><th colspan="11" scope="row"><div class="bbs-none d-flex justify-content-center align-items-center">해당조건의 회원이 없습니다.</div></th></tr>';
                $("#content").empty();
                $("#content").append(html);
            }
        }
    });
}
function del(idx) {
    $("#userIdx").val(idx);
    var datas = $("#modalForm").serialize();
    // console.log(datas);
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/deleteBlock",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            if(response.result == true) {
                alert('차단해지되었습니다.');
                location.reload();
            }else {
                alert(response.msg);
                return false;
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}
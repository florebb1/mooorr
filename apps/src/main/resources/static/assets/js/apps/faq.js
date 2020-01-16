$(function () {
    // 페이지 로딩
    var page = getParameter('page');
    if(page == "" || page == null || page == undefined) {
        $("#page").val("1");
    }
    list();

    // selectbox change event
    $("#category").change(function () {
        list();
    })
});

function list() {
    var apiAddress = $("#apiAddress").val();
    var html = "";
    var category = $("#category").val();
    $.ajax({
        url: apiAddress+"/adminapi/faqList?size=5&category="+category,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            //console.log(response);
            if(response.result) {
                if (response.faqList.length > 0) {
                    for (var i = 0; i < response.faqList.length; i++) {
                        html += '<div class="faq-body">'
                            + '<h5>' + 'Q.' + response.faqList[i].title + '</h5>'
                            + '<div>' + 'A.' + response.faqList[i].content + '</div>'
                            + '</div>';
                    }
                    if (response.faqList.length == 5) {
                        html += '<div class="text-center addBtn"><button class="btn btn-link" onclick="historyPlus();">더보기</button></div>';
                    }
                    $("#content").empty();
                    $("#content").append(html);

                } else {
                    html = '<div class="text-center">등록된 FAQ가 없습니다.</div>';
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
    var apiAddress = $("#apiAddress").val();
    $(".addBtn").remove();
    var beforePage = parseInt($("#page").val()) + 1;
    var category = $("#category").val();
    $("#page").val(beforePage);
    var page = $("#page").val();
    $.ajax({
        url: apiAddress+"/adminapi/faqList?size=5&page="+page+"&category="+category,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            var html = "";
            if(response.result) {
                if (response.faqList.length > 0) {
                    for (var i = 0; i < response.faqList.length; i++) {
                        html += '<div class="faq-body">'
                            + '<h5>' + 'Q.' + response.faqList[i].title + '</h5>'
                            + '<div>' + 'A.' + response.faqList[i].content + '</div>'
                            + '</div>';
                    }
                    if (response.faqList.length == 5) {
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
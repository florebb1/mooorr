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
    // 모달창 open
    $('#exampleModalCenter').on('show.bs.modal', function (event) {
        var seq = $(event.relatedTarget).attr('data-idx');
        detail(seq);
    });

    // 배너사용여부
    $("input:checkbox[id=chkToggle]").change(function () {
        if($(this).is(":checked") == true) {
            $("#onoff").val(0);
        }else {
            $("#onoff").val(1);
        }
    });

    // 링크사용여부
    $("input:checkbox[id=chkToggle2]").change(function () {
        if($(this).is(":checked") == true) {
            $("#link").attr('readonly', false);
        }else {
            $("#link").val("");
            $("#link").attr('readonly', true);
        }
    });

    // 삭제 버튼 클릭 이벤트
    $("#delBtn").click(function () {
        var seq = $(this).attr('data-idx');
        del(seq);
    });
});
function list(page) {
    var html = "";
    var sort = $("#sort").val();
    var order = $("#order").val();
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/bannerList?page=" + page + "&sort=" + sort + "&order=" + order,
        type : 'GET',
        dataType : 'JSON',
        success:function(response){
            // console.log(response);
            if(response.result) {
                if (response.bannerList.length > 0) {
                    for (var i = 0; i < response.bannerList.length; i++) {
                        html += '<tr>'
                            + '<th scope="row" class="align-middle">' + response.bannerList[i].bannerIdx + '</th>'
                            + '<td>' + response.bannerList[i].title + '</td>'
                            + '<td><img src=' + api + response.bannerList[i].saveName + ' class="w-50 p-2"></td>';
                        if (response.bannerList[i].onoff == 0) {
                            html += '<td>Y</td>';
                        } else {
                            html += '<td>N</td>';
                        }
                        html += '<td>' + moment(response.bannerList[i].regDate).format('YYYY-MM-DD HH:mm:ss') + '</td>'
                            + '<td><a href="#" class="btn btn-primary btn-sm my-1" data-idx="' + response.bannerList[i].bannerIdx + '" data-toggle="modal" data-target="#exampleModalCenter"><i class="pe-7s-search"></i> 자세히</a></td>'
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
                        location.href = '/service/banner?page=' + num + '&sort=' + $("#sort").val() + '&order=' + $("#order").val();
                    });
                } else {
                    html = '<tr><th colspan="6" scope="row"><div class="bbs-none d-flex justify-content-center align-items-center">등록된 배너가 없습니다.</div></th></tr>';
                    $("#content").empty();
                    $("#content").append(html);
                }
            }else{
                alert(response.msg);
                return false;
            }
        }
    });
}
function detail(idx) {
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/bannerDetails?bannerIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                $("#bannerIdx").val(response.banner.bannerIdx);
                $("#onoff").val(response.banner.onoff);
                $("#title").val(response.banner.title);
                $("#regDate").text(response.banner.regDate.replace('T', ' '));
                $("#imageLabal").text(response.banner.image);
                if (response.banner.link != "") {
                    $("#chkToggle2").parent().removeClass('btn-light off');
                    $("#chkToggle2").parent().addClass('btn-primary');
                    $("#link").val(response.banner.link);
                } else {
                    $("#chkToggle2").parent().removeClass('btn-primary');
                    $("#chkToggle2").parent().addClass('btn-light off');
                    $("#link").attr('readonly', true);
                }
                if (response.banner.onoff == 0) {
                    $("#chkToggle").parent().removeClass('btn-light off');
                    $("#chkToggle").parent().addClass('btn-primary');
                } else {
                    $("#chkToggle").parent().removeClass('btn-primary');
                    $("#chkToggle").parent().addClass('btn-light off');
                }
                $("#summernote").summernote('code', response.banner.content);
                $("#saveName").attr("src", api + response.banner.saveName);
                $("#delBtn").attr("data-idx", response.banner.bannerIdx);
            }else{
                alert(response.msg);
                return false;
            }
        }
    });
}

function del(idx) {
    var api = $("#apiAddress").val();
    $.ajax({
        url: api+"/adminapi/deleteBanner?bannerIdx="+idx,
        type: 'POST',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                alert('배너가 삭제되었습니다.');
                location.reload();
            }else{
                alert(response.msg);
            }
        }
    });
}

function edit() {
    var datas = $("#modalForm").serialize();
    // console.log(datas);
    var api = $("#apiAddress").val();
    $('#modalForm').ajaxSubmit({
        url: api+"/adminapi/updateBanner",
        processData: false,
        contentType: false,
        type: 'POST',
        dataType: 'JSON',
        data: datas,
        success: function (response) {
            console.log(response);
            if(response.result == true) {
                alert('수정되었습니다.');
                location.reload();
            }else {
                if(response.code == -1) {
                    alert('사용가능한 배너수를 초과하였습니다.\n사용여부를 확인해주세요.');
                    return false;
                }else {
                    alert('알 수 없는 오류가 발생하였습니다.');
                    return false;
                }
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}
var loadFile = function(events) {
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById('output');
        output.src = reader.result;
        $("#output").css('background-image', 'url('+output.src+')');
    };
    reader.readAsDataURL(event.target.files[0]);
};
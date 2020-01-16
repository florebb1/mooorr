$(function () {
    var idx = getParameter('idx');
    if(idx != "" && idx != null && idx != undefined) {
        $("#addLinkBtn").attr('href','/my_links_input?idx='+idx);
        $("#userIdx").val(idx);
        linkList(idx);
    }else {
        Swal.fire({
            text: '해당 회원정보가 존재하지 않습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function () {
            history.back();
        });
    }

    // $("#switch-normal").change(function () {
    //     if($("#switch-normal").is(":checked") == true) {
    //         $("#onoff").val(0);
    //     }else {
    //         $("#onoff").val(1);
    //     }
    // });

    // 아이콘 클릭시 체크박스 -> 라디오박스
    // $(".flag-ipt").click(function () {
    //     if($(this).prop('checked')) {
    //         $(".flag-ipt").prop('checked', false);
    //         $(this).prop('checked', true);
    //         var type = $(this).attr('id');
    //         var url = $(this).next().find('img').attr('src');
    //         $("#type").val(type);
    //         $("#url").val(url);
    //         $("#parameter").attr('readonly', false);
    //         $("#detail").attr('readonly', false);
    //     }else {
    //         $(this).prop('checked', true);
    //     }
    // });

    // 계정 또는 숫자입력시 해당 링크 생성
    // $("#parameter").change(function () {
    //     var type = $("#type").val();
    //     var id = $(this).val();
    //     var link = "";
    //     if(type != "bigcartel") {
    //         link = $("#"+type).attr('data-link')+id;
    //         $("#link").val(link);
    //     }else {
    //         link = "https://"+id+".bigcartel.com/";
    //         $("#link").val(link);
    //     }
    // });

    // $("#itemBoxWrap").sortable({
    //     placeholder:"itemBoxHighlight",
    //     start: function(event, ui) {
    //         ui.item.data('start_pos', ui.item.index());
    //     },
    //     stop: function(event, ui) {
    //         var spos = ui.item.data('start_pos');
    //         var epos = ui.item.index();
    //         reorder();
    //     }
    // });

    // 모달 저장버튼 클릭 이벤트
    // $("#saveBtn").click(function () {
    //     var type = $("#type").val();
    //     var link = $("#link").val();
    //     var parameter = $("#parameter").val();
    //     var detail = $("#detail").val();
    //     if(type == "") {
    //         Swal.fire({
    //             text: '링크 타입을 선택해주세요',
    //             confirmButtonText: '확인',
    //             allowOutsideClick: false
    //         });
    //         return false;
    //     }else if(link == "" || parameter == "") {
    //         Swal.fire({
    //             text: '해당 타입의 계정 또는 고유번호를 입력해주세요',
    //             confirmButtonText: '확인',
    //             allowOutsideClick: false
    //         });
    //         return false;
    //     }else if(detail == "") {
    //         Swal.fire({
    //             text: '설명을 입력해주세요',
    //             confirmButtonText: '확인',
    //             allowOutsideClick: false
    //         });
    //         return false;
    //     }
    //     createItem();
    // });

    // 모달 초기화 이벤트
    // $('#modalCenter').on('hidden.bs.modal', function (e) {
    //     $(this)
    //         .find("input,textarea,select")
    //         .val('')
    //         .end()
    //         .find("input[type=checkbox], input[type=radio]")
    //         .prop("checked", "")
    //         .end();
    // });

    // 리스트 삭제
    // $(document).on('click', '.deleteBox', function () {
    //     $(this).parent().parent().remove();
    //     // 숫자를 다시 붙인다.
    //     reorder();
    //     var count = $("#linkCount").val();
    //     count = parseInt(count) - 1;
    //     $("#linkCount").val(count);
    // });
    //
    // // 10개 등록제한
    // $("#addLinkBtn").click(function () {
    //     var count = $("#linkCount").val();
    //     if(count >= 10) {
    //         Swal.fire({
    //             text: '설정 가능한 최대치입니다',
    //             confirmButtonText: '확인',
    //             allowOutsideClick: false
    //         });
    //         return false;
    //     }
    // });
});
function linkList(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/links?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                var html = "";
                if (response.onoff == 0) {
                    $("#switch-normal").attr("checked", true);
                    $("#onoff").val("0");
                } else {
                    $("#switch-normal").attr("checked", false);
                    $("#onoff").val("1");
                }
                if (response.linkList.length > 0) {
                    $("#linkCount").val(response.linkList.length);
                    for (var i = 0; i < response.linkList.length; i++) {
                        var type = response.linkList[i].type;
                        var link = response.linkList[i].link;
                        var detail = response.linkList[i].detail;
                        var parameter = response.linkList[i].link;
                        var url = '/assets/images/sns/' + response.linkList[i].type + '.png';
                        html += '<div class="itemBox form-row w-100 my-3">'
                            + '<input type="hidden" name="types" value="' + type + '"/>'
                            + '<input type="hidden" name="links" value="' + link + '" />'
                            + '<input type="hidden" name="snsIds" value="' + parameter + '" />'
                            + '<input type="hidden" name="details" value="' + detail + '"/>'
                            + '<div class="col-2 d-flex align-items-start justify-content-center font-weight-bold p-0">링크&nbsp;<span class="itemNum"></span></div>'
                            + '<div name="item" class="col-9 d-flex flex-column p-0">'
                            + '<div class="text-center border-bottom py-1 pl-5 mb-2 background-link overflow-hidden" style="background-image: url(' + url + ');">' + parameter + '</div>'
                            + '<div class="text-center border-bottom py-1 mb-2 text-secondary overflow-hidden">' + detail + '</div>'
                            + '</div>'
                            + '</div>';
                    }
                    $("#itemBoxWrap").empty();
                    $("#itemBoxWrap").append(html);
                    // reorder();
                } else {
                    $("#linkCount").val("0");
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
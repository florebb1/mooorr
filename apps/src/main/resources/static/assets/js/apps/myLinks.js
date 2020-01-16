$(function () {
    var idx = getCookie('idx');
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

    $("#switch-normal").change(function () {
        if($("#switch-normal").is(":checked") == true) {
            $("#onoff").val(0);
        }else {
            $("#onoff").val(1);
        }
    });

    // 아이콘 클릭시 체크박스 -> 라디오박스
    $(".flag-ipt").click(function () {
        $("#parameter").val("");
        $("#detail").val("");
        $("#urlLink").val("");
        if($(this).prop('checked')) {
            $(".flag-ipt").prop('checked', false);
            $(this).prop('checked', true);
            // 파라미터값 input
            var type = $(this).attr('id');
            $("#type").val(type);
            var url = $(this).next().find('img').attr('src');
            $("#url").val(url);
            var link = $(this).attr('data-link');
            $("#form_div1").addClass('d-none');
            $("#form_div2").addClass('d-none');
            $("#form_div3").addClass('d-none');
            if(link != "" && link != null && link != undefined) {
                $("#pre_parameter").text(link);
                $(".modal-footer").removeClass('d-none');
                $("#form_div1").removeClass('d-none');
                $("#form_div3").removeClass('d-none');
            }else {
                $(".modal-footer").removeClass('d-none');
                $("#parameter").val('unKnown');
                $("#form_div2").removeClass('d-none');
                $("#form_div3").removeClass('d-none');
            }
        }else {
            $(this).prop('checked', true);
        }
    });

    // 계정 입력시 해당 링크 생성
    $("#parameter").change(function () {
        var type = $("#type").val();
        link = $("#"+type).attr('data-link')+$(this).val();
        $("#urlLink").val(link);
    });

    $(document).on('click', '.upBtn', function () {
        var item = $(this).parent().parent();
        if(item.prev().hasClass('itemBox')) {
            item.prev().insertAfter(item);
            reorder();
        }
    });

    $(document).on('click', '.downBtn', function () {
        var item = $(this).parent().parent();
        if(item.next().hasClass('itemBox')) {
            item.next().after(item);
            reorder();
        }
    });

    // 모달 저장버튼 클릭 이벤트
    $("#saveBtn").click(function () {
        var expUrl = /^http[s]?\:\/\//i;
        var type = $("#type").val();
        var link = $("#urlLink").val();
        var parameter = $("#parameter").val();
        var detail = $("#detail").val();
        if(type == "") {
            Swal.fire({
                text: '링크 타입을 선택해주세요',
                confirmButtonText: '확인',
                allowOutsideClick: false
            });
            return false;
        }else if(link == "") {
            Swal.fire({
                text: '링크를 입력해주세요',
                confirmButtonText: '확인',
                allowOutsideClick: false
            });
            return false;
        }else if(!expUrl.test(link)) {
            if(type != "mail") {
                Swal.fire({
                    text: '링크에 http:// 또는 https://를 포함해야합니다',
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                });
                return false;
            }else {
                var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
                if(link.match(regExp) == null) {
                    Swal.fire({
                        text: 'Mail 링크는 이메일 형식을 사용해야합니다',
                        confirmButtonText: '확인',
                        allowOutsideClick: false
                    });
                    return false;
                }
            }
        }else if(detail == "") {
            Swal.fire({
                text: '설명을 입력해주세요',
                confirmButtonText: '확인',
                allowOutsideClick: false
            });
            return false;
        }
        createItem();
    });

    // 모달 초기화 이벤트
    $('#modalCenter').on('hidden.bs.modal', function (e) {
        $(this)
            .find("input,textarea,select")
            .val('')
            .end()
            .find("input[type=checkbox], input[type=radio]")
            .prop("checked", "")
            .end();
        if(!$(".modal-footer").hasClass('d-none')) {
            $(".modal-footer").addClass('d-none');
        }
    });

    // 리스트 삭제
    $(document).on('click', '.deleteBox', function () {
       $(this).parent().parent().remove();
        // 숫자를 다시 붙인다.
        reorder();
        var count = $("#linkCount").val();
        count = parseInt(count) - 1;
        $("#linkCount").val(count);
    });

    // 10개 등록제한
    $("#addLinkBtn").click(function () {
       var count = $("#linkCount").val();
       if(count >= 10) {
           Swal.fire({
               text: '설정 가능한 최대치입니다',
               confirmButtonText: '확인',
               allowOutsideClick: false
           });
           return false;
       }
    });
});
function linkList(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/links?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            var html = "";
            if(response.result) {
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
                        var parameter = response.linkList[i].snsId;
                        var url = '/assets/images/sns/' + response.linkList[i].type + '.png';
                        html += '<div class="itemBox form-row w-100 my-3">'
                            + '<input type="hidden" name="types" value="' + type + '"/>'
                            + '<input type="hidden" name="links" value="' + link + '" />'
                            + '<input type="hidden" name="snsId" value="' + parameter + '" />'
                            + '<input type="hidden" name="details" value="' + detail + '"/>'
                            + '<div class="col-2 d-flex flex-column p-0">'
                            + '<button type="button" class="btn btn-block upBtn"><img src="/assets/images/arrow_up.png" /></button><button type="button" class="btn btn-block downBtn"><img src="/assets/images/arrow_down.png" /></button>'
                            + '</div>'
                            + '<div class="col-2 d-flex align-items-start justify-content-center font-weight-bold p-0">링크&nbsp;<span class="itemNum"></span></div>'
                            + '<div name="item" class="col-7 d-flex flex-column p-0">';
                        if(link.length > 50) {
                            html += '<div class="text-center border-bottom py-1 pl-5 mb-2 background-link detail-content-ellipsis" style="background-image: url(' + url + ');">' + link.substr(0, 47) + '...</div>';
                        }else {
                            html += '<div class="text-center border-bottom py-1 pl-5 mb-2 background-link detail-content-ellipsis" style="background-image: url(' + url + ');">' + link + '</div>';
                        }
                        html += '<div class="text-center border-bottom py-1 mb-2 text-secondary detail-content-ellipsis">' + detail + '</div>'
                            + '</div>'
                            + '<div class="col-1 d-flex align-items-start p-0">'
                            + '<button type="button" class="btn deleteBox"><img src="/assets/images/cross-out.png" style="width:16px;height:16px;"></button>'
                            + '</div>'
                            + '</div>';
                    }
                    $("#itemBoxWrap").empty();
                    $("#itemBoxWrap").append(html);
                    reorder();
                } else {
                    $("#linkCount").val("0");
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
function linkSave() {
    var apiAddress = $("#apiAddress").val();
    var datas = $("#linkListForm").serialize();
    $.ajax({
        url: apiAddress+"/api/saveLinks",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                Swal.fire({
                    title: '수정완료',
                    text: '수정이 완료되었습니다',
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                }).then(function() {
                    var name = getCookie('name');
                    if(name != "" && name != null && name != undefined) {
                        location.href='/'+name;
                    }else {
                        location.href='/';
                    }
                });
            }else {
                Swal.fire({
                    text: response.msg,
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                });
                return false;
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}
/** 아이템 순서 조정 */
function reorder() {
    $(".itemBox").each(function(i, box) {
        $(box).find(".itemNum").html(i + 1);
    });
}

/** 아이템 추가 */
function createItem() {
    $(createBox()).appendTo("#itemBoxWrap");
    // 숫자를 다시 붙인다.
    reorder();
    var count = $("#linkCount").val();
    count = parseInt(count) + 1;
    $("#linkCount").val(count);
}

/** 아이템 박스 작성 */
function createBox() {
    var type = $("#type").val();
    var parameter = $("#parameter").val();
    var link = $("#urlLink").val();
    var detail = $("#detail").val();
    var url = $("#url").val();
    var contents = '<div class="itemBox form-row w-100 my-3">'
        + '<input type="hidden" name="types" value="'+type+'"/>'
        + '<input type="hidden" name="links" value="'+link+'" />'
        + '<input type="hidden" name="snsId" value="'+parameter+'"/>'
        + '<input type="hidden" name="details" value="'+detail+'"/>'
        + '<div class="col-2 d-flex flex-column p-0">'
        + '<button type="button" class="btn btn-block upBtn"><img src="/assets/images/arrow_up.png" /></button><button type="button" class="btn btn-block downBtn"><img src="/assets/images/arrow_down.png" /></button>'
        + '</div>'
        + '<div class="col-2 d-flex align-items-start justify-content-center font-weight-bold p-0">링크&nbsp;<span class="itemNum"></span></div>'
        + '<div name="item" class="col-7 d-flex flex-column p-0">';
        if(link.length > 50) {
            contents += '<div class="text-center border-bottom py-1 pl-5 mb-2 background-link detail-content-ellipsis" style="background-image: url('+url+');">'+link.substr(0,47)+'...</div>';
        }else {
            contents += '<div class="text-center border-bottom py-1 pl-5 mb-2 background-link detail-content-ellipsis" style="background-image: url('+url+');">'+link+'</div>';
        }
        contents += '<div class="text-center border-bottom py-1 mb-2 text-secondary detail-content-ellipsis">'+detail+'</div>'
            + '</div>'
            + '<div class="col-1 d-flex align-items-start p-0">'
            + '<button type="button" class="btn deleteBox"><img src="/assets/images/cross-out.png" style="width:16px;height:16px;"></button>'
            + '</div>'
            + '</div>';
    return contents;
}
$(function () {
    var idx = getCookie('idx');
    if(idx != "" && idx != null && idx != undefined) {
        $("#addTravelBtn").attr('href','/travel?idx='+idx);
        $("#userIdx").val(idx);
        travelList(idx);
    }else {
        Swal.fire({
            text: '해당 회원정보가 존재하지 않습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
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

    // 모달 초기화 이벤트
    $('#modalCenter').on('hidden.bs.modal', function (e) {
        $(this)
            .find("input,textarea,select")
            // .val('')
            .end()
            .find("input[type=checkbox], input[type=radio]")
            .prop("checked", "")
            .end();
    });

    // 모달 저장 버튼 클릭
    $("#saveBtn").click(function () {
        var html = "";
        if(!$(".flag-ipt").is(":checked")) {
            Swal.fire({
                text: '여행국가를 선택해주세요',
                confirmButtonText: '확인',
                allowOutsideClick: false
            });
            return false;
        }
        var apiAddress = $("#apiAddress").val();
        var dictObject = {};
        $.ajax({
            url: apiAddress+"/api/countryList",
            type: 'GET',
            dataType: 'JSON',
            success: function (response) {
                // console.log(response);
                if(response.countryList != null && response.countryList.length > 0) {
                    for (var i = 0; i < response.countryList.length; i++) {
                        dictObject[response.countryList[i].code] = response.countryList[i].countryKr;
                    }
                }
                $(".flag-ipt:checked").each(function () {
                    var nation = $(this).val();
                    console.log(nation);
                    html += '<div class="itemBox form-row w-100 my-3 h-auto">'
                        + '<input type="hidden" name="nation" value="'+nation+'">'
                        + '<div class="col-auto d-flex align-items-center">여행국가&nbsp;<span class="itemNum"></span></div>'
                        + '<input type="text" class="col d-flex border-0 text-center text-sm-left" style="border-bottom: 1px solid #ddd !important;" value="' + dictObject[nation] + '" readonly>'
                        + '<div class="col-1 d-flex align-items-center">'
                        + '<button type="button" class="btn travelDelBtn"><img src="/assets/images/cross-out.png" style="width:16px;height:16px;"/></button>'
                        + '</div>'
                        + '</div>';
                });
                $("#itemBoxWrap").append(html);
                reorder();
            }
        });
    });

    // 리스트 삭제
    $(document).on('click', '.travelDelBtn', function () {
        $(this).parent().parent().remove();
    });
});
// 리스트
function travelList(idx) {
    var apiAddress = $("#apiAddress").val();
    var dictObject = {};
    // 국가명 한글 리스트
    $.ajax({
        url: apiAddress+"/api/countryList",
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.countryList != null && response.countryList.length > 0) {
                for (var i = 0; i < response.countryList.length; i++) {
                    dictObject[response.countryList[i].code] = response.countryList[i].countryKr;
                }
            }
            $.ajax({
                url: apiAddress+"/api/editAboutTravel?userIdx=" + idx,
                type: 'GET',
                dataType: 'JSON',
                success: function (response) {
                    // console.log(response);
                    if (response.result == true) {
                        if (response.onoff == 0) {
                            $("#switch-normal").attr("checked", true);
                            $("#onoff").val("0");
                        } else {
                            $("#switch-normal").attr("checked", false);
                            $("#onoff").val("1");
                        }

                        if (response.travelList != null && response.travelList.length > 0) {
                            var html = "";
                            var send_array = Array();
                            for (var i = 0; i < response.travelList.length; i++) {
                                send_array[i] = response.travelList[i];
                                html += '<div class="itemBox form-row w-100 my-3 h-auto">'
                                    + '<input type="hidden" name="nation" value="'+response.travelList[i]+'">'
                                    + '<div class="col-auto d-flex align-items-center">여행국가&nbsp;<span class="itemNum"></span></div>'
                                    + '<input type="text" class="col d-flex border-0 text-center text-sm-left" style="border-bottom: 1px solid #ddd !important;" value="' + dictObject[response.travelList[i]] + '" readonly>'
                                    + '<div class="col-1 d-flex align-items-center">'
                                    + '<button type="button" class="btn travelDelBtn"><img src="/assets/images/cross-out.png" style="width:16px;height:16px;"/></button>'
                                    + '</div>'
                                    + '</div>';
                            }
                            $("#itemBoxWrap").empty();
                            $("#itemBoxWrap").append(html);
                            reorder();
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
    });
}
// 수정완료
function travelEdit() {
    var content_array = Array();
    $("input[name=nation]").each(function () {
        var nation = $(this).val();
        content_array.push(nation);
    });
    if(content_array.length > 50) {
        Swal.fire({
            text: '최대 등록 가능 갯수를 초과하였습니다.',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    $("#content").val(content_array);
    var apiAddress = $("#apiAddress").val();
    var datas = $("#travelListForm").serialize();
    $.ajax({
        url: apiAddress+"/api/saveAboutTravel",
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
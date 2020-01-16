$(function () {
    // summernote loading
    $('#summernote').summernote({
        height: 380,
        popover: false,
        toolbar: false
    });

    var idx = getCookie('idx');
    if(idx != "" && idx != null && idx != undefined) {
        $("#userIdx").val(idx);
        infoEditList(idx);
    }else {
        Swal.fire({
            text: '해당 회원정보가 존재하지 않습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            history.back();
        });
    }

    // 글자수 제한
    $('#summernote').on('summernote.change', function(we, contents, $editable) {
        if(contents != "" && contents != null && contents != undefined) {
            var newText = contents.replace(/(<([^>]+)>)/ig,"");
            $("#contentCount").text(newText.length);
            if(newText.length > 500) {
                Swal.fire({
                    text: '해당 게시글은 최대 500자까지 입력 가능합니다',
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                });
                var markupStr = newText.substr(0,500);
                $('#summernote').summernote('code', markupStr);
            }
        }else {
            $("#contentCount").text("0");
        }
    });

    // 기부 동의 체크
    $("#exampleCheck1").change(function () {
        if($(this).is(":checked")) {
            $("#donation").val("1");
        }else {
            $("#donation").val("0");
        }
    });

    // 입력수 제한(1~1000)
    $("#price").change(function () {
        var price = $(this).val();
        price = parseInt(price);
        if(isNaN(price)) {
            Swal.fire({
                text: '숫자만 입력가능합니다',
                confirmButtonText: '확인',
                allowOutsideClick: false
            }).then(function() {
                $(this).val("");
                return false;
            });
        }else if(price <= 0) {
            Swal.fire({
                text: '크레딧 설정은 최소 1이상 입력가능합니다',
                confirmButtonText: '확인',
                allowOutsideClick: false
            }).then(function() {
                $(this).val("1");
                return false;
            });
        }else if(price > 1000) {
            Swal.fire({
                text: '크레딧 설정은 최대 1000까지 입력가능합니다',
                confirmButtonText: '확인',
                allowOutsideClick: false
            }).then(function() {
                $(this).val("1000");
                return false;
            });
        }
        $(this).val(price);
    });

    // 상담분야 추가
    $("#fieldAddBtn").click(function () {
        var content_array = Array();
        $(".fieldArr").each(function (index, item) {
            content_array.push($(item).val());
        });
        if(content_array.length >= 10) {
            Swal.fire({
                text: '설정 가능한 최대치입니다',
                confirmButtonText: '확인',
                allowOutsideClick: false
            });
            return false;
        }
        var html = "";
        html += '<div class="form-row mb-3">'
            + '<div class="col-4 col-md-3 d-flex align-items-center"><b class="span_tw">상담분야</b></div>'
            + '<div class="col-7 col-md-8 d-flex align-items-center"><input type="text" class="form-control fieldArr"></div>'
            + '<div class="col-1 col-md-1 d-flex align-items-center">'
            + '<button type="button" class="btn fieldDetBtn"><img src="/assets/images/cross-out.png" style="width:16px;height:16px;"></button>'
            + '</div>'
            + '</div>';
        $("#field_content").append(html);
    });
    // 상담분야 삭제
    $(document).on('click', '.fieldDetBtn', function () {
        $(this).parent().parent().remove();
    });

    // 기부정책 약관
    $(".modal-btn").click(function () {
        var type = $(this).attr('type');
        var apiAddress = $("#apiAddress").val();
        $.ajax({
            url: apiAddress+"/adminapi/terms",
            type: 'GET',
            dataType: 'JSON',
            success: function (response) {
                if(response.result) {
                    for (var i = 0; i < response.terms.length; i++) {
                        if (response.terms[i].type == type) {
                            $("#modal-content").html(response.terms[i].content);
                        }
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
    });

    // 외국인 링크 클릭 이벤트
    $(document).on("click", "#foreign", function(){
        $("#modalCenter3").modal('show');
        swal.close();
        return false;
    });

    // modal 종료 이벤트
    $('.modalaa').on('hidden.bs.modal', function () {
        if($("#modalCenter2").css('display') == "none" && $("#modalCenter3").css('display') == "none") {
            history.back();
        }
    });
});
function infoEditList(idx) {
    var html = "";
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress + "/api/editChatOption?userIdx=" + idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(!response.result){
                Swal.fire({
                    text: response.msg,
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                });
                return false;
            }
            if(response.user.certificationDate == "" || response.user.certificationDate == null || response.user.certificationDate == undefined) {
                Swal.fire({
                    title: '본인인증 필요',
                    html: '<p style="word-break: keep-all;">나의 경험, 정보에 관한 질문을 받을 분만 본인인증 해주세요! 질문 하실 분은 인증을 안하셔도 됩니다</p>',
                    showCancelButton: true,
                    cancelButtonText: '취소',
                    confirmButtonText: '확인',
                    allowOutsideClick: false,
                    reverseButtons: true,
                    footer: '<span id="foreign" class="font-weight-bold pointer-clicker" style="color: #ff4e00;">English</span>'
                }).then(function (isConfirm) {
                    if(isConfirm.value) {
                        location.href = '/checkplus_main';
                    }else if(isConfirm.dismiss == 'cancel') {
                        history.back();
                    }
                });
            }else if(response.user.account == "" || response.user.account == null || response.user.account == undefined) {
                Swal.fire({
                    text: '관리자인증이 필요한 서비스입니다',
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                }).then(function () {
                    $('#modalCenter2').modal('show');
                });
            }else {
                $('#summernote').summernote('code', response.user.intro);
                $("#price").val(response.user.price);
                $("#donation").val(response.user.donation);
                if(response.user.donation == 1) {
                    $("#exampleCheck1").attr('checked', true);
                }
                var content_array = Array();
                for (var i = 0; i < response.field.length; i++) {
                    if(response.field[i] != "") {
                        content_array[i] = response.field[i];
                        html += '<div class="form-row mb-3">'
                            + '<div class="col-4 col-md-3 d-flex align-items-center"><b>상담분야</b></div>'
                            + '<div class="col-7 col-md-8 d-flex align-items-center"><input type="text" class="form-control fieldArr" value="' + response.field[i] + '"></div>'
                            + '<div class="col-1 col-md-1 d-flex align-items-center">'
                            + '<button type="button" class="btn fieldDetBtn"><img src="/assets/images/cross-out.png" style="width:16px;height:16px;"></button>'
                            + '</div>'
                            + '</div>';
                    }
                }
                $("#field").val(content_array);
                $("#field_content").empty();
                $("#field_content").append(html);
            }
        }
    });
}
function infoEdit() {
    var content_array = Array();
    var list = Array();
    $(".fieldArr").each(function (index, item) {
        content_array.push($(item).val());
    });
    for (var i = 0; i < content_array.length; i++) {
        list[i] = content_array[i];
    }
    $("#field").val(list);
    var field = $("#field").val();
    var price = $("#price").val();
    if(field == "" || field == null || field == undefined) {
        Swal.fire({
            text: '상담분야를 추가해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }else if(price == "" || price == null || price == undefined) {
        Swal.fire({
            text: '크레딧 설정을 입력해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }else if(isNaN(price)) {
        Swal.fire({
            text: '크레딧 설정은 숫자만 입력가능합니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            $(this).val("");
        });
        return false;
    }else if(price <= 0) {
        Swal.fire({
            text: '크레딧 설정은 최소 1이상 입력가능합니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            $(this).val("1");
        });
        return false;
    }else if(price > 1000) {
        Swal.fire({
            text: '크레딧 설정은 최대 1000까지 입력가능합니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            $(this).val("1000");
        });
        return false;
    }
    var apiAddress = $("#apiAddress").val();
    var datas = $("#infoEditForm").serialize();
    $.ajax({
        url: apiAddress + "/api/saveChatOption",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result == true) {
                Swal.fire({
                    text: '저장되었습니다',
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                }).then(function() {
                    location.reload();
                });
            }else {
                if(response.code == 0) {
                    Swal.fire({
                        text: '해당 회원정보가 존재하지 않습니다',
                        confirmButtonText: '확인',
                        allowOutsideClick: false
                    }).then(function() {
                        history.back();
                    });
                }else {
                    Swal.fire({
                        text: response.msg,
                        confirmButtonText: '확인',
                        allowOutsideClick: false
                    });
                    return false;
                }
            }
        }
    });
}
function profileBtn() {
    var name = getCookie('name');
    if(name != "" && name != null && name != undefined) {
        location.href='/'+name;
    }else {
        location.href='/';
    }
}
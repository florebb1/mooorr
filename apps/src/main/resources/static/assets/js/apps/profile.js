function _arrayBufferToBase64( buffer ) {
    var binary = ''
    var bytes = new Uint8Array( buffer )
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] )
    }
    return window.btoa( binary );
}
function orientation(file, callback) {
    var fileReader = new FileReader();
    fileReader.onloadend = function() {
        var base64img = "data:"+file.type+";base64," + _arrayBufferToBase64(fileReader.result);
        var scanner = new DataView(fileReader.result);
        var idx = 0;
        var value = 1; // Non-rotated is the default
        if(fileReader.result.length < 2 || scanner.getUint16(idx) != 0xFFD8) {
            // Not a JPEG
            if(callback) {
                callback(base64img, value);
            }
            return;
        }
        idx += 2;
        var maxBytes = scanner.byteLength;
        while(idx < maxBytes - 2) {
            var uint16 = scanner.getUint16(idx);
            idx += 2;
            switch(uint16) {
                case 0xFFE1: // Start of EXIF
                    var exifLength = scanner.getUint16(idx);
                    maxBytes = exifLength - idx;
                    idx += 2;
                    break;
                case 0x0112: // Orientation tag
                    // Read the value, its 6 bytes further out
                    // See page 102 at the following URL
                    // http://www.kodak.com/global/plugins/acrobat/en/service/digCam/exifStandard2.pdf
                    value = scanner.getUint16(idx + 6, false);
                    maxBytes = 0; // Stop scanning
                    break;
            }
        }
        if(callback) {
            callback(base64img, value);
        }
    }
    fileReader.readAsArrayBuffer(file);
};
$(function() {
    $('#profile-img-change').change(function() {
        $.blockUI();
        var file = $(this)[0].files[0];
        if(file) {
            orientation(file, function(base64img, value) {
                getOrientation(file, function (orientation) {
                    resetOrientation(base64img, orientation, function(resetBase64Image) {
                        $('#output').css('background-image', 'url('+resetBase64Image+')');
                        $.unblockUI();
                    });
                });
            });
        }
    });
    $('#profile-bgimg-change').change(function() {
        $.blockUI();
        var file = $(this)[0].files[0];
        if(file) {
            orientation(file, function(base64img, value) {
                getOrientation(file, function (orientation) {
                    resetOrientation(base64img, orientation, function(resetBase64Image) {
                        $('#output2').css('background-image', 'url('+resetBase64Image+')');
                        $.unblockUI();
                    });
                });
            });
        }
    });

    // 비밀번호 변경 이벤트
    $("#changePwBtn").click(function () {
        var idx = getCookie('idx');
        userSeach(idx);
    });
});

function getOrientation(file, callback) {
    var reader = new FileReader();

    reader.onload = function(event) {
        var view = new DataView(event.target.result);

        if (view.getUint16(0, false) != 0xFFD8) return callback(-2);

        var length = view.byteLength,
            offset = 2;

        while (offset < length) {
            var marker = view.getUint16(offset, false);
            offset += 2;

            if (marker == 0xFFE1) {
                if (view.getUint32(offset += 2, false) != 0x45786966) {
                    return callback(-1);
                }
                var little = view.getUint16(offset += 6, false) == 0x4949;
                offset += view.getUint32(offset + 4, little);
                var tags = view.getUint16(offset, little);
                offset += 2;

                for (var i = 0; i < tags; i++)
                    if (view.getUint16(offset + (i * 12), little) == 0x0112)
                        return callback(view.getUint16(offset + (i * 12) + 8, little));
            }
            else if ((marker & 0xFF00) != 0xFF00) break;
            else offset += view.getUint16(offset, false);
        }
        return callback(-1);
    };

    reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
};

// function resetOrientation(srcBase64, srcOrientation, callback) {
function resetOrientation(srcBase64, srcOrientation, callback) {
    var img = new Image();

    img.onload = function() {
        var width = img.width,
            height = img.height,
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext("2d");

        // set proper canvas dimensions before transform & export
        if (4 < srcOrientation && srcOrientation < 9) {
            canvas.width = height;
            canvas.height = width;
        } else {
            canvas.width = width;
            canvas.height = height;
        }

        // transform context before drawing image
        switch (srcOrientation) {
            case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
            case 3: ctx.transform(-1, 0, 0, -1, width, height ); break;
            case 4: ctx.transform(1, 0, 0, -1, 0, height ); break;
            case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
            case 6: ctx.transform(0, 1, -1, 0, height , 0); break;
            case 7: ctx.transform(0, -1, -1, 0, height , width); break;
            case 8: ctx.transform(0, -1, 1, 0, 0, width); break;
            default: break;
        }

        // draw image
        ctx.drawImage(img, 0, 0);

        // export base64
        callback(canvas.toDataURL());
    };

    img.src = srcBase64;
}

$(function () {
    var idx = getCookie('idx');
    $("#userIdx").val(idx);
    profileInfo(idx);

    $("#switch-normal").change(function () {
        if($("#switch-normal").is(":checked") == true) {
            $("#onoff").val(0);
        }else {
            $("#onoff").val(1);
        }
    });

    var nickExp = /^[A-za-z0-9]{3,12}$/g;
    $("#userName").on('change',function () {
        var apiAddress = $("#apiAddress").val();
        var nickVal = $(this).val();
        if(nickVal == "") {
            $("#nicCheck").removeClass('icon-checked2');
            $("#nicCheck").removeClass('icon-checked3');
            $("#nicCheck").addClass('icon-checked');
        }else {
            $.ajax({
                url: apiAddress + "/api/nameCheck?name="+nickVal,
                type: 'GET',
                dataType: 'JSON',
                success: function (response) {
                    // console.log(response);
                    if(response.result == true) {
                        if(nickVal.match(nickExp) != null) {
                            $("#nicCheck").removeClass('icon-checked');
                            $("#nicCheck").removeClass('icon-checked2');
                            $("#nicCheck").addClass('icon-checked3');
                        }else {
                            $("#nicCheck").removeClass('icon-checked');
                            $("#nicCheck").removeClass('icon-checked3');
                            $("#nicCheck").addClass('icon-checked2');
                        }
                    }else {
                        Swal.fire({
                            text: response.msg,
                            confirmButtonText: '확인',
                            allowOutsideClick: false
                        }).then(function() {
                            $("#nicCheck").removeClass('icon-checked2');
                            $("#nicCheck").removeClass('icon-checked3');
                            $("#nicCheck").addClass('icon-checked');
                            $("#userName").val("");
                        });
                    }
                }
            });
        }
    });

    $("#statusMessage").on('keyup', function () {
        var text = $(this).val();
        if(text.length < 21) {
            $("#statusMessageCount").text(text.length);
        }else {
            Swal.fire({
                text: '상태메세지는 20자이내로 작성해주세요',
                confirmButtonText: '확인',
                allowOutsideClick: false
            }).then(function () {
                $("#statusMessage").val(text.substring(0,20));
            });
        }
    });

    $("#infoEditBtn").click(function () {
        if($("#userName").val() == "") {
            Swal.fire({
                text: '닉네임을 입력해주세요',
                confirmButtonText: '확인',
                allowOutsideClick: false
            });
            return false;
        }else if(!$("#nicCheck").hasClass('icon-checked3')) {
            Swal.fire({
                text: '닉네임 형식을 확인해주세요',
                confirmButtonText: '확인',
                allowOutsideClick: false
            });
            return false;
        }else if($("#statusMessage").val().length > 30) {
            Swal.fire({
                text: '메세지 입력범위를 초과하였습니다',
                confirmButtonText: '확인',
                allowOutsideClick: false
            });
            return false;
        }
        var apiAddress = $("#apiAddress").val();
        var datas = $("#infoEditForm").serialize();
        $("#infoEditForm").ajaxSubmit({
            url: apiAddress+"/api/saveProfile",
            processData: false,
            contentType: false,
            type: 'POST',
            dataType: 'JSON',
            data: datas,
            success: function (response) {
                if(response.result) {
                    Swal.fire({
                        title: '수정 완료',
                        text: '수정이 완료되었습니다',
                        confirmButtonText: '확인',
                        allowOutsideClick: false
                    }).then(function () {
                        setCookie('name', $("#userName").val(), 7);
                        var popup = getCookie('p_popup');
                        if(popup == "" || popup == null || popup == undefined) {
                            $("#modalCenter").modal('show');
                        }else {
                            location.href='/'+getCookie('name');
                        }
                    });
                }else{
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
        })
    });

    // 모달 종료 이벤트
    $('#modalCenter').on('hidden.bs.modal', function () {
        var name = getCookie('name');
        if(name != "" && name != null && name != undefined) {
            location.href='/'+name;
        }else {
            location.href='/';
        }
    });

    // 링크 복
    $("#copyLinkBtn").click(function () {
        $("#userUrl").select();
        document.execCommand("copy");
        Swal.fire({
            text: '클립보드에 복사되었습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
    });

    // 모달 체크박스 이벤트
    $("#modalChk").change(function(){
        if($(this).is(":checked") == true) {
            setCookie('p_popup', 'checked', 1);
            $("#modalCenter").modal('hide');
        }
    });
});
function profileInfo(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/editInfo?userIdx="+idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.result) {
                if (response.user.profileImage != "" && response.user.profileImage != null && response.user.profileImage != undefined) {
                    // $("#output").attr('src', apiAddress+response.user.profileImage);
                    $("#output").css('background-image', 'url(' + apiAddress + response.user.profileImage + ')');
                }
                if (response.user.backgroundImage != "" && response.user.backgroundImage != null && response.user.backgroundImage != undefined) {
                    // $("#output2").attr('src', apiAddress+response.user.backgroundImage);
                    $("#output2").css('background-image', 'url(' + apiAddress + response.user.backgroundImage + ')');
                }
                // $("#onoff").val(response.user.infoOn);
                // if (response.user.infoOn == 0) {
                //     $("#switch-normal").attr("checked", true);
                // } else {
                //     $("#switch-normal").attr("checked", false);
                // }
                $("#userName").val(response.user.userName);
                $("#nicCheck").addClass('icon-checked3');
                $("#statusMessage").val(response.user.statusMessage);
                if (response.user.statusMessage != "" && response.user.statusMessage != null && response.user.statusMessage != undefined) {
                    $("#statusMessageCount").text(response.user.statusMessage.length);
                } else {
                    $("#statusMessageCount").text("0");
                }
                $("#userUrl").val("https://mooorr.com/" + response.user.userName);
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
function userSeach(idx) {
    var apiAddress = $("#apiAddress").val();
    $.ajax({
        url: apiAddress+"/api/userInfo?userIdx="+idx,
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            // console.log(response.user);
            if (response.user.userIdx != "") {
                if(response.user.fToken != "" && response.user.fToken != null && response.user.fToken != undefined) {
                    Swal.fire({
                        text: '간편 로그인 이용자는 비밀번호 변경이 불가능합니다',
                        confirmButtonText: '확인',
                        allowOutsideClick: false
                    });
                    return false;
                }else if(response.user.gToken != "" && response.user.gToken != null && response.user.gToken != undefined) {
                    Swal.fire({
                        text: '간편 로그인 이용자는 비밀번호 변경이 불가능합니다',
                        confirmButtonText: '확인',
                        allowOutsideClick: false
                    });
                    return false;
                }else {
                    location.href='/change_pw?id='+response.user.loginId;
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
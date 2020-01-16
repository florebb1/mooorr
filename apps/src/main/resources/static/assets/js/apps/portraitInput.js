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
    if(idx != "" && idx != null && idx != undefined) {
        $("#userIdx").val(idx);
    }else {
        Swal.fire({
            text: '해당 회원정보가 존재하지 않습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            history.back();
        });
    }
});
function addPortrait() {
    var file = $("#profile-img-change").val();
    if(file == "") {
        Swal.fire({
            text: '사진을 등록해주세요',
            confirmButtonText: '확인',
            allowOutsideClick: false
        });
        return false;
    }
    var apiAddress = $("#apiAddress").val();
    var datas = $("#portraitAddForm").serialize();
    $("#portraitAddForm").ajaxSubmit({
        url: apiAddress+"/api/saveAboutLife",
        processData: false,
        contentType: false,
        type: 'POST',
        dataType: 'JSON',
        data: datas,
        success: function (response) {
            if(response.result) {
                // console.log(response);
                location.href = '/portrait';
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
}
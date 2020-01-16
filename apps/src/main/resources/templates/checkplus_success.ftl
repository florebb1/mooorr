<#include "/layout/header.ftl">
<#include "/layout/main_header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?js_string}">
<!--본인인증 가이드 Modal(KR) -->
<div class="modal fade" id="modalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
        <div class="modal-content" style="min-height: 50vh;">
            <div class="modal-header border-0 p-5">
                <div class="modal-title" id="modal-title">
                    <span class="font-23">신분 인증 가이드</span><br><br>
                    <span class="font-15 text-secondary">당신의 소중한 경험과 정보 공유로<br>사람들도 돕고 수익도 얻어가세요.</span>
                </div>
                <button type="button" class="close font-25" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div id="modal-content" class="modal-body p-5">
                <p class="font-25">STEP 1.</p>
                <div class="p-3 border-radius-10" style="background-color: #f7fbff;">
                    <p class="mb-3" style="line-height: 30px;"><span class="font-weight-bold font-15">신분 인증</span><br>아래 사항을 모어 이메일로 보내주세요.</p>
                    <p class="font-weight-bold font-15" style="line-height: 30px; word-break: keep-all;">
                        1. 얼굴 전체와 신분증 주민번호 앞자리가 나오게 5초 동안 동영상 촬영<br>
                        2. 회원가입시 등록한 이메일로 아래 ‘주소’로 발송
                    </p>
                </div>
                <div class="row mx-0 my-3 border-radius-10 p-3 text-white text-center" style="background-color: #ff4e00;">
                    <div class="col-5 col-md-4">보내는 주소</div>
                    <div class="col-7 col-md-8">help@mooorr.com</div>
                </div>

                <img src="/assets/images/IDcheck_guide.png" class="w-100 mb-5">

                <p class="font-25">STEP 2.</p>
                <div class="p-3 border-radius-10 mb-5" style="background-color: #f7fbff;">
                    <p class="mb-3 font-weight-bold font-15">인증 완료</p>
                    <div style="word-break: keep-all;">인증 소요기간은 약 3일이며, 완료 후 확인 메일 발송드립니다.</div>
                </div>

                <p class="font-25">STEP 3.</p>
                <div class="p-3 border-radius-10 mb-5" style="background-color: #f7fbff;">
                    <p class="mb-3 font-weight-bold font-15">메세지/프로필 작성</p>
                    <p>메시지 정보 및 프로필 내용을 잘 작성해주세요.</p>
                    <div>(*필수 작성 : 프로필 사진, 마이링크 등)</div>
                </div>
                <div class="p-5 my-5 text-center font-weight-bold">
                    <p>모어는 정확한 인증시스템을 통해</p>
                    <p>정보제공의 신뢰도를 높이고자 합니다.</p>
                    <div>감사합니다.</div>
                </div>
                <button type="button" class="btn btn-primary btn-block btn-h4" onclick="profileBtn();">내 프로필</button>
            </div>
        </div>
    </div>
</div>
<#include "/layout/base_script.ftl">
<script language='javascript'>
    $(function () {
        auth();

        // modal 종료 이벤트
        $('.modal').on('hidden.bs.modal', function () {
            if($("#modalCenter2").css('display') == "none") {
                history.back();
            }
        });
    });
    function auth() {
        var ymd = "${sBirthDate?js_string}";
        var gender = "${sGender?js_string}";
        var ph = "${sMobileNo?default("01012341234")}";

        var apiAddress = $("#apiAddress").val();
        if(gender == "0") {
            gender = "F";
        }else {
            gender = "M";
        }
        var datas = {
            userIdx : getCookie('idx'),
            phoneNum : ph,
            birthdate : ymd,
            gender : gender
        };
        $.ajax({
            url: apiAddress + "/api/saveCertificationDate",
            type: 'POST',
            data: datas,
            dataType: 'JSON',
            success: function (response) {
                // console.log(response);
                if(response.result == true) {
                    Swal.fire({
                        text: '본인인증이 완료되었습니다',
                        confirmButtonText: '확인',
                        allowOutsideClick: false
                    }).then(function() {
                        $("#modalCenter2").modal('show');
                    });
                }else {
                    Swal.fire({
                        text: response.msg,
                        confirmButtonText: '확인',
                        allowOutsideClick: false
                    }).then(function() {
                        var name = getCookie('name');
                        if(name != "" && name != null && name != undefined) {
                            location.href='/'+name;
                        }else {
                            history.back();
                        }
                    });
                }
            },error: function (jqXHR) {
                console.log(jqXHR.responseText);
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
</script>
<#include "/layout/footer.ftl">
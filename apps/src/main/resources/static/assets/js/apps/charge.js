$(function () {
    var protocol = window.location.protocol;
    var url = window.location.host;
    // 상품 선택 이벤트
    $(".goods").click(function () {
        if(!$(this).hasClass('btn-charge-active')) {
            $(".goods").removeClass('btn-charge-active');
            $(this).addClass('btn-charge-active');
        }
        var name = $(this).attr('data-name');
        var krprice = $(this).attr('kr-price');
        var usprice = $(this).attr('us-price');
        $("#goods_name").val(name);
        $("#kr_price").val(krprice);
        $("#us_price").val(usprice);
    });

    // 약관 클릭 이벤트
    $("#termsBtn").click(function () {
        var type = $("#termsContent").attr('type');
        var apiAddress = $("#apiAddress").val();
        $.ajax({
            url: apiAddress+"/adminapi/terms",
            type: 'GET',
            dataType: 'JSON',
            success: function (response) {
                if(response.result) {
                    for (var i = 0; i < response.terms.length; i++) {
                        if (response.terms[i].type == type) {
                            $("#termsContent").html(response.terms[i].content);
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
       $("#termsContent").toggleClass('d-none');
    });

    $(".paypal").click(function () {
        //페이팔========================================================================
        var name = $("#goods_name").val();
        var price = $("#us_price").val();
        var userIdx = getCookie('idx');
        console.log("userIdx : "+userIdx);
        var merchantUid = new Date();
        merchantUid = merchantUid.getTime();
        console.log("merchantUid : "+merchantUid);

        if(name == "" || name == null || name == undefined){
            Swal.fire({
                text: '상품 선택을 해주세요',
                confirmButtonText: '확인',
                allowOutsideClick: false
            });
            return false;
        }

        var apiAddress = $("#apiAddress").val();
        var IMP = window.IMP; // 생략해도 괜찮습니다.
        IMP.init("imp78307256");
        IMP.request_pay({ // param
            pg: "paypal",
            pay_method: "card",
            merchant_uid: merchantUid,    //모어 주문번호 랜덤생성
            name: name, //상품이름
            amount: price,  //값
            m_redirect_url : protocol+url+"/charge_paypal?amount="+price, //?imp_uid={imp_uid}&merchant_uid={merchant_uid}&imp_success={true/false}
            buyer_email: getCookie('email'),   //구매자메일
            buyer_tel: "01042424242" //구매자폰번호
        }, function (rsp) { // callback
            if (rsp.success) { // 결제 성공 시: 결제 승인 또는 가상계좌 발급에 성공한 경우
                $.ajax({
                    url: apiAddress+"/api/payments_complete", // 가맹점 서버
                    type: "POST",
                    dataType: 'JSON',
                    data: {
                        impUid: rsp.imp_uid,   //아임포트 결제번호
                        //merchant_uid: rsp.merchant_uid, //모어 주문번호 만드는 로직 생성
                        payMethod: rsp.pay_method, //결제수단
                        status: rsp.status, //결제상태
                        applyNum : rsp.apply_num,   //승인번호
                        userIdx: userIdx,
                        currency : "USD", //통화구분
                        price : rsp.paid_amount //최종결제금액
                    },
                    success : function (response) {
                        //성공시 done으로 감
                       if(!response.result){
                           Swal.fire({
                               text: response.msg,
                               confirmButtonText: '확인',
                               allowOutsideClick: false
                           });
                           return false;
                       }
                    }, error : function (response) {
                        console.log(response);
                        location.href = '/charge';
                    }
                }).done(function () {
                    Swal.fire({
                        text: '결제가 완료되었습니다',
                        confirmButtonText: '확인',
                        allowOutsideClick: false
                    }).then(function() {
                        location.href= m_redirect_url;
                    });
                })
            } else {
                Swal.fire({
                    text: '결제에 실패하였습니다. 실패 사유 :'+rsp.error_msg,
                    confirmButtonText: '확인',
                    allowOutsideClick: false
                });
                return false;
            }
        });

    });

    $(".inipay").click(function () {   //이니시스
        console.log("merchantUid : "+merchantUid);
        var name = $("#goods_name").val();
        var price = $("#kr_price").val();
        var userIdx = getCookie('idx');
        console.log("userIdx : "+userIdx);
        var merchantUid = new Date();
        merchantUid = merchantUid.getTime();
        console.log("merchantUid : "+merchantUid);
        if(name == "" || name == null || name == undefined){
            Swal.fire({
                text: '상품 선택을 해주세요',
                confirmButtonText: '확인',
                allowOutsideClick: false
            });
            return false;
        }
        var apiAddress = $("#apiAddress").val();
        var IMP = window.IMP; // 생략해도 괜찮습니다.
        IMP.init("imp78307256");


        var filter = "win16|win32|win64|mac|macintel";
        if ( navigator.platform ) {
            if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
                //이니시스 모바일==================================================================
                IMP.request_pay({ // param
                    pg: "html5_inicis",
                    pay_method: "card",
                    merchant_uid: merchantUid,    //모어 주문번호 랜덤생성
                    m_redirect_url : protocol+url+"/charge_inipay?amount="+price, //?imp_uid={imp_uid}&merchant_uid={merchant_uid}&imp_success={true/false}
                    name: name, //상품이름
                    amount: price,  //값
                    buyer_email: getCookie('email'),   //구매자메일
                    buyer_tel: "00000000000" //구매자폰번호
                }, function (rsp) { // callback
                    if (rsp.success) { // 결제 성공 시: 결제 승인 또는 가상계좌 발급에 성공한 경우
                        $.ajax({
                            url: apiAddress+"/api/payments_complete", // 가맹점 서버
                            type: "POST",
                            dataType: 'JSON',
                            data: {
                                impUid: rsp.imp_uid,   //아임포트 결제번호
                                //merchant_uid: rsp.merchant_uid, //모어 주문번호 만드는 로직 생성
                                payMethod: rsp.pay_method, //결제수단
                                status: rsp.status, //결제상태
                                applyNum : rsp.apply_num,   //승인번호
                                userIdx: userIdx,
                                currency : "KRW", //통화구분
                                price : rsp.paid_amount //최종결제금액
                            },
                            success : function (response) {
                                //성공시 done으로 감
                                if(!response.result){
                                    Swal.fire({
                                        text: response.msg,
                                        confirmButtonText: '확인',
                                        allowOutsideClick: false
                                    });
                                    return false;
                                }
                            }, error : function (response) {
                                Swal.fire({
                                    text: '결제 실패, 다시 시도해주세요',
                                    confirmButtonText: '확인',
                                    allowOutsideClick: false
                                }).then(function() {
                                    location.href = '/charge';
                                });
                            }
                        }).done(function () {
                            Swal.fire({
                                text: '결제가 완료되었습니다',
                                confirmButtonText: '확인',
                                allowOutsideClick: false
                            }).then(function() {
                                location.href="/point";
                            });
                        })
                    } else {
                        Swal.fire({
                            text: '결제에 실패하였습니다. 실패 사유 :' +rsp.error_msg,
                            confirmButtonText: '확인',
                            allowOutsideClick: false
                        });
                    }
                });
            }else{
                //이니시스 PC=========================================================
                IMP.request_pay({ // param
                    pg: "html5_inicis",
                    pay_method: "card",
                    merchant_uid: merchantUid,    //모어 주문번호 랜덤생성
                    name: name, //상품이름
                    amount: price,  //값
                    buyer_email: "",   //구매자메일
                    buyer_tel: "00000000000" //구매자폰번호
                }, function (rsp) { // callback
                    if (rsp.success) { // 결제 성공 시: 결제 승인 또는 가상계좌 발급에 성공한 경우
                        $.ajax({
                            url: apiAddress+"/api/payments_complete", // 가맹점 서버
                            type: "POST",
                            dataType: 'JSON',
                            data: {
                                impUid: rsp.imp_uid,   //아임포트 결제번호
                                //merchant_uid: rsp.merchant_uid, //모어 주문번호 만드는 로직 생성
                                payMethod: rsp.pay_method, //결제수단
                                status: rsp.status, //결제상태
                                applyNum : rsp.apply_num,   //승인번호
                                userIdx: userIdx,
                                currency : "KRW", //통화구분
                                price : rsp.paid_amount //최종결제금액
                            },
                            success : function (response) {
                                //성공시 done으로 감
                                if(!response.result){
                                    Swal.fire({
                                        text: response.msg,
                                        confirmButtonText: '확인',
                                        allowOutsideClick: false
                                    });
                                    return false;
                                }
                            }, error : function (response) {
                                Swal.fire({
                                    text: '결제 실패, 다시 시도해주세요',
                                    confirmButtonText: '확인',
                                    allowOutsideClick: false
                                }).then(function() {
                                    location.href = '/charge';
                                });
                            }
                        }).done(function () {
                            Swal.fire({
                                text: '결제가 완료되었습니다',
                                confirmButtonText: '확인',
                                allowOutsideClick: false
                            }).then(function() {
                                location.href="/point";
                            });
                        })
                    } else {
                        Swal.fire({
                            text: '결제에 실패하였습니다. 실패 사유 : ' +rsp.error_msg,
                            confirmButtonText: '확인',
                            allowOutsideClick: false
                        });
                    }
                });
            }
        }
    });
});
<#include "/layout/header.ftl">
	<form id="paypalForm">
		<input type="hidden" id="apiAddress" value="${apiAddress?string}">
	</form>
<#include "/layout/main_header.ftl">
<#include "/layout/base_script.ftl">
<script type="text/javascript" src="//cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
<script>
	$(function () {
		var userIdx = getCookie('idx');
		var imp_uid = getParameter('imp_uid');
		var imp_success = getParameter('imp_success');
		var amount = getParameter('amount');
		var apiAddress = $("#apiAddress").val();
		if(imp_success == "false") {
			Swal.fire({
				text: '결제가 취소되었습니다\n결제페이지로 이동합니다',
				confirmButtonText: '확인',
				allowOutsideClick: false
			}).then(function() {
				location.href='/charge';
			});
			return false;
		}
		$.ajax({
			url: apiAddress + "/api/payments_complete", // 가맹점 서버
			type: "POST",
			dataType: 'JSON',
			data: {
				impUid: imp_uid,   //아임포트 결제번호
				//merchant_uid: rsp.merchant_uid, //모어 주문번호 만드는 로직 생성
				payMethod: "card", //결제수단
				status: imp_success, //결제상태
				applyNum: "0000",   //임시승인번호
				userIdx: userIdx,
				currency: "USD", //통화구분
				price: amount //최종결제금액
			},
			success: function (response) {
				if(response.result){
					Swal.fire({
						text: '결제가 완료되었습니다',
						confirmButtonText: '확인',
						allowOutsideClick: false
					}).then(function() {
						location.href='/point';
					});
				}else{
					Swal.fire({
						text: response.msg,
						confirmButtonText: '확인',
						allowOutsideClick: false
					}).then(function() {
						location.href='/point';
					});
					return false;
				}

			}, error: function (response) {
				console.log(response);
				location.href = '/charge';
			}
		})
	});
</script>
<#include "/layout/footer.ftl">
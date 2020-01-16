<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<div class="container-fluid fluid-wrap bg-white">
	<div class="position-absolute font-23 dt-none font-weight-light" style="top: 5%; left: 5%;">인증메일 발송</div>
	<div class="d-flex flex-column justify-content-center align-items-center h-100">

		<div class="login-wrap">
			<h1 class="d-flex justify-content-center align-items-center">
				<img src="assets/images/747@3x.png" style="width: 193px; height: 73px;"/>
			</h1>

			<div class="text-center">
				입력하신 이메일로 인증메일을 전송했습니다.<br>인증메일을 확인해주세요.
			</div>

			<form id="facebookAuthForm" onsubmit="return false;">
				<div class="form-group my-5">
					<input type="hidden" id="apiAddress" value="${apiAddress?string}">
					<input type="hidden" id="userIdx">
					<input type="hidden" id="loginId" name="loginId">
					<input type="hidden" id="userName">
					<input type="text" class="form-control" id="emailChkCode" name="emailChkCode" placeholder="인증번호">
				</div>
				<button type="button" class="btn btn-primary btn-block btn-h4" onclick="checkEmail();">다음</button>
			</form>

			<div class="text-center mt-5">
				<b>메일이 오지 않으셨나요?</b>
			</div>
			<div class="text-center mt-3">
				<button id="reTry" class="btn btn-link" style="color: #ff4e00;" onclick="sendEmail()">인증메일 재전송</button>
			</div>
		</div>

	</div>
</div>
<#include "/layout/base_script.ftl">
<script>
	$(function () {
		var email = getParameter('email');
		$("#loginId").val(email);
		var idx = getParameter('idx');
		$("#userIdx").val(idx);
		userInfo(idx);
	});
	
	function checkEmail() {
		var idx = $("#userIdx").val();
		var id = $("#loginId").val();
		var code = $("#emailChkCode").val();
		if(code == "" || code == null || code == undefined) {
			swal({
				button: "확인",
				closeOnClickOutside: false,
				text: '인증번호를 입력해주세요'
			});
			return false;
		}
		var apiAddress = $("#apiAddress").val();
		$.ajax({
			url: apiAddress + "/api/certCodeChk?emailChkCode="+code+"&loginId="+id,
			type: 'GET',
			dataType: 'JSON',
			success: function (response) {
				console.log(response);
				if(response.result == true) {
					$.ajax({
						url: apiAddress + "/api/saveLoginId?userIdx=" + idx + "&loginId=" + id,
						type: 'GET',
						dataType: 'JSON',
						success: function (response) {
							console.log(response);
							if(response.result == true) {
								swal({
									button: "확인",
									closeOnClickOutside: false,
									text: '이메일 적용이 완료되었습니다\n메인페이지로 이동합니다'
								}).then(function() {
									setCookie('idx', idx, 7);
									setCookie('email', id, 7);
									setCookie('name', response.user.userNAme, 7);
									location.href='/'+response.user.userName;
								});
							}

						},error: function (jqXHR) {
							console.log(jqXHR.responseText);
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
	function sendEmail() {
		var apiAddress = $("#apiAddress").val();
		var datas = $("#facebookAuthForm").serialize();
		$.ajax({
			url: apiAddress+"/api/emailChk",
			type: 'POST',
			dataType: 'JSON',
			data: datas,
			success: function (response) {
				if(response.result == true) {
					swal({
						button: "확인",
						closeOnClickOutside: false,
						text: '인증번호가 발송되었습니다'
					});
				}else if(response.code ==0){
					Swal.fire({
						text: '이메일 정보를 확인해주세요',
						confirmButtonText: '확인',
						allowOutsideClick: false
					});
					return false;
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

	function userInfo(idx) {
		var apiAddress = $("#apiAddress").val();
		$.ajax({
			url: apiAddress + "/api/userInfo?userIdx=" + idx,
			type: 'GET',
			dataType: 'JSON',
			success: function (response) {
				// console.log(response);
				if(response.result == true) {
					$("#userName").val(response.user.userName);
				}
			}
		});
	}
</script>
<#include "/layout/footer.ftl">
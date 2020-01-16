<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
	<div class="container-fluid fluid-wrap bg-white">
		<div class="position-absolute font-23 dt-none font-weight-light" style="top: 5%; left: 5%;">인증메일 발송</div>
		<div class="d-flex flex-column justify-content-center align-items-center h-100">

			<div class="login-wrap">
				<h1 class="d-flex justify-content-center align-items-center">
					<img src="assets/images/email_send.png">
				</h1>

				<div class="text-center">
					입력하신 이메일로 인증메일을 전송했습니다.<br>인증메일을 확인해주세요.
				</div>

				<form id="EmailAuthForm" onsubmit="return false;">
					<div class="form-group my-5">
						<input type="hidden" id="apiAddress" value="${apiAddress?string}">
						<input type="hidden" id="loginId" name="loginId">
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
<script src="/assets/js/apps/emailAuthentication.js"></script>
<#include "/layout/footer.ftl">
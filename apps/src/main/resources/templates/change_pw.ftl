<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
	<div class="container-fluid fluid-wrap bg-white">
		<div class="position-absolute font-23 dt-none font-weight-light" style="top: 5%; left: 5%;">비밀번호 변경</div>
		<div class="d-flex flex-column justify-content-center align-items-center h-100">

			<div class="login-wrap">

				<div class="text-center mb-none">
					비밀번호 변경을 위해 로그인 정보를 입력해주세요
				</div>

				<form id="changePwForm" class="my-5 py-5" onsubmit="return false;">
					<div class="form-group my-5">
						<input type="hidden" id="apiAddress" value="${apiAddress?string}">
						<input type="text" id="loginId" name="loginId" class="form-control my-3" placeholder="아이디" readonly style="background-color: transparent;">
						<input type="password" id="pwd" name="pwd" class="form-control my-3" placeholder="비밀번호">
					</div>
					<button type="button" class="btn btn-primary btn-block btn-h4" onclick="userCheck();">다음</button>
				</form>

			</div>

		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/changePw.js"></script>
<#include "/layout/footer.ftl">
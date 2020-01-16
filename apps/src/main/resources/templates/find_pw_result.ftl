<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
	<div class="container-fluid fluid-wrap bg-white">
		<div class="position-absolute font-23 dt-none font-weight-light" style="top: 5%; left: 5%;">비밀번호 변경</div>
		<div class="d-flex flex-column justify-content-center align-items-center h-100">

			<div class="login-wrap">

				<div class="text-center">
					새로운 비밀번호를 지정할 수 있습니다
				</div>

				<form id="findPwForm" onsubmit="return false;">
					<div class="form-group my-5">
						<input type="hidden" id="apiAddress" value="${apiAddress?string}">
						<input type="hidden" id="loginId" name="loginId">
						<input type="password" id="newPwd" name="newPwd" class="form-control my-3" placeholder="새 비밀번호">
						<input type="password" id="newPwd2" class="form-control mt-3" placeholder="새 비밀번호 확인">
						<small id="passwordHelp" class="form-text text-muted mb-3">8 ~ 20 자리의 영문+숫자+특수기호(<span class="text-danger">$@$!%*#?&</span>)만 가능합니다.</small>
					</div>
					<button type="button" class="btn btn-primary btn-block btn-h4" onclick="changePw();">비밀번호 변경</button>
				</form>

			</div>

		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/findPwResult.js"></script>
<#include "/layout/footer.ftl">
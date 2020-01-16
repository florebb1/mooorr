<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
	<div class="container-fluid fluid-wrap bg-white">
		<div class="d-flex flex-column justify-content-center align-items-center h-100">
			<div class="position-absolute font-23 font-weight-light dt-none" style="top: 5%; left: 5%;">비밀번호 찾기</div>
			<div class="login-wrap">
<#--				<h5 class="d-flex align-items-center my-5 font-23 font-weight-light">상세정보 입력</h5>-->
				<div class="d-flex justify-content-center align-items-center mb-5">찾으실 계정의 정보를 입력해주세요.</div>
<#--				<div class="d-flex justify-content-center align-items-center mb-5">정보를 입력해주세요.</div>-->
				<form id="findPwForm" onsubmit="return false;">
					<div class="form-group">
						<input type="hidden" id="apiAddress" value="${apiAddress?string}">
						<input type="email" class="form-control" id="loginId" name="loginId" placeholder="Email">
					</div>
					<div class="form-group mb-5 pb-5">
						<input type="text" class="form-control" id="userName" name="userName" placeholder="User name">
					</div>
					<button type="button" class="btn btn-primary btn-block btn-h4" onclick="findPw();">다음</button>
				</form>
			</div>

		</div>
	</div>

<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/findPw.js"></script>
<#include "/layout/footer.ftl">
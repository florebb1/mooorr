<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
	<div class="container-fluid fluid-wrap bg-white">
		<div class="d-flex flex-column justify-content-center align-items-center h-100">
			<div class="position-absolute font-23 font-weight-light dt-none" style="top: 5%; left: 5%;">아이디 찾기</div>
			<div class="login-wrap">
				<div class="d-flex justify-content-center align-items-center mb-5">찾으실 계정의 사용자 이름을 입력해주세요.</div>
<#--				<div class="d-flex justify-content-center align-items-center mb-5">사용자 이름을 입력해주세요.</div>-->
				<form id="findIdForm" onsubmit="return false;">
					<div class="form-group my-5 py-5">
						<input type="hidden" id="apiAddress" value="${apiAddress?string}">
						<input type="text" class="form-control" id="userName" name="userName" placeholder="User name">
					</div>
					<button type="button" class="btn btn-primary btn-block btn-h4" onclick="findId();">다음</button>
				</form>
			</div>

		</div>
	</div>

<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/findId.js"></script>
<#include "/layout/footer.ftl">
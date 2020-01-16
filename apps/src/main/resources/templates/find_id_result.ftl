<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
	<div class="container-fluid fluid-wrap bg-white">
		<div class="position-absolute font-23 dt-none font-weight-light" style="top: 5%; left: 5%;">아이디 찾기</div>
		<div class="d-flex flex-column justify-content-center align-items-center h-100">

			<div class="login-wrap">

				<div class="text-center">
					일치하는 정보의 아이디를 찾았습니다
				</div>

				<form id="EmailAuthForm" onsubmit="return false;">
					<div class="form-group my-5">
						<input type="hidden" id="apiAddress" value="${apiAddress?string}">
						<div id="find_result" class="text-center font-weight-bold font-23"></div>
					</div>
					<button type="button" class="btn btn-primary btn-block btn-h4 moveBtn" onclick="location.href='/login'">로그인</button>
				</form>

				<div class="text-center mt-5">
					<a href="/find_pw" class="font-weight-bold moveBtn">비밀번호찾기</a>
				</div>
			</div>

		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/findIdResult.js"></script>
<#include "/layout/footer.ftl">
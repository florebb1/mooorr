<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
	<div class="container-fluid fluid-wrap login-background">
		<div class="d-flex flex-column justify-content-center align-items-center h-100">
			<div class="login-wrap">
<#--				<h1 class="d-flex justify-content-right align-items-center">-->
				<h1>
					<img class="w-25" src="assets/images/logo2.png"/>
				</h1>
<#--				</h1>-->
				<div class="font-23 my-5 text-white">More,<br>Once more relationships</div>
				<form id="loginForm">
					<input type="hidden" id="apiAddress" value="${apiAddress?string}">
					<div class="form-group pt-5 pb-3">
						<input type="email" class="login-input py-2" id="loginId" name="loginId" placeholder="Email">
					</div>
					<div class="form-group pt-3">
						<input type="password" class="login-input py-2" id="pwd" name="pwd" placeholder="Password">
					</div>
					<div class="row form-group text-right mb-5">
						<div class="col-6 text-black-50 text-left">
							<input type="checkbox" id="autoLogin">
							<label for="autoLogin" class="text-white">자동로그인</label>
						</div>
						<div class="col-6 text-white"><a href="/find_id" class="text-white text-decoration-none">Find email</a> / <a href="/find_pw" class="text-white text-decoration-none">pw</a></div>
					</div>
					<div class="mt-2 pt-5">
						<button type="button" class="btn btn-signup btn-block btn-h4 login-btn my-3" onclick="login();">Log in</button>
						<div class="g-signin2" data-width="auto" data-height="40" data-longtitle="false" data-onsuccess="onSignIn"></div>
						<div class="font-9 text-white my-3 text-center">or</div>
						<a href="/joinEmail" class="btn btn-signup btn-block btn-h4">Sign up</a>
					</div>
				</form>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/login.js"></script>
<#include "/layout/footer.ftl">
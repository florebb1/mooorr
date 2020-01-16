<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="assets/css/bootstrap.css">
	<link rel="stylesheet" href="assets/css/style.css">

	<title>mooorr - admin</title>
</head>
	<body>
	<input type="hidden" id="apiAddress" value="${apiAddress?string}">
		<div class="login-wrap flex-column d-flex justify-content-center align-items-center">
			<div class="login-body">
				<div class="login-wrap-logo d-flex flex-column justify-content-center align-items-center">
					<h1><img src="/assets/images/logo.png" style="width:80px;" class="mb-3"/></h1>
					<h6>Administrator</h6>
				</div>
				<div class="login-wrap-logo px-4">
					<form id="loginForm">
						<div class="form-group">
							<input type="text" id="loginId" name="loginId" class="form-control" placeholder="ID"/>
						</div>
						<div class="form-group">
							<input type="password" id="pwd" name="pwd" class="form-control" placeholder="PASSWORD"/>
						</div>
						<button type="button" class="btn btn-primary btn-block mt-5" onclick="login();">로그인</button>
					</form>
				</div>
			</div>
		</div>
	<script src="/assets/js/jquery-3.4.1.min.js"></script>
	<script src="/assets/js/admin/login.js"></script>
	<script src="/assets/js/script.js"></script>
	</body>
</html>
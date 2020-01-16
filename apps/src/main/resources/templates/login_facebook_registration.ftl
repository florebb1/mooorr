<#include "/layout/header.ftl">
	<div class="container-fluid fluid-wrap bg-white">
		<div class="d-flex flex-column justify-content-center align-items-center h-100">
			<div class="position-absolute font-23 font-weight-light dt-none" style="top: 5%; left: 5%;">비밀번호 찾기</div>
			<div class="login-wrap">
<#--				<h5 class="d-flex align-items-center my-5 font-23 font-weight-light">상세정보 입력</h5>-->
				<div class="d-flex justify-content-center align-items-center">
					찾으실 계정의
				</div>
				<div class="d-flex justify-content-center align-items-center mb-5">
					정보를 입력해주세요.
				</div>
				<form id="facebookForm" onsubmit="return false;">
					<div class="form-group">
						<input type="hidden" id="apiAddress" value="${apiAddress?string}">
						<input type="email" class="form-control" id="loginId" name="loginId" placeholder="Email">
					</div>
					<button type="button" class="btn btn-primary btn-block btn-h4" onclick="facebookEmailAdd();">다음</button>
				</form>
			</div>

		</div>
	</div>

<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/findPw.js"></script>
<script>
	function facebookEmailAdd() {
		var idx = getParameter('idx');
		var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
		var emailVal = $("#loginId").val();
		if(emailVal == "") {
			swal({
				button: "확인",
				closeOnClickOutside: false,
				text: '이메일을 입력해주세요'
			});
			return false;
		}else if (emailVal.match(regExp) == null) {
			swal({
				button: "확인",
				closeOnClickOutside: false,
				text: '이메일 형식을 확인해주세요'
			});
			return false;
		}
		var apiAddress = $("#apiAddress").val();
		var datas =	$("#facebookForm").serialize();
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
					}).then(function() {
						location.href='/login_facebook_auth?email='+emailVal+'&idx='+idx;
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
</script>
<#include "/layout/footer.ftl">
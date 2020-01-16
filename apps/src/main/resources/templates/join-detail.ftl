<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<div class="container-fluid fluid-wrap bg-white px-5">
	<div class="d-flex flex-column justify-content-center align-items-center h-100">
		<div class="login-wrap mt-0">
			<h5 class="d-flex align-items-center my-5 font-23 font-weight-light">상세정보 입력</h5>
			<form id="joinDetailForm" onsubmit="return false;">
				<input type="hidden" id="loginId" name="loginId">
				<input type="hidden" id="terms" name="terms" value="1">
				<input type="hidden" id="birthdate" name="birthdate">
				<div class="form-row mb-3">
					<div class="col-auto d-flex align-items-center"><span class="span_tw">유저네임</span></div>
					<div class="col">
						<div class="row">
							<div class="col-10 pr-0">
								<input type="text" id="userName" name="userName" class="form-control"/>
							</div>
							<div class="col-2 d-flex align-items-center">
								<i id="nicCheck" class="icon-checked"></i>
							</div>
						</div>
						<small id="textHelp" class="form-text text-muted">3 ~ 12 자리, 영문, 숫자만 가능합니다.</small>
					</div>
				</div>
				<div class="form-row mb-3">
					<div class="col-auto d-flex align-items-center"><span class="span_tw">비밀번호</span></div>
					<div class="col">
						<div class="row">
							<div class="col-10 pr-0">
								<input type="password" id="pwd" name="pwd" class="form-control"/>
							</div>
							<div class="col-2 d-flex align-items-center">
								<i id="pwCheck" class="icon-checked"></i>
							</div>
						</div>
						<small id="passwordHelp" class="form-text text-muted">8 ~ 20 자리의 영문+숫자+특수기호(<span class="text-danger">$@$!%*#?&</span>)만 가능합니다.</small>
					</div>
				</div>
				<div class="form-row mb-4">
					<div class="col-auto d-flex align-items-center"><span class="span_tw">비밀번호확인</span></div>
					<div class="col">
						<div class="row">
							<div class="col-10 pr-0">
								<input type="password" id="pwd2" class="form-control"/>
							</div>
							<div class="col-2 d-flex align-items-center">
								<i id="pw2Check" class="icon-checked"></i>
							</div>
						</div>

					</div>
				</div>

				<div class="form-row mb-3">
					<div class="col-auto d-flex align-items-center">
						<span class="span_tw">국가</span>
					</div>
					<div class="col">
						<select class="form-control-gr" id="nation" name="nation"></select>
					</div>
				</div>
				<div class="form-row mb-3">
					<div class="col-auto d-flex align-items-center">
						<span class="span_tw">생년월일</span>
					</div>
					<div class="col-4">
						<select class="form-control-gr form-date" id="year">
							<option selected>년도</option>
							<#assign nowYear = .now?string("yyyy")>
							<#list nowYear?number..nowYear?number - 100 as i>
								<option value="${i?c}">${i?c}</option>
							</#list>
						</select>
					</div>
					<div class="col">
						<select class="form-control-gr form-date" id="month">
							<option selected>월</option>
							<#list 1..12 as i>
								<option value="${i?c}">${i?c}</option>
							</#list>
						</select>
					</div>
					<div class="col">
						<select class="form-control-gr form-date" id="day">
							<option selected>일</option>
							<#list 1..31 as i>
								<option value="${i?c}">${i?c}</option>
							</#list>
						</select>
					</div>
				</div>
				<div class="form-row mb-3">
					<div class="col-auto d-flex align-items-center">
						<span class="span_tw">성별</span>
					</div>
					<div class="col">
						<select class="form-control-gr" id="gender" name="gender">
							<option value="M">남자</option>
							<option value="F">여자</option>
						</select>
					</div>
				</div>
				<div class="mt-5">
					<div class="my-5 terms-box">
						<div class="row mt-3">
							<div class="col-10 pr-0 font-13" title="서비스 이용약관" type="1">서비스 이용약관</div>
							<div class="col-2 d-flex align-items-center justify-content-end">
								<a class="modal-btn" data-toggle="modal" data-target="#exampleModalCenter"><i id="term1" class="icon-right-arrow"></i></a>
							</div>
						</div>
						<hr class="my-2" style="border-color: #afafaf;">
						<div class="row mt-3">
							<div class="col-10 pr-0 font-13" title="개인정보 보호정책" type="2">개인정보 보호정책</div>
							<div class="col-2 d-flex align-items-center justify-content-end">
								<a class="modal-btn" data-toggle="modal" data-target="#exampleModalCenter"><i id="term2" class="icon-right-arrow"></i></a>
							</div>
						</div>
						<hr class="my-2" style="border-color: #afafaf;">
					</div>
					<div class="mt-5">
						<div class="my-5 terms-box">
							<div class="p-2 font-11 text-center">동의하고 회원가입을 선택하면<br>mooorr 서비스 계약 및 개인정보처리방침에도 동의 됩니다.</div>
						</div>
					</div>
					<button type="button" id="joinBtn" class="btn btn-primary btn-block btn-h4" onclick="join();">회원가입</button>
				</div>
			</form>
		</div>
	</div>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
		<div class="modal-content" style="min-height: 50vh;">
			<div class="modal-header">
				<h5 class="modal-title" id="modal-title"></h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			</div>
			<div id="modal-content" class="modal-body"></div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
			</div>
		</div>
	</div>
</div>

<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/joinDetail.js"></script>
<#include "/layout/footer.ftl">
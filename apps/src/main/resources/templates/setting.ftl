<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
						<h3>Setting</h3>
					</div>
					<div class="col-12 col-sm-12 col-md-12">
						<div class="card-right pt-4">
							<div class="row d-flex justify-content-start align-items-center">
								<div class="col-12 link-black px-0">
									<div class="service-setting">
										<a href="/service_info">회원이용약관</a>
										<a href="/privacy">개인정보 보호정책</a>
										<a href="/privacy_guide">개인정보 수집 / 이용</a>
										<a id="changePwBtn">비밀번호 변경</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/setting.js"></script>
<#include "/layout/footer.ftl">
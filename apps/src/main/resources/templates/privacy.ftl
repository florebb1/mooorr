<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
		<div class="main-container">
			<div class="row">
				<#include "/layout/main_nav.ftl">

				<div class="col">
					<div class="row">
						<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
							<h3>개인정보 보호정책</h3>
						</div>
						<div class="col-12 col-sm-12 col-md-12">

							<div class="card-right pt-4">
								<div class="row d-flex flex-column justify-content-start align-items-center">
									<div class="col-12 link-black">

										<div class="service-guide-wrap" name="content" id="content"></div>

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
<script src="/assets/js/apps/privacy.js"></script>
<#include "/layout/footer.ftl">
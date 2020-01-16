<#include "/layout/header.ftl">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box"><h3>Portrait 9 등록</h3></div>
					<div class="col-12 col-sm-12 col-md-12">

						<div class="card-right d-flex flex-column justify-content-center align-items-center mb-3">

							<div class="text-center mb-4">
								<h5>본인의 베스트사진을 올려주세요.</h5>
								<p class="text-black-50">최대 9장의 사진까지 등록 가능합니다.</p>
							</div>
							<form id="portraitAddForm" method="post" name="portraitAddForm">
								<div class="d-flex flex-column justify-content-start align-items-center my-5">
									<input type="hidden" id="userIdx" name="userIdx">
									<div class="profile-img-wrap">
										<input type="hidden" id="apiAddress" value="${apiAddress?string}">
										<input type="file" accept=".jpg, .heic" id="profile-img-change" name="lifeFile">
										<label id="profile-img-change-label" for="profile-img-change"><div id="output"></div><span>사진 등록</span></label>
									</div>
								</div>
							</form>
						</div>


						<div class="form-row">
							<div class="col">
								<button type="button" class="btn btn-secondary btn-block" onclick="history.back();">취소</button>
							</div>
							<div class="col d-flex justify-content-center align-items-center">
								<button type="button" class="btn btn-primary btn-block" onclick="addPortrait();">저장</button>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/portraitInput.js"></script>
<#include "/layout/footer.ftl">
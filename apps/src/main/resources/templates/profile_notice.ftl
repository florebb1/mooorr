<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
						<h3>Profile & Notice 수정</h3>
						<div class="form-group">
							<span class="switch">
								<input type="checkbox" class="switch" id="switch-normal">
								<label for="switch-normal"></label>
							</span>
						</div>
					</div>
					<div class="col-12 col-sm-12 col-md-12">

						<div class="card-right mb-3">

								<div class="form-group profile_notice_form">
									<div class="card-right d-flex flex-column justify-content-center align-items-center p-4-box mb-3">
										<div class="text-center mb-4">
											<h5>내가 하고 싶은 말들을 편하게 작성해주세요.<br> 나의 프로필 또는 다른 사람에게 알리는 내용도 좋습니다.</h5>
											<p class="text-black-50">최대 500자까지 작성 가능합니다.</p>
										</div>
									</div>
									<label class="w-100 text-center text-black-50 font-11">
										<span id="contentCount">0</span>/500
									</label>
									<form id="aboutNoticeForm">
										<input type="hidden" id="userIdx" name="userIdx">
										<input type="hidden" id="onoff" name="onoff" value="0">
										<textarea id="summernote" name="content" class="form-control border" rows="15"></textarea>
									</form>
								</div>
						</div>

						<div class="result-button-wrap mb-5">
							<button type="button" id="savaBtn" class="btn btn-primary" onclick="userNoticeUpdate()">수정 완료</button>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userNotice.js"></script>
<script src="/assets/js/apps/userSelect.js"></script>
<#include "/layout/footer.ftl">
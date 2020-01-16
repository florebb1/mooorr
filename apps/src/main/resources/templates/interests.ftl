<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
						<h3>Interests 수정</h3>
						<div class="form-group">
							<span class="switch">
								<input type="checkbox" class="switch" id="switch-normal">
								<label for="switch-normal"></label>
							</span>
						</div>
					</div>
					<div class="col-12 col-sm-12 col-md-12">

						<div class="card-right d-flex flex-column justify-content-center align-items-center p-4 mb-3">

							<div class="text-center mb-4">
								<h5>내가 가장 관심있는 분야는 어떤건가요?</h5>
								<p class="text-black-50">최대 10개의 관심사까지 가능합니다.</p>
							</div>

							<form id="interestListForm">
								<input type="hidden" id="userIdx" name="userIdx">
								<input type="hidden" id="onoff" name="onoff">
								<input type="hidden" id="content" name="content">
							</form>

							<div id="interest_content" class="w-100"></div>

						</div>

						<div class="form-row mb-5">
							<div class="col">
								<button type="button" id="itemAddBtn" class="btn btn-secondary btn-block text-white">항목 추가</button>
							</div>
							<div class="col-auto d-flex justify-content-center align-items-center">
								<button type="button" class="btn btn-primary" onclick="interestEdit();">수정 완료</button>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/interests.js"></script>
<#include "/layout/footer.ftl">
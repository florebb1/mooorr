<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
						<h3>Portrait 9</h3>
<#--						<h3 class="mb-none">Portrait 9</h3>-->
<#--						<h3 class="dt-none">포트레이트9 더보기</h3>-->
<#--						<div class="form-group">-->
<#--							<span class="switch">-->
<#--								<input type="checkbox" class="switch" id="switch-normal">-->
<#--								<label for="switch-normal"></label>-->
<#--							</span>-->
<#--						</div>-->
					</div>
					<div class="col-12 col-sm-12 col-md-12">

						<div class="card-right d-flex flex-column justify-content-center align-items-center mb-3">
<#--							<div class="text-center mb-4">-->
<#--								<h5>본인의 베스트사진을 올려주세요.</h5>-->
<#--								<p class="text-black-50">최대 9장의 사진까지 등록 가능합니다.</p>-->
<#--							</div>-->
							<form id="portraitForm">
								<input type="hidden" id="listCount" value="0">
								<input type="hidden" id="userIdx" name="userIdx">
								<input type="hidden" id="onoff" name="onoff">
							</form>

							<div id="portrait_content" class="form-row d-flex align-items-center my-2 w-80-rp">
							
							</div>

						</div>


<#--						<div class="form-row">-->
<#--							<div class="col">-->
<#--								<a href="/portrait_input" id="addPortraitBtn" class="btn btn-secondary btn-block">항목 추가</a>-->
<#--							</div>-->
							<div class="result-button-wrap mb-5">
								<button type="button" id="saveBtn" class="btn btn-primary" onclick="history.back()">back</button>
							</div>
<#--						</div>-->

					</div>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/portrait_more.js"></script>
<#include "/layout/footer.ftl">
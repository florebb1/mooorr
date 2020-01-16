<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
						<h3>My Links</h3>
<#--						<h3 class="mb-none">My Links</h3>-->
<#--						<h3 class="dt-none">마이링크 수정</h3>-->
						<div class="form-group">
<#--							<span class="switch">-->
<#--								<input type="checkbox" class="switch" id="switch-normal">-->
<#--								<label for="switch-normal"></label>-->
<#--							</span>-->
						</div>
					</div>
					<div class="col-12 col-sm-12 col-md-12">

						<div class="card-right d-flex flex-column justify-content-center align-items-center p-4-box mb-3">

<#--							<div class="text-center mb-4">-->
<#--								<h5>내가 운영하는 채널을 선택해주세요.</h5>
									<p class="text-black-50">플랫폼 별 입력사항이 다르니 꼼꼼히 확인해주세요.</p>
<#--							</div>-->

							<form id="linkListForm">
								<input type="hidden" id="userIdx" name="userIdx">
								<input type="hidden" id="onoff" name="onoff" value="0">
							</form>

							<div id="itemBoxWrap" class="form-row w-100 mb-3"></div>

						</div>

						<div class="text-right">
							<button type="button" id="addLinkBtn" class="btn btn-primary" onclick="history.back();">back</button>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/myLinks_more.js"></script>
<#include "/layout/footer.ftl">
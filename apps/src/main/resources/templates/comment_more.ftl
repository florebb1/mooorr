<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
						<h3>Friends Comment</h3>
					</div>
					<div class="col-12 col-sm-12 col-md-12">
						<div id="comment_content" class="card-right p-4" style="margin-bottom: 15px;"></div>

						<!-- 타인이 활동하는 영역 -->
						<div id="orther_menu" class="form-row align-items-start d-none">
							<div class="col">
								<form id="commentForm" onsubmit="return false;">
									<input type="hidden" id="userIdx" name="userIdx">
									<input type="hidden" id="onoff" name="onoff">
									<input type="hidden" name="content">
								</form>
								<form id="commentWriteForm" onsubmit="return false;">
									<input type="hidden" id="ownerIdx" name="ownerIdx">
									<input type="hidden" id="writerIdx" name="writerIdx">
									<input type="text" id="pcContent" name="pcContent" class="form-control border" style="border-radius:10px !important;">
								</form>
								<div class="col-auto d-flex align-items-center">
									<span id="statusMessageCount">0</span>/250
								</div>
							</div>
							<div class="col-auto d-flex justify-content-center align-items-center">
								<button type="button" class="btn p-0" onclick="commentWrite();">
									<img src="/assets/images/button.png" class=" w-75" style="background-color: transparent;">
								</button>
							</div>
							<div class="col-auto d-flex justify-content-center align-items-center">
								<button type="button" id="cancelBtn" class="btn btn-secondary">취소</button>
							</div>
						</div>
						<!-- 타인이 활동하는 영역 -->

						<!-- 본인이 관리하는 영역 -->
						<div class="form-row">
							<div class="col">
								<button type="button" id="commentAddBtn" class="btn btn-secondary btn-block d-none">
									코멘트 작성<b class="dt-none px-2">+</b>
								</button>
							</div>
							<div class="col-auto d-flex justify-content-center align-items-left">
								<button type="button" id="saveBtn" class="btn btn-primary" onclick="history.back()">back</button>
							</div>
						</div>
						<!-- 본인이 관리하는 영역 -->

					</div>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/comment_more.js"></script>
<#include "/layout/footer.ftl">
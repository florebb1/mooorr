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
						<div id="switchCheck" class="form-group">
							<span class="switch">
								<input type="checkbox" class="switch" id="switch-normal">
								<label for="switch-normal"></label>
							</span>
						</div>
					</div>
					<div class="col-12 col-sm-12 col-md-12">
						<form id="commentForm" onsubmit="return false;">
							<input type="hidden" id="userIdx" name="userIdx">
							<input type="hidden" id="onoff" name="onoff">
							<input type="hidden" name="content">
						</form>
						<div id="comment_content" class="card-right p-4" style="margin-bottom: 15px;"></div>

						<div id="my_menu" class="result-button-wrap mb-5">
							<button type="button" class="btn btn-primary" onclick="commentEdit();">수정 완료</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/comment.js"></script>
<#include "/layout/footer.ftl">
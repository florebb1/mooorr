<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
						<h3>FAQ</h3>
						<div class="form-group">
							<select id="category" name="category" class="form-select-button">
								<option value="0">전체</option>
								<option value="1">가입/계정</option>
								<option value="2">메뉴/기능</option>
								<option value="3">PM</option>
								<option value="4">크레딧</option>
								<option value="5">기부</option>
								<option value="6">기타</option>
							</select>
						</div>
					</div>
					<div class="col-12 col-sm-12 col-md-12">

						<div class="card-right pt-4">
							<div class="row d-flex justify-content-start align-items-center">
								<div class="col-12 link-black">
									<input type="hidden" id="page" name="page" value="1">
									<div id="content"></div>
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
<script src="/assets/js/apps/faq.js"></script>
<#include "/layout/footer.ftl">
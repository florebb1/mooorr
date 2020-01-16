<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
						<h3>1:1 Help</h3>
					</div>
					<div class="col-12 col-sm-12 col-md-12">

						<form id="helpForm">
							<input type="hidden" id="userIdx" name="userIdx">
							<div class="card-right pt-4 mb-3">
								<div class="row d-flex justify-content-start align-items-center">
									<div class="col-12 link-black">

										<div class="help-write-body">
											<div class="form-group">
												<label for="">질문 카테고리</label>
												<select class="custom-select" id="ctCategory" name="ctCategory">
													<option disabled selected hidden>카테고리 선택</option>
													<option value="1">가입/계정</option>
													<option value="2">메뉴/기능</option>
													<option value="3">PM</option>
													<option value="4">크레딧</option>
													<option value="5">기부</option>
													<option value="6">기타</option>
												</select>
											</div>
											<div class="form-group">
												<label for="">질문 제목</label>
												<input type="text" class="form-control border p-2" name="ctTitle" placeholder="질문 제목을 입력해주세요.">
											</div>
											<div class="form-group">
												<label for="">질문 내용</label>
												<textarea class="form-control border p-2" id="ctContent" name="ctContent" rows="5" placeholder="질문 내용을 입력해주세요."></textarea>
											</div>
										</div>

									</div>
								</div>
							</div>

							<div class="form-row">
								<div class="col-8">
									<button type="button" id="" class="btn btn-primary btn-h4 btn-block" onclick="helpSave();">작성완료</button>
								</div>
								<div class="col-4">
									<button type="button" id="" class="btn btn-secondary btn-h4 btn-block" onclick="history.back();">목록으로</button>
								</div>
							</div>
						</form>

					</div>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/help_write.js"></script>
<#include "/layout/footer.ftl">
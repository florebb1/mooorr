<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
						<h3>Report</h3>
					</div>
					<div class="col-12 col-sm-12 col-md-12">
						<form id="decForm">
							<div class="card-right pt-4 mb-3">

								<div class="row d-flex flex-column justify-content-start align-items-center">
									<div class="col-12 link-black">

										<div class="report-write-body">
											<p class="font-15 font-weight-bold text-center p-0">상대방이 커뮤니티 가이드라인 위반하였습니까?</p>

											<input type="hidden" id="userIdx" name="userIdx">
											<input type="hidden" id="targetIdx" name="targetIdx">

											<div class="row chat-box mt-5 mb-3 d-flex justify-content-start align-items-center">
												<div class="col-auto d-flex justify-content-start align-items-center">
													<div class="maspro-img" style="background-image:url('/assets/images/user.png');"></div>
													<div class="mx-3 d-flex flex-column justify-content-center align-items-start">
														<span class="nick-asd-msg"></span>
														<span id="infoUserStatusMGS" class="text-secondary" style="width:200px;overflow:hidden;text-overflow:ellipsis; white-space:nowrap;"></span>
													</div>
												</div>
												<#--  <div class="col d-flex flex-column justify-content-center align-items-start">
													<div class="nick-asd-msg">merroddaing</div>
												</div>  -->
											</div>
										</div>

										<div class="report-write-body">
											<div class="form-group">
												<label for="">신고사유</label>
												<select class="custom-select" id="category" name="category">
													<option value="0">부적절한 메세지 </option>
													<option value="1">스팸 메세지</option>
													<option value="2">불쾌한 메세지</option>
													<option value="3">타인을 사칭</option>
													<option value="4">지적 재산권 침해</option>
												</select>
											</div>
											<div class="form-group">
												<label for="">신고 내용</label>
												<textarea class="form-control border p-2" id="rpContent" name="rpContent" rows="5" placeholder="신고 내용을 입력해주세요."></textarea>
											</div>
										</div>

									</div>
								</div>


							</div>

							<div class="form-row">
								<div class="col-8">
									<button type="button" id="" class="btn btn-primary btn-h4 btn-block" onclick="decSave();">신고합니다</button>
								</div>
								<div class="col-4">
									<button type="button" id="" class="btn btn-secondary btn-h4 btn-block" onclick="history.back();">취소</button>
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
<script src="/assets/js/apps/declaration.js"></script>
<#include "/layout/footer.ftl">
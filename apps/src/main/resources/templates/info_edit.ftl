<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
						<h3>Private Message 수정</h3>
					</div>
					<div class="col-12 col-sm-12 col-md-12">

						<div class="card-right p-0 mb-3">
							<div class="row d-flex justify-content-start align-items-center">
								<div class="col-12 link-black">
									<form id="infoEditForm">
										<input type="hidden" id="userIdx" name="userIdx">
										<input type="hidden" id="field" name="field">
										<input type="hidden" id="donation" name="donation">
										<div class="edit-info-wrap">
											<h5 class="text-center">당신의 소중한 경험과 정보 공유로<br>기부도 하고 수익도 얻어가세요.</h5>
											<div class="text-center text-black-50">최대 10개의 상담분야를 등록할 수 있습니다.</div>

											<div class="form-group profile_notice_form mt-5 mb-3">
												<label for="">상담 안내 메세지</label>
												<label class="w-100 text-center text-black-50 font-11">
													<span id="contentCount">0</span>/500
												</label>
												<textarea class="form-control border p-2" id="summernote" name="intro" rows="5" placeholder="내용을 입력해주세요."></textarea>
											</div>

											<div id="field_content" class=""></div>

											<div class="form-row mt-5">
												<div class="col-4 col-md-3 d-flex align-items-center"><b>메세지 1건 비용</b></div>
												<div class="col-7 col-md-8 d-flex align-items-center">
													<input type="number" id="price" name="price" class="form-control W-75 text-right">
												</div>
												<div class="col-1 col-md-1 d-flex align-items-center">
													<span class="text-secondary">Credit</span>
												</div>
											</div>

											<div class="form-row mb-5">
												<div class="col-4 col-md-3 d-flex align-items-center"><span class="span_tw"></span></div>
												<div class="col-8 col-md-9 d-flex align-items-center">
													<div class="w-100"><span class="text-secondary px-3">1C ~ 1000C (1C=100원)</span></div>
												</div>
											</div>

											<div class="row mb-3">
												<a class="d-flex w-100 modal-btn" data-toggle="modal" data-target="#exampleModalCenter" type="4">
													<div class="col-10 font-weight-bold border-bottom text-left p-0">기부 방식 및 사용 정책</div>
													<div class="col-2 border-bottom text-right p-0"><i class="icon-right-arrow"></i></div>
												</a>
											</div>
											<div class="form-group form-check mb-5 mt-3">
												<input type="checkbox" class="form-check-input" id="exampleCheck1">
												<label class="form-check-label ml-2" for="exampleCheck1">나의 수익금에서 2% 기부(선택)</label>
											</div>

											<div class="my-5">
												<h5 class="text-center mt-5">기부 모어 캠페인에 함께 해주시면,<br>모어도 더불어 2%기부에 동참하여 더 나은 인생을 살 권리가 있는 분들을 힘껏 돕겠습니다.</h5>
												<div class="text-center text-black-50">동참해주신 분에게는 프로필에 기부 뱃지가 수여됩니다.</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>

						<div class="form-row">
							<div class="col">
								<button id="fieldAddBtn" type="button" class="btn btn-secondary btn-block text-light">
									상담분야 추가<span class="dt-none px-2">+</span>
								</button>
							</div>
							<div class="col-auto d-flex justify-content-center align-items-center">
								<div class="text-right mb-5 pb-5"><a class="btn btn-primary text-light w-100-m" onclick="infoEdit();">수정 완료</a></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Modal -->
	<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
			<div class="modal-content" style="min-height: 50vh;">
				<div class="modal-header">
					<h5 class="modal-title" id="modal-title">기부 방식 및 사용 정책</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				</div>
				<div id="modal-content" class="modal-body"></div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
				</div>
			</div>
		</div>
	</div>


	<!--본인인증 가이드 Modal(KR) -->
	<div class="modal modalaa fade" id="modalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
			<div class="modal-content" style="min-height: 50vh;">
				<div class="modal-header border-0 p-5">
					<div class="modal-title" id="modal-title">
						<span class="font-23">신분 인증 가이드</span><br><br>
						<span class="font-15 text-secondary">당신의 소중한 경험과 정보 공유로<br>사람들도 돕고 수익도 얻어가세요.</span>
					</div>
					<button type="button" class="close font-25" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				</div>
				<div id="modal-content" class="modal-body p-5">
					<p class="font-25">STEP 1.</p>
					<div class="p-3 border-radius-10" style="background-color: #f7fbff;">
						<p class="mb-3" style="line-height: 30px;"><span class="font-weight-bold font-15">신분 인증</span><br>아래 사항을 모어 이메일로 보내주세요.</p>
						<p class="font-weight-bold font-15" style="line-height: 30px; word-break: keep-all;">
							1. 얼굴 전체와 신분증 주민번호 앞자리가 나오게 5초 동안 동영상 촬영<br>
							2. 회원가입시 등록한 이메일로 아래 ‘주소’로 발송
						</p>
					</div>
					<div class="row mx-0 my-3 border-radius-10 p-3 text-white text-center" style="background-color: #ff4e00;">
						<div class="col-5 col-md-4">보내는 주소</div>
						<div class="col-7 col-md-8">help@mooorr.com</div>
					</div>

					<img src="/assets/images/IDcheck_guide.png" class="w-100 mb-5">

					<p class="font-25">STEP 2.</p>
					<div class="p-3 border-radius-10 mb-5" style="background-color: #f7fbff;">
						<p class="mb-3 font-weight-bold font-15">인증 완료</p>
						<div style="word-break: keep-all;">인증 소요기간은 약 3일이며, 완료 후 확인 메일 발송드립니다.</div>
					</div>

					<p class="font-25">STEP 3.</p>
					<div class="p-3 border-radius-10 mb-5" style="background-color: #f7fbff;">
						<p class="mb-3 font-weight-bold font-15">메세지/프로필 작성</p>
						<p>메시지 정보 및 프로필 내용을 작성해주세요.</p>
						<div>(*필수 작성 : 프로필 사진, 마이링크 등)</div>
					</div>
					<div class="p-5 my-5 text-center font-weight-bold">
						<p>모어는 정확한 인증시스템을 통해</p>
						<p>정보제공의 신뢰도를 높이려 합니다.</p>
						<div>감사합니다.</div>
					</div>
<#--					<p class="font-25">for FOREIGNER</p>-->
<#--					<div class="text-center text-white border-radius-10 p-3 guideBtn" data-language="KR" style="background-color: #6d6d6d; margin-bottom: 70px;">-->
<#--						<div class="d-flex justify-content-center align-items-center font-weight-bold font-15" style="height: 70px;">Check Foreigner Guide</div>-->
<#--					</div>-->
					<button type="button" class="btn btn-primary btn-block btn-h4" onclick="profileBtn();">내 프로필</button>
				</div>
			</div>
		</div>
	</div>
	<!--본인인증 가이드 Modal(EN) -->
	<div class="modal modalaa fade" id="modalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
			<div class="modal-content" style="min-height: 50vh;">
				<div class="modal-header border-0 p-5">
					<div class="modal-title" id="modal-title">
						<span class="font-23">ID Check Guide</span><br><br>
						<span class="font-15 text-secondary">To your precious experience sharing.<br>Go get help people and revenue as well.</span>
					</div>
					<button type="button" class="close font-25" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				</div>
				<div id="modal-content" class="modal-body p-5">
					<p class="font-25">STEP 1.</p>
					<div class="p-3 border-radius-10" style="background-color: #f7fbff;">
						<p class="mb-3" style="line-height: 30px;"><span class="font-weight-bold font-15">Identity authentication</span></p>
						<p class="font-weight-bold font-15" style="line-height: 30px; word-break: keep-all;">
							1. Take a video of yourself with your entire face and your ID card* for at least 5 seconds.<br>
							*Your passport or your drivers licence can be used as an alternative.<br>
							2. Send your Video to [help@mooorr.com] with your registered email address.
						</p>
					</div>
					<div class="row mx-0 my-3 border-radius-10 p-3 text-white text-center" style="background-color: #ff4e00;">
						<div class="col-5 col-md-4">Address</div>
						<div class="col-7 col-md-8">help@mooorr.com</div>
					</div>

					<img src="/assets/images/IDcheck_guide.png" class="w-100 mb-5">

					<p class="font-25">STEP 2.</p>
					<div class="p-3 border-radius-10 mb-5" style="background-color: #f7fbff;">
						<p class="mb-3 font-weight-bold font-15">
							It takes around 3 Business Days until the Identity Authentication will be approved. An E-Mail will be sent after the process is completed.
						</p>
					</div>

					<p class="font-25">STEP 3.</p>
					<div class="p-3 border-radius-10 mb-5" style="background-color: #f7fbff;">
						<p class="mb-3 font-weight-bold font-15">Setting the PM Information</p>
						<p>Fill out the PM Information and your PM profiles.</p>
						<div>*A profile picture and My Links are required</div>
					</div>
					<div class="p-5 my-5 text-center font-weight-bold">
						<p>We're doing our best to increase reliability.</p>
						<div>Thank you.</div>
					</div>
<#--					<p class="font-25">for KOREAN</p>-->
<#--					<div class="text-center text-white border-radius-10 p-3 guideBtn" data-language="EN" style="background-color: #6d6d6d; margin-bottom: 70px;">-->
<#--						<div class="d-flex justify-content-center align-items-center font-weight-bold font-15" style="height: 70px;">Check Korean Guide</div>-->
<#--					</div>-->
					<button type="button" class="btn btn-primary btn-block btn-h4" onclick="profileBtn();">My Profile</button>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/infoEdit.js"></script>
<#include "/layout/footer.ftl">
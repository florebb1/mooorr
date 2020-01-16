<#include "/layout/header.ftl">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box"><h3>Profile 수정</h3></div>
					<div class="col-12 col-sm-12 col-md-12">
						<form id="infoEditForm" method="post" enctype="multipart/form-data">
							<input type="hidden" id="apiAddress" value="${apiAddress?string}">
							<input type="hidden" id="userIdx" name="userIdx">
							<input type="hidden" id="onoff" name="onoff" value="0">
							<div class="card-right mb-3">

								<div class="d-flex flex-column justify-content-start align-items-center my-3">
									<div class="profile-img-wrap">
										<input type="file" accept=".jpg, .heic" id="profile-img-change" name="profileImage">
										<label id="profile-img-change-label" for="profile-img-change"><div id="output"></div><span>프로필 사진 바꾸기</span></label>
									</div>
									<div class="profile-bgimg-wrap">
										<input type="file" accept=".jpg, .heic" id="profile-bgimg-change" name="backgroundImage">
										<label for="profile-bgimg-change"><div id="output2" style=""></div><span>배경 사진 바꾸기</span></label>
									</div>
								</div>

								<div class="row d-flex justify-content-center align-items-center">
									<div class="col-12 col-sm-8 col-md-6">
										<hr class="mb-0">
										<hr class="mt-0">
										<div class="form-row mb-3">
											<div class="col-auto d-flex align-items-center"><span class="span_tw">유저네임</span></div>
											<div class="col">
												<div class="row">
													<div class="col pr-0">
														<input type="text" id="userName" name="userName" class="form-control"/>
													</div>
													<div class="col-2 d-flex align-items-center">
														<i id="nicCheck" class=""></i>
													</div>
												</div>
											</div>
										</div>

										<div class="form-row mb-3">
											<div class="col-auto d-flex align-items-center"><span class="span_tw">상태메세지</span></div>
											<div class="col">
												<div class="row">
													<div class="col pr-0">
														<input type="text" id="statusMessage" name="statusMessage" class="form-control"/>
													</div>
													<div class="col-2 d-flex align-items-center">
														<span id="statusMessageCount">0</span>/20
													</div>
												</div>
											</div>
										</div>

										<div class="form-row mb-3">
											<div class="col-auto d-flex align-items-center"><span class="span_tw">나의 URL</span></div>
											<div class="col">
												<div class="row">
													<div class="col pr-0">
														<input type="text" id="userUrl" name="userUrl" class="form-control bg-white text-black-50" readonly/>
													</div>
													<div id="copyLinkBtn" class="col-2 d-flex align-items-center">
														<img src="/assets/images/9-b-8-y-18-tif@3x_2.png" style="width: 16px;">
													</div>
												</div>
											</div>
										</div>

										<div class="form-row mb-5">
											<div class="col-auto d-flex align-items-center"><a id="changePwBtn">비밀번호 변경</a></div>
										</div>
									</div>
								</div>

							</div>
						</form>

						<div class="result-button-wrap">
							<button id="infoEditBtn" type="button" class="btn btn-primary">수정 완료</button>
						</div>

					</div>
				</div>
			</div>

		</div>
	</div>
	<!-- Modal -->
	<div class="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
			<div class="modal-content" style="min-height: 50vh;">
				<div class="modal-header border-0 p-5">
					<div class="modal-title" id="modal-title">
						<span class="font-23">나만의 모어 프로필 완성!</span><br><br>
						<span class="font-15 text-secondary">이제 아래 순서대로 진행해주세요.</span>
					</div>
					<button type="button" class="close font-25" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				</div>
				<div id="modal-content" class="modal-body px-0">
					<p class="font-15 px-5">STEP.1 나의 모어 URL 링크 복사</p>
					<img src="/assets/images/profile_guide1.jpg" class="w-100 mb-3">
					<div class="text-secondary px-5 mb-3">나의 프로필에서 사용자이름의 우측 상단에 … 을 클릭해서 URL 복사해주세요.</div>
					<p class="font-15 px-5">STEP.2 나의 모든 채널 프로필에 링크 공유</p>
					<img src="/assets/images/profile_guide2.png" class="w-100 border-radius-10">
					<div class="text-secondary px-5 mb-3">Instagram, Youtube, Facebook, Blog 등 모든 프로필에 모어 URL 링크를 달아주세요.</div>
				</div>
				<div id="modal-footer" class="modal-body text-right">
					<input type="checkbox" id="modalChk">오늘 하루 이창 열지 않기
				</div>
			</div>
		</div>
	</div>


<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/profile.js"></script>
<script src="/assets/js/apps/userSelect.js"></script>
<#include "/layout/footer.ftl">
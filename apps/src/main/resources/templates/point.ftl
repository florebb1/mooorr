<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box"><h3>My Credit</h3></div>
					<div class="col-12 col-sm-12 col-md-12">

						<div class="card-right pt-4">
							<div class="row d-flex justify-content-center align-items-center">
								<div class="col-12 col-md-6">
									<div class="point-card-wrap">
										<div class="text-center pt-4">My Credit</div>
										<h3 id="nowp" class="text-center"></h3>
										<input type="hidden" id="myPoint">
										<div class="pt-4">My Account</div>
										<input type="hidden" id="myAccount">
										<input type="hidden" id="myAccount2">
										<div id="account"></div>
									</div>
								</div>
							</div>
							<div class="row d-flex justify-content-center align-items-center">
								<div class="col-12 col-md-6">
									<a id="pointCharge" href="/charge" class="btn btn-primary btn-block btn-lg"><h6 class="m-0">Credit 충전</h6></a>
<#--									<a id="pointExchange" href="/exchange" class="btn btn-secondary btn-block btn-lg"><h6 class="m-0">Credit 정산 신청</h6></a>-->
								</div>
							</div>
							<div class="row d-flex justify-content-center align-items-center">
<#--								<div class="col-12 col-md-6 border-bottom p-3 text-center">1000C이상 정산이 가능합니다.</div>-->
								<div class="col-12 link-black">
									<a id="link1" class="text-body" href="/payment_history">결제 내역</a>
									<a id="link2" class="text-body" href="/point_use">사용 내역</a>
<#--									<a id="link3" class="text-body" href="/exchange_history">정산 내역</a>-->
<#--									<a id="link4" class="text-body" href="/donation">기부 내역</a>-->
								</div>

							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
<!--본인인증 가이드 Modal(KR) -->
<div class="modal fade" id="modalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
					<p>메시지 정보 및 프로필 내용을 잘 작성해주세요.</p>
					<div>(*필수 작성 : 프로필 사진, 마이링크 등)</div>
				</div>
				<div class="p-5 my-5 text-center font-weight-bold">
					<p>모어는 정확한 인증시스템을 통해</p>
					<p>정보제공의 신뢰도를 높이고자 합니다.</p>
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
<div class="modal fade" id="modalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
<script src="/assets/js/apps/point.js"></script>
<#include "/layout/footer.ftl">
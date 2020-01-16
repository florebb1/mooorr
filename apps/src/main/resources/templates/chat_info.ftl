<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">

	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between  align-items-center">
						<div class="d-flex justify-content-center align-items-center my-2">
							<div class="maspro-img"></div>
							<div class="mx-3 d-flex justify-content-center privat-massdkmd">
								<span class="nick-asd-msg mx-2"></span>
								<span id="infoUserStatusMGS" class="text-secondary profile-msg-box"></span>
							</div>
						</div>
					</div>
					<div class="col-12 col-sm-12 col-md-12">
						<div class="card-right card-padding chat-body-ofw mb-3">

							<!-- section 메세지 안내 start -->
							<div class="row chat-box">
<#--								<div class="col-auto d-flex justify-content-center align-items-start">-->
<#--									<div class="maspro-img"></div>-->
<#--								</div>-->
								<div class="col d-flex flex-column justify-content-center align-items-start">
<#--									<a id="infoUserName" class="nick-asd-msg text-dark"></a>-->
									<p id="infoUserContent" class="text-left border-radius-10"></p>
									<div class="mt-3">
										<div id="infoUserTag" class="bg-dark text-white border-radius-10 px-2"></div>
									</div>
									<div class="point-info"><img src="/assets/images/email-logo-w.png" class="logo-white-sm">메세지 1건 비용 : <span id="infoUserSendPoint"></span></div>
								</div>
							</div>
							<!-- section 메세지 안내 end -->
						</div>
						<a id="sendMsg" class="d-flex justify-content-center align-items-center btn btn-h4 btn-block border-0 text-white" style="background-color: #00a7ff;">메세지 바로가기</a>
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
						<span class="font-23">프라이빗 메세지<br>사용 가이드</span><br><br>
						<span class="font-15 text-secondary">첫 질문 전에 꼭 읽어주세요.</span>
					</div>
					<button type="button" class="close font-25" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				</div>
				<div id="modal-content" class="modal-body p-5">
					<div class="position-relative">
						<img src="/assets/images/827.png" class="position-absolute" style="top:-25px; left: 0;">
						<div class="text-center font-weight-bold px-3 py-4 mb-5" style="background-color: #f7fbff;font-size:12px;">1. 질문자가 질문할 자유가 있듯이,<br>정보제공자도 답변 여부의 자유가 있습니다.</div>
					</div>

					<div class="position-relative">
						<img src="/assets/images/802.png" class="position-absolute" style="top:-25px; left: 0;">
						<div class="text-center font-weight-bold px-3 py-4 mb-5" style="background-color: #f7fbff;font-size:12px;">2. 질문과 동시에 정보제공자가<br>설정한 크레딧이 차감됩니다.</div>
					</div>

					<div class="position-relative">
						<img src="/assets/images/805.png" class="position-absolute" style="top:-25px; left: 0;">
						<div class="text-center font-weight-bold px-3 py-4 mb-5" style="background-color: #f7fbff;font-size:12px;">3. 질문 후 이틀 안에 미답변시 크레딧은 반환됩니다.</div>
					</div>

					<div class="position-relative">
						<img src="/assets/images/809.png" class="position-absolute" style="top:-25px; left: 0;">
						<div class="text-center font-weight-bold px-3 py-4 mb-5" style="background-color: #f7fbff;font-size:12px;">4. 보낸 메시지는 취소가 안되니 신중하게 써주세요.</div>
					</div>

					<div class="position-relative">
						<img src="/assets/images/810.png" class="position-absolute" style="top:-25px; left: 0;">
						<div class="text-center font-weight-bold px-3 py-4 mb-5" style="background-color: #f7fbff;font-size:12px;">5. 부적절한 메시지 경우 신고 및 상황에 따라<br>본 서비스를 이용하지 못할 수 있습니다.</div>
					</div>
				</div>
				<div id="modal-footer" class="modal-body text-right">
					<input type="checkbox" id="modalChk">오늘 하루 이창 열지 않기
				</div>
			</div>
		</div>
	</div>

<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/chatInfo.js"></script>
<#include "/layout/footer.ftl">
<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
		<div class="main-container">
			<div class="row">
				<#include "/layout/main_nav.ftl">

				<div class="col">
					<div class="row">
						<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between align-items-center asdf-asdf">
							<div class="d-flex justify-content-center align-items-center my-2">
								<div class="maspro-img"></div>
								<div class="mx-3 d-flex justify-content-center privat-massdkmd">
									<span class="nick-asd-msg"></span>
									<span class="mx-3 text-secondary">/</span>
									<span id="infoUserStatusMGS" class="text-secondary" style="overflow:hidden;text-overflow:ellipsis; white-space:nowrap;"></span>
								</div>
							</div>
							<a id="reportBtn" href="/report"><img src="/assets/images/exclamation.png" style="width:26px;height:26px;"/></a>
						</div>
						<div class="col-12 col-sm-12 col-md-12 asdf-asdf2">
							<input type="hidden" id="price">
							<div id="msg_content" class="card-right card-padding chat-body-ofw mb-3"></div>
							
							<div class="chat-bottom-btn">
								<div class="form-row h-100">
									<div class="col-8 h-100 d-flex justify-content-center align-items-center">
									<button id="questionBtn" type="button" class="btn btn-primary btn-h4 btn-block">질문하기</button>
									</div>
									<div class="col-4 h-100 d-flex justify-content-center align-items-center">
									<a id="profileBtn" class="btn btn-secondary btn-h4 btn-block text-white">프로필</a>
									</div>
								</div>
							</div>


							<div id="sendText" class="form-row align-items-center d-none">
								<div class="col">
									<form id="sendMSGForm" onsubmit="return false;">
										<input type="hidden" id="senderIdx" name="senderIdx">
										<input type="hidden" id="receiverIdx" name="receiverIdx">
										<input type="text" id="msContent" name="msContent" class="form-control border" style="border-radius:10px !important;">
									</form>
								</div>
								<div class="col-auto d-flex justify-content-center align-items-center">
									<button type="button" class="btn p-0" onclick="sendMail();"><img src="/assets/images/button.png" class="p-0 w-75" style="background-color: transparent;"></button>
								</div>
							</div>

                            <div id="resendText" class="form-row align-items-center d-none">
                                <div class="col">
                                    <form id="sendMSGForm2" onsubmit="return false;">
                                        <input type="hidden" id="msIdx" name="msIdx">
                                        <input type="text" id="asContent" name="asContent" class="form-control border" style="border-radius:10px !important;">
                                    </form>
                                </div>
                                <div class="col-auto d-flex justify-content-center align-items-center">
									<button type="button" class="btn p-0" onclick="resendMail();"><img src="/assets/images/button.png" class="p-0 w-75" style="background-color: transparent;"></button>
                                </div>
                            </div>


					</div>
				</div>
			</div>
		</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/chatDetail.js"></script>
<#include "/layout/footer.ftl">
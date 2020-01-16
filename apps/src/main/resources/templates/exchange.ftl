<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box"><h3>Exchange</h3></div>
					<div class="col-12 col-sm-12 col-md-12">

						<div class="card-right pt-4">
							<div class="row d-flex justify-content-center align-items-center">
								<div class="col-12 col-sm-8 col-md-6">
									<div class="point-card-wrap">
										<div class="text-center pt-4">My Credit</div>
										<h3 id="nowp" class="text-center"></h3>
										<div class="pt-4">My Account</div>
										<div id="account"></div>
									</div>
								</div>
							</div>
							<div class="row d-flex justify-content-center  align-items-center">
								<div class="col-12 col-sm-8 col-md-6 mt-3">
									<div><span>정산 신청 크레딧 입력</span></div>
									<div class="form-row mb-3">
										<div class="col">
											<div class="row">
												<div class="col-10 pr-0">
													<form id="exchangeForm" method="post">
														<input type="hidden" id="userIdx" name="userIdx">
														<input type="hidden" id="myPoint">
														<input type="hidden" id="donationYN">
														<input type="number" id="ecAmount" name="ecAmount" class="form-control px-0" placeholder="크레딧 단위를 입력하세요." />
													</form>
												</div>
												<div class="col-2 d-flex align-items-center">
													<i id="nicCheck" class="icon-checked"></i>
												</div>
											</div>
											<small class="form-text text-muted">기부크레딧 <span id="do_point">0</span> C / 정산 예상 금액 <span id="fi_point">0</span>원</small>
										</div>
									</div>
								</div>
								<div class="w-100"></div>
								<div class="col-12 col-sm-8 col-md-6 text-center mt-3 mb-4">
									<div>정산 신청기간에만 신청 가능하며,<br>신청기간과 지급 기간은 다음과 같습니다.</div>
									<h5 class="mt-3 mb-0">정산 신청 기간 : 1~ 15일<br>지급기간 : 익월 1~5일</h5>
								</div>
								<div class="w-100"></div>
								<div class="col-12 col-sm-8 col-md-6 text-center text-black-50 mt-3 mb-4">
									<button type="button" class="btn btn-primary btn-block btn-lg" onclick="exchage();"><h6 class="m-0">정산신청</h6></button>
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
<script src="/assets/js/apps/exchange.js"></script>
<#include "/layout/footer.ftl">
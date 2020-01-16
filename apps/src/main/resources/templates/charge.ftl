<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
						<h3>Buy Credit</h3>
					</div>
					<div class="col-12 col-sm-12 col-md-12">

						<form id="chargeForm">
							<input type="hidden" id="idx" name="idx">
							<input type="hidden" id="goods_name">
							<input type="hidden" id="kr_price">
							<input type="hidden" id="us_price">
						</form>

						<div class="card-right p-4">
							<div class="form-row d-flex justify-content-center align-items-start">
								<div class="col-12 col-sm-8 col-md-6 text-center text-black-50 mt-3 mb-4">
									VAT 10% 별도
								</div>
								<div class="w-100"></div>
								<div class="col-6 col-sm-4 col-md-3 mb-3">
									<button type="button" class="btn btn-charge btn-block goods py-3" kr-price="11000" us-price="9.9" data-name="100C">
										<h4>100C</h4>
										<h6>10,000원</h6>
										<div>9.9$</div>
									</button>
								</div>
								<div class="col-6 col-sm-4 col-md-3 mb-3">
									<button type="button" class="btn btn-charge btn-block goods py-3" kr-price="33000" us-price="29.9" data-name="300C">
										<h4>300C</h4>
										<h6>30,000원</h6>
										<div>29.9$</div>
									</button>
								</div>
								<div class="w-100"></div>
								<div class="col-6 col-sm-4 col-md-3 mb-3">
									<button type="button" class="btn btn-charge btn-block goods py-3" kr-price="66000" us-price="59.9" data-name="600C">
										<h4>600C</h4>
										<h6>60,000원</h6>
										<div>59.9$</div>
									</button>
								</div>
								<div class="col-6 col-sm-4 col-md-3 mb-3">
									<button type="button" class="btn btn-charge btn-block goods py-3" kr-price="99000" us-price="89.9" data-name="900C">
										<h4>900C</h4>
										<h6>90,000원</h6>
										<div>89.9$</div>
									</button>
								</div>
								<div class="w-100"></div>
								<button type="button" id="termsBtn" class="btn btn-link text-left text-dark py-3">환불약관 보기</button>
								<div class="w-100"></div>
								<div id="termsContent" class="text-center text-secondary mb-4 d-none" type="5"></div>
								<div class="w-100"></div>
								<div class="col-12 col-sm-8 col-md-6 text-center text-black-50 mt-3 mb-4">
									<button type="button" id="aBtn" class="btn btn-primary btn-block btn-lg inipay"><h6 class="m-0">신용카드 결제</h6></button>
									<button type="button" id="aBtn" class="btn btn-primary btn-block btn-lg paypal"><h6 class="m-0">paypal 결제</h6></button>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/charge.js"></script>
<#include "/layout/footer.ftl">
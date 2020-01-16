<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
		<div class="main-container">
			<div class="row">
				<#include "/layout/main_nav.ftl">

				<div class="col">
					<div class="row">
						<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box"><h3>Donation History</h3></div>
						<div class="col-12 col-sm-12 col-md-12">
							<input type="hidden" id="idx" name="idx">
							<input type="hidden" id="page" name="page" value="1">
							<div id="donation_content" class="card-right py-4px-0">
<#--								<span class="btn btn-primary btn-block mb-3">총 기부 금액 2000P</span>-->
<#--								<!-- section start &ndash;&gt;-->
<#--								<div class="row mb-3">-->
<#--									<div class="col-auto">-->
<#--										<div class="point-donation-img"></div>-->
<#--									</div>-->
<#--									<div class="col d-flex flex-column justify-content-center align-items-start">-->
<#--										<h6 class="m-0">수익금의 2% 기부</h6>-->
<#--										<div class="text-black-50">2019.10.10 PM10:00</div>-->
<#--									</div>-->
<#--									<div class="col-auto d-flex justify-content-center align-items-center">-->
<#--										<span class="btn btn-info">+20P</span>-->
<#--									</div>-->
<#--								</div>-->
<#--								<!-- section end &ndash;&gt;-->
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/donation.js"></script>
<#include "/layout/footer.ftl">
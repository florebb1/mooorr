<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<input type="hidden" id="apiAddress" value="${apiAddress?string}">
					<input type="hidden" id="idx" name="idx">
					<input type="hidden" id="page" name="page" value="1">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
						<h3>Buy History</h3>
					</div>
					<div class="col-12 col-sm-12 col-md-12 p-0">
						<div id="payment_content" class="card-right py-4px-0"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/paymentHistory.js"></script>
<script>
	$(function () {
		$(document).find('aaa::before').css("color", "block");
	});
</script>
<#include "/layout/footer.ftl">
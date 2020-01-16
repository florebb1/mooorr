<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
						<h3>Use History</h3>
					</div>
					<div class="col-12 col-sm-12 col-md-12">
						<input type="hidden" id="apiAddress" value="${apiAddress?string}">
						<input type="hidden" id="idx" name="idx">
						<input type="hidden" id="page" name="page" value="1">
						<div id="use_content" class="card-right py-4px-0"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/pointUse.js"></script>
<#include "/layout/footer.ftl">
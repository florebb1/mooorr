<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<input type="hidden" id="apiAddress" value="${apiAddress?string}">
				<div class="col-12 col-sm-12 col-md-12 justify-content-between mb-none"><h3>Follow</h3></div>
				<div class="col-12 col-sm-12 col-md-12 card-right">
					<ul class="row nav mb-4 follow-wrap">
						<li class="col nav-item">
							<div class="d-flex justify-content-between active" data-toggle="tab" href="#qwe"><h3 id="followingBtn" class="followBtn">Following</h3></div>
						</li>
						<li class="col nav-item">
							<div class="d-flex justify-content-between" data-toggle="tab" href="#asd"><h3 id="followerBtn" class="followBtn">Follower</h3></div>
						</li>
					</ul>
					<form id="followForm" method="post">
						<input type="hidden" id="userIdx" name="userIdx">
						<input type="hidden" id="targetIdx" name="targetIdx">
					</form>
					<div class="tab-content">
						<div class="tab-pane fade show active" id="qwe">
							<div class="text-center text-black-50 mt-4"><span id="followingCount"></span> Following</div>
							<div id="follow_content" class="py-4px-0"></div>
						</div>
						<div class="tab-pane fade" id="asd">
							<div class="text-center text-black-50 mt-4"><span id="followerCount"></span> Follower</div>
							<div id="follower_content" class="py-4px-0"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/follow.js"></script>
<#include "/layout/footer.ftl">
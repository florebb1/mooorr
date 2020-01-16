<#--<#include "/layout/header.ftl">-->
<#--<#include "/layout/main_header.ftl">-->
<#--<input type="hidden" id="apiAddress" value="${apiAddress?string}">-->
<#--	<div class="main-container">-->
<#--		<div class="row">-->
<#--			<#include "/layout/main_nav.ftl">-->

<#--			<div class="col">-->
<#--				<div class="row">-->
<#--					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">-->
<#--						<h3 class="mb-none">My Links</h3><h3 class="dt-none">마이링크 수정</h3>-->
<#--					</div>-->
<#--					<div class="col-12 col-sm-12 col-md-12">-->

<#--						<div class="card-right d-flex flex-column justify-content-center align-items-center p-4-box">-->

<#--							<div class="text-center mb-4">-->
<#--								<h5>내가 운영하는 채널을 선택해주세요.</h5>-->
<#--								<p class="text-black-50">플랫폼 별 입력사항이 다르니 꼼꼼히 확인해주세요.</p>-->
<#--							</div>-->

<#--							<div class="row max-430">-->
<#--								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="facebook" class="flag-ipt" data-link="https://www.facebook.com/profile.php?id="><label for="facebook"><img src="/assets/images/sns/facebook.png" alt=""/><div>Facebook</div></label></div>-->
<#--								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="bigcartel" class="flag-ipt"><label for="bigcartel"><img src="/assets/images/sns/bigcartel.png"/><div>Big cartel</div></label></div>-->
<#--								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="depop" class="flag-ipt" data-link="https://www.depop.com/"><label for="depop"><img src="/assets/images/sns/depop.png"/><div>Depop</div></label></div>-->
<#--								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="instagram" class="flag-ipt" data-link="https://www.instagram.com/"><label for="instagram"><img src="/assets/images/sns/instagram.png"/><div>Instagram</div></label></div>-->
<#--								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="linkedin" class="flag-ipt" data-link="https://www.linkedin.com/in/"><label for="linkedin"><img src="/assets/images/sns/linkedin.png"/><div>Linkdin</div></label></div>-->
<#--								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="mixer" class="flag-ipt" data-link="https://mixer.com/"><label for="mixer"><img src="/assets/images/sns/mixer.png"/><div>Mixer</div></label></div>-->
<#--								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="patreon" class="flag-ipt" data-link="https://www.patreon.com/"><label for="patreon"><img src="/assets/images/sns/patreon.png"/><div>Patreon</div></label></div>-->
<#--								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="pinterest" class="flag-ipt" data-link="https://www.pinterest.co.kr/"><label for="pinterest"><img src="/assets/images/sns/pinterest.png"/><div>Pinterest</div></label></div>-->
<#--								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="tumblr" class="flag-ipt" data-link="https://www.tumblr.com/blog/"><label for="tumblr"><img src="/assets/images/sns/tumblr.png"/><div>Tumblr</div></label></div>-->
<#--								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="twitch" class="flag-ipt" data-link="https://www.twitch.tv/"><label for="twitch"><img src="/assets/images/sns/twitch.png"/><div>Twitch</div></label></div>-->
<#--								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="twitter" class="flag-ipt" data-link="https://twitter.com/"><label for="twitter"><img src="/assets/images/sns/twitter.png"/><div>Twitter</div></label></div>-->
<#--								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="21buttons" class="flag-ipt" data-link="https://www.21buttons.com/buttoner/"><label for="21buttons"><img src="/assets/images/sns/21buttons.png"/><div>21 Buttons</div></label></div>-->
<#--								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="dailymotion" class="flag-ipt" data-link="https://www.dailymotion.com/"><label for="dailymotion"><img src="/assets/images/sns/dailymotion.png"/><div>Dailymotion</div></label></div>-->
<#--								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="viemo" class="flag-ipt" data-link="https://vimeo.com/"><label for="viemo"><img src="/assets/images/sns/viemo.png"/><div>Viemo</div></label></div>-->
<#--								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="youtube" class="flag-ipt" data-link="https://www.youtube.com/channel/"><label for="youtube"><img src="/assets/images/sns/youtube.png"/><div>Youtube</div></label></div>-->
<#--								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="last.fm" class="flag-ipt" data-link="https://www.last.fm/music/"><label for="last.fm"><img src="/assets/images/sns/last.fm.png"/><div>last.fm</div></label></div>-->
<#--								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="homepage" class="flag-ipt" data-link=""><label for="homepage"><img src="/assets/images/sns/homepage.png"/><div>직접입력</div></label></div>-->
<#--							</div>-->
<#--							<form id="addLinkForm" class="w-100">-->
<#--								<input type="hidden" id="userIdx" name="userIdx">-->
<#--								<input type="hidden" id="type" name="type">-->
<#--								<input type="hidden" id="link" name="link">-->
<#--								<div class="form-row w-100 mb-3">-->
<#--									<div class="col-auto d-flex align-items-center"><span class="span_tw">주소</span></div>-->
<#--									<div class="col">-->
<#--										<input type="text" id="parameter" class="form-control" readonly>-->
<#--									</div>-->
<#--								</div>-->
<#--								<div class="form-row w-100 mb-3">-->
<#--									<div class="col-auto d-flex align-items-center"><span class="span_tw">설명</span></div>-->
<#--									<div class="col">-->
<#--										<input type="text" id="detail" name="detail" class="form-control" readonly>-->
<#--									</div>-->
<#--								</div>-->

<#--							</form>-->
<#--						</div>-->

<#--						<div class="form-row">-->
<#--							<div class="col">-->
<#--								<button type="button" class="btn btn-secondary btn-block" onclick="history.back();">취소</button>-->
<#--							</div>-->
<#--							<div class="col d-flex justify-content-center align-items-center">-->
<#--								<button type="button" class="btn btn-primary btn-block" onclick="addLink();">저장</button>-->
<#--							</div>-->
<#--						</div>-->

<#--					</div>-->
<#--				</div>-->
<#--			</div>-->
<#--		</div>-->
<#--	</div>-->
<#--<#include "/layout/base_script.ftl">-->
<#--<script src="/assets/js/apps/userSelect.js"></script>-->
<#--<script src="/assets/js/apps/myLinksInput.js"></script>-->
<#--<#include "/layout/footer.ftl">-->
<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
<div class="main-container">
	<div class="row">
		<#include "/layout/main_nav.ftl">
		<div class="col">
			<div class="row">
				<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
					<h3>My Links 수정</h3>
					<div class="form-group">
						<span class="switch">
							<input type="checkbox" class="switch" id="switch-normal">
							<label for="switch-normal"></label>
						</span>
					</div>
				</div>
				<div class="col-12 col-sm-12 col-md-12">

					<div class="card-right d-flex flex-column justify-content-center align-items-center p-4-box mb-3">

						<div class="text-center mb-4">
							<h5>내가 운영하는 채널을 선택해주세요.</h5>
							<p class="text-black-50">플랫폼 별 입력사항이 다르니 꼼꼼히 확인해주세요.</p>
						</div>

						<form id="linkListForm" class="w-100">
							<input type="hidden" id="userIdx" name="userIdx">
							<input type="hidden" id="onoff" name="onoff" value="0">
							<input type="hidden" id="linkCount" value="0">
							<div id="itemBoxWrap" class="form-row w-100 mb-3 mx-0"></div>
						</form>
					</div>

					<div class="form-row mb-5">
						<div class="col">
							<button type="button" id="addLinkBtn" class="btn btn-secondary btn-block" data-toggle="modal" data-target="#modalCenter">
								항목 추가<span class="dt-none px-2">+</span>
							</button>
						</div>
						<div class="col-auto d-flex justify-content-center align-items-center">
							<button type="button" class="btn btn-primary" onclick="linkSave();">수정 완료</button>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</div>

<!-- Modal -->
<div class="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
		<div class="modal-content" style="min-height: 50vh;">
			<div class="modal-header">
				<h5 class="modal-title" id="modal-title"><h3 class="mb-none">My Links</h3><h3 class="dt-none">마이링크 항목 추가</h3></h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			</div>
			<div id="modal-content" class="modal-body">
				<div class="card-right d-flex flex-column justify-content-center align-items-center p-4-box">

					<div class="text-center mb-4">
						<h5>내가 운영하는 채널을 선택해주세요.</h5>
						<p class="text-black-50">플랫폼 별 입력사항이 다르니 꼼꼼히 확인해주세요.</p>
					</div>

					<div class="row mb-4 mx-0">
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="instagram" class="flag-ipt" data-link="https://www.instagram.com/"><label for="instagram"><img src="/assets/images/sns/instagram.png"/><div>Instagram</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="youtube" class="flag-ipt" data-link=""><label for="youtube"><img src="/assets/images/sns/youtube.png"/><div>Youtube</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="facebook" class="flag-ipt" data-link=""><label for="facebook"><img src="/assets/images/sns/facebook.png" alt=""/><div>Facebook</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="shop" class="flag-ipt" data-link=""><label for="shop"><img src="/assets/images/sns/shop.png" alt=""/><div>Shop</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="twitter" class="flag-ipt" data-link="https://twitter.com/"><label for="twitter"><img src="/assets/images/sns/twitter.png"/><div>Twitter</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="snapchat" class="flag-ipt" data-link="https://www.snapchat.com/add/"><label for="snapchat"><img src="/assets/images/sns/snapchat.png"/><div>Snap chat</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="linkedin" class="flag-ipt" data-link=""><label for="linkedin"><img src="/assets/images/sns/linkedin.png"/><div>Linkdin</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="mail" class="flag-ipt" data-link=""><label for="mail"><img src="/assets/images/sns/mail.png"/><div>Mail</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="link" class="flag-ipt" data-link=""><label for="link"><img src="/assets/images/sns/link.png"/><div>직접입력</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="kakaotalk" class="flag-ipt" data-link=""><label for="kakaotalk"><img src="/assets/images/sns/kakaotalk.png"/><div>Kakao
									talk</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="twitch" class="flag-ipt" data-link="https://www.twitch.tv/"><label for="twitch"><img src="/assets/images/sns/twitch.png"/><div>Twitch</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="afreeca" class="flag-ipt" data-link="http://play.afreecatv.com/"><label for="afreeca"><img src="/assets/images/sns/afreeca.png"/><div>Afreecatv</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="tictok" class="flag-ipt" data-link="https://www.tiktok.com/@"><label for="tictok"><img src="/assets/images/sns/tictok.png"/><div>Tik Tok</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="daum" class="flag-ipt" data-link=""><label for="daum"><img src="/assets/images/sns/daum.png"/><div>Daum cafe</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="naver" class="flag-ipt" data-link=""><label for="naver"><img src="/assets/images/sns/naver.png"/><div>Naver cafe</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="pinterest" class="flag-ipt" data-link="https://www.pinterest.co.kr/"><label for="pinterest"><img src="/assets/images/sns/pinterest.png"/><div>Pinterest</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="amazon" class="flag-ipt" data-link=""><label for="amazon"><img src="/assets/images/sns/amazon.png"/><div>Amazon</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="ebay" class="flag-ipt" data-link="https://www.ebay.com/usr/"><label for="ebay"><img src="/assets/images/sns/ebay.png"/><div>Ebay</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="vimeo" class="flag-ipt" data-link="https://vimeo.com/"><label for="vimeo"><img src="/assets/images/sns/vimeo.png"/><div>Viemo</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="weibo" class="flag-ipt" data-link=""><label for="weibo"><img src="/assets/images/sns/weibo.png"/><div>Weibo</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="whatapps" class="flag-ipt" data-link=""><label for="whatapps"><img src="/assets/images/sns/whatapps.png"/><div>Whatsapp</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="shopify" class="flag-ipt" data-link=""><label for="shopify"><img src="/assets/images/sns/shopify.png"/><div>Shopify</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="tumblr" class="flag-ipt" data-link="https://www.tumblr.com/blog/"><label for="tumblr"><img src="/assets/images/sns/tumblr.png"/><div>Tumblr</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="skype" class="flag-ipt" data-link=""><label for="skype"><img src="/assets/images/sns/skype.png"/><div>Skype</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="deezer" class="flag-ipt" data-link=""><label for="deezer"><img src="/assets/images/sns/deezer.png"/><div>Deezer</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="applemusic" class="flag-ipt" data-link="
https://itunes.apple.com/profile/"><label for="applemusic"><img src="/assets/images/sns/applemusic.png"/><div>Apple Music</div></label></div>
						<div class="col-3 col-md-2 mb-3"><input type="checkbox" id="soundcloud" class="flag-ipt" data-link=""><label for="soundcloud"><img src="/assets/images/sns/soundcloud.png"/><div>Sound cloud</div></label></div>
					</div>
				</div>
			</div>

			<div class="modal-footer row p-4 d-none">
				<div class="col-12">
					<form id="addLinkForm" class="w-100 p-sm-0 p-md-4">
						<input type="hidden" id="type" />
						<input type="hidden" id="url" />
						<div id="form_div1" class="form-row w-100 mb-3 d-none">
							<div class="col-3 d-flex align-items-center"><b>아이디</b></div>
							<div class="col-9 p-0">
								<div class="row m-0">
									<span id="pre_parameter" class="col-auto align-self-center p-0" style="color: #6c757d;"></span>
									<input type="text" id="parameter" class="form-control col" placeholder="아이디">
								</div>
							</div>
						</div>
						<div id="form_div2" class="form-row w-100 mb-3 d-none">
							<div class="col-3 d-flex align-items-center font"><b>링크 주소</b></div>
							<div class="col-9 p-0"><input type="text" id="urlLink" class="form-control" placeholder="전체 링크 주소"></div>
						</div>
						<div id="form_div3" class="form-row w-100 mb-3 d-none">
							<div class="col-3 d-flex align-items-center"><b>타이틀</b></div>
							<div class="col-9 p-0">
								<input type="text" id="detail" name="detail" class="form-control" placeholder="설명">
							</div>
						</div>
					</form>
				</div>
				<div class="col-12">
					<button id="saveBtn" type="button" class="btn btn-primary btn-h4 w-100" data-dismiss="modal">저장</button>
				</div>
			</div>
		</div>
	</div>
</div>

<#include "/layout/base_script.ftl">
<script type="text/javascript" src="/assets/js/jquery-ui.js" ></script>
<script type="text/javascript" src="/assets/js/jquery-ui-touch-punch.js"></script>
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/myLinks.js"></script>
<#include "/layout/footer.ftl">
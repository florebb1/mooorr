<#include "/layout/header.ftl">
<#include "/layout/main_header.ftl">
	<div class="mobile-bg-background-mo mobile-fixed-background-mo"></div>
	<div id="main_container" class="main-container main-only-bg d-none">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<form id="mainForm">
						<input type="hidden" id="apiAddress" value="${apiAddress?string}">
						<input type="hidden" id="main_loginIdx" name="userIdx" value="">
						<input type="hidden" id="main_targetIdx" name="targetIdx" value="">
					</form>
					<div class="col-lg-6 col-md-12">

						<div id="main_info" class="d-none">
							<h3 class="mb-none">About Me</h3>
							<div class="mb-3 mobile-profile-wrap">
								<div class="form-row">
									<div class="col-4">
										<div class="d-flex flex-column">
											<h5 class="emblem-wrap">
												<img id="batge_star" class="batge_star_dsp" src="/assets/images/badge/star-off.png"/>
												<img id="batge1" class="batge_dsp" src="/assets/images/badge/off.png"/>
												<img id="batge2" class="batge_dsp" src="/assets/images/badge/off.png"/>
												<img id="batge3" class="batge_dsp" src="/assets/images/badge/off.png"/>
											</h5>
											<div id="main_profileImage"></div>
										</div>
									</div>
									<div class="col-8">
										<div class="d-flex flex-column">
											<h5 class="modal-btn text-right pointer-clicker" data-toggle="modal" data-target="#modalCenter">...</h5>
											<div class="mobile-text-wrap">
												<h3 id="main_nicName" class="pointer-clicker"></h3>
												<p id="main_text" style="width:180px;overflow:hidden;text-overflow:ellipsis; white-space:nowrap;"></p>
												<div class="mt-0 pointer-clicker">Follower <span id="main_follower" class="font-weight-bold ml-2"></span></div>
												<div class="mt-1 pointer-clicker">Following <span id="main_following" class="font-weight-bold ml-2"></span></div>
											</div>
										</div>
									</div>
								</div>

								<div id="myMenu" class="d-none">
									<div id="editOff">
										<div class="form-row d-flex mt-4">
											<div class="col-4">
												<button id="peBtn" type="button" class="btn btn-edit btn-h4 btn-block font-weight-bold" onclick="location.href='/profile'">Profile Edit</button>
											</div>
											<div class="col-4">
												<button id="myChatEditBtn" type="button" class="btn btn-edit btn-h4 btn-block font-weight-bold" onclick="location.href='/info_edit'">P.M. Edit</button>
											</div>
											<div class="col-4">
												<div class="position-relative">
													<span class="chat-room-count font-12 font-weight-bold">N</span>
													<a href="/chat_list" class="btn btn-primary btn-h4 btn-block font-weight-bold text-white px-0">
														<img src="/assets/images/email-logo-w.png" class="logo-white-sm"/>P.M.
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div id="otherMenu" class="d-none">
									<div class="right-profile-cust d-flex mt-4">
										<div class="col-2 p-0">
											<div id="plus_follow" class="pr-1 followBtn d-none">
												<button type="button" class="btn btn-info btn-h4 btn-block font-weight-bold" onclick="follow('plus');">
													<img src="/assets/images/user-sw.png" style="width:14px;"/>
													<img src="/assets/images/plus-sign.png" style="width:8px;"/>
												</button>
											</div>
											<div id="followed" class="pr-1 followBtn d-none">
												<button type="button" class="btn btn-before btn-h4 btn-block font-weight-bold" onclick="follow('check');">
													<img src="/assets/images/user-sb.png" style="width:14px;"/>
													<img src="/assets/images/check-b.png" style="width:8px;"/>
												</button>
											</div>
										</div>
										<div class="col-10 p-0">
											<button id="orderMSG" type="button" class="btn btn-primary btn-h4 btn-block font-weight-bold"><img src="/assets/images/email-logo-w.png" class="logo-white-sm"/>Private Message</button>
										</div>
									</div>
								</div>

								<div class="mobile-profile-bg-wrap">
									<div id="main_bg_profileImage" class="mobile-profile-bg"></div>
									<div class="mobile-profile-mask"></div>
								</div>
							</div>
						</div>
						<h3 class="dt-none">About Me</h3>

						<div id="main_notice" class="d-none">
							<div class="row">
								<div class="col"><h5>Profile & Notice</h5></div>
								<div class="col-auto text-right myProfileEdit">
<#--									<h5 class="edit-btn-color" onclick="location.href='/profile_notice'"><img src="/assets/images/edit.png"></h5>-->
									<h5 class="edit-btn-color pointer-clicker" onclick="location.href='/profile_notice'"><i class="icon-profile_edit"></i></h5>
								</div>
							</div>

							<div class="card-right overlay">
								<div id="notice_content" class="text-break notice_content_p"></div>
								<div class="overlay_before"></div>
								<div class="text-right">
									<button id="notice_more" class="btn btn-link text-right font-weight-bold edit-btn-color">...</button>
								</div>
							</div>
						</div>

						<div id="main_travel" class="d-none">
							<div class="row">
								<div class="col"><h5>Travel</h5></div>
								<div class="col-auto text-right myProfileEdit">
									<h5 class="edit-btn-color pointer-clicker" onclick="location.href='/travel_list'"><i class="icon-profile_edit"></i></h5>
								</div>
							</div>
							<div class="content-md-box">
								<div class="content-md-box-in">
									<div id="travel_content"></div>
								</div>
							</div>
						</div>

						<div id="main_links" class="d-none">
							<div class="row">
								<div class="col"><h5>My Links</h5></div>
								<div class="col-auto text-right myProfileEdit">
									<h5 class="edit-btn-color pointer-clicker" onclick="location.href='/my_links'"><i class="icon-profile_edit"></i></h5>
								</div>
							</div>
							<div class="my-link-md-box link_content_class_wrap">
								<div id="link_content" class="link_content_class"></div>
							</div>
							<div class="text-right">
								<a href="" id="myLinksMore" class="btn btn-link text-right font-weight-bold edit-btn-color mb-none tb-none">...</a>
							</div>
						</div>

						<div id="main_favorite" class="d-none hfuc-82">
							<div class="row">
								<div class="col"><h5>Favorite</h5></div>
								<div class="col-auto text-right myProfileEdit">
									<h5 class="edit-btn-color pointer-clicker" onclick="location.href='/favorite'"><i class="icon-profile_edit"></i></h5>
								</div>
							</div>
							<div id="favorite_content" class="favorite_content_body"></div>
						</div>

						<div id="main_interests" class="d-none">
							<div class="row">
								<div class="col"><h5>Interests</h5></div>
								<div class="col-auto text-right myProfileEdit">
									<h5 class="edit-btn-color pointer-clicker" onclick="location.href='/interests'"><i class="icon-profile_edit"></i></h5>
								</div>
							</div>

							<div class="content-md-box">
								<div class="content-md-box-in">
									<div id="interests_content"></div>
								</div>
							</div>

						</div>

					</div>
					<div class="col-lg-6 col-md-12">
						<h3>My Life</h3>

						<div id="main_life" class="d-none overlay-mo-none">
							<div class="row">
								<div class="col"><h5>Portrait 9</h5></div>
								<div class="col-auto text-right myProfileEdit">
									<h5 class="edit-btn-color pointer-clicker" onclick="location.href='/portrait'"><i class="icon-profile_edit"></i></h5>
								</div>
							</div>
							<div class="portrait-md-box image-row overlay border-radius-10">
								<div id="life_content" class="form-row image-set"></div>
								<div class="text-right">
									<a href="" id="portraitMore" class="btn btn-link text-right font-weight-bold edit-btn-color mb-none tb-none">...</a>
								</div>
								<div class="overlay_before"></div>
							</div>
						</div>

						<div id="main_comments" class="d-none">
							<div class="row">
								<div class="col"><h5>Friends Comments<span id="commentCount" class="text-white text-center font-13 border-radius-10 mx-2 px-2" style="background-color: #000; opacity: 0.75;"></span></h5></div>
								<div class="col-auto text-right myProfileEdit">
									<h5 class="edit-btn-color pointer-clicker" onclick="location.href='/comment'"><i class="icon-profile_edit"></i></h5>
								</div>
							</div>
							<div class="card-right overlay">
								<div id="comment_content" class="comment_content_wrap"></div>
								<div class="text-right">
									<a href="#" id="comment_more" class="btn btn-link text-right font-weight-bold edit-btn-color">...</a>
								</div>
								<div class="overlay_before"></div>
							</div>
						</div>

						<div id="main_schedule" class="d-none">
							<div class="row">
								<div class="col"><h5>Schedule</h5></div>
								<div class="col-auto text-right myProfileEdit">
									<h5 class="edit-btn-color pointer-clicker" onclick="location.href='/schedule'"><i class="icon-profile_edit"></i></h5>
								</div>
							</div>
							<div class="card-right overlay">
								<div id="schedule_content"></div>
								<div class="text-right">
									<a href="#" id="schedule_more" class="btn btn-link text-right font-weight-bold edit-btn-color">...</a>
								</div>
								<div class="overlay_before"></div>
							</div>
						</div>

						<div id="main_advertising" class="d-none">
							<h5>M news</h5>
							<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
								<div id="adList" class="carousel-inner"></div>
							</div>
						</div>

					</div>
				</div>
				<hr class="mt-5 copyright-hr">
				<div class="row mb-4 font-weight-bold align-items-center mb-none">
					<a class="col text-center pointer-clicker" style="word-break: keep-all;" onclick="location.href='/service_info'">서비스 이용약관</a>
					<a class="col text-center border-left border-right pointer-clicker" style="word-break: keep-all; border-right: 2px solid !important; border-left: 2px solid !important;" onclick="location.href='/privacy'">개인정보 보호방침</a>
					<a class="col text-center pointer-clicker" style="word-break: keep-all;" onclick="location.href='/privacy_guide'">개인정보 수집이용</a>
				</div>
				<div class="row">
					<div class="col-12 pb-5 mb-none">
						상호명 : 퍼스트모오어 대표자 : 조재현<br>
						개인정보책임관리자 : 박찬(help@mooorr.com) <br>
						사업자등록번호 : 391-43-00368<br>
						통신판매신고번호제 : 2019-서울강남-04365 호<br>
						주소 : 서울특별시 강남구 테헤란로 5길 7, 8층(역삼동) <br>
						이메일 : help@mooorr.com<br>
						전화번호 : 010-5555-6294
					</div>
					<div class="col-12 pb-5 dt-none text-center font-weight-bold">
						Powered by mooorr.
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 공유하기 모달 -->
	<div class="modal" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg modal-dialog-centered" role="document">
			<div class="modal-content border-radius-10" style="max-width: 307.5px;">
				<div class="modal-header border-0 py-0">
					<button type="button" class="close font-25" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				</div>
				<div id="modal-content" class="modal-body py-0">
					<p class="font-weight-bold">공유</p>
					<div class="share-modal">
						<div class="share-modal-box">
							<button type="button" data-toggle="sns_share" data-service="naver" data-title="네이버 SNS공유" class="h-100 mr-2 px-0">
								<img src="/assets/images/share_icon/naver_share.png" class="w-100" style="width: 62px;">
							</button>
							<button type="button" data-toggle="sns_share" data-service="twitter" data-title="트위터 SNS공유" class="h-100 mr-2 px-0">
								<img src="/assets/images/share_icon/twitter_share.png" class="w-100" style="width: 62px;">
							</button>
							<button type="button" data-toggle="sns_share" data-service="facebook" data-title="페이스북 SNS공유" class="h-100 mr-2 px-0">
								<img src="/assets/images/share_icon/facebook_share.png" class="w-100" style="width: 62px;">
							</button>
							<button type="button" data-toggle="sns_share" data-service="tumblr" data-title="텀블러 SNS공유" class="h-100 mr-2 px-0">
								<img src="/assets/images/share_icon/tumblr_share.png" class="w-100" style="width: 62px;">
							</button>
							<button type="button" data-toggle="sns_share" data-service="kakaostory" data-title="카카오스토리 SNS공유" class="h-100 mr-2 px-0">
								<img src="/assets/images/share_icon/kakaostory_share.png" class="w-100" style="width: 62px;">
							</button>
						</div>
					</div>
					<div class="mb-4">
						<div class="row mx-0 mb-3">
							<span class="d-flex align-items-center col-3 p-0 font-weight-bold">나의 URL</span>
							<input id="shareLink" class="col-8 bg-transparent form-control border-bottom p-0" placeholder="mooorr.com/mermadiviviv" readonly>
							<div id="shareLinkBtn" class="col-1 p-0 w-100" style="background: center / contain no-repeat url('/assets/images/9-b-8-y-18-tif@3x_2.png'); background-size: 15px;"></div>
						</div>
						<div class="mb-3 d-none"><span id="shareReport" class="font-weight-bold text-dark">신고하기</span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script>
	$.unblockUI();
	$.blockUI();
	setTimeout($.unblockUI,100);
</script>
<script src="/assets/js/apps/userSelect.js"></script>
<script>
	$(function () {
		// $("#nav_open").attr("src", "/assets/images/side_nav2.png");
		// get login Idx & page admin nickname
		var userName = "${nicName?js_string}";
		var userIdx = getCookie('idx');
		// page load info
		mainLoad(userName, userIdx);
		// ad load
		ad();


		// 로그인 정보가 없다면 로그인시 이동할 url 저장
		if(userIdx == "" || userIdx == null || userIdx == undefined) {
			var url = window.location.pathname;
			setCookie('loginAfterUrl', url, 1);
		}

		// 메세지 버튼 클릭시
		$("#orderMSG").click(function () {
			if(userIdx == "" || userIdx == null || userIdx == undefined) {
				Swal.fire({
					title: '로그인 필요',
					text: "해당 서비스는 로그인이 필요한 서비스 입니다",
					confirmButtonText: '확인',
					allowOutsideClick: false
				}).then(function (isConfirm) {
					if(isConfirm) {
						location.href='/login';
					}
				});
			}else {
				var url = $(this).attr('data-url');
				location.href=url;
			}
		});

		$("#shareReport").click(function () {
			if(userIdx == "" || userIdx == null || userIdx == undefined) {
				Swal.fire({
					title: '로그인 필요',
					text: "해당 서비스는 로그인이 필요한 서비스 입니다",
					confirmButtonText: '확인',
					allowOutsideClick: false
				}).then(function (isConfirm) {
					if(isConfirm) {
						location.href='/login';
					}
				});
			} else {
				var url = $(this).attr('href');
				location.href=url;
			}
		});


		// aboutNotice view more
		$("#notice_more").click(function () {
			var apiAddress = $("#apiAddress").val();
			$.ajax({
				url: apiAddress+"/api/profile?userName="+userName+"&userIdx="+userIdx,
				type: 'GET',
				dataType: 'JSON',
				success: function (response) {
					// console.log(response);
					if(response.result) {
						var text = response.aboutNotice.notice;
						$("#notice_content").html(text);
					}else{
						Swal.fire({
							text: response.msg,
							confirmButtonText: '확인',
							allowOutsideClick: false
						});
						return false;
					}
				}
			});
			$(this).css('display', 'none');
		});

		// portrait view
		$(document).on('click', '.portrait', function () {
			var link = $(this).attr('data-url');
			// $("#modal-image").attr('src', link);
			$("#modal-content").css('background-image', 'url('+link+')');
			$("#exampleModalCenter").modal('show');
		});

		// 공유팝업 sns 링크 연결
		$("button[data-toggle='sns_share']").click(function (e) {
			e.preventDefault();

			var _this = $(this);
			var sns_type = _this.attr('data-service');
			var href = $("#shareLink").val();
			var title = _this.attr('data-title');
			var loc = "";
			var img = $("meta[name='og:image']").attr('content');

			if( ! sns_type || !href || !title) return;

			if( sns_type == 'facebook' ) {
				loc = '//www.facebook.com/sharer/sharer.php?u='+href+'&t='+title;
			}else if ( sns_type == 'twitter' ) {
				loc = '//twitter.com/home?status='+encodeURIComponent(title)+' '+href;
			}else if ( sns_type == 'google' ) {
				loc = '//plus.google.com/share?url='+href;
			}else if ( sns_type == 'pinterest' ) {
				loc = '//www.pinterest.com/pin/create/button/?url='+href+'&media='+img+'&description='+encodeURIComponent(title);
			}else if ( sns_type == 'tumblr') {
				loc = '//tumblr.com/widgets/share/tool?canonicalUrl='+href;
			}else if ( sns_type == 'kakaostory') {
				loc = 'https://story.kakao.com/share?url='+encodeURIComponent(href);
			}else if ( sns_type == 'band' ) {
				loc = 'http://www.band.us/plugin/share?body='+encodeURIComponent(title)+'%0A'+encodeURIComponent(href);
			}else if ( sns_type == 'naver' ) {
				loc = "http://share.naver.com/web/shareView.nhn?url="+encodeURIComponent(href)+"&title="+encodeURIComponent(title);
			}else {
				return false;
			}

			window.open(loc);
			return false;
		});

		// 공유팝업 복사하기 버튼
		$("#shareLinkBtn").click(function () {
			$("#shareLink").select();
			document.execCommand("copy");
			Swal.fire({
				text: '클립보드에 복사되었습니다',
				confirmButtonText: '확인',
				allowOutsideClick: false
			});
		});

	});
	window.onload = function () {
		$("#main_container").removeClass('d-none');
	}

</script>
<script src="//cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.1/js/lightbox-plus-jquery.min.js"></script>
<script src="/assets/js/apps/main.js"></script>
<#include "/layout/footer.ftl">
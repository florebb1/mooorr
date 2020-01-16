<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
	<div class="container-fluid fluid-wrap bg-white">
		<div class="d-flex flex-column justify-content-center align-items-center h-100">
			<div class="position-absolute font-23 dt-none font-weight-light" style="top: 5%; left: 5%;">mooorr에 오신걸 환영합니다</div>
			<div class="login-wrap">
				<h1 class="d-flex justify-content-center align-items-center">
					<img src="assets/images/signup_success.png">
				</h1>

				<div class="text-center">다양한 분야의 사용자와 경험을 공유하고.<br>수익을 창출해보세요 !</div>

				<hr class="my-5">

				<div class="text-center mt-3">
					<p class="font-weight-bold text-center">모어를 시작하기 전에!</p>
					<button type="button" class="btn btn-primary btn-block btn-h4" data-toggle="modal" data-target="#modalCenter">서비스 이용 방법 확인하기</button>
				</div>
			</div>
		</div>
	</div>
	<!-- Modal -->
	<div class="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
			<div class="modal-content" style="min-height: 50vh;">
				<div class="modal-header border-0 p-5">
					<div class="modal-title" id="modal-title">
						<span class="font-23">더 가치 있는 관계, 모어</span><br><br>
						<span class="font-15 text-secondary">그럼 모어에 대해 더 알아볼까요?</span>
					</div>
					<button type="button" class="close font-25" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				</div>
				<div id="modal-content" class="modal-body p-0">
					<p class="font-15 font-weight-bold px-5">1. 프라이빗 메세지 (Private Message, P.M.)</p>
					<img src="/assets/images/service_guide1.jpg" class="w-100 mb-3">
					<div class="text-secondary px-5 mb-5">
						<p>디엠, 페메를 궁금해서 보냈는데 답장 없는 경험 있죠?</p>
						<p>이제 P.M 해보세요! 항상 답을 얻는 새로운 경험!</p>
					</div>

					<div style="height: 10px; background-color: #ddd;"></div>

					<p class="font-15 font-weight-bold px-5 pt-5">2. 단 하나의 '모어 링크'</p>
					<img src="/assets/images/service_guide2.png" class="w-100 mb-3">
					<div class="text-secondary px-5 mb-5">
						<p>내 ‘모어 링크’ 하나에 Instagram, Youtube, Shop 등</p>
						<p>내 모든 채널을 추가하고, 효과적으로 알릴 수 있어요.</p>
					</div>

					<div style="height: 10px; background-color: #ddd;"></div>

					<p class="font-15 font-weight-bold px-5 pt-5">3. 나를 설명하는 퍼스널 브랜드 ‘모어 프로필’</p>
					<img src="/assets/images/service_guide3.png" class="w-100 mb-3">
					<div class="text-secondary px-5 mb-5">
						<p>기존 SNS에서 제공하지 않는 효율적인 기능들로</p>
						<p>더 가치 있는 나의 모습을 반영해서 만들어보세요.</p>
					</div>
					<div class="p-5">
						<p class="font-weight-bold text-center">이제 시작해볼까요?</p>
						<button type="button" id="completBtn" class="btn btn-primary btn-block btn-h4">네 좋습니다!</button>
					</div>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/joinCompleted.js"></script>
<#include "/layout/footer.ftl">
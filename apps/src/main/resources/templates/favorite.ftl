<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
						<h3>Favorite 수정</h3>
						<div class="form-group">
							<span class="switch">
								<input type="checkbox" class="switch" id="switch-normal">
								<label for="switch-normal"></label>
							</span>
						</div>
					</div>
					<div class="col-12 col-sm-12 col-md-12">
						<div class="card-right d-flex flex-column justify-content-center align-items-center p-4 mb-3">
							<div class="text-center mb-4">
								<h5>내가 좋아하는 사이트 링크를 등록해주세요.</h5>
								<p class="text-black-50">최대 2개의 사이트까지 가능합니다.</p>
							</div>

							<form id="favoriteListForm">
								<input type="hidden" id="userIdx" name="userIdx">
								<input type="hidden" id="onoff" name="onoff">
								<input type="hidden" id="count" value="0">
							</form>

							<div id="favorite_content" class="w-100"></div>
						</div>

						<div class="form-row mb-5">
							<div class="col">
								<a id="favoritAddBtn" class="btn btn-secondary btn-block text-white" data-toggle="modal" data-target="#exampleModalCenter">
									항목 추가<b class="dt-none px-2">+</b>
								</a>
							</div>
							<div class="col-auto d-flex justify-content-center align-items-center">
								<button type="button" class="btn btn-primary" onclick="favoriteEdit();">수정 완료</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal -->
	<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered " role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="modal-title">페이버릿 링크</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				</div>
				<div id="modal-content" class="modal-body">
					<form id="favoriteModalForm">
						<input type="hidden" id="modal-userIdx" name="userIdx">
						<div class="form-row w-100 mb-3">
							<div class="col-auto d-flex align-items-center"><span class="span_tw">페이버릿 링크</span></div>
							<div class="col">
								<div class="row m-0">
									<input type="text" id="modal-link" name="link" class="form-control">
								</div>
							</div>
						</div>
						<div class="form-row w-100 mb-3">
							<div class="col-auto d-flex align-items-center"><span class="span_tw">설명</span></div>
							<div class="col">
								<input type="text" id="modal-detail" name="detail" class="form-control">
							</div>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary btn-h4 w-25" data-dismiss="modal">닫기</button>
					<button type="button" class="btn btn-primary btn-h4 w-25" onclick="favoriteAdd();">등록</button>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/favorite.js"></script>
<#include "/layout/footer.ftl">
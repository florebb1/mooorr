<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
		<div class="main-container">
			<div class="row">
				<#include "/layout/main_nav.ftl">

				<div class="col">
					<div class="row">
						<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
							<h3 class="mb-none">Schedule</h3><h3 class="dt-none">스케쥴 수정</h3>
							<div class="form-group">
								<span id="switch-normal-span" class="switch">
									<input type="checkbox" class="switch" id="switch-normal">
									<label for="switch-normal"></label>
								</span>
							</div>
						</div>
						<div class="col-12 col-sm-12 col-md-12">
							<form id="scheduleForm">
								<input type="hidden" id="userIdx" name="userIdx">
								<input type="hidden" id="onoff" name="onoff" value="0">
							</form>

							<div class="card-right mb-3">
								<div class="d-flex flex-column justify-content-center align-items-center" style="height: 160px;">
									<p class="font-15 font-weight-bold"> 나의 스케줄을 공유해 주세요.</p>
									<label class="w-100 text-center text-secondary">최대 10개의 일정을 등록할 수 있습니다.</label>
								</div>
								<div class="calendar calendar-first mt-3" id="calendar_first">
									<div class="calendar_header">
										<button class="switch-month switch-left"><</button>
										<h2></h2>
										<button class="switch-month switch-right">></button>
									</div>
									<div class="calendar_weekdays"></div>
									<div class="calendar_content"></div>
								</div>

								<div id="schedule_content" class="schedule-list-wrap"></div>

							</div>

							<div class="form-row mb-5">
								<div class="col">
									<button type="button" id="scheduleAddBtn" class="btn btn-secondary btn-block" data-toggle="modal" data-target="#schedule-add">
										일정 추가<b class="dt-none px-2">+</b>
									</button>
								</div>
								<div class="col-auto d-flex justify-content-center align-items-center">
									<button type="button" id="saveBtn" class="btn btn-primary" onclick="onoff()">수정 완료</button>
								</div>
							</div>
<#--							<div class="result-button-wrap mb-5">-->
<#--								<button type="button" id="scheduleAddBtn" class="btn btn-secondary " data-toggle="modal" data-target="#schedule-add">일정 추가</button>-->
<#--								<button type="button" id="saveBtn" class="btn btn-primary" onclick="onoff()">수정 완료</button>-->
<#--							</div>-->

							<div class="modal fade" id="schedule-add" tabindex="-1" role="dialog" aria-labelledby="schedule-add-Title" aria-hidden="true">
								<div class="modal-dialog modal-dialog-centered" role="document">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title m-0" id="schedule-add-Title">일정추가</h5>
											<button type="button" class="close" data-dismiss="modal" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
											<form id="scheduleModalForm">
												<input type="hidden" id="modal-userIdx" name="userIdx">
												<input type="hidden" id="allDay" name="allDay" value="0">
												<input type="hidden" id="startDate" name="startDate">
												<input type="hidden" id="endDate" name="endDate">
												<div class="form-inline mb-3">
													<div class="form-group mr-3" style="width:40%;">
														<label class="mr-2">Start Day</label>
														<input type="text" class="form-control datetimepicker-input" id="datetimepicker1" data-toggle="datetimepicker" data-target="#datetimepicker1"/>
													</div>
													<div class="form-group" style="width:40%;">
														<label class="mr-2">End Day</label>
														<input type="text" class="form-control datetimepicker-input" id="datetimepicker2" data-toggle="datetimepicker" data-target="#datetimepicker2"/>
													</div>
												</div>
												<div class="form-group">
													<label for="">일정 제목</label>
													<input type="text" class="form-control border" id="sdTitle" name="sdTitle" aria-describedby="" placeholder="">
												</div>
												<div class="form-group">
													<label for="">일정 내용</label>
													<input type="text" class="form-control border" id="sdContent" name="sdContent" aria-describedby="" placeholder="">
												</div>
											</form>
										</div>

										<div class="modal-footer">
											<button type="button" class="btn btn-secondary btn-h4 w-25" data-dismiss="modal">취소</button>
											<button type="button" class="btn btn-primary btn-h4 w-25" onclick="scheduleAdd()">저장</button>
										</div>
									</div>
								</div>
							</div>


						</div>
					</div>
				</div>
			</div>
		</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/schedule.js"></script>
<#include "/layout/footer.ftl">
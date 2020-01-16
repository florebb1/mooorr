<#include "/layout/header.ftl">
    <div class="main-content">
        <!-- ##### 관리자 및 컨텐츠 내용 시작 -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><i class="pe-7s-home"></i> MOME</li>
                <li class="breadcrumb-item">회원관리</li>
                <li class="breadcrumb-item active" aria-current="page">회원정보 - 상세</li>
            </ol>
        </nav>
        <hr>
        <form id="userListForm">
            <input type="hidden" name="userIdx">
            <input type="hidden" id="bType" name="bType">
            <h6 class="mt-4">기본 정보 <i class="pe-7s-link"></i></h6>
            <div class="form-row">
                <div class="col-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">E-mail</span>
                        </div>
                        <input type="email" id="loginId" class="form-control" aria-label="E-mail" aria-describedby="button-addon2" readonly>
                    </div>
                </div>

                <div class="col-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">닉네임</span>
                        </div>
                        <input type="text" id="userName" class="form-control" aria-label="닉네임" aria-describedby="button-addon2" readonly>
                    </div>
                </div>

                <div class="col-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">가입일</span>
                        </div>
                        <input type="text" id="joinDate" class="form-control" aria-label="2019-09-02" aria-describedby="button-addon2" readonly>
                    </div>
                </div>

                <div class="col">
                    <div class="input-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <input id="certificationDate" type="checkbox">
                                </div>
                            </div>
                            <input type="text" class="form-control" aria-label="본인인증" value="본인인증여부" disabled>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="input-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <input id="donation" type="checkbox" disabled>
                                </div>
                            </div>
                            <input type="text" class="form-control" aria-label="본인인증" value="기부여부" disabled>
                        </div>
                    </div>
                </div>

                <div class="col-3 mt-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">생년월일</span>
                        </div>
                        <input type="text" id="birthday" class="form-control" readonly>
                    </div>
                </div>
                <div class="col-2 mt-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">성별</span>
                        </div>
                        <input type="text" id="gender" class="form-control" readonly>
                    </div>
                </div>
                <div class="col-2 mt-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">국가</span>
                        </div>
                        <input type="text" id="nation" class="form-control" readonly>
                    </div>
                </div>

                <div class="col-5 mt-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">계좌정보</span>
                        </div>
                        <input type="text" id="account" name="account" class="form-control" placeholder="은행 / 계좌번호" aria-label="Number" aria-describedby="pointInsertBtn" value="0">
                        <div class="input-group-append">
                            <button class="btn btn-info" type="button" id="accountBtn">계좌등록</button>
                        </div>
                    </div>
                </div>

            </div>

            <h6 class="mt-4">뱃지정보</h6>
            <div class="form-row">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input id="badgeType1" class="badgeCheck" type="checkbox" value="1">
                            </div>
                        </div>
                        <input type="text" class="form-control" value="공인 뱃지" disabled>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input id="badgeType2" class="badgeCheck" type="checkbox" value="2">
                            </div>
                        </div>
                        <input type="text" class="form-control" value="첫번째 뱃지" disabled>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="checkbox" id="badgeType3" class="badgeCheck" value="3">
                            </div>
                        </div>
                        <input type="text" class="form-control" value="두번째 뱃지" disabled>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="checkbox" id="badgeType4" class="badgeCheck" value="4">
                            </div>
                        </div>
                        <input type="text" class="form-control" value="세번째 뱃지" disabled>
                    </div>
                </div>

            </div>

            <h6 class="mt-4">크레딧증감 설정</h6>
            <div class="form-row">
                <div class="col-6">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">증감구분</span>
                        </div>
                        <select class="custom-select" id="pdType" name="pdType">
                            <option value="1" selected>충전(+)</option>
                            <option value="2">수익(+)</option>
                            <option value="3">이벤트성 지급(+)</option>
                            <option value="4">지출(-)</option>
                            <option value="5">정산(-)</option>
                            <option value="6">정책상회수(-)</option>
                        </select>
                    </div>
                </div>

                <div class="col-6">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">크레딧 부여</span>
                        </div>
                        <input type="Number" id="pdAmount" name="pdAmount" class="form-control" placeholder="Number" aria-label="Number" aria-describedby="pointInsertBtn" value="0">
                        <div class="input-group-append">
                            <button class="btn btn-info" type="button" id="pointInsertBtn">부여하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <hr class="mt-5">
        <h6 class="mt-5">내역 조회</h6>
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="nav-lista-tab" data-toggle="tab" href="#nav-lista" role="tab" aria-controls="nav-lista" aria-selected="true">크레딧 내역</a>
                <a class="nav-item nav-link" id="nav-listb-tab" data-toggle="tab" href="#nav-listb" role="tab" aria-controls="nav-listb" aria-selected="false">정산&기부 내역</a>
                <a class="nav-item nav-link" id="nav-listc-tab" data-toggle="tab" href="#nav-listc" role="tab" aria-controls="nav-listc" aria-selected="false">신고 내역</a>
                <a class="nav-item nav-link" id="nav-listd-tab" data-toggle="tab" href="#nav-listd" role="tab" aria-controls="nav-listd" aria-selected="false">채팅 내역</a>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-lista" role="tabpanel" aria-labelledby="nav-lista-tab">
                <div class="py-3">
                    <span class="btn btn-secondary">보유 크레딧 <span id="nowp" class="badge badge-light"></span></span>
                    <span class="btn btn-secondary">누적 충전크레딧 <span id="chargep" class="badge badge-light"></span></span>
                    <span class="btn btn-secondary">누적 크레딧수익 <span id="incomep" class="badge badge-light"></span></span>
                    <span class="btn btn-secondary">누적 사용크레딧 <span id="costp" class="badge badge-light"></span></span>
                </div>

                <table class="table table-hover">
                    <colgroup>
                        <col width="15%">
                        <col width="35%">
                        <col width="25%">
                        <col width="25%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col">
                            <span>No</span>
<#--                            <a href="#"><img src="/assets/images/sort_both.png"></a>-->
                        </th>
                        <th scope="col">
                            <span>날짜</span>
<#--                            <a href="#"><img src="/assets/images/sort_both.png"></a>-->
                        </th>
                        <th scope="col">
                            <span>구분</span>
<#--                            <a href="#"><img src="/assets/images/sort_both.png"</a>-->
                        </th>
                        <th scope="col">
                            <span>크레딧</span>
<#--                            <a href="#"><img src="/assets/images/sort_both.png"></a>-->
                        </th>
                    </tr>
                    </thead>
                    <tbody id="content1"></tbody>
                </table>

                <div class="d-flex justify-content-center">
                    <nav id="paginator1" aria-label="Page navigation example"></nav>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-listb" role="tabpanel" aria-labelledby="nav-listb-tab">
                <div class="py-3">
                    <span class="btn btn-secondary">누적 정산크레딧 <span id="finalSum" class="badge badge-light"></span></span>
                    <span class="btn btn-secondary">누적 기부크레딧 <span id="donationSum" class="badge badge-light"></span></span>
                </div>
                <table class="table table-hover">
                    <colgroup>
                        <col>
                        <col width="20%">
                        <col>
                        <col>
                        <col width="20%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col">
                            <span>No</span>
<#--                            <a href="#"><img src="../assets/images/sort_both.png"></a>-->
                        </th>
                        <th scope="col">
                            <span>날짜</span>
<#--                            <a href="#"><img src="../assets/images/sort_both.png"</a>-->
                        </th>
                        <th scope="col">
                            <span>정산 신청 크레딧</span>
<#--                            <a href="#"><img src="../assets/images/sort_both.png"</a></th>-->
                        <th scope="col">
                            <span>기부 크레딧</span>
<#--                            <a href="#"><img src="../assets/images/sort_both.png"</a></th>-->
                        <th scope="col">
                            <span>정산 결정 크레딧</span>
<#--                            <a href="#"><img src="../assets/images/sort_both.png"</a></th>-->
                        <th scope="col">
                            <span>정산 완료여부</span>
<#--                            <a href="#"><img src="../assets/images/sort_both.png"></a>-->
                        </th>
                    </tr>
                    </thead>
                    <tbody id="content2"></tbody>
                </table>
                <div class="d-flex justify-content-center">
                    <nav id="paginator2" aria-label="Page navigation example"></nav>
                </div>

            </div>
            <div class="tab-pane fade" id="nav-listc" role="tabpanel" aria-labelledby="nav-listc-tab">
                <table class="table table-hover my-3">
                    <colgroup>
                        <col width="10%">
                        <col width="15%">
                        <col width="15%">
                        <col width="50%">
                        <col width="10%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col">
                            <span>No</span>
                        </th>
                        <th scope="col">
                            <span>날짜</span>
<#--                            <a href="#"><img src="../assets/images/sort_both.png"></a>-->
                        </th>
                        <th scope="col">
                            <span>신고자</span>
<#--                            <a href="#"><img src="../assets/images/sort_both.png"></a>-->
                        </th>
                        <th scope="col">
                            <span>내용</span>
<#--                            <a href="#"><img src="../assets/images/sort_both.png"></a>-->
                        </th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody id="content3"></tbody>
                </table>
                <div class="d-flex justify-content-center">
                    <nav id="paginator3" aria-label="Page navigation example"></nav>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-listd" role="tabpanel" aria-labelledby="nav-listd-tab">

                <div class="row">
                    <div class="col">
                        <table class="table table-hover my-3">
                            <colgroup>
                                <col width="10%">
                                <col width="15%">
                                <col width="15%">
                                <col width="50%">
                                <col width="10%">
                            </colgroup>
                            <thead>
                            <tr>
                                <th scope="col">
                                    <span>No</span>
                                </th>
                                <th scope="col">
                                    <span>날짜</span>
                                    <#--                            <a href="#"><img src="../assets/images/sort_both.png"></a>-->
                                </th>
                                <th scope="col">
                                    <span>대화상대</span>
                                    <#--                            <a href="#"><img src="../assets/images/sort_both.png"></a>-->
                                </th>
                                <th scope="col">
                                    <span>내용</span>
                                    <#--                            <a href="#"><img src="../assets/images/sort_both.png"></a>-->
                                </th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody id="content4">
                                <tr>
                                    <th scope="row">1</th>
                                    <th>2019.09.01 00:00:00</th>
                                    <td>잘생긴놈</td>
                                    <td>ㅅㄱ</td>
                                    <td>
                                        <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModalCenter">자세히</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="d-flex justify-content-center">
                            <nav id="paginator4" aria-label="Page navigation example"></nav>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <hr class="mt-3">

        <div class="text-right">
            <a href="memberlist.ftl" class="btn btn-secondary">목록</a>
        </div>
        <!-- ##### 관리자 막스 및 컨텐츠 내용 끝 -->
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">채팅 내역</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">


                    <table class="table table-hover">
                        <colgroup>
                            <col width="25%">
                            <col>
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">날짜</th>
                                <th scope="col">대화내용</th>
                            </tr>
                        </thead>
                        <tbody id="modal-content"></tbody>
                    </table>


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

<#include "/layout/base_script.ftl">
<script src="/assets/js/admin/member/detail.js"></script>
<#include "/layout/footer.ftl">
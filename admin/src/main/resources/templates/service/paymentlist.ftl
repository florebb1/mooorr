<#include "/layout/header.ftl">
    <div class="main-content">
        <!-- ##### 관리자 및 컨텐츠 내용 시작 -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><i class="pe-7s-home"></i> MOME</li>
                <li class="breadcrumb-item">서비스 관리</li>
                <li class="breadcrumb-item active" aria-current="page">결제 내역 관리</li>
            </ol>
        </nav>

        <hr>

        <div class="row">
            <div class="col">
                <form id="listForm" onsubmit="return false;">
                    <input type="hidden" id="page" name="page" value="0">
                    <input type="hidden" id="sort" name="sort" value="1">
                    <input type="hidden" id="order" name="order" value="paymentDate">
                    <input type="hidden" id="searchValue" name="searchValue">
                    <div class="form-row justify-content-end align-items-center">
                        <div class="col-auto mb-3">
                            <select class="custom-select" id="searchKey" name="searchKey">
                                <option value="email" selected>이메일</option>
                                <option value="name">닉네임</option>
<#--                                <option value="badge">뱃지검색</option>-->
                            </select>
                        </div>
                        <#-- 검색필드 -->
                        <div id="searchWord" class="col-auto mb-3">
                            <input type="text" id="searchKeyWord" name="" class="form-control">
                        </div>
                        <#-- 뱃지필드 -->
<#--                        <div id="serchCheck" class="col-auto mb-3 d-none">-->
<#--                            <input type="checkbox" class="checkSelect mx-1" name="badge[]" value="1">본인인증뱃지-->
<#--                            <input type="checkbox" class="checkSelect mx-1" name="badge[]" value="2">7:3뱃지-->
<#--                            <input type="checkbox" class="checkSelect mx-1" name="badge[]" value="3">공인뱃지-->
<#--                            <input type="checkbox" class="checkSelect mx-1" name="badge[]" value="4">기부뱃지-->
<#--                        </div>-->
<#--                        <div id="searchButton" class="col-auto mb-3">-->
<#--                            <button type="button" id="searchBtn" class="btn btn-primary">검색</button>-->
<#--                        </div>-->
                    </div>
                </form>


                <table class="table">
                    <colgroup>
                        <col width="60px">
                        <col>
                        <col>
                        <col>
                        <col>
                        <col>
                        <col>
                        <col>
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="paymentIdx">No</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="impUid">아임포트거래번호</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">이메일</th>
                        <th scope="col">닉네임</th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="currency">결제통화</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="price">결제금액</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="paymentDate">결제시간</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody id="content"></tbody>
                </table>
                <div class="d-flex justify-content-center">
                    <nav id="paginator" aria-label="Page navigation example"></nav>
                </div>
            </div>
        </div>
        <!-- ##### 관리자 막스 및 컨텐츠 내용 끝 -->
    </div>
    <!-- Modal -->
<#--    <div class="modal fade" id="paymentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">-->
<#--        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">-->
<#--            <div class="modal-content">-->
<#--                <div class="modal-header">-->
<#--                    <h5 class="modal-title" id="exampleModalCenterTitle">상세 내역</h5>-->
<#--                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">-->
<#--                        <span aria-hidden="true">&times;</span>-->
<#--                    </button>-->
<#--                </div>-->
<#--                <div class="modal-body">-->


<#--                    <table class="table table-hover">-->
<#--                        <colgroup>-->
<#--                            <col width="180px">-->
<#--                            <col>-->
<#--                            <col width="100px">-->
<#--                        </colgroup>-->
<#--                        <thead>-->
<#--                        <tr>-->
<#--                            <th scope="col"><span>날짜</span> <a href="#"><img src="../assets/images/sort_both.png"</a></th>-->
<#--                            <th scope="col"><span>충전크레딧</span></th>-->
<#--                        </tr>-->
<#--                        </thead>-->
<#--                        <tbody id="modal-content"></tbody>-->
<#--                    </table>-->


<#--                </div>-->
<#--                <div class="modal-footer">-->
<#--                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
<#--                </div>-->
<#--            </div>-->
<#--        </div>-->
<#--    </div>-->
<#include "/layout/base_script.ftl">
<script src="/assets/js/admin/service/paymentList.js"></script>
<#include "/layout/footer.ftl">
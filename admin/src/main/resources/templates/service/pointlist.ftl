<#include "/layout/header.ftl">
    <div class="main-content">
        <!-- ##### 관리자 및 컨텐츠 내용 시작 -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><i class="pe-7s-home"></i> MOME</li>
                <li class="breadcrumb-item">서비스 관리</li>
                <li class="breadcrumb-item active" aria-current="page">정산 관리</li>
            </ol>
        </nav>

        <hr>

        <div class="row">
            <form id="pointForm">
                <input type="hidden" id="order" name="order" value="ecIdx">
                <input type="hidden" id="sort" name="sort" value="1">
            </form>
            <div class="col">
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
                        <col width="100px">
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="ecIdx">No.</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">Email</th>
                        <th scope="col">닉네임</th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="ecAmount">신청크레딧</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="donation">기부</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">계좌정보</th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="ecDate">신청날짜</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="completionDate">정산날짜</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col"></th>
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
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <form id="modalForm">
                    <input type="hidden" id="ecIdx" name="ecIdx">
                </form>
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">상세정보</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table class="table table-bordered">
                        <colgroup>
                            <col width="100x">
                            <col>
                            <col width="120x">
                            <col>
                            <col width="100x">
                            <col>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <td colspan="5" id="loginId"></td>
                            </tr>
                            <tr>
                                <th>닉네임</th>
                                <td colspan="5" id="userName"></td>
                            </tr>
                            <tr>
                                <th>신청크레딧</th>
                                <td id="ecAmount"></td>
                                <th>기부크레딧</th>
                                <td id="donation"></td>
                                <th>최종정산금액</th>
                                <td><strong id="finalAmount"></strong></td>
                            </tr>
                            <tr>
                                <th>계좌정보</th>
                                <td colspan="5" id="account"></td>
                            </tr>
                            <tr>
                                <th>신청날짜</th>
                                <td id="ecDate"></td>
                                <th>정산날짜</th>
                                <td colspan="3" id="completionDate"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button id="compBtn" type="button" class="btn btn-danger">정산완료</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
                </div>
            </div>
        </div>
    </div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/admin/service/pointList.js"></script>
<#include "/layout/footer.ftl">
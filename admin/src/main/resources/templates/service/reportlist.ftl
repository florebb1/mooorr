<#include "/layout/header.ftl">
    <div class="main-content">
        <!-- ##### 관리자 및 컨텐츠 내용 시작 -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><i class="pe-7s-home"></i> MOME</li>
                <li class="breadcrumb-item">서비스 관리</li>
                <li class="breadcrumb-item active" aria-current="page">신고 관리</li>
            </ol>
        </nav>

        <hr>

        <div class="row">
            <form id="reportListForm">
                <input type="hidden" id="sort" name="sort" value="1">
                <input type="hidden" id="order" name="order" value="reportIdx">
            </form>
            <div class="col">

                <table class="table table-hover my-3">
                    <colgroup>
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                        <col width="25%">
                        <col width="15%">
                        <col width="10%">
                        <col width="10%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="reportIdx">No.</span><a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col"><span>신고회원</span></th>
                        <th scope="col"><span>신고대상</span></th>
                        <th scope="col"><span>카테고리</span></th>
                        <th scope="col"><span>신고내용</span></th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="regDate">날짜</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="asRegDate">답변여부</span>
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
<#include "/layout/base_script.ftl">
<script src="/assets/js/admin/service/reportList.js"></script>
<#include "/layout/footer.ftl">
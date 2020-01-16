<#include "/layout/header.ftl">
    <div class="main-content">
        <!-- ##### 관리자 및 컨텐츠 내용 시작 -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><i class="pe-7s-home"></i> HOME</li>
                <li class="breadcrumb-item">게시판관리</li>
                <li class="breadcrumb-item active" aria-current="page">공지사항</li>
            </ol>
        </nav>

        <hr>

        <div class="row">
            <div class="col">
                <form id="noticeListForm" onsubmit="return false;">
                    <input type="hidden" id="page" name="page">
                    <input type="hidden" id="sort" name="sort" value="1">
                    <input type="hidden" id="order" name="order" value="noticeIdx">
                </form>
                <div class="text-right mb-2">
                    <button type="button" class="btn btn-primary" onclick="location.href='/board/noticewrite'">글쓰기</button>
                </div>
                <table class="table">
                    <colgroup>
                        <col width="10%">
                        <col width="10%">
                        <col width="35%">
                        <col width="10%">
                        <col width="15%">
                        <col width="10%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="noticeIdx">No.</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">작성자</th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="title">제목</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="viewCount">조회수</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="regDate">작성일</span>
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
<script src="/assets/js/admin/board/noticeList.js"></script>
<#include "/layout/footer.ftl">
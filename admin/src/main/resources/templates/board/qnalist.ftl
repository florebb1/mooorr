<#include "/layout/header.ftl">
    <div class="main-content">
        <!-- ##### 관리자 및 컨텐츠 내용 시작 -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><i class="pe-7s-home"></i> HOME</li>
                <li class="breadcrumb-item">게시판관리</li>
                <li class="breadcrumb-item active" aria-current="page">1:1문의</li>
            </ol>
        </nav>

        <hr>

        <div class="row">
            <div class="col">
                <form id="qanListForm">
                    <input type="hidden" id="page" name="page">
                    <input type="hidden" id="sort" name="sort" value="1">
                    <input type="hidden" id="order" name="order" value="ctIdx">
                    <div class="form-row justify-content-end align-items-center">
                        <#-- 검색필드 -->
                        <div class="input-group mb-3 col-2">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="answer">답변여부</label>
                            </div>
                            <select class="custom-select" id="answer" name="answer">
                                <option value="0">전체</option>
                                <option value="1">미완료</option>
                                <option value="2">답변완료</option>
                            </select>
                        </div>
                        <#-- 검색필드 -->
                        <div class="input-group mb-3 col-2">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="category">카테고리</label>
                            </div>
                            <select class="custom-select" id="category" name="category">
                                <option value="0">전체</option>
                                <option value="1">가입/계정</option>
                                <option value="2">메뉴/기능</option>
                                <option value="3">PM</option>
                                <option value="4">크레딧</option>
                                <option value="5">기부</option>
                                <option value="6">기타</option>
                            </select>
                        </div>
                    </div>
                </form>
                <table class="table">
                    <colgroup>
                        <col width="10%">
                        <col width="15%">
                        <col width="10%">
                        <col width="25%">
                        <col width="10%">
                        <col width="20%">
                        <col width="15%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="ctIdx">No.</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">카테고리</th>
                        <th scope="col">작성자</th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="ctTitle">제목</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="asRegDate">답변여부</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">
                            <div class="d-flex">
                                <span type="ctRegDate">작성일</span>
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
<script src="/assets/js/admin/board/qnaList.js"></script>
<#include "/layout/footer.ftl">
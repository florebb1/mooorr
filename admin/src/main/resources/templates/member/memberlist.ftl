<#include "/layout/header.ftl">
    <div class="main-content">
        <!-- ##### 관리자 및 컨텐츠 내용 시작 -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><i class="pe-7s-home"></i> MOME</li>
                <li class="breadcrumb-item">회원관리</li>
                <li class="breadcrumb-item active" aria-current="page">회원정보</li>
            </ol>
        </nav>

        <hr>

        <div class="row">

            <div class="col">
                <form id="memberListForm" onsubmit="return false;">
                    <input type="hidden" id="page" name="page" value="1">
                    <input type="hidden" id="sort" name="sort" value="1">
                    <input type="hidden" id="order" name="order" value="userIdx">
                    <input type="hidden" id="searchValue" name="searchValue">
                    <div class="form-row justify-content-end align-items-center">
                        <div class="col-auto mb-3">
                            <select class="custom-select" id="searchKey" name="searchKey">
                                <option value="email" selected>이메일</option>
                                <option value="name">닉네임</option>
                                <option value="badge">뱃지검색</option>
                            </select>
                        </div>
                        <#-- 검색필드 -->
                        <div id="searchWord" class="col-auto mb-3">
                            <input type="text" id="searchKeyWord" class="form-control">
                        </div>
                        <#-- 뱃지필드 -->
                        <div id="serchCheck" class="col-auto mb-3 d-none">
                            <input type="checkbox" class="checkSelect mx-1" name="badge[]" value="1">본인인증뱃지
                            <input type="checkbox" class="checkSelect mx-1" name="badge[]" value="2">7:3뱃지
                            <input type="checkbox" class="checkSelect mx-1" name="badge[]" value="3">공인뱃지
                            <input type="checkbox" class="checkSelect mx-1" name="badge[]" value="4">기부뱃지
                        </div>
                        <div id="searchButton" class="col-auto mb-3">
                            <button type="button" id="searchBtn" class="btn btn-primary">검색</button>
                        </div>
                    </div>
                </form>
                <table class="table">
                    <thead>
                    <tr>
<#--                        <th scope="col"><input type="checkbox"></th>-->
                        <th scope="col"><span title="userIdx">No</span> <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                        <th scope="col"><span title="loginId">이메일</span> <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                        <th scope="col"><span title="userName">닉네임</span> <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                        <th scope="col"><span title="joinDate">가입일</span> <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                        <th scope="col"><span title="nowp">보유크레딧</span> <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                        <th scope="col"><span title="chargep">충전크레딧</span> <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                        <th scope="col"><span title="incomep">크레딧수익</span> <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                        <th scope="col"><span title="costp">사용크레딧</span> <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                        <th scope="col"><span title="pcamount">댓글갯수</span> <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                        <th scope="col"><span title="rpamount">신고누적</span> <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                        <th scope="col"><span title="certificationDate">본인인증</span> <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                        <th scope="col"><span title="donation">기부여부</span> <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody id="content"></tbody>
                </table>
                <div class="d-flex justify-content-center">
                    <nav id="show_paginator" aria-label="Page navigation example"></nav>
                </div>
            </div>

            <div class="w-100"></div>
        </div>
        <!-- ##### 관리자 막스 및 컨텐츠 내용 끝 -->
    </div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/admin/member/list.js"></script>
<#include "/layout/footer.ftl">

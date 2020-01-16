<#include "/layout/header.ftl">
<link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.5.0/css/bootstrap4-toggle.min.css" rel="stylesheet">
    <div class="main-content">
        <!-- ##### 관리자 및 컨텐츠 내용 시작 -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><i class="pe-7s-home"></i> HOME</li>
                <li class="breadcrumb-item">서비스관리</li>
                <li class="breadcrumb-item active" aria-current="page">차단관리</li>
            </ol>
        </nav>

        <hr>

        <div class="row">
            <div class="col">
                <form id="blockListForm" onsubmit="return false;">
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
                    <colgroup>
                        <col width="5%">
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col"><span title="userIdx">No</span><a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                            <th scope="col"><span title="loginId">이메일</span><a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                            <th scope="col"><span title="userName">닉네임</span><a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                            <th scope="col"><span title="joinDate">가입일</span><a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                            <th scope="col"><span title="nowp">보유크레딧</span><a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                            <th scope="col"><span title="chargep">충전크레딧</span><a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                            <th scope="col"><span title="incomep">크레딧수익</span><a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                            <th scope="col"><span title="costp">사용크레딧</span><a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                            <th scope="col"><span title="pcamount">댓글갯수</span><a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                            <th scope="col"><span title="certificationDate">본인인증</span><a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="content"></tbody>
                </table>
                <div class="text-right">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">차단등록</button>
                </div>
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
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">유저검색</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="modalForm">
                        <input type="hidden" id="userIdx" name="userIdx">
                        <input type="hidden" id="blockIdx" name="blockIdx">
                    </form>
                    <div class="form-row">
                        <div class="col-2">
                            <select class="form-control form-control-sm" id="m_searchType">
                                <option value="email">이메일</option>
                                <option value="phone">휴대전화번호</option>
                            </select>
                        </div>
                        <div class="col-8">
                            <input type="text" class="form-control form-control-sm" id="m_searchWord">
                        </div>
                        <div class="col-2">
                            <button type="button" class="btn btn-info btn-sm btn-block" id="memberSearchBtn">검색</button>
                        </div>
                    </div>

                    <table class="table table-bordered mt-3">
                        <thead>
                        <tr>
                            <th>선택</th>
                            <th>ID</th>
                            <th>회원명</th>
                            <th>가입일</th>
                            <th>보유크레딧</th>
                            <th>본인인증</th>
                        </tr>
                        </thead>
                        <tbody id="memContent">
                            <tr>
                                <th colspan="11" scope="row">
                                    <div class="bbs-none d-flex justify-content-center align-items-center">회원을 검색해주세요.</div>
                                </th>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
                    <button type="button" id="blockBtn" class="btn btn-primary">차단등록</button>
                </div>
            </div>
        </div>
    </div>
<#include "/layout/base_script.ftl">
<script src="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.5.0/js/bootstrap4-toggle.min.js"></script>
<script>
    $(function(){
        $('#chkToggle').bootstrapToggle();
        $('#summernote').summernote({
            height: 300,
            placeholder: '내용을 입력해주세요.'// set editor height
        });
    });
</script>
<script src="/assets/js/admin/service/blockMember.js"></script>
<#include "/layout/footer.ftl">
<#include "/layout/header.ftl">
    <div class="main-content">
        <!-- ##### 관리자 및 컨텐츠 내용 시작 -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><i class="pe-7s-home"></i> MOME</li>
                <li class="breadcrumb-item">서비스 관리</li>
                <li class="breadcrumb-item active" aria-current="page">신고 관리 - 상세</li>
            </ol>
        </nav>

        <hr>

        <div class="row">
            <div class="col">
                <table class="table table-bordered">
                    <colgroup>
                        <col width="10%">
                        <col>
                        <col width="10%">
                        <col>
                        <col width="10%">
                        <col>
                    </colgroup>
                    <tbody>
                    <tr>
                        <th>날짜</th>
                        <td id="regDate"></td>
                        <th>신고회원</th>
                        <td id="user"></td>
                        <th>신고대상</th>
                        <td id="target"></td>
                    </tr>
                    <tr>
                        <th>카테고리</th>
                        <td colspan="5" id="category"></td>
                    </tr>
                    <tr>
                        <th>신고내용</th>
                        <td colspan="5">
                            <div id="rpContent"></div>
                        </td>
                    </tr>
                    <tr>
                        <th>채팅내용</th>
                        <td colspan="5">
                            <button type="button" id="chatBtn" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModalCenter">목록</button>
                        </td>
                    </tr>
                    <tr>
                        <th>답변하기</th>
                        <td colspan="5">
                            <form id="asForm">
                                <input type="hidden" id="reportIdx" name="reportIdx">
                                <div class="form-group">
                                    <label for="asTitle">답변제목</label>
                                    <input type="text" class="form-control" id="asTitle" name="asTitle">
                                    <input type="hidden" id="asTitle2">
                                </div>
                                <div class="form-group">
                                    <label for="asContent">답변내용</label>
                                    <textarea class="form-control" id="asContent" name="asContent" rows="5"></textarea>
                                    <input type="hidden" id="asContent2">
                                </div>
                            </form>
                            <button id="asSaveBtn" type="button" class="btn btn-primary">저장</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="text-right">
                    <button id="cencelBtn" type="button" class="btn btn-secondary">취소/목록</button>
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
                    <h5 class="modal-title" id="exampleModalCenterTitle">채팅 내역</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">


                    <table class="table table-hover">
                        <colgroup>
                            <col width="180px">
                            <col>
                            <col width="100px">
                        </colgroup>
                        <thead>
                        <tr>
                            <th scope="col"><span>날짜</span> <a href="#"><img src="../assets/images/sort_both.png"</a></th>
                            <th scope="col"><span>대화내용</span></th>
                        </tr>
                        </thead>
                        <tbody id="modal-content">
                            <tr>
                                <th scope="row"></th>
                                <td>
                                    <div><span class="badge badge-pill badge-success"></span></div>
                                    <div><span class="badge badge-pill badge-danger"></span></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/admin/service/reportDetail.js"></script>
<#include "/layout/footer.ftl">
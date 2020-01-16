<#include "/layout/header.ftl">
<link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.5.0/css/bootstrap4-toggle.min.css" rel="stylesheet">
    <div class="main-content">
        <!-- ##### 관리자 및 컨텐츠 내용 시작 -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><i class="pe-7s-home"></i> HOME</li>
                <li class="breadcrumb-item">서비스관리</li>
                <li class="breadcrumb-item active" aria-current="page">팝업관리</li>
            </ol>
        </nav>

        <hr>

        <div class="row">
            <form id="popupListForm">
                <input type="hidden" id="order" name="order" value="popupIdx">
                <input type="hidden" id="sort" name="sort" value="1">
            </form>
            <div class="col">
                <div class="text-right my-2">
                    <button type="button" class="btn btn-primary" onclick="location.href='/service/popupwrite'">팝업등록</button>
                </div>
                <table class="table">
                    <colgroup>
                        <col width="5%">
                        <col width="30%">
                        <col width="30%">
                        <col width="10%">
                        <col width="15%">
                        <col width="10%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="popupIdx">No.</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="title">제목</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="content">내용</span>
                                <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                            </div>
                        </th>
                        <th scope="col">
                            <div class="d-flex">
                                <span title="onoff">사용여부</span>
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
    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">상세정보</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="modalForm" enctype="multipart/form-data" method="post">
                        <input type="hidden" id="popupIdx" name="popupIdx">
                        <input type="hidden" id="onoff" name="onoff">
                        <table class="table table-bordered">
                            <colgroup>
                                <col width="15%">
                                <col width="35%">
                                <col width="15%">
                                <col width="35%">
                            </colgroup>
                            <tbody>
                            <tr>
                                <th>제목</th>
                                <td colspan="3">
                                    <input type="text" id="title" name="title" class="form-control">
                                </td>
                            </tr>
                            <tr>
                                <th>링크여부</th>
                                <td>
                                    <input type="checkbox" id="chkToggle2" data-toggle="toggle">
                                </td>
                                <th>등록일자</th>
                                <td id="regDate"></td>
                            </tr>
                            <tr>
                                <th>사용여부</th>
                                <td>
                                    <input id="chkToggle" type="checkbox" data-toggle="toggle">
                                </td>
                                <th>수정일자</th>
                                <td id="modDate"></td>
                            </tr>
                            <tr>
                                <th>링크</th>
                                <td colspan="3">
                                    <input type="text" id="link" name="link" class="form-control">
                                </td>
                            </tr>
                            <tr>
                                <th>내용</th>
                                <td colspan="3">
                                    <textarea name="content" id="summernote" value="" placeholder="Content"></textarea>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <div class="modal-footer">
                    <div class="col-6 p-0">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
                    </div>
                    <div class="col-6 p-0 text-right">
                        <button type="button" id="editBtn" class="btn btn-primary" onclick="edit();">수정</button>
                        <button type="button" id="delBtn" class="btn btn-danger">삭제</button>
                    </div>
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
<script src="/assets/js/admin/service/popupList.js"></script>
<#include "/layout/footer.ftl">
<#include "/layout/header.ftl">
<link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.5.0/css/bootstrap4-toggle.min.css" rel="stylesheet">
    <div class="main-content">
        <!-- ##### 관리자 및 컨텐츠 내용 시작 -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><i class="pe-7s-home"></i> HOME</li>
                <li class="breadcrumb-item">서비스관리</li>
                <li class="breadcrumb-item active" aria-current="page">배너관리</li>
            </ol>
        </nav>

        <hr>

        <div class="row">
            <form id="bannerListForm">
                <input type="hidden" id="order" name="order" value="bannerIdx">
                <input type="hidden" id="sort" name="sort" value="1">
            </form>
            <div class="col">
                <div class="text-right my-2">
                    <button type="button" class="btn btn-primary" onclick="location.href='/service/bannerwrite'">배너등록</button>
                </div>
                <table class="table">
                    <colgroup>
                        <col width="5%">
                        <col width="25%">
                        <col width="20%">
                        <col width="10%">
                        <col width="20%">
                        <col width="10%">
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">
                                <div class="d-flex">
                                    <span title="bannerIdx">No.</span>
                                    <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                                </div>
                            </th>
                            <th scope="col">
                                <div class="d-flex">
                                    <span title="title">제목</span>
                                    <a href="#"><img src="../assets/images/sort_both.png" class="sort-order"></a>
                                </div>
                            </th>
                            <th scope="col">이미지</th>
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
                        <input type="hidden" id="bannerIdx" name="bannerIdx">
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
                                        <input type="checkbox" id="chkToggle" data-toggle="toggle">
                                    </td>
                                    <th>첨부파일</th>
                                    <td>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="image" name="image">
                                                <label id="imageLabal" class="custom-file-label" for="image">Choose file</label>
                                            </div>
                                        </div>
                                    </td>
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
                                        <textarea id="summernote" name="content" placeholder="Content"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <th>이미지</th>
                                    <td colspan="3">
                                        <img id="saveName" src="" class="w-50 p-2 d-block">
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
                        <button id="editBtn" type="button" class="btn btn-primary" onclick="edit();">수정</button>
                        <button id="delBtn" type="button" class="btn btn-danger">삭제</button>
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
            toolbar: false,
            popover: false,
            placeholder: '내용을 입력해주세요.'// set editor height
        });
    });
</script>
<script src="/assets/js/admin/service/bannerList.js"></script>
<#include "/layout/footer.ftl">
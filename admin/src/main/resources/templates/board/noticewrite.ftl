<#include "/layout/header.ftl">
<div class="main-content">
    <!-- ##### 관리자 및 컨텐츠 내용 시작 -->
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><i class="pe-7s-home"></i> HOME</li>
            <li class="breadcrumb-item">서비스관리</li>
            <li class="breadcrumb-item active" aria-current="page">공지사항 - 등록</li>
        </ol>
    </nav>

    <hr>

    <form id="noticeWriteForm" onsubmit="false">
        <input type="hidden" id="adminIdx" name="adminIdx">
        <input type="hidden" id="noticeIdx" name="noticeIdx">
        <input type="hidden" id="content2">
        <div class="form-row">
            <div class="form-group col-md-9">
                <label for="title">제목</label>
                <input type="text" class="form-control" id="title" name="title" placeholder="Title">
            </div>
            <div class="form-group col-md-3">
                <label for="adminName">작성자</label>
                <input type="text" class="form-control" id="adminName" readonly>
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress2">내용</label>
            <textarea id="summernote" name="content" placeholder="Content"></textarea>
        </div>
<#--        <div class="form-row">-->
<#--            <div class="form-group col-md-12">-->
<#--                <div class="custom-file">-->
<#--                    <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">-->
<#--                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>-->
<#--                </div>-->
<#--            </div>-->
<#--        </div>-->
    </form>
    <div class="row">
        <div class="col-6">
            <button type="button" class="btn btn-secondary" onclick="history_back();">목록</button>
        </div>
        <div class="col-6 text-right">
            <button type="button" id="delBtn" class="btn btn-danger d-none" onclick="del();">삭제</button>
            <button type="button" id="writeBtn" class="btn btn-primary d-none">등록</button>
            <button type="button" id="editBtn" class="btn btn-primary d-none" onclick="edit();">수정</button>
        </div>
    </div>

<#--    <div class="text-right my-3">-->
<#--        <button type="button" class="btn btn-secondary" onclick="history_back();">목록</button>-->
<#--        <button id="writeBtn" type="button" class="btn btn-primary d-none" onclick="write();">등록</button>-->
<#--        <button id="editBtn" type="button" class="btn btn-primary d-none" onclick="edit();">수정</button>-->
<#--    </div>-->
    <!-- ##### 관리자 막스 및 컨텐츠 내용 끝 -->
</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/admin/board/noticeDetail.js"></script>
<#include "/layout/footer.ftl">
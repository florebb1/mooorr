<#include "/layout/header.ftl">
<div class="main-content">
    <!-- ##### 관리자 및 컨텐츠 내용 시작 -->
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><i class="pe-7s-home"></i> HOME</li>
            <li class="breadcrumb-item">서비스관리</li>
            <li class="breadcrumb-item active" aria-current="page">FAQ - 등록</li>
        </ol>
    </nav>

    <hr>

    <form id="faqWriteForm">
        <input type="hidden" id="faqIdx" name="faqIdx">
        <input type="hidden" id="content2">
        <div class="form-row">
            <div class="form-group col-md-9">
                <label for="title">제목</label>
                <input type="text" id="title" name="title" class="form-control" placeholder="Title">
            </div>
            <div class="form-group col-md-3">
                <label for="category">카테고리</label>
                <select id="category" name="category" class="form-control">
                    <option disabled selected hidden>카테고리 선택</option>
                    <option value="1">가입/계정</option>
                    <option value="2">메뉴/기능</option>
                    <option value="3">PM</option>
                    <option value="4">크레딧</option>
                    <option value="5">기부</option>
                    <option value="6">기타</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress2">내용</label>
            <textarea id="summernote" name="content" placeholder="Content"></textarea>
        </div>
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
    <!-- ##### 관리자 막스 및 컨텐츠 내용 끝 -->
</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/admin/board/faqDetail.js"></script>
<#include "/layout/footer.ftl">
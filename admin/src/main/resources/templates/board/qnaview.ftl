<#include "/layout/header.ftl">
<div class="main-content">
    <!-- ##### 관리자 및 컨텐츠 내용 시작 -->
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><i class="pe-7s-home"></i> HOME</li>
            <li class="breadcrumb-item">서비스관리</li>
            <li class="breadcrumb-item active" aria-current="page">1:1문의 - 등록</li>
        </ol>
    </nav>

    <hr>

    <form id="qanViewForm">
        <input type="hidden" id="ctIdx" name="ctIdx">
        <input type="hidden" id="content2" name="asTitle">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="title">제목</label>
                <input type="text" class="form-control" id="ctTitle" name="ctTitle" readonly>
            </div>
            <div class="form-group col-md-3">
                <label for="adminName">작성자</label>
                <input type="text" class="form-control" id="userName" readonly>
            </div>
            <div class="form-group col-md-3">
                <label for="adminName">카테고리</label>
                <select class="custom-select" id="ctCategory" disabled>
                    <option value=1>가입/계정</option>
                    <option value=2>메뉴/기능</option>
                    <option value=3>PM</option>
                    <option value=4>크레딧</option>
                    <option value=5>기부</option>
                    <option value=6>기타</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress2">질문</label>
            <textarea id="ctContent" class="w-100" readonly></textarea>
        </div>
        <div class="form-group">
            <label for="inputAddress2">답변</label>
            <textarea id="summernote" name="asContent" class="summernote" placeholder="Content"></textarea>
        </div>
    </form>

    <div class="text-right my-3">
        <button type="button" class="btn btn-secondary" onclick="history_back();">목록</button>
        <button id="saveBtn" type="button" class="btn btn-primary">등록</button>
    </div>
    <!-- ##### 관리자 막스 및 컨텐츠 내용 끝 -->
</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/admin/board/qanView.js"></script>
<#include "/layout/footer.ftl">
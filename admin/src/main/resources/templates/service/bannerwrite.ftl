<#include "/layout/header.ftl">
    <div class="main-content">
        <!-- ##### 관리자 및 컨텐츠 내용 시작 -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><i class="pe-7s-home"></i> HOME</li>
                <li class="breadcrumb-item">서비스관리</li>
                <li class="breadcrumb-item active" aria-current="page">배너관리 - 등록</li>
            </ol>
        </nav>

        <hr>

        <form id="newBannerForm" enctype="multipart/form-data" method="post">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="title">제목</label>
                    <input type="text" class="form-control" id="title" name="title" placeholder="Title">
                </div>
                <div class="form-group col-md-3">
                    <label for="onoff">사용여부</label>
                    <select id="onoff" name="onoff" class="form-control">
                        <option value="0">사용</option>
                        <option value="1">미사용</option>
                    </select>
                </div>
                <div class="form-group col-md-3">
                    <label for="useLink">외부링크 사용여부</label>
                    <select id="useLink" class="form-control">
                        <option value="1">미사용</option>
                        <option value="0">사용</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="link">외부링크</label>
                <input type="text" class="form-control" id="link" name="link" placeholder="http://" readonly>
            </div>
            <div class="form-group">
                <label for="inputAddress2">내용</label>
                <textarea name="content" id="summernote" name="content" placeholder="Content"></textarea>
            </div>
            <div class="form-row">
                <div class="form-group col-md-12">
                    <input type="file" id="image" name="image">
                </div>
            </div>
        </form>

        <div class="text-right my-3">
            <button type="button" class="btn btn-secondary" onclick="history.back();">목록</button>
            <button type="button" id="saveBtn" class="btn btn-primary">등록</button>
        </div>
        <!-- ##### 관리자 막스 및 컨텐츠 내용 끝 -->
    </div>
<#include "/layout/base_script.ftl">
<script>
    $(function(){
        $('#summernote').summernote({
            height: 300,
            toolbar: false,
            popover: false,
            placeholder: '내용을 입력해주세요.'// set editor height
        });
    });
</script>
<script src="/assets/js/admin/service/bannerWrite.js"></script>
<#include "/layout/footer.ftl">
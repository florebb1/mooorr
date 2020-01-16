<#include "/layout/header.ftl">
    <div class="main-content">
        <!-- ##### 관리자 및 컨텐츠 내용 시작 -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><i class="pe-7s-home"></i> MOME</li>
                <li class="breadcrumb-item">서비스 관리</li>
                <li class="breadcrumb-item active" aria-current="page">약관 관리</li>
            </ol>
        </nav>

        <hr>

        <div class="row">
            <div class="col my-3">
                <form id="termsForm1">
                    <input type="hidden" name="type" value="1">
                    <div class="form-group">
                        <label for="content1">회원이용약관</label>
                        <textarea class="form-control summernote" id="content1" name="content" rows="7"></textarea>
                    </div>
                    <div class="text-right">
                        <button type="button" class="btn btn-primary saveBtn">저장</button>
                    </div>
                </form>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col my-3">
                <form id="termsForm2">
                    <input type="hidden" name="type" value="2">
                    <div class="form-group">
                        <label for="content2">개인정보 보호정책</label>
                        <textarea class="form-control summernote" id="content2" name="content" rows="7"></textarea>
                    </div>
                    <div class="text-right">
                        <button type="button" class="btn btn-primary saveBtn">저장</button>
                    </div>
                </form>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col my-3">
                <form id="termsForm3">
                    <input type="hidden" name="type" value="3">
                    <div class="form-group">
                        <label for="content3">개인정보 수집 / 이용</label>
                        <textarea class="form-control summernote" id="content3" name="content" rows="7"></textarea>
                    </div>
                    <div class="text-right">
                        <button type="button" class="btn btn-primary saveBtn">저장</button>
                    </div>
                </form>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col my-3">
                <form id="termsForm4">
                    <input type="hidden" name="type" value="4">
                    <div class="form-group">
                        <label for="content3">기부.모어 캠페인 정책</label>
                        <textarea class="form-control summernote" id="content4" name="content" rows="7"></textarea>
                    </div>
                    <div class="text-right">
                        <button type="button" class="btn btn-primary saveBtn">저장</button>
                    </div>
                </form>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col my-3">
                <form id="termsForm4">
                    <input type="hidden" name="type" value="5">
                    <div class="form-group">
                        <label for="content3">환불 정책</label>
                        <textarea class="form-control summernote" id="content5" name="content" rows="7"></textarea>
                    </div>
                    <div class="text-right">
                        <button type="button" class="btn btn-primary saveBtn">저장</button>
                    </div>
                </form>
            </div>
        </div>
        <!-- ##### 관리자 막스 및 컨텐츠 내용 끝 -->
    </div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/admin/service/terms.js"></script>
<#include "/layout/footer.ftl">
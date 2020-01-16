<!doctype html>
<html xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout" layout:decorate="layout/mainLayout">
<head>
    <title>mooorr - admin</title>
</head>
<body>
<section layout:fragment="content">
    <div class="main-content">
        <!-- ##### 관리자 및 컨텐츠 내용 시작 -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><i class="pe-7s-home"></i> HOME</li>
                <li class="breadcrumb-item">서비스관리</li>
                <li class="breadcrumb-item active" aria-current="page">정산관리 - 상세</li>
            </ol>
        </nav>

        <hr>

        <div class="row">
            <div class="col">
                <table class="table">
                    <colgroup>
                        <col width="40px">
                        <col width="60px">
                        <col>
                        <col>
                        <col>
                        <col width="100px">
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col"><input type="checkbox"></th>
                        <th scope="col">No.</th>
                        <th scope="col">-</th>
                        <th scope="col">-</th>
                        <th scope="col">-</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row"><input type="checkbox"></th>
                        <th scope="row">-</th>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td><a href="#" class="btn btn-primary btn-sm"><i class="pe-7s-search"></i> 자세히</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- ##### 관리자 막스 및 컨텐츠 내용 끝 -->
    </div>
</section>
</body>
</html>
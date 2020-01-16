<!doctype html>
<html lang="ko">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="/assets/images/favicon.ico">
    <link rel="icon" type="image/png" href="/assets/images/favicon.png">
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/css/pe-icon-7-stroke.css">
    <link rel="stylesheet" href="/assets/summernote/summernote.css">
    <link rel="stylesheet" href="/assets/css/style.css">

    <title>mooorr - admin</title>
</head>
<body>


<div class="main-wrapper">
    <div class="topbar orange-grd">
        <div class="d-flex align-content-center w-100 h-100 px-4">
            <div class="top-navbar">
                <a class="pr-2" href="#"><span>mooorr</span> - admin</a>
            </div>
            <div class="top-userbar ml-auto text-white">
                <i id="logout" class="pe-7s-power font-weight-bold" style="font-size: large"><a class="text-white"> Logout</a></i>
            </div>
        </div>
    </div>
    <div class="left-side">
        <div class="sidebar-nav">

            <a class="btn btn-link btn-block" href="/member/memberlist" role="button"><i class="pe-7s-user"></i> 회원 관리</a>

            <a class="btn btn-link btn-block collapsed" data-toggle="collapse" href="#multiCollapseMenu2" role="button" aria-expanded="false" aria-controls="multiCollapseMenu2">
                <i class="pe-7s-angle-right-circle"></i>서비스 관리
            </a>
            <#if nav == 'service'>
                <div class="collapse multi-collapse show"  id="multiCollapseMenu2">
            <#else>
                <div class="collapse multi-collapse" id="multiCollapseMenu2">
            </#if>
                <a href="/service/reportlist" class="btn btn-link btn-block <#if item == 'reportlist'>active</#if>">신고 관리</a>
                <a href="/service/pointlist" class="btn btn-link btn-block <#if item == 'pointlist'>active</#if>">정산 관리</a>
                <a href="/service/terms" class="btn btn-link btn-block <#if item == 'terms'>active</#if>">약관 관리</a>
                <a href="/service/paymentlist" class="btn btn-link btn-block <#if item == 'paymentlist'>active</#if>">결제 관리</a>
                <a href="/service/banner" class="btn btn-link btn-block <#if item == 'banner'>active</#if>">배너 관리</a>
<#--                <a href="/service/popuplist" class="btn btn-link btn-block <#if item == 'popuplist'>active</#if>">팝업 관리</a>-->
                <a href="/service/blockmember" class="btn btn-link btn-block <#if item == 'blockmember'>active</#if>">차단 관리</a>
            </div>

            <a class="btn btn-link btn-block collapsed" data-toggle="collapse" href="#multiCollapseMenu3" role="button" aria-expanded="false" aria-controls="multiCollapseMenu3">
                <i class="pe-7s-angle-right-circle"></i>게시판 관리
            </a>
            <#if nav == 'board'>
                <div class="collapse multi-collapse show" id="multiCollapseMenu3">
            <#else>
                <div class="collapse multi-collapse" id="multiCollapseMenu3">
            </#if>
                <a href="/board/noticelist" class="btn btn-link btn-block <#if item == 'noticelist'>active</#if>">공지사항</a>
                <a href="/board/qnalist" class="btn btn-link btn-block <#if item == 'qnalist'>active</#if>">1:1문의</a>
                <a href="/board/faqlist" class="btn btn-link btn-block <#if item == 'faqlist'>active</#if>">FAQ</a>
            </div>

            <a href="https://analytics.google.com" target="_blank" class="btn btn-link btn-block first-link">
                <i class="pe-7s-angle-right-circle"></i>통계관리
            </a>

        </div>
    </div>
    <div class="page-wrapper">
        <input type="hidden" id="apiAddress" value="${apiAddress?string}">
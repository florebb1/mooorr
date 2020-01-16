<!doctype html>
<html lang="ko">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="google-signin-client_id" content="713099632177-1r6pnuv92jq0g3vfaheefttbara9vsuj.apps.googleusercontent.com">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <meta http-equiv="ScreenOrientation" content="autoRotate:disabled">

    <meta property="og:image" content="/assets/images/1574995448745.jpg"/>
    <meta property="og:url" content="https://mooorr.com"/>
    <meta property="og:description" content="내 영향력을 더 영향력 있게, 모어(mooorr)"/>
    <meta property="og:title" content="mooorr"/>

    <link rel="shortcut icon" href="/assets/images/favicon.ico">
    <link rel="icon" type="image/png" href="/assets/images/favicon.png">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/css/responsive.css">
    <link rel="stylesheet" href="/assets/css/icon.css">

    <#-- user CSS -->
    <link rel="stylesheet" href="/assets/summernote/summernote.css" />
    <link rel="stylesheet" href="/assets/css/tempusdominus-bootstrap-4.min.css" />
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.1/css/lightbox.min.css">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154407627-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-154407627-1');
    </script>

    <title>mooorr</title>

</head>
<body>
<div id="inactiveBackground" class="position-fixed h-100 w-100 bg-secondary inactiveBackground d-none" style="filter: alpha(opacity=80); opacity: 0.8; -moz-opacity: 0.8; z-index: 1"></div>
<div id="loginBf3" class="sidenav left-sidenav position-fixed container-pdb">
    <div class="row d-flex flex-column h-100 m-0">
        <div style="flex-basis: 25%;"></div>

        <div style="flex-basis: 25%;">
            <div class="card-left h-100 m-0 ">
                <a href="/notice" class="btn btn-link">Notice</a>
                <hr>
                <a href="/faq" class="btn btn-link">FAQ</a>
            </div>
        </div>
        <div class="mobile-header-btn-pd" style="flex-basis: 50%;">
            <a href="/joinEmail" class="btn btn-primary btn-h4 btn-block mb-2">Sign up</a>
            <a href="/login" class="btn btn-dark btn-h4 btn-block loginBtn">Log in</a>
        </div>
    </div>
</div>

<div id="loginAf3" class="sidenav left-sidenav position-fixed">
    <div class="row d-flex flex-column h-100 m-0">

        <div class="bg-e2">
            <div class="card-left-nav h-100 m-0 justify-content-center">
                <div class="d-flex align-items-center">
                    <div id="myProfile2" class="profile-img"></div>
                    <div class="w-100">
                        <p id="my_nicName2" class="font-23 mb-0 pointer-clicker"></p>
                        <p id="my_text2" class="font-weight-light mb-0 ellipsis" style="margin-bottom:5px;"></p>
                        <p class="font-11 font-weight-bold mb-1">Credit</p>
                        <div class="row ml-0 pointer-clicker" style="margin-right: -30px;" onclick="location.href='/point'">
                            <div id="total_point2" class="col btn-primary btn-sm btn-block text-white text-center font-weight-bold" style="border-radius: 5px;"></div>
                            <div class="col-auto align-self-end font-weight-bold font-15 px-2"><i class="icon-right-arrow" style="color: #ff4e00;"></i></div>
                        </div>


                    </div>
                </div>
                <div class="card-left-nav-follow">
                    <div class="row mx-0 align-items-center pointer-clicker" onclick="location.href='/follow'">
                        <div class="col-auto p-0 font-11">Follower</div>
                        <div id="mobile_follower" class="col px-2 font-15 text-right"></div>
                    </div>
                    <div class="row mx-0 align-items-center pointer-clicker" onclick="location.href='/follow'">
                        <div class="col-auto p-0 font-11">Following</div>
                        <div id="mobile_following" class="col px-2 font-15 text-right"></div>
                    </div>
                </div>
                <div class="position-relative">
                    <span class="chat-room-count font-12 font-weight-bold">N</span>
                    <a id="my_chat" href="/chat_list" class="btn btn-primary btn-h4 btn-block"><img src="/assets/images/email-logo-w.png" class="logo-white-sm"/>My Private Message</a>
                </div>
            </div>
        </div>

        <div class="card-left-nav2">
            <p class="btn btn-link" onclick="location.href='/notice'">Notice</p>
            <p class="btn btn-link" onclick="location.href='/faq'">FAQ</p>
            <p class="btn btn-link" onclick="location.href='/help'">1:1 Help</p>
            <p class="btn btn-link logoutBtn">Log Out</p>
        </div>



    </div>
</div>

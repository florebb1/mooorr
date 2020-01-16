<#-- 로그인 전 -->
<div id="loginBf2" class="col-auto desktop-left d-none">
    <div class="card-left bg-f7">
        <a href="/notice" class="btn btn-link">Notice</a>
        <a href="/faq" class="btn btn-link">FAQ</a>
        <div class="p075rem mt-5">
            <a href="/joinEmail" class="btn btn-primary btn-h4 btn-block">Sign up</a>
            <a href="/login" class="btn btn-dark btn-h4 btn-block loginBtn">Log in</a>
        </div>
    </div>
</div>
<#-- 로그인 후 -->
<div id="loginAf2" class="col-auto desktop-left d-none">
    <div class="card-left">

        <div class="profile-cust d-flex">
            <div class="flex-shrink-1">
                <div id="myProfile" class="profile-img"></div>
            </div>
            <div style="width:100px;overflow:hidden;word-wrap:break-word;">
                <h6 class="w-100 pointer-clicker" id="my_nicName"></h6>
                <div class="w-100" id="my_text"></div>
            </div>
        </div>

        <div class="profile-cust d-flex">
            <div class="flex-shrink-1">
                <div class="span_tw h-100 d-flex align-items-center font-weight-bold">Credit</div>
            </div>
            <div class="w-100">
                <a id="total_point" href="/point" class="btn btn-primary btn-sm btn-block font-weight-bold"></a>
            </div>
        </div>

        <div class="w-100 my-2"></div>

        <a id="my_profile" href="/profile" class="btn btn-link font-weight-bold">My Profile</a>
        <a id="my_point" href="/point" class="btn btn-link font-weight-bold">Credit</a>
        <a id="my_follow" href="/follow" class="btn btn-link font-weight-bold">Follow</a>
    </div>
    <div class="card-left bg-f7">
        <a href="/notice" class="btn btn-link">Notice</a>
        <a href="/faq" class="btn btn-link">FAQ</a>
        <a id="my_help" href="/help" class="btn btn-link">1:1 Help</a>
<#--        <a href="/setting" class="btn btn-link">Setting</a>-->
        <div id="myMenus" class="p075rem mt-3">
            <div class="position-relative">
                <span id="chatRoomCounts" class="chat-room-count font-12 font-weight-bold">N</span>
                <a id="my_chat" href="/chat_list" class="btn btn-primary btn-h4 btn-block"><img src="/assets/images/email-logo-w.png" class="logo-white-sm"/>My Private Message</a>
            </div>
        </div>
    </div>
</div>
<div class="dt-none tb-block header-nav-btn">
    <div class="d-flex justify-content-start align-items-center h-100">
        <img id="nav_open" src="/assets/images/mobile_menu.png" style="width: 27px; height: 24px;">
    </div>
</div>
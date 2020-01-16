<!-- Scripts -->
<script src="/assets/js/jquery-3.4.1.min.js"></script>
<script src="/assets/js/popper.min.js"></script>
<script src="/assets/js/bootstrap.min.js"></script>
<script src="/assets/js/blockUI.js"></script>
<script src="/assets/js/moment.js"></script>
<script src="/assets/js/tempusdominus-bootstrap-4.min.js"></script>
<script src="/assets/js/fontawesome5.js"></script>
<script src="/assets/js/sweetalert2.js"></script>
<script src="//cdn.jsdelivr.net/npm/promise-polyfill"></script>
<script src="//apis.google.com/js/platform.js" async defer></script>
<script async defer crossorigin="anonymous" src="//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v5.0&appId=2496151190451458&autoLogAppEvents=1"></script>
<script src="/assets/js/script.js"></script>
<script src="/assets/js/calendar.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.js"></script>
<script src="/assets/js/jquery.form.min.js"></script>
<script>
    window.onload = () => {
        document.addEventListener('touchstart', (event) => {
            if (event.touches.length > 1) {
            event.preventDefault();
            }
        }, { passive: false });
        
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (event) => {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
            event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }
</script>
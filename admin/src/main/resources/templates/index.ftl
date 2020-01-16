<!doctype html>
<html>
<head>
    <script src="assets/js/jquery-3.4.1.min.js"></script>
    <script>
        $(function () {
            var session = getCookie("seq");
            if(session == "" || session == null || session == undefined) {
                document.location.href='/login';
            }else {
                document.location.href='/member/memberlist';
            }
        });
    </script>
</head>
<body>
<script src="/assets/js/script.js"></script>
</body>
</html>
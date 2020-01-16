<#include "/layout/header.ftl">
<#include "/layout/main_header.ftl">
<#include "/layout/base_script.ftl">
<script language='javascript'>
    $(function () {
        var name = getCookie('name');
        Swal.fire({
            text: '본인인증 중 오류가 발생하였습니다',
            confirmButtonText: '확인',
            allowOutsideClick: false
        }).then(function() {
            if(name != "" && name != null && name != undefined) {
                location.href='/' + name;
            }
            location.href='/';
        });
    });
</script>
<#include "/layout/footer.ftl">
<#include "/layout/header.ftl">
<#include "/layout/main_header.ftl">
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script language='javascript'>
	$(function () {
		fnPopup();
	});
	window.name ="Parent_window";

	function fnPopup(){
		// window.open('', 'popupChk', 'width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no');
		document.form_chk.action = "//nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb";
		// document.form_chk.target = "popupChk";
		document.form_chk.target = "_self";
		document.form_chk.submit();
	}
</script>
<#include "/layout/footer.ftl">
</head>
<body>
	<!-- �������� ���� �˾��� ȣ���ϱ� ���ؼ��� ������ ���� form�� �ʿ��մϴ�. -->
	<form name="form_chk" method="post">
		<input type="hidden" id="apiAddress" value="${apiAddress?string}">
		<input type="hidden" name="m" value="checkplusSerivce">						<!-- �ʼ� ����Ÿ��, �����Ͻø� �ȵ˴ϴ�. -->
		<input type="hidden" name="EncodeData" value="${sEncData}">		<!-- ������ ��ü������ ��ȣȭ �� ����Ÿ�Դϴ�. -->
	</form>
</body>
</html>
// $(function () {
//     var idx = getParameter('idx');
//     $("#userIdx").val(idx);
//
//     // 아이콘 클릭시 체크박스 -> 라디오박스
//     $(".flag-ipt").click(function () {
//         if($(this).prop('checked')) {
//             $(".flag-ipt").prop('checked', false);
//             $(this).prop('checked', true);
//             var type = $(this).attr('id');
//             $("#type").val(type);
//             $("#parameter").attr('readonly', false);
//             $("#detail").attr('readonly', false);
//         }else {
//             $(this).prop('checked', true);
//         }
//     });
//
//     // 계정 또는 숫자입력시 해당 링크 생성
//     $("#parameter").change(function () {
//         var type = $("#type").val();
//         var id = $(this).val();
//         var link = "";
//         if(type != "bigcartel") {
//             link = $("#"+type).attr('data-link')+id;
//             $("#link").val(link);
//         }else {
//             link = "https://"+id+".bigcartel.com/";
//             $("#link").val(link);
//         }
//     });
//
// });
// function addLink() {
//     var type = $("#type").val();
//     var link = $("#link").val();
//     var parameter = $("#parameter").val();
//     var detail = $("#detail").val();
//     if(type == "") {
//         Swal.fire({
//             text: '링크 타입을 선택해주세요',
//             confirmButtonText: '확인',
//             allowOutsideClick: false
//         });
//         return false;
//     }else if(link == "" || parameter == "") {
//         Swal.fire({
//             text: '해당 타입의 계정 또는 고유번호를 입력해주세요',
//             confirmButtonText: '확인',
//             allowOutsideClick: false
//         });
//         return false;
//     }else if(detail == "") {
//         Swal.fire({
//             text: '설명을 입력해주세요',
//             confirmButtonText: '확인',
//             allowOutsideClick: false
//         });
//         return false;
//     }
//     var apiAddress = $("#apiAddress").val();
//     var datas = $("#addLinkForm").serialize();
//     $.ajax({
//         url: apiAddress+"/api/saveAboutLinks",
//         type: 'POST',
//         data: datas,
//         dataType: 'JSON',
//         success: function (response) {
//             // console.log(response);
//             if(response.result == true) {
//                 history.back();
//             }else {
//                 Swal.fire({
//                     text: '알 수 없는 오류가 발생하였습니다',
//                     confirmButtonText: '확인',
//                     allowOutsideClick: false
//                 });
//                 return false;
//
//             }
//         }
//     });
// }

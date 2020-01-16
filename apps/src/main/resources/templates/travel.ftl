<#include "/layout/header.ftl">
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<#include "/layout/main_header.ftl">
	<div class="main-container">
		<div class="row">
			<#include "/layout/main_nav.ftl">

			<div class="col">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 d-flex justify-content-between h3-title-box">
						<h3 class="mb-none">Travel</h3><h3 class="dt-none">트레블 추가</h3>
					</div>
					<div class="col-12 col-sm-12 col-md-12">

						<div class="card-right p-4-box">

							<div class="text-center mb-4">
								<h5>항상 즐거운 여행! 어디 다녀오셨나요?</h5>
								<p class="text-black-50">최대 30개의 국가등록이 가능합니다.</p>
							</div>

							<form id="travelForm">
								<input type="hidden" id="userIdx" name="userIdx">
								<input type="hidden" id="onoff" name="onoff">
								<input type="hidden" id="ori_content">
								<input type="hidden" id="content" name="content">
								<input type="hidden" id="nation">
							</form>

							<div class="form-row">
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="GA" class="flag-ipt"><label for="GA"><img src="/assets/images/flag/GA@3x.png"/><div>가봉</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="GY" class="flag-ipt"><label for="GY"><img src="/assets/images/flag/GY@3x.png"/><div>가이아나</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="GM" class="flag-ipt"><label for="GM"><img src="/assets/images/flag/GM@3x.png"/><div>감비아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="GT" class="flag-ipt"><label for="GT"><img src="/assets/images/flag/GT@3x.png"/><div>과테말라</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="GD" class="flag-ipt"><label for="GD"><img src="/assets/images/flag/GD@3x.png"/><div>그레나다</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="GE" class="flag-ipt"><label for="GE"><img src="/assets/images/flag/GE@3x.png"/><div>그루지야</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="GR" class="flag-ipt"><label for="GR"><img src="/assets/images/flag/GR@3x.png"/><div>그리스</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="GW" class="flag-ipt"><label for="GW"><img src="/assets/images/flag/GW@3x.png"/><div>기니비소</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="GN" class="flag-ipt"><label for="GN"><img src="/assets/images/flag/GN@3x.png"/><div>기니</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="NA" class="flag-ipt"><label for="NA"><img src="/assets/images/flag/NA@3x.png"/><div>나미비아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="NG" class="flag-ipt"><label for="NG"><img src="/assets/images/flag/NG@3x.png"/><div>나이지리아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="ZA" class="flag-ipt"><label for="ZA"><img src="/assets/images/flag/ZA@3x.png"/><div>남아프리카공화국</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="NL" class="flag-ipt"><label for="NL"><img src="/assets/images/flag/NL@3x.png"/><div>네덜란드</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="NO" class="flag-ipt"><label for="NO"><img src="/assets/images/flag/NO@3x.png"/><div>노르웨이</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="NZ" class="flag-ipt"><label for="NZ"><img src="/assets/images/flag/NZ@3x.png"/><div>뉴질랜드</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="NE" class="flag-ipt"><label for="NE"><img src="/assets/images/flag/NE@3x.png"/><div>니제르</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="NI" class="flag-ipt"><label for="NI"><img src="/assets/images/flag/NI@3x.png"/><div>니카라과</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="TW" class="flag-ipt"><label for="TW"><img src="/assets/images/flag/TW@3x.png"/><div>타이완</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="KR" class="flag-ipt"><label for="KR"><img src="/assets/images/flag/KR@3x.png"/><div>대한민국</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="DK" class="flag-ipt"><label for="DK"><img src="/assets/images/flag/DK@3x.png"/><div>덴마크</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="DM" class="flag-ipt"><label for="DM"><img src="/assets/images/flag/DM@3x.png"/><div>도미니카연방</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="DO" class="flag-ipt"><label for="DO"><img src="/assets/images/flag/DO@3x.png"/><div>도미니카공화국</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="DE" class="flag-ipt"><label for="DE"><img src="/assets/images/flag/DE@3x.png"/><div>독일</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="LA" class="flag-ipt"><label for="LA"><img src="/assets/images/flag/LA@3x.png"/><div>라오스</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="LV" class="flag-ipt"><label for="LV"><img src="/assets/images/flag/LV@3x.png"/><div>라트비아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="RU" class="flag-ipt"><label for="RU"><img src="/assets/images/flag/RU@3x.png"/><div>러시아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="LB" class="flag-ipt"><label for="LB"><img src="/assets/images/flag/LB@3x.png"/><div>레바논</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="LS" class="flag-ipt"><label for="LS"><img src="/assets/images/flag/LS@3x.png"/><div>레소토</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="RO" class="flag-ipt"><label for="RO"><img src="/assets/images/flag/RO@3x.png"/><div>루마니아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="RW" class="flag-ipt"><label for="RW"><img src="/assets/images/flag/RW@3x.png"/><div>르완다</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="LI" class="flag-ipt"><label for="LI"><img src="/assets/images/flag/LI@3x.png"/><div>리첸쉬테인</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="MG" class="flag-ipt"><label for="MG"><img src="/assets/images/flag/MG@3x.png"/><div>마다가스카르</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="FM" class="flag-ipt"><label for="FM"><img src="/assets/images/flag/FM@3x.png"/><div>크로네시아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="MW" class="flag-ipt"><label for="MW"><img src="/assets/images/flag/MW@3x.png"/><div>말라위</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="MY" class="flag-ipt"><label for="MY"><img src="/assets/images/flag/MY@3x.png"/><div>말레이지아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="ML" class="flag-ipt"><label for="ML"><img src="/assets/images/flag/ML@3x.png"/><div>말리</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="MT" class="flag-ipt"><label for="MT"><img src="/assets/images/flag/MT@3x.png"/><div>몰타</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="MX" class="flag-ipt"><label for="MX"><img src="/assets/images/flag/MX@3x.png"/><div>멕시코</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="MC" class="flag-ipt"><label for="MC"><img src="/assets/images/flag/MC@3x.png"/><div>모나코</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="MA" class="flag-ipt"><label for="MA"><img src="/assets/images/flag/MA@3x.png"/><div>모로코</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="MU" class="flag-ipt"><label for="MU"><img src="/assets/images/flag/MU@3x.png"/><div>모리셔스</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="MR" class="flag-ipt"><label for="MR"><img src="/assets/images/flag/MR@3x.png"/><div>모리타니</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="MZ" class="flag-ipt"><label for="MZ"><img src="/assets/images/flag/MZ@3x.png"/><div>모잠비크</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="MD" class="flag-ipt"><label for="MD"><img src="/assets/images/flag/MD@3x.png"/><div>몰도바</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="MV" class="flag-ipt"><label for="MV"><img src="/assets/images/flag/MV@3x.png"/><div>몰디브</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="MN" class="flag-ipt"><label for="MN"><img src="/assets/images/flag/MN@3x.png"/><div>몽고</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="US" class="flag-ipt"><label for="US"><img src="/assets/images/flag/US@3x.png"/><div>미국</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="MM" class="flag-ipt"><label for="MM"><img src="/assets/images/flag/MM@3x.png"/><div>미얀마</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="VU" class="flag-ipt"><label for="VU"><img src="/assets/images/flag/VU@3x.png"/><div>바누아투</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="BH" class="flag-ipt"><label for="BH"><img src="/assets/images/flag/BH@3x.png"/><div>바레인</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="BB" class="flag-ipt"><label for="BB"><img src="/assets/images/flag/BB@3x.png"/><div>바베이도스</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="BS" class="flag-ipt"><label for="BS"><img src="/assets/images/flag/BS@3x.png"/><div>바하마</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="BD" class="flag-ipt"><label for="BD"><img src="/assets/images/flag/BD@3x.png"/><div>방글라데시</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="BY" class="flag-ipt"><label for="BY"><img src="/assets/images/flag/BY@3x.png"/><div>벨라루스</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="VE" class="flag-ipt"><label for="VE"><img src="/assets/images/flag/VE@3x.png"/><div>베네수엘라</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="BJ" class="flag-ipt"><label for="BJ"><img src="/assets/images/flag/BJ@3x.png"/><div>베넹</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="VN" class="flag-ipt"><label for="VN"><img src="/assets/images/flag/VN@3x.png"/><div>베트남</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="BE" class="flag-ipt"><label for="BE"><img src="/assets/images/flag/BE@3x.png"/><div>벨기에</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="BZ" class="flag-ipt"><label for="BZ"><img src="/assets/images/flag/BZ@3x.png"/><div>벨리세</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="BA" class="flag-ipt"><label for="BA"><img src="/assets/images/flag/BA@3x.png"/><div>보스니아헤르체코비나</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="BW" class="flag-ipt"><label for="BW"><img src="/assets/images/flag/BW@3x.png"/><div>보츠와나</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="BO" class="flag-ipt"><label for="BO"><img src="/assets/images/flag/BO@3x.png"/><div>볼리비아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="BF" class="flag-ipt"><label for="BF"><img src="/assets/images/flag/BF@3x.png"/><div>부르키나파소</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="BT" class="flag-ipt"><label for="BT"><img src="/assets/images/flag/BT@3x.png"/><div>부탄</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="BG" class="flag-ipt"><label for="BG"><img src="/assets/images/flag/BG@3x.png"/><div>불가리아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="BR" class="flag-ipt"><label for="BR"><img src="/assets/images/flag/BR@3x.png"/><div>브라질</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="BN" class="flag-ipt"><label for="BN"><img src="/assets/images/flag/BN@3x.png"/><div>브루네이(나이)</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="BI" class="flag-ipt"><label for="BI"><img src="/assets/images/flag/BI@3x.png"/><div>브룬디</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="WS" class="flag-ipt"><label for="WS"><img src="/assets/images/flag/WS@3x.png"/><div>미국(사모아)</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="SA" class="flag-ipt"><label for="SA"><img src="/assets/images/flag/SA@3x.png"/><div>사우디아라비아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="CY" class="flag-ipt"><label for="CY"><img src="/assets/images/flag/CY@3x.png"/><div>사이프러스</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="SM" class="flag-ipt"><label for="SM"><img src="/assets/images/flag/SM@3x.png"/><div>산마리노</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="SN" class="flag-ipt"><label for="SN"><img src="/assets/images/flag/SN@3x.png"/><div>세네갈</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="SC" class="flag-ipt"><label for="SC"><img src="/assets/images/flag/SC@3x.png"/><div>세이셸</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="LC" class="flag-ipt"><label for="LC"><img src="/assets/images/flag/LC@3x.png"/><div>세인트루시아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="VC" class="flag-ipt"><label for="VC"><img src="/assets/images/flag/VC@3x.png"/><div>세인트빈센트그레나딘</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="KN" class="flag-ipt"><label for="KN"><img src="/assets/images/flag/KN@3x.png"/><div>세인트키츠네비스</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="SB" class="flag-ipt"><label for="SB"><img src="/assets/images/flag/SB@3x.png"/><div>솔로몬아일란드</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="SR" class="flag-ipt"><label for="SR"><img src="/assets/images/flag/SR@3x.png"/><div>수리남</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="LK" class="flag-ipt"><label for="LK"><img src="/assets/images/flag/LK@3x.png"/><div>스리랑카</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="SZ" class="flag-ipt"><label for="SZ"><img src="/assets/images/flag/SZ@3x.png"/><div>스와질랜드</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="SE" class="flag-ipt"><label for="SE"><img src="/assets/images/flag/SE@3x.png"/><div>스웨덴</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="CH" class="flag-ipt"><label for="CH"><img src="/assets/images/flag/CH@3x.png"/><div>스위스</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="ES" class="flag-ipt"><label for="ES"><img src="/assets/images/flag/ES@3x.png"/><div>스페인</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="SK" class="flag-ipt"><label for="SK"><img src="/assets/images/flag/SK@3x.png"/><div>슬로바키아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="SI" class="flag-ipt"><label for="SI"><img src="/assets/images/flag/SI@3x.png"/><div>슬로베니아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="SL" class="flag-ipt"><label for="SL"><img src="/assets/images/flag/SL@3x.png"/><div>시에라리온</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="SG" class="flag-ipt"><label for="SG"><img src="/assets/images/flag/SG@3x.png"/><div>싱가포르</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="AE" class="flag-ipt"><label for="AE"><img src="/assets/images/flag/AE@3x.png"/><div>아랍에미레이트연합국</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="AR" class="flag-ipt"><label for="AR"><img src="/assets/images/flag/AR@3x.png"/><div>아르헨티나</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="IS" class="flag-ipt"><label for="IS"><img src="/assets/images/flag/IS@3x.png"/><div>아이슬란드</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="HT" class="flag-ipt"><label for="HT"><img src="/assets/images/flag/HT@3x.png"/><div>아이티</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="IE" class="flag-ipt"><label for="IE"><img src="/assets/images/flag/IE@3x.png"/><div>아일란드(에이레)</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="AZ" class="flag-ipt"><label for="AZ"><img src="/assets/images/flag/AZ@3x.png"/><div>아제르바이잔</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="AF" class="flag-ipt"><label for="AF"><img src="/assets/images/flag/AF@3x.png"/><div>아프가니스탄</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="AD" class="flag-ipt"><label for="AD"><img src="/assets/images/flag/AD@3x.png"/><div>안도라</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="AG" class="flag-ipt"><label for="AG"><img src="/assets/images/flag/AG@3x.png"/><div>앤티과바부다</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="AL" class="flag-ipt"><label for="AL"><img src="/assets/images/flag/AL@3x.png"/><div>알바니아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="DZ" class="flag-ipt"><label for="DZ"><img src="/assets/images/flag/DZ@3x.png"/><div>알제리</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="AO" class="flag-ipt"><label for="AO"><img src="/assets/images/flag/AO@3x.png"/><div>앙골라</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="ER" class="flag-ipt"><label for="ER"><img src="/assets/images/flag/ER@3x.png"/><div>에리트리아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="EE" class="flag-ipt"><label for="EE"><img src="/assets/images/flag/EE@3x.png"/><div>에스토니아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="EC" class="flag-ipt"><label for="EC"><img src="/assets/images/flag/EC@3x.png"/><div>에콰도르</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="SV" class="flag-ipt"><label for="SV"><img src="/assets/images/flag/SV@3x.png"/><div>엘살바도르</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="GB" class="flag-ipt"><label for="GB"><img src="/assets/images/flag/GB@3x.png"/><div>영국</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="YE" class="flag-ipt"><label for="YE"><img src="/assets/images/flag/YE@3x.png"/><div>예멘</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="OM" class="flag-ipt"><label for="OM"><img src="/assets/images/flag/OM@3x.png"/><div>오만</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="AU" class="flag-ipt"><label for="AU"><img src="/assets/images/flag/AU@3x.png"/><div>오스트레일리아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="AT" class="flag-ipt"><label for="AT"><img src="/assets/images/flag/AT@3x.png"/><div>오스트리아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="HN" class="flag-ipt"><label for="HN"><img src="/assets/images/flag/HN@3x.png"/><div>온두라스</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="JO" class="flag-ipt"><label for="JO"><img src="/assets/images/flag/JO@3x.png"/><div>요르단</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="UG" class="flag-ipt"><label for="UG"><img src="/assets/images/flag/UG@3x.png"/><div>우간다</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="UY" class="flag-ipt"><label for="UY"><img src="/assets/images/flag/UY@3x.png"/><div>우루과이</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="UZ" class="flag-ipt"><label for="UZ"><img src="/assets/images/flag/UZ@3x.png"/><div>우즈베크</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="UA" class="flag-ipt"><label for="UA"><img src="/assets/images/flag/UA@3x.png"/><div>우크라이나</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="ET" class="flag-ipt"><label for="ET"><img src="/assets/images/flag/ET@3x.png"/><div>이디오피아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="IQ" class="flag-ipt"><label for="IQ"><img src="/assets/images/flag/IQ@3x.png"/><div>이라크</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="IR" class="flag-ipt"><label for="IR"><img src="/assets/images/flag/IR@3x.png"/><div>이란</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="IL" class="flag-ipt"><label for="IL"><img src="/assets/images/flag/IL@3x.png"/><div>이스라엘</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="EG" class="flag-ipt"><label for="EG"><img src="/assets/images/flag/EG@3x.png"/><div>이집트</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="IT" class="flag-ipt"><label for="IT"><img src="/assets/images/flag/IT@3x.png"/><div>이탈리아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="IN" class="flag-ipt"><label for="IN"><img src="/assets/images/flag/IN@3x.png"/><div>인도</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="ID" class="flag-ipt"><label for="ID"><img src="/assets/images/flag/ID@3x.png"/><div>인도네시아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="JP" class="flag-ipt"><label for="JP"><img src="/assets/images/flag/JP@3x.png"/><div>일본</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="JM" class="flag-ipt"><label for="JM"><img src="/assets/images/flag/JM@3x.png"/><div>자메이카</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="ZM" class="flag-ipt"><label for="ZM"><img src="/assets/images/flag/ZM@3x.png"/><div>잠비아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="CN" class="flag-ipt"><label for="CN"><img src="/assets/images/flag/CN@3x.png"/><div>중국</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="MO" class="flag-ipt"><label for="MO"><img src="/assets/images/flag/MO@3x.png"/><div>중국(마카오)</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="HK" class="flag-ipt"><label for="HK"><img src="/assets/images/flag/HK@3x.png"/><div>중국(홍콩)</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="CF" class="flag-ipt"><label for="CF"><img src="/assets/images/flag/CF@3x.png"/><div>중앙아프리카</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="DJ" class="flag-ipt"><label for="DJ"><img src="/assets/images/flag/DJ@3x.png"/><div>지부티</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="TD" class="flag-ipt"><label for="TD"><img src="/assets/images/flag/TD@3x.png"/><div>차드</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="CZ" class="flag-ipt"><label for="CZ"><img src="/assets/images/flag/CZ@3x.png"/><div>체코</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="CA" class="flag-ipt"><label for="CA"><img src="/assets/images/flag/CA@3x.png"/><div>카나다</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="CM" class="flag-ipt"><label for="CM"><img src="/assets/images/flag/CM@3x.png"/><div>카메룬</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="CV" class="flag-ipt"><label for="CV"><img src="/assets/images/flag/CV@3x.png"/><div>카보베르데</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="KZ" class="flag-ipt"><label for="KZ"><img src="/assets/images/flag/KZ@3x.png"/><div>카자흐</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="QA" class="flag-ipt"><label for="QA"><img src="/assets/images/flag/QA@3x.png"/><div>카타르</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="KH" class="flag-ipt"><label for="KH"><img src="/assets/images/flag/KH@3x.png"/><div>캄보디아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="KE" class="flag-ipt"><label for="KE"><img src="/assets/images/flag/KE@3x.png"/><div>케냐</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="CR" class="flag-ipt"><label for="CR"><img src="/assets/images/flag/CR@3x.png"/><div>코스타리카</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="CI" class="flag-ipt"><label for="CI"><img src="/assets/images/flag/CI@3x.png"/><div>코트디봐르</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="CO" class="flag-ipt"><label for="CO"><img src="/assets/images/flag/CO@3x.png"/><div>콜롬비아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="CG" class="flag-ipt"><label for="CG"><img src="/assets/images/flag/CG@3x.png"/><div>콩고</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="CU" class="flag-ipt"><label for="CU"><img src="/assets/images/flag/CU@3x.png"/><div>쿠바</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="KW" class="flag-ipt"><label for="KW"><img src="/assets/images/flag/KW@3x.png"/><div>쿠웨이트</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="HR" class="flag-ipt"><label for="HR"><img src="/assets/images/flag/HR@3x.png"/><div>크로아티아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="KG" class="flag-ipt"><label for="KG"><img src="/assets/images/flag/KG@3x.png"/><div>키르키즈스탄</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="TJ" class="flag-ipt"><label for="TJ"><img src="/assets/images/flag/TJ@3x.png"/><div>타지키스탄</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="TZ" class="flag-ipt"><label for="TZ"><img src="/assets/images/flag/TZ@3x.png"/><div>탄자니아</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="TH" class="flag-ipt"><label for="TH"><img src="/assets/images/flag/TH@3x.png"/><div>타이(태국)</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="TG" class="flag-ipt"><label for="TG"><img src="/assets/images/flag/TG@3x.png"/><div>토고</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="TO" class="flag-ipt"><label for="TO"><img src="/assets/images/flag/TO@3x.png"/><div>통가</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="TN" class="flag-ipt"><label for="TN"><img src="/assets/images/flag/TN@3x.png"/><div>튀니지</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="TT" class="flag-ipt"><label for="TT"><img src="/assets/images/flag/TT@3x.png"/><div>트리니다드토바고</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="PA" class="flag-ipt"><label for="PA"><img src="/assets/images/flag/PA@3x.png"/><div>파나마</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="PY" class="flag-ipt"><label for="PY"><img src="/assets/images/flag/PY@3x.png"/><div>파라과이</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="PK" class="flag-ipt"><label for="PK"><img src="/assets/images/flag/PK@3x.png"/><div>파키스탄</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="PG" class="flag-ipt"><label for="PG"><img src="/assets/images/flag/PG@3x.png"/><div>파푸아뉴기니</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="PW" class="flag-ipt"><label for="PW"><img src="/assets/images/flag/PW@3x.png"/><div>미국(팔라우섬)</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="PT" class="flag-ipt"><label for="PT"><img src="/assets/images/flag/PT@3x.png"/><div>포르투갈</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="PL" class="flag-ipt"><label for="PL"><img src="/assets/images/flag/PL@3x.png"/><div>폴란드</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="FI" class="flag-ipt"><label for="FI"><img src="/assets/images/flag/FI@3x.png"/><div>필란드</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="PH" class="flag-ipt"><label for="PH"><img src="/assets/images/flag/PH@3x.png"/><div>필리핀</div></label></div>
								<div class="col-4 col-md-2 mb-3"><input type="checkbox" id="HU" class="flag-ipt"><label for="HU"><img src="/assets/images/flag/HU@3x.png"/><div>헝가리</div></label></div>
							</div>

						</div>


						<div class="result-button-wrap mb-5">
							<button type="button" class="btn btn-primary" onclick="flagAdd();">항목 추가</button>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
<#include "/layout/base_script.ftl">
<script src="/assets/js/apps/userSelect.js"></script>
<script src="/assets/js/apps/travel.js"></script>
<#include "/layout/footer.ftl">
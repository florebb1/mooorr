package com.laidback.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.nio.file.spi.FileSystemProvider;

/**
 * Created by jack on 2018. 7. 26..
 */
@Controller
public class MainController {
    @Value("${api.url}")
    private String apiAddress;

    @Value("${certification.url}")
    private String certificationUrl;

    private FileSystemProvider session;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView intro(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("login");
        return mav;
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ModelAndView login(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("login");
        return mav;
    }

    @RequestMapping(value = "/joinEmail", method = RequestMethod.GET)
    public ModelAndView joinEmail(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("join-email");
        return mav;
    }

    @RequestMapping(value = "/emailAuthentication", method = RequestMethod.GET)
    public ModelAndView emailAuthentication(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("email-authentication");
        return mav;
    }

    @RequestMapping(value = "/joinDetail", method = RequestMethod.GET)
    public ModelAndView joinDetail(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("join-detail");
        return mav;
    }

    @RequestMapping(value = "/joinCompleted", method = RequestMethod.GET)
    public ModelAndView joinCompleted(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("join-completed");
        return mav;
    }

    @RequestMapping(value = "/{nicName}", method = RequestMethod.GET)
    @ResponseBody
    public ModelAndView main(ModelAndView mav, @PathVariable("nicName") String nicName) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nicName", nicName);
        mav.setViewName("main");
        return mav;
    }

    @RequestMapping(value = "/profile", method = RequestMethod.GET)
    public ModelAndView profile(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("profile");
        return mav;
    }

    @RequestMapping(value = "/point", method = RequestMethod.GET)
    public ModelAndView point(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("point");
        return mav;
    }

    @RequestMapping(value = "/follow", method = RequestMethod.GET)
    public ModelAndView follow(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("follow");
        return mav;
    }

    @RequestMapping(value = "/charge_paypal", method = RequestMethod.GET)
    public ModelAndView charge_paypal(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("charge_paypal");
        return mav;
    }
    @RequestMapping(value = "/charge_inipay", method = RequestMethod.GET)
    public ModelAndView charge_inipay(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("charge_inipay");
        return mav;
    }
    @RequestMapping(value = "/charge", method = RequestMethod.GET)
    public ModelAndView charge(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("charge");
        return mav;
    }

    @RequestMapping(value = "/exchange", method = RequestMethod.GET)
    public ModelAndView exchange(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("exchange");
        return mav;
    }

    @RequestMapping(value = "/payment_history", method = RequestMethod.GET)
    public ModelAndView payment_history(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("payment_history");
        return mav;
    }

    @RequestMapping(value = "/point_use", method = RequestMethod.GET)
    public ModelAndView point_use(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("point_use");
        return mav;
    }

    @RequestMapping(value = "/exchange_history", method = RequestMethod.GET)
    public ModelAndView exchange_history(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("exchange_history");
        return mav;
    }

    @RequestMapping(value = "/donation", method = RequestMethod.GET)
    public ModelAndView donation(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("donation");
        return mav;
    }

    @RequestMapping(value = "/chat_list", method = RequestMethod.GET)
    public ModelAndView chat_list(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("chat_list");
        return mav;
    }

    @RequestMapping(value = "/chat_info", method = RequestMethod.GET)
    public ModelAndView chat_info(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("chat_info");
        return mav;
    }

    @RequestMapping(value = "/chat_detail", method = RequestMethod.GET)
    public ModelAndView chat_detail(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("chat_detail");
        return mav;
    }

    @RequestMapping(value = "/declaration", method = RequestMethod.GET)
    public ModelAndView declaration(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("declaration");
        return mav;
    }

    @RequestMapping(value = "/profile_notice", method = RequestMethod.GET)
    public ModelAndView profile_notice(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("profile_notice");
        return mav;
    }

    @RequestMapping(value = "/travel_list", method = RequestMethod.GET)
    public ModelAndView travel_list(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("travel_list");
        return mav;
    }

    @RequestMapping(value = "/travel", method = RequestMethod.GET)
    public ModelAndView travel(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("travel");
        return mav;
    }

    @RequestMapping(value = "/my_links", method = RequestMethod.GET)
    public ModelAndView my_links(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("my_links");
        return mav;
    }

    @RequestMapping(value = "/my_links_more", method = RequestMethod.GET)
    public ModelAndView my_links_more(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("my_links_more");
        return mav;
    }
    @RequestMapping(value = "/my_links_input", method = RequestMethod.GET)
    public ModelAndView my_links_input(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("my_links_input");
        return mav;
    }

    @RequestMapping(value = "/favorite", method = RequestMethod.GET)
    public ModelAndView favorite(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("favorite");
        return mav;
    }

    @RequestMapping(value = "/interests", method = RequestMethod.GET)
    public ModelAndView interests(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("interests");
        return mav;
    }

    @RequestMapping(value = "/portrait", method = RequestMethod.GET)
    public ModelAndView portrait(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("portrait");
        return mav;
    }
    @RequestMapping(value = "/portrait_more", method = RequestMethod.GET)
    public ModelAndView portrait_more(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("portrait_more");
        return mav;
    }

    @RequestMapping(value = "/portrait_input", method = RequestMethod.GET)
    public ModelAndView portrait_input(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("portrait_input");
        return mav;
    }

    @RequestMapping(value = "/comment", method = RequestMethod.GET)
    public ModelAndView comment(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("comment");
        return mav;
    }

    @RequestMapping(value = "/comment_more", method = RequestMethod.GET)
    public ModelAndView comment_more(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("comment_more");
        return mav;
    }
    @RequestMapping(value = "/schedule", method = RequestMethod.GET)
    public ModelAndView schedule(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("schedule");
        return mav;
    }
    @RequestMapping(value = "/schedule_more", method = RequestMethod.GET)
    public ModelAndView schedule_more(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("schedule_more");
        return mav;
    }

    @RequestMapping(value = "/notice", method = RequestMethod.GET)
    public ModelAndView notice(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("notice");
        return mav;
    }

    @RequestMapping(value = "/faq", method = RequestMethod.GET)
    public ModelAndView faq(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("faq");
        return mav;
    }

    @RequestMapping(value = "/help", method = RequestMethod.GET)
    public ModelAndView help(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("help");
        return mav;
    }

    @RequestMapping(value = "/help_write", method = RequestMethod.GET)
    public ModelAndView help_write(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("help_write");
        return mav;
    }

    @RequestMapping(value = "/setting", method = RequestMethod.GET)
    public ModelAndView setting(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("setting");
        return mav;
    }

    @RequestMapping(value = "/service_info", method = RequestMethod.GET)
    public ModelAndView service_info(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("service_info");
        return mav;
    }

    @RequestMapping(value = "/privacy", method = RequestMethod.GET)
    public ModelAndView privacy(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("privacy");
        return mav;
    }

    @RequestMapping(value = "/privacy_guide", method = RequestMethod.GET)
    public ModelAndView privacy_guide(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("privacy_guide");
        return mav;
    }

    @RequestMapping(value = "/info_edit", method = RequestMethod.GET)
    public ModelAndView info_edit(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("info_edit");
        return mav;
    }

    @RequestMapping(value = "/find_id", method = RequestMethod.GET)
    public ModelAndView find_id(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("find_id");
        return mav;
    }

    @RequestMapping(value = "/find_id_result", method = RequestMethod.GET)
    public ModelAndView find_id_result(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("find_id_result");
        return mav;
    }

    @RequestMapping(value = "/find_pw", method = RequestMethod.GET)
    public ModelAndView find_pw(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("find_pw");
        return mav;
    }

    @RequestMapping(value = "/find_pw_authentication", method = RequestMethod.GET)
    public ModelAndView find_pw_authentication(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("find_pw_authentication");
        return mav;
    }

    @RequestMapping(value = "/find_pw_result", method = RequestMethod.GET)
    public ModelAndView find_pw_result(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("find_pw_result");
        return mav;
    }

    @RequestMapping(value = "/login_facebook_registration", method = RequestMethod.GET)
    public ModelAndView login_facebook_registration(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("login_facebook_registration");
        return mav;
    }

    @RequestMapping(value = "/login_facebook_auth", method = RequestMethod.GET)
    public ModelAndView login_facebook_auth(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("login_facebook_auth");
        return mav;
    }

    @RequestMapping(value = "/change_pw", method = RequestMethod.GET)
    public ModelAndView change_pw(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("change_pw");
        return mav;
    }

    @RequestMapping(value = "/change_pw2", method = RequestMethod.GET)
    public ModelAndView change_pw2(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("change_pw2");
        return mav;
    }

    @RequestMapping(value = "/checkplus_main", method = RequestMethod.GET)
    public ModelAndView checkplus_main(ModelAndView mav, HttpSession session) {
        NiceID.Check.CPClient niceCheck = new NiceID.Check.CPClient();

        String sSiteCode = "BP994";			// NICE로부터 부여받은 사이트 코드
        String sSitePassword = "8Skk3I0nqool";		// NICE로부터 부여받은 사이트 패스워드

        String sRequestNumber = "REQ0000000001";        	// 요청 번호, 이는 성공/실패후에 같은 값으로 되돌려주게 되므로
        // 업체에서 적절하게 변경하여 쓰거나, 아래와 같이 생성한다.
        sRequestNumber = niceCheck.getRequestNO(sSiteCode);
        session.setAttribute("REQ_SEQ", sRequestNumber);	// 해킹등의 방지를 위하여 세션을 쓴다면, 세션에 요청번호를 넣는다.

        String sAuthType = "";      	// 없으면 기본 선택화면, M: 핸드폰, C: 신용카드, X: 공인인증서

        String popgubun 	= "";		//Y : 취소버튼 있음 / N : 취소버튼 없음
        String customize 	= "";		//없으면 기본 웹페이지 / Mobile : 모바일페이지

        String sGender = ""; 			//없으면 기본 선택 값, 0 : 여자, 1 : 남자

        // CheckPlus(본인인증) 처리 후, 결과 데이타를 리턴 받기위해 다음예제와 같이 http부터 입력합니다.
        //리턴url은 인증 전 인증페이지를 호출하기 전 url과 동일해야 합니다. ex) 인증 전 url : http://www.~ 리턴 url : http://www.~
        String sReturnUrl = certificationUrl + "/checkplus_success";      // 성공시 이동될 URL
        String sErrorUrl = certificationUrl + "/checkplus_fail";          // 실패시 이동될 URL

//        String sReturnUrl = "https://mooorr.com/checkplus_success";      // 성공시 이동될 URL
//        String sErrorUrl = "https://mooorr.com/checkplus_fail";          // 실패시 이동될 URL

        // 입력될 plain 데이타를 만든다.
        String sPlainData = "7:REQ_SEQ" + sRequestNumber.getBytes().length + ":" + sRequestNumber +
                "8:SITECODE" + sSiteCode.getBytes().length + ":" + sSiteCode +
                "9:AUTH_TYPE" + sAuthType.getBytes().length + ":" + sAuthType +
                "7:RTN_URL" + sReturnUrl.getBytes().length + ":" + sReturnUrl +
                "7:ERR_URL" + sErrorUrl.getBytes().length + ":" + sErrorUrl +
                "11:POPUP_GUBUN" + popgubun.getBytes().length + ":" + popgubun +
                "9:CUSTOMIZE" + customize.getBytes().length + ":" + customize +
                "6:GENDER" + sGender.getBytes().length + ":" + sGender;

        String sMessage = "";
        String sEncData = "";

        int iReturn = niceCheck.fnEncode(sSiteCode, sSitePassword, sPlainData);
        if( iReturn == 0 )
        {
            sEncData = niceCheck.getCipherData();
        }
        else if( iReturn == -1)
        {
            sMessage = "암호화 시스템 에러입니다.";
        }
        else if( iReturn == -2)
        {
            sMessage = "암호화 처리오류입니다.";
        }
        else if( iReturn == -3)
        {
            sMessage = "암호화 데이터 오류입니다.";
        }
        else if( iReturn == -9)
        {
            sMessage = "입력 데이터 오류입니다.";
        }
        else
        {
            sMessage = "알수 없는 에러 입니다. iReturn : " + iReturn;
        }

        mav.addObject("sMessage", sMessage);
        mav.addObject("sEncData", sEncData);
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("checkplus_main");
        return mav;
    }

    @RequestMapping(value = "/checkplus_fail", method = RequestMethod.GET)
    public ModelAndView checkplus_fail(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("checkplus_fail");
        return mav;
    }

    @RequestMapping(value = "/checkplus_success", method = RequestMethod.POST)
    public ModelAndView checkplus_success(ModelAndView mav, HttpServletRequest request, HttpSession session) {

        //인증 후 결과값이 null로 나오는 부분은 관리담당자에게 문의 바랍니다.
        NiceID.Check.CPClient niceCheck = new  NiceID.Check.CPClient();

        String sEncodeData = requestReplace(request.getParameter("EncodeData"), "encodeData");

        String sSiteCode = "BP994";				// NICE로부터 부여받은 사이트 코드
        String sSitePassword = "8Skk3I0nqool";			// NICE로부터 부여받은 사이트 패스워드

        String sCipherTime = "";			// 복호화한 시간
        String sRequestNumber = "";			// 요청 번호
        String sResponseNumber = "";		// 인증 고유번호
        String sAuthType = "";				// 인증 수단
        String sName = "";					// 성명
        String sDupInfo = "";				// 중복가입 확인값 (DI_64 byte)
        String sConnInfo = "";				// 연계정보 확인값 (CI_88 byte)
        String sBirthDate = "";				// 생년월일(YYYYMMDD)
        String sGender = "";				// 성별
        String sNationalInfo = "";			// 내/외국인정보 (개발가이드 참조)
        String sMobileNo = "";				// 휴대폰번호
        String sMobileCo = "";				// 통신사
        String sMessage = "";
        String sPlainData = "";

        int iReturn = niceCheck.fnDecode(sSiteCode, sSitePassword, sEncodeData);

        if( iReturn == 0 )
        {
            sPlainData = niceCheck.getPlainData();
            sCipherTime = niceCheck.getCipherDateTime();

            // 데이타를 추출합니다.
            java.util.HashMap mapresult = niceCheck.fnParse(sPlainData);

            sRequestNumber  = (String)mapresult.get("REQ_SEQ");
            sResponseNumber = (String)mapresult.get("RES_SEQ");
            sAuthType		= (String)mapresult.get("AUTH_TYPE");
            sName			= (String)mapresult.get("NAME");
            //sName			= (String)mapresult.get("UTF8_NAME"); //charset utf8 사용시 주석 해제 후 사용
            sBirthDate		= (String)mapresult.get("BIRTHDATE");
            sGender			= (String)mapresult.get("GENDER");
            sNationalInfo  	= (String)mapresult.get("NATIONALINFO");
            sDupInfo		= (String)mapresult.get("DI");
            sConnInfo		= (String)mapresult.get("CI");
            sMobileNo		= (String)mapresult.get("MOBILE_NO");
            sMobileCo		= (String)mapresult.get("MOBILE_CO");

            String session_sRequestNumber = (String)session.getAttribute("REQ_SEQ");
            if(!sRequestNumber.equals(session_sRequestNumber))
            {
                sMessage = "세션값 불일치 오류입니다.";
                sResponseNumber = "";
                sAuthType = "";
            }
        }
        else if( iReturn == -1)
        {
            sMessage = "복호화 시스템 오류입니다.";
        }
        else if( iReturn == -4)
        {
            sMessage = "복호화 처리 오류입니다.";
        }
        else if( iReturn == -5)
        {
            sMessage = "복호화 해쉬 오류입니다.";
        }
        else if( iReturn == -6)
        {
            sMessage = "복호화 데이터 오류입니다.";
        }
        else if( iReturn == -9)
        {
            sMessage = "입력 데이터 오류입니다.";
        }
        else if( iReturn == -12)
        {
            sMessage = "사이트 패스워드 오류입니다.";
        }
        else
        {
            sMessage = "알수 없는 에러 입니다. iReturn : " + iReturn;
        }

        mav.addObject("sMobileNo", sMobileNo);
        mav.addObject("sGender", sGender);
        mav.addObject("sBirthDate", sBirthDate);
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("checkplus_success");
        return mav;
    }

    public static String requestReplace (String paramValue, String gubun) {

        String result = "";

        if (paramValue != null) {

            paramValue = paramValue.replaceAll("<", "&lt;").replaceAll(">", "&gt;");

            paramValue = paramValue.replaceAll("\\*", "");
            paramValue = paramValue.replaceAll("\\?", "");
            paramValue = paramValue.replaceAll("\\[", "");
            paramValue = paramValue.replaceAll("\\{", "");
            paramValue = paramValue.replaceAll("\\(", "");
            paramValue = paramValue.replaceAll("\\)", "");
            paramValue = paramValue.replaceAll("\\^", "");
            paramValue = paramValue.replaceAll("\\$", "");
            paramValue = paramValue.replaceAll("'", "");
            paramValue = paramValue.replaceAll("@", "");
            paramValue = paramValue.replaceAll("%", "");
            paramValue = paramValue.replaceAll(";", "");
            paramValue = paramValue.replaceAll(":", "");
            paramValue = paramValue.replaceAll("-", "");
            paramValue = paramValue.replaceAll("#", "");
            paramValue = paramValue.replaceAll("--", "");
            paramValue = paramValue.replaceAll("-", "");
            paramValue = paramValue.replaceAll(",", "");

            if(gubun != "encodeData"){
                paramValue = paramValue.replaceAll("\\+", "");
                paramValue = paramValue.replaceAll("/", "");
                paramValue = paramValue.replaceAll("=", "");
            }

            result = paramValue;

        }
        return result;
    }

}

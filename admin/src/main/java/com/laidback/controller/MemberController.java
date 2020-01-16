package com.laidback.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by jack on 2018. 7. 26..
 */
@Controller
public class MemberController {
    @Value("${api.url}")
    private String apiAddress;

    @RequestMapping(value = "/member/memberlist", method = RequestMethod.GET)
    public ModelAndView memberlist(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","member");
        mav.addObject("item","list");
        mav.setViewName("member/memberlist");
        return mav;
    }

    @RequestMapping(value = "/member/memberdetail", method = RequestMethod.GET)
    public ModelAndView memberdetail(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","member");
        mav.addObject("item","detail");
        mav.setViewName("member/memberdetail");
        return mav;
    }
}

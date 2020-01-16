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
public class ServiceController {
    @Value("${api.url}")
    private String apiAddress;

    @RequestMapping(value = "/service/reportlist", method = RequestMethod.GET)
    public ModelAndView reportlist(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","service");
        mav.addObject("item","reportlist");
        mav.setViewName("service/reportlist");
        return mav;
    }

    @RequestMapping(value = "/service/reportdetail", method = RequestMethod.GET)
    public ModelAndView reportdetail(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","service");
        mav.addObject("item","reportlist");
        mav.setViewName("service/reportdetail");
        return mav;
    }

    @RequestMapping(value = "/service/pointlist", method = RequestMethod.GET)
    public ModelAndView pointlist(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","service");
        mav.addObject("item","pointlist");
        mav.setViewName("service/pointlist");
        return mav;
    }

    @RequestMapping(value = "/service/terms", method = RequestMethod.GET)
    public ModelAndView terms(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","service");
        mav.addObject("item","terms");
        mav.setViewName("service/terms");
        return mav;
    }

    @RequestMapping(value = "/service/paymentlist", method = RequestMethod.GET)
    public ModelAndView paymentlist(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","service");
        mav.addObject("item","paymentlist");
        mav.setViewName("service/paymentlist");
        return mav;
    }

    @RequestMapping(value = "/service/banner", method = RequestMethod.GET)
    public ModelAndView banner(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","service");
        mav.addObject("item","banner");
        mav.setViewName("service/banner");
        return mav;
    }

    @RequestMapping(value = "/service/bannerwrite", method = RequestMethod.GET)
    public ModelAndView bannerwrite(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","service");
        mav.addObject("item","banner");
        mav.setViewName("service/bannerwrite");
        return mav;
    }

    @RequestMapping(value = "/service/popuplist", method = RequestMethod.GET)
    public ModelAndView popuplist(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","service");
        mav.addObject("item","popuplist");
        mav.setViewName("service/popuplist");
        return mav;
    }

    @RequestMapping(value = "/service/popupwrite", method = RequestMethod.GET)
    public ModelAndView popupwrite(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","service");
        mav.addObject("item","popuplist");
        mav.setViewName("service/popupwrite");
        return mav;
    }

    @RequestMapping(value = "/service/blockmember", method = RequestMethod.GET)
    public ModelAndView blockmember(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","service");
        mav.addObject("item","blockmember");
        mav.setViewName("service/blockmember");
        return mav;
    }


}

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
public class MainController {
    @Value("${api.url}")
    private String apiAddress;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView index(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("index");
        return mav;
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ModelAndView login(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("login");
        return mav;
    }
}

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
public class BoardController {
    @Value("${api.url}")
    private String apiAddress;

    @RequestMapping(value = "/board/noticelist", method = RequestMethod.GET)
    public ModelAndView noticelist(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","board");
        mav.addObject("item","noticelist");
        mav.setViewName("board/noticelist");
        return mav;
    }

    @RequestMapping(value = "/board/noticewrite", method = RequestMethod.GET)
    public ModelAndView noticewrite(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","board");
        mav.addObject("item","noticelist");
        mav.setViewName("board/noticewrite");
        return mav;
    }

    @RequestMapping(value = "/board/qnalist", method = RequestMethod.GET)
    public ModelAndView qnalist(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","board");
        mav.addObject("item","qnalist");
        mav.setViewName("board/qnalist");
        return mav;
    }

    @RequestMapping(value = "/board/qnaview", method = RequestMethod.GET)
    public ModelAndView qnaview(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","board");
        mav.addObject("item","qnalist");
        mav.setViewName("board/qnaview");
        return mav;
    }

    @RequestMapping(value = "/board/faqlist", method = RequestMethod.GET)
    public ModelAndView faqlist(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","board");
        mav.addObject("item","faqlist");
        mav.setViewName("board/faqlist");
        return mav;
    }

    @RequestMapping(value = "/board/faqwrite", method = RequestMethod.GET)
    public ModelAndView faqwrite(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("nav","board");
        mav.addObject("item","faqlist");
        mav.setViewName("board/faqwrite");
        return mav;
    }
}

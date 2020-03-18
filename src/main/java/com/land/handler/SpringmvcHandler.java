package com.land.handler;

import com.land.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author shkstart
 * @create 2020-03-01 17:25
 */
@Controller
public class SpringmvcHandler {

    @Autowired
    private UserService userService;

    @RequestMapping("/hello")
    public String hello(){

        System.out.println(userService.getUser("admin"));

        return "success";
    }
}

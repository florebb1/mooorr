package com.laidback.service;

import com.laidback.model.Admin;
import com.laidback.repository.AdminRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class UserService implements UserDetailsService{

    protected final Logger log = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("username="+username);
        String[] usernameArr = username.split(" ");

        Admin admin = adminRepository.findByAdmin(username);
        if(admin == null) throw new UsernameNotFoundException("로그인 정보가 올바르지 않습니다. 다시 시도하세요");

        return admin;

    }
}

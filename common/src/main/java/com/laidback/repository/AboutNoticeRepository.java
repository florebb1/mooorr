package com.laidback.repository;

import com.laidback.model.AboutNotice;
import com.laidback.model.Admin;
import com.laidback.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface AboutNoticeRepository extends JpaRepository<AboutNotice,Integer>{

    AboutNotice findByUser(User user);
}

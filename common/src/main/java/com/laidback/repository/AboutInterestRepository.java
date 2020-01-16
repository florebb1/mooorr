package com.laidback.repository;

import com.laidback.model.AboutInterest;
import com.laidback.model.AboutNotice;
import com.laidback.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AboutInterestRepository extends JpaRepository<AboutInterest,Integer>{

    AboutInterest findByUser(User user);
}

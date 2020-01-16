package com.laidback.repository;

import com.laidback.model.AboutInterest;
import com.laidback.model.AboutTravel;
import com.laidback.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AboutTravelRepository extends JpaRepository<AboutTravel,Integer>{

    AboutTravel findByUser(User user);
}
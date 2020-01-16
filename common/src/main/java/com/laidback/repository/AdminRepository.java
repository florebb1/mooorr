package com.laidback.repository;

import com.laidback.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface AdminRepository extends JpaRepository<Admin,Integer>{

    @Query("select ad from Admin ad where ad.adminId = :adminId")
    public Admin findByAdmin(@Param(value = "adminId") String adminId);

    Admin findBySeq(Integer seq);

}

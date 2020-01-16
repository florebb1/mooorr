package com.laidback.repository;

import com.laidback.model.Faq;
import com.laidback.model.JoinCertification;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

public interface JoinCertificationRepository extends JpaRepository<JoinCertification, Integer> {

    @Transactional
    Integer deleteByJcIdx(Integer jcIdx);


    JoinCertification findByCertCodeAndEmail(String certCode, String email);

}

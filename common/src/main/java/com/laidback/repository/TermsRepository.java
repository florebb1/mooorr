package com.laidback.repository;

import com.laidback.model.Notice;
import com.laidback.model.Terms;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

public interface TermsRepository extends JpaRepository<Terms, Integer> {

    Terms findByType(Integer type);
}

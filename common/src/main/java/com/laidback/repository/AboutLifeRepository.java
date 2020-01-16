package com.laidback.repository;

import com.laidback.model.AboutLife;
import com.laidback.model.AboutLinks;
import com.laidback.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;


public interface AboutLifeRepository extends JpaRepository<AboutLife,Integer>{

    AboutLife findByAblfIdx(Integer ablfIdx);
    List<AboutLife> findByUserOrderByAblfIdxDesc(User user);
    List<AboutLife> findByUser(User user);
    Page<AboutLife> findByUserOrderByAblfIdxDesc(User user, Pageable pageable);
    Integer countByUser(User user);

    @Transactional
    Integer deleteByAblfIdx(Integer ablfIdx);
}
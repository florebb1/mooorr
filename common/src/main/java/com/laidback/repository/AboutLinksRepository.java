package com.laidback.repository;

import com.laidback.model.AboutFavorite;
import com.laidback.model.AboutLinks;
import com.laidback.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.beans.Transient;
import java.util.List;


public interface AboutLinksRepository extends JpaRepository<AboutLinks,Integer>{

    @Transactional
    Integer deleteByAblkIdx(Integer ablkIdx);

    @Transactional
    Integer deleteByUser(User user);

    List<AboutLinks> findByUser(User user);
}
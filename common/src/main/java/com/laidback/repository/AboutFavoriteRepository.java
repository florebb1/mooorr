package com.laidback.repository;

import com.laidback.model.AboutFavorite;
import com.laidback.model.AboutTravel;
import com.laidback.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;


public interface AboutFavoriteRepository extends JpaRepository<AboutFavorite,Integer>{

    @Transactional
    Integer deleteByAbfvIdx(Integer sdIdx);

  List<AboutFavorite> findByUser(User user);
}
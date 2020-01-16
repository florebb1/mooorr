package com.laidback.repository;


import com.laidback.model.Block;
import com.laidback.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface BlockRepository extends JpaRepository<Block, Integer> {

    Block findByUser(User user);
    Block findByBlockIdx(Integer blockIdx);
    @Transactional
    Integer deleteByUser(User user);

    @Query("select b.user.userIdx from Block b")
    List<Integer> findAllUser();




    @Query("select b.user.userIdx from Block b where b.user.userName like :userName")
    List<Integer> getUserByUserNameLike(@Param("userName")String userName);

    @Query("select b.user.userIdx from Block b where b.user.loginId like :loginId")
    List<Integer> getIdxByLoginIdLike(@Param("loginId")String loginId);


}

package com.laidback.repository;


import com.laidback.model.ProfileComments;
import com.laidback.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;


public interface ProfileCommentsRepository extends JpaRepository<ProfileComments, Integer> {

    ProfileComments findByPcIdx(Integer pcIdx);

    List<ProfileComments> findByUserOrderByPcIdxDesc(User user);
    Page<ProfileComments> findByUserOrderByPcIdxDesc(User user, Pageable pageable);

    @Transactional
    Integer deleteByPcIdx(Integer pcIdx);

    @Transactional
    Integer deleteByPcIdxIn(List<Integer> deleteList);

    List<ProfileComments> findByPcIdxIn(List<Integer> deleteList);
    Integer countByUser(User user);

    List<ProfileComments> findByUserAndUser2(User user, User user2);

}

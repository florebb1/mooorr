package com.laidback.repository;

import com.laidback.model.Badge;
import com.laidback.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;

public interface BadgeRepository extends JpaRepository<Badge, Integer> {


    List<Badge> findByBadgeType(Integer badgeType);

    Badge findByBgIdx(Integer bgIdx);
    Badge findByUserAndBadgeType(User user, Integer badgeType); //안되나봄

    @Transactional
    Integer deleteByBgIdx(Integer bgIdx);

    @Transactional
    Integer deleteByUserAndBadgeType(User user, Integer badgeType);


    @Query(value = "select b from Badge b where b.badgeType in (:badges)")
    List<Badge> findByBadgeTypeList(@Param("badges")List<Integer> badgeTypes); //안되나봄

}

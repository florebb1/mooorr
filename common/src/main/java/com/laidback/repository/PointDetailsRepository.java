package com.laidback.repository;

import com.laidback.model.Exchange;
import com.laidback.model.PointDetails;
import com.laidback.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.beans.Transient;
import java.util.Date;

public interface PointDetailsRepository extends JpaRepository<PointDetails, Integer> {

  @Query(value="select pd from PointDetails pd where pd.user=:user order by pd.pdIdx desc")
  Page<PointDetails> findByUser(@Param("user") User user, Pageable pageable);

  @Query(value="select pd from PointDetails pd where pd.user=:user and (pd.pdType=4 or pd.pdType=2) order by pd.pdIdx desc")
  Page<PointDetails> getUsageListByUser(@Param("user") User user, Pageable pageable);

  @Query(value="select count(pd) from PointDetails pd where pd.user=:user and pd.pdType=4 order by pd.pdIdx desc")
  Integer countUsageList(@Param("user")User user);

  PointDetails findByPdIdx(Integer pdIdx);
  Integer countAllByUser(User user);

  @Transactional
  Integer deleteByUserAndUser2AndPdDate(User user , User user2, Date date);

}

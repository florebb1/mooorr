package com.laidback.repository;


import com.laidback.model.Follow;
import com.laidback.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;


public interface FollowRepository extends JpaRepository<Follow, Integer> {

    Follow findByUserAndUser2(User user, User user2);

    @Transactional
    Integer deleteByIdx(Integer idx);
    @Transactional
    Integer deleteByUser(User user);
    @Transactional
    Integer deleteByUser2(User user2);

    @Query(value = "select * from follow ff left join(select user_idx as either, idx as either_idx from follow where follow_idx=:idx)as tt on tt.either=ff.follow_idx where ff.user_idx=:idx order by tt.either_idx desc", nativeQuery = true)
    List<Follow> getFollowList(@Param("idx")Integer idx);

    @Query("select count(f.idx) from Follow f where f.user=:follower and f.user2=:user")
    Integer countBothFollow1(@Param("user")User user,@Param("follower")User follower);

    @Query(value = "select * from follow ff left join(select follow_idx as either, idx as either_idx from follow where user_idx=:idx)as tt on tt.either=ff.user_idx where ff.follow_idx=:idx order by tt.either_idx desc", nativeQuery = true)
    List<Follow> getFollowerList(@Param("idx")Integer idx);

    @Query("select count(f.idx) from Follow f where f.user=:user and f.user2=:follower")
    Integer countBothFollow2(@Param("follower")User follower,@Param("user")User user);

    @Query("select count(f.idx) from Follow f where (f.user=:follower and f.user2=:user) or (f.user=:user and f.user2=:follower)")
    Integer countBothFollow3(@Param("user")User user,@Param("follower")User follower);


}

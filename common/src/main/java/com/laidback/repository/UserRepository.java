package com.laidback.repository;

import com.laidback.model.Badge;
import com.laidback.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query("update User u set u.priceUpdate=0 where u.priceUpdate=1")
    Integer updatePrice();

    @Query("select u from User u where u.userIdx in (:userIdxList)")
    Page<User> findAllUser(@Param("userIdxList")List<Integer> userIdxList, Pageable pageable);
    @Query(value = "select user_idx from (select count(*) as e, user_idx from badge where badge_type in (:badgeType) and user_idx in (:blockIdxList) group by user_idx) A where e =:num" , nativeQuery = true)
    List<Integer> getBadgeUserIdx(@Param("badgeType")List<String> badgeType, @Param("blockIdxList")List<Integer> blockIdxList, @Param("num")Integer num);

    User findByUserName(String userName);

    Page<User> findAll(Pageable pageable);
    Page<User> findByUserNameLike(String userName, Pageable pageable);
    Integer countAllByUserNameLike(String userName);
    Page<User> findByLoginIdLike(String loginId, Pageable pageable);
    List<User> findByLoginIdLike(String loginId);
    List<User> findByUserNameLike(String userName);
    Integer countAllByLoginIdLike(String loginId);
    @Query(value = "select user_idx from (select count(*) as e, user_idx from badge where badge_type in (:badgeType)  group by user_idx) A where e =:num" , nativeQuery = true)
    List<Integer> getBadgeUserIdx(@Param("badgeType")List<String> badgeType, @Param("num")Integer num);
    @Query(value = "select u from User u where u.userIdx in (:userIdxList)")
    Page<User> getUserList(@Param("userIdxList")List<Integer> userIdxList, Pageable pageable);

    List<User> findByUserIdxIn(List<Integer> userIdx);


    @Query(value = "select count(u) from User u where u.userIdx in (:userIdxList)")
    Integer countAllByUserList(@Param("userIdxList")List<Integer> userIdxList);

    @Query(value = "select u from User u where u.loginId like :loginId and u.userIdx not in :bu")
    List<User> findByLoginIdLike(@Param("loginId") String loginId, @Param("bu")List<Integer> bu);

    @Query(value = "select u from User u where u.loginId like :loginId")
    List<User> findByLoginIdLike2(@Param("loginId") String loginId);

    @Query(value = "select u from User u where u.phoneNum like :phone and u.userIdx not in :bu")
    List<User> findByPhoneNumLike(@Param("phone") Integer phoneNum, @Param("bu")List<Integer> bu);

    @Query(value = "select u from User u where u.phoneNum like :phone")
    List<User> findByPhoneNumLike2(@Param("phone") Integer phoneNum);
    @Query(value = "select user_idx from (select count(*) as e, user_idx from badge where badge_type in (:badgeType)  group by user_idx) A where e =:num" , nativeQuery = true)
    List<User> getUserList(String sort, String where, String order, Integer fpage, Integer row);


    User findByUserIdx(Integer userIdx);
    @Query("select count(u) from User u where u.loginId=:loginId and u.pwd=:pwd")
    Integer findByLoginIdAndPwd(@Param("loginId") String loginId, @Param("pwd") String pwd);

    User findByLoginId(String loginId);
    User findByPhoneNum(Integer phoneNum);
    User findByFToken(String fToken);

    @Transactional
    Integer deleteByLoginIdIsLike(String name);

    //아이디찾기
    User findByUserNameAndLoginId(String userName, String loginId);




}

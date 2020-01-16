package com.laidback.repository;



import com.laidback.model.Contact;
import com.laidback.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ContactRepository extends JpaRepository<Contact, Integer> {

      Contact findByCtIdx(Integer reportIdx);

      Page<Contact> findByUserOrderByCtIdxDesc(User user,Pageable pageable);
      Integer countByUser(User user);

      @Query(value="select c from Contact c where c.asTitle is null and c.ctCategory in (:category)")
      Page<Contact> getAllNContactList(Pageable pageable, @Param("category")List<Integer> category);
      @Query(value="select count(c) from Contact c where c.asTitle is null and c.ctCategory in (:category)")
      Integer countAllByNContactList(@Param("category")List<Integer> category);
      @Query(value="select c from Contact c where c.asTitle is not null and c.ctCategory in (:category)")
      Page<Contact> getAllYContactList(Pageable pageable, @Param("category") List<Integer> category);
      @Query(value="select count(c) from Contact c where c.asTitle is not null and c.ctCategory in (:category)")
      Integer countAllByYContactList(@Param("category")List<Integer> category);
      @Query(value="select c from Contact c where c.asTitle is null and c.ctCategory=:category")
      Page<Contact> getNContactList(Pageable pageable, @Param("category")Integer category);
      @Query(value="select count(c) from Contact c where c.asTitle is null and c.ctCategory=:category")
      Integer countByNContactList(@Param("category")Integer category);
      @Query(value="select c from Contact c where c.asTitle is not null and c.ctCategory=:category")
      Page<Contact> getYContactList(Pageable pageable, @Param("category")Integer category);
      @Query(value="select count(c) from Contact c where c.asTitle is not null and c.ctCategory=:category")
      Integer countByYContactList(@Param("category")Integer category);

      @Query(value="select c from Contact c where c.ctCategory in (:category)")
      Page<Contact> findAllByCtCategoryIn(Pageable pageable, @Param("category")List<Integer> category);
      @Query(value="select count(c) from Contact c where c.ctCategory in (:category)")
      Integer countAllByCtCategoryIn(@Param("category")List<Integer> category);
      @Query(value="select c from Contact c where c.ctCategory=:category")
      Page<Contact> findByCtCategoryIn(Pageable pageable, @Param("category")Integer category);
      @Query(value="select count(c) from Contact c where c.ctCategory=:category")
      Integer countByCtCategoryIn(@Param("category")Integer category);
}

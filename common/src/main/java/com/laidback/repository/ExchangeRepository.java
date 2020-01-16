package com.laidback.repository;

import com.laidback.model.Exchange;
import com.laidback.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ExchangeRepository extends JpaRepository<Exchange, Integer> {

    Exchange findByUser(User user);
    Exchange findByEcIdx(Integer ecIdx);

    @Query(value="select ex from Exchange ex where ex.user=:user order by ex.ecIdx desc")
    Page<Exchange> findByUser(@Param("user") User user, Pageable pageable);

    Page<Exchange> findByUserAndCompletionDateIsNotNullOrderByEcIdxDesc(@Param("user") User user, Pageable pageable);

    Page<Exchange> findByUserAndCompletionDateIsNotNullAndDonationIsGreaterThanOrderByEcIdxDesc(User user, Integer donation, Pageable pageable);



    @Query("select coalesce(sum(ex.finalAmount),0) from Exchange ex where ex.user=:user")
    Integer findFinSum(@Param("user") User user);
    @Query("select coalesce(sum(ex.donation),0) from Exchange ex where ex.user=:user")
    Integer findDonationSum(@Param("user") User user);

    Integer countAllByUser(User user);
    Integer countAllByUserAndCompletionDateIsNotNull(User user);

    @Query(value="select e from Exchange e where e.completionDate is null")
    Page<Exchange> getAllNExchangeList(Pageable pageable);
    @Query(value="select count(e) from Exchange e where e.completionDate is null")
    Integer countNExchangeList();
    @Query(value="select e from Exchange e where e.completionDate is not null")
    Page<Exchange> getAllYExchangeList(Pageable pageable);
    @Query(value="select count(e) from Exchange e where e.completionDate is not null")
    Integer countYExchangeList();

    Page<Exchange> findAll(Pageable pageable);



}

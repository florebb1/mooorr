package com.laidback.repository;

import com.laidback.model.Payment;
import com.laidback.model.PointDetails;
import com.laidback.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {

  @Query(value="select p from Payment p where p.user=:user order by p.paymentIdx desc")
  List<Payment> findByUser(@Param("user") User user);

  @Query(value="select p from Payment p where p.user=:user order by p.paymentIdx desc")
  Page<Payment> findListByUser(@Param("user") User user, Pageable pageable);

  @Query(value="select count(p) from Payment p where p.user=:user order by p.paymentIdx desc")
  Integer countListByUser(@Param("user") User user);

  Page<Payment> findByUserIn(List<User> userList, Pageable pageable);
  Integer countAllByUserIn(List<User> userList);
}

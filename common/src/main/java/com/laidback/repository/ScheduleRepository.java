package com.laidback.repository;

import com.laidback.model.AboutFavorite;
import com.laidback.model.Schedule;
import com.laidback.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;


public interface ScheduleRepository extends JpaRepository<Schedule,Integer>{

    @Transactional
    Integer deleteBySdIdx(Integer sdIdx);


    Integer countAllByUserAndEndDateIsAfter(User user, Date date);
    Page<Schedule> findByUserAndEndDateIsAfterOrderByEndDateAsc(User user, Date date, Pageable pageable);
    List<Schedule> findByUserAndEndDateIsAfterOrderByEndDateAsc(User user, Date date);

}
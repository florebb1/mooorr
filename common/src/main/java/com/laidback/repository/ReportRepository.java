package com.laidback.repository;



import com.laidback.model.Report;
import com.laidback.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ReportRepository extends JpaRepository<Report, Integer> {

    @Query(value="select rp from Report rp where rp.user=:user order by  rp.reportIdx desc")
    Page<Report> findByUser(@Param("user") User user, Pageable pageable);

    Integer countAllByUser(User user);

    Report findByReportIdx(Integer reportIdx);


    Page<Report> findAll(Pageable pageable);

}

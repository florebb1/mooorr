package com.laidback.repository;

import com.laidback.model.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

public interface NoticeRepository extends JpaRepository<Notice, Integer> {

    Notice findByNoticeIdx(Integer noticeIdx);
    @Transactional
    Integer deleteByNoticeIdx(Integer noticeIdx);


}

package com.laidback.repository;

import com.laidback.model.Faq;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface FaqRepository extends JpaRepository<Faq, Integer> {

    Faq findByFaqIdx(Integer faqIdx);
    @Transactional
    Integer deleteByFaqIdx(Integer faqIdx);

    Integer countByCategoryIs(Integer category);

    Page<Faq> findAllByCategoryIs(Pageable pageable, Integer category);
}

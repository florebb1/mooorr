package com.laidback.repository;

import com.laidback.model.Popup;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

public interface PopupRepository extends JpaRepository<Popup, Integer> {

    Page<Popup> findAll(Pageable pageable);
    Popup findByPopupIdx(Integer popupIdx);
    Popup findByTitleAndOnoffIs(String title, Integer onoff);
    @Transactional
    Integer deleteByPopupIdx(Integer popupIdx);
}

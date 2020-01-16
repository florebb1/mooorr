package com.laidback.repository;

import com.laidback.model.Banner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface BannerRepository extends JpaRepository<Banner, Integer> {

    Banner findByBannerIdx(Integer bannerIdx);
    @Transactional
    Integer deleteByBannerIdx(Integer bannerIdx);

    List<Banner> findByOnoffIs(Integer onoff);

    @Query("select count(b) from Banner b where b.onoff=0")
    Integer countOn();
}

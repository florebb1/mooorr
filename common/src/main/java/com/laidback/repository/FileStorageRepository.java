package com.laidback.repository;

import com.laidback.model.Banner;
import com.laidback.model.FileStorage;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

public interface FileStorageRepository extends JpaRepository<FileStorage, Integer> {

    FileStorage findBySaveName(String saveName);
    FileStorage findByContentCodeAndContentIdx(String contentCode, Integer contentIdx);
    FileStorage findByContentCodeAndContentIdxAndDeleteDatetimeIsNull(String contentCode, Integer contentIdx);
    FileStorage findByFileIdx(Integer fileIdx);

    @Transactional
    Integer deleteByFileIdx(Integer fileIdx);

}

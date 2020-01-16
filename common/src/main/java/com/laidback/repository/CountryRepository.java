package com.laidback.repository;

import com.laidback.model.Badge;
import com.laidback.model.Country;
import com.laidback.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface CountryRepository extends JpaRepository<Country, Integer> {

    @Query("select c from Country c order by c.countryEn asc")
    List<Country> findAllOrderByCountryEn();
    Country findByCodeIs(String code);


}

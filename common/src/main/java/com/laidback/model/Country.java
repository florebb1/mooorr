package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name="country")    //국가
@DynamicUpdate
public class Country {

    //pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer countryIdx;

    //국가코드
    @Column(nullable=false, length = 10)
    private String code;

    //국가명(한글)
    @Column(nullable=false, length = 50)
    private String countryKr;

    //국가명(영문)
    @Column(nullable=false, length = 50)
    private String countryEn;

    public Integer getCountryIdx() {
        return countryIdx;
    }
    public void setCountryIdx(Integer countryIdx) {
        this.countryIdx = countryIdx;
    }
    public String getCode() {
        return code;
    }
    public void setCode(String code) {
        this.code = code;
    }
    public String getCountryKr() {
        return countryKr;
    }
    public void setCountryKr(String countryKr) {
        this.countryKr = countryKr;
    }
    public String getCountryEn() {
        return countryEn;
    }
    public void setCountryEn(String countryEn) {
        this.countryEn = countryEn;
    }
}

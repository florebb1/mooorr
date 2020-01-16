package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="payment") //이용내역
@DynamicUpdate
public class Payment {

    //pk 이용내역번호 = 주문번호
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer paymentIdx;

    //fk 사용자
//    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    @JoinColumn(nullable=false, name ="userIdx", referencedColumnName = "userIdx")
    private User user;

    //pointDetails 고유번호
    @Column
    private Integer pdIdx;

    //통화구분
    @Column(nullable=false)
    private String currency; //krw, usd

    //변동금액(+-) //원화 or 달러
    @Column(nullable=false, length = 40)
    private Double price;

    //tradeNum 아임포트 거래번호
    @Column(nullable = false, length = 1000)
    private String impUid;

    //결제수단
    @Column(nullable = false, length=20)
    private String payMethod; //"card"

    //결제날짜
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date paymentDate;

    //결제상태
    @Column
    private String status;

    //카드승인번호
    @Column(nullable = false, length=20)
    private String applynum;






    public Integer getPaymentIdx() {
        return paymentIdx;
    }
    public void setPaymentIdx(Integer paymentIdx) {
        this.paymentIdx = paymentIdx;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public Integer getPdIdx() {
        return pdIdx;
    }
    public void setPdIdx(Integer pdIdx) {
        this.pdIdx = pdIdx;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }
    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getImpUid() {
        return impUid;
    }

    public void setImpUid(String impUid) {
        this.impUid = impUid;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getApplynum() {
        return applynum;
    }

    public void setApplynum(String applynum) {
        this.applynum = applynum;
    }

    public String getPayMethod() {
        return payMethod;
    }

    public void setPayMethod(String payMethod) {
        this.payMethod = payMethod;
    }
}

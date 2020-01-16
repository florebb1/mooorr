package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.Formula;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="exchange") //정산내역
@DynamicUpdate
public class Exchange {

    //pk 이용내역번호
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer ecIdx;

    //fk 정산신청자
  //  @JsonBackReference
    @ManyToOne
    @JoinColumn(nullable=false, name ="userIdx", referencedColumnName = "userIdx")
    private User user;

    //정산신청크레딧
    @Column(nullable=false)
    private Integer ecAmount;

    //기부크레딧
    @Column
    private Integer donation;

    //정산결정 원화
    @Column(nullable=false)
    private Integer finalAmount;    //-> ecamount*0.6-donation

    //신청일
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date ecDate;

    //완료일
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date completionDate;

//    //누적정산금액
//    @Transient
//    private Integer finSum;
//    //누적기부금액
//    @Transient
//    private Integer donationSum;


    public Integer getEcIdx() {
        return ecIdx;
    }
    public void setEcIdx(Integer ecIdx) {
        this.ecIdx = ecIdx;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public Integer getEcAmount() {
        return ecAmount;
    }
    public void setEcAmount(Integer ecAmount) {
        this.ecAmount = ecAmount;
    }
    public Integer getDonation() {
        return donation;
    }
    public void setDonation(Integer donation) {
        this.donation = donation;
    }
    public Integer getFinalAmount() {
        return finalAmount;
    }
    public void setFinalAmount(Integer finalAmount) {
        this.finalAmount = finalAmount;
    }
    public Date getEcDate() {
        return ecDate;
    }
    public void setEcDate() {
        this.ecDate = new Date();
    }
    public Date getCompletionDate() {
        return completionDate;
    }
    public void setCompletionDate() {
        this.completionDate = new Date();
    }
}

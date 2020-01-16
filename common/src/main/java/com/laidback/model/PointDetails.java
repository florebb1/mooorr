package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="pointDetails") //이용내역
@DynamicUpdate
public class PointDetails {

    //pk 이용내역번호
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(nullable=false)
    private Integer pdIdx;

    //fk 사용자
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    @JoinColumn(nullable=false, name ="userIdx", referencedColumnName = "userIdx")
    private User user;

    //유형(충전/결제/이벤트성 지급...)
    @Column(nullable=false, length = 40)
    private Integer pdType;
    //1 : 충전 (+)
    //2 : 수입 - 서비스이용으로 크레딧을 창출한 경우 (+)
    //3 : 이벤트성 지급 (+)
    //4 : 지출 - 서비스이용으로 크레딧을 지출한 경우 (-)
    //5 : 정산 (-)
    //6 : 정책상 회수 (-)


    //변동금액(+-)
    @Column(nullable=false, length = 40)
    private Integer pdAmount;

    //변동날짜
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date pdDate;

    //상세내역(대화상대...)
    @ManyToOne
    @JoinColumn(name ="otherIdx", referencedColumnName = "userIdx")
    private User user2;

    //현재크레딧
    @Transient
    private Integer nowSum;
    //누적충전크레딧
    @Transient
    private Integer chargeSum;
    //누적크레딧수익
    @Transient
    private Integer incomeSum;
    //누적사용크레딧
    @Transient
    private Integer costSum;

    public Integer getPdIdx() {
        return pdIdx;
    }
    public void setPdIdx(Integer pdIdx) {
        this.pdIdx = pdIdx;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public Integer getPdType() {
        return pdType;
    }
    public void setPdType(Integer pdType) {
        this.pdType = pdType;
    }
    public Integer getPdAmount() {
        return pdAmount;
    }
    public void setPdAmount(Integer pdAmount) {
        this.pdAmount = pdAmount;
    }
    public Date getPdDate() {
        return pdDate;
    }
    public void setPdDate(Date pdDate) {
        this.pdDate =pdDate;
    }
//    public Integer getPdDetail() {
//        return pdDetail;
//    }
//    public void setPdDetail(Integer pdDetail) {
//        this.pdDetail = pdDetail;
//    }
    public User getUser2() {
        return user2;
    }
    public void setUser2(User user2) {
        this.user2 = user2;
    }
}

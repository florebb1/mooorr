package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="schedule") //이용내역
@DynamicUpdate
public class Schedule {

    //pk 이용내역번호
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer sdIdx;

    //fk 프로필주인 Idx
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    @JoinColumn(nullable=false, name ="userIdx", referencedColumnName = "userIdx")
    private User user;

    //제목
    @Column(nullable=false, length = 40)
    private String sdTitle;

    //내용
    @Column(nullable=false, length = 40)
    private String sdContent;

    //시작일
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date startDate;

    //종료일
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date endDate;

    @Column(nullable=false)
    private Integer allDay;

    public Integer getSdIdx() {
        return sdIdx;
    }
    public void setSdIdx(Integer sdIdx) {
        this.sdIdx = sdIdx;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public String getSdTitle() {
        return sdTitle;
    }
    public void setSdTitle(String sdTitle) {
        this.sdTitle = sdTitle;
    }
    public String getSdContent() {
        return sdContent;
    }
    public void setSdContent(String sdContent) {
        this.sdContent = sdContent;
    }
    public Date getStartDate() {
        return startDate;
    }
    public void setStartDate(Date startDate) {this.startDate = startDate;}
    public Date getEndDate() {
        return endDate;
    }
    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
    public Integer getAllDay() {
        return allDay;
    }
    public void setAllDay(Integer allDay) {
        this.allDay = allDay;
    }
}

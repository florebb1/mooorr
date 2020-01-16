package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="report") //이용내역
@DynamicUpdate
public class Report {

    //pk 신고번호
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer reportIdx;

    //fk 작성자idx
    @ManyToOne
    @JoinColumn(nullable=false, name ="userIdx", referencedColumnName = "userIdx")
    private User user;

    //fk 신고대상idx
    @ManyToOne
    @JoinColumn(nullable=false, name ="targetIdx", referencedColumnName = "userIdx")
    private User target;

    //신고내용
    @Column(nullable=false,length=1000)
    private String rpContent;

    //신고주제
    @Column(nullable=false,length=20)
    private String category;

    //작성일
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date regDate;

    //답변제목
    @Column(length=1000)
    private String asTitle;

    //답변내용
    @Column(length=1000)
    private String asContent;

    //답변여부
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date asRegDate;



    public Integer getReportIdx() {
        return reportIdx;
    }
    public void setReportIdx(Integer reportIdx) {
        this.reportIdx = reportIdx;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public User getTarget() {
        return target;
    }
    public void setTarget(User target) {
        this.target = target;
    }
    public String getRpContent() {
        return rpContent;
    }
    public void setRpContent(String rpContent) {
        this.rpContent = rpContent;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public Date getRegDate() {
        return regDate;
    }
    public void setRegDate() {
        this.regDate = new Date();
    }
    public String getAsTitle() {
        return asTitle;
    }
    public void setAsTitle(String asTitle) {
        this.asTitle = asTitle;
    }
    public String getAsContent() {
        return asContent;
    }
    public void setAsContent(String asContent) {
        this.asContent = asContent;
    }
    public Date getAsRegDate() {
        return asRegDate;
    }
    public void setAsRegDate() {
        this.asRegDate = new Date();
    }
}

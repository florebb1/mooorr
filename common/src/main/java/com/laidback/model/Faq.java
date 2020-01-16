package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="faq") //faq
@DynamicUpdate
public class Faq {

    //pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer faqIdx;

    //제목
    @Column(nullable=false, length = 50)
    private String title;

    //내용
    @Lob
    @Column( nullable=false, length = 100000 )
    private String content;

    //카테고리
    @Column(nullable=false)
    private Integer category;
    // 1: 계정문의
    // 2: 결제문의
    // 3: 환불문의
    // 4: 정산문의
    // 5: 뱃지문의
    // 6: 기타문의

    //작성일
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date regDate;

    //수정일
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date modDate;

    public Integer getFaqIdx() {
        return faqIdx;
    }
    public void setFaqIdx(Integer faqIdx) {
        this.faqIdx = faqIdx;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
    public Integer getCategory() {
        return category;
    }
    public void setCategory(Integer category) {
        this.category = category;
    }
    public Date getRegDate() {
        return regDate;
    }
    public void setRegDate() {
        this.regDate = new Date();
    }
    public Date getModDate() {
        return modDate;
    }
    public void setModDate(Date modDate) {
        this.modDate = modDate;
    }
}

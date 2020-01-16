package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.Formula;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="contact") // 1:1문의
@DynamicUpdate
public class Contact {

    //pk 문의번호
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer ctIdx;

    //fk 문의한 사용자
    @ManyToOne
    @JoinColumn(nullable=false, name ="userIdx", referencedColumnName = "userIdx")
    private User user;

    //문의카테고리
    @Column(nullable=false, length=1000)
    private Integer ctCategory;
    // 1: 계정문의
    // 2: 결제문의
    // 3: 환불문의
    // 4: 정산문의
    // 5: 뱃지문의
    // 6: 기타문의

    //문의제목
    @Column(nullable=false, length=50)
    private String ctTitle;

    //문의내용
    @Lob
    @Column( nullable=false, length = 100000 )
    private String ctContent;

    //등록일
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date ctRegDate;

    //답변제목
    @Column(length=50)
    private String asTitle;

    //답변내용
    @Lob
    @Column(length = 100000 )
    private String asContent;

    //답변일
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date asRegDate;

    //첨부파일 원본명
    @Formula(value = "(select fs.original_file_name from file_storage fs where fs.content_idx=ct_idx and fs.content_code=\"contact\")")
    String ctFile;

    //저장경로+저장이름
    @Formula(value = "(select concat('/uploads/',fs.save_name) from file_storage fs where fs.content_idx=ct_idx and fs.content_code=\"contact\")")
    String saveName;

    public Integer getCtIdx() {
        return ctIdx;
    }
    public void setCtIdx(Integer ctIdx) {
        this.ctIdx = ctIdx;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public Integer getCtCategory() {
        return ctCategory;
    }
    public void setCtCategory(Integer ctCategory) {
        this.ctCategory = ctCategory;
    }
    public String getCtTitle() {
        return ctTitle;
    }
    public void setCtTitle(String ctTitle) {
        this.ctTitle = ctTitle;
    }
    public String getCtContent() {
        return ctContent;
    }
    public void setCtContent(String ctContent) {
        this.ctContent = ctContent;
    }
    public Date getCtRegDate() {
        return ctRegDate;
    }
    public void setCtRegDate(Date ctRegDate) { this.ctRegDate = ctRegDate;}
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
    public String getCtFile() {
        return ctFile;
    }
    public void setCtFile(String ctFile) {
        this.ctFile = ctFile;
    }
    public String getSaveName() {
        return saveName;
    }
    public void setSaveName(String saveName) {
        this.saveName = saveName;
    }
}

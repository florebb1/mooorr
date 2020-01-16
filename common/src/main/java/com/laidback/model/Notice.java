package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="notice") //공지사항
@DynamicUpdate
public class Notice {

    //pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer noticeIdx;

    //제목
    @Column(nullable=false, length = 50)
    private String title;

    @Lob
    @Column( nullable=false, length = 100000 )
    private String content;

    //글쓴이
    @ManyToOne
    @JoinColumn(nullable=false, name ="seq", referencedColumnName = "seq")
    private Admin admin;

    //조회수
    @Column
    private Integer viewCount;



    //작성일
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date regDate;

    //수정일
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date modDate;


    public Integer getNoticeIdx() {
        return noticeIdx;
    }
    public void setNoticeIdx(Integer noticeIdx) {
        this.noticeIdx = noticeIdx;
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

    public Admin getAdmin() {
        return admin;
    }
    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public Integer getViewCount() {
        return viewCount;
    }
    public void setViewCount(Integer viewCount) {
        this.viewCount = viewCount;
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

package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="fileStorage") //배너
@DynamicUpdate
public class FileStorage {

    //pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer fileIdx;

    //게시판코드
    @Column(nullable = false)
    private String contentCode;

    //글번호Idx
    @Column(nullable = false, length = 1000)
    private Integer contentIdx;

    @Column
    private String saveName;

    @Column
    private String originalFileName;

    @Column
    private Integer size;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDatetime;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date deleteDatetime;

    public Integer getFileIdx() {
        return fileIdx;
    }
    public void setFileIdx(Integer fileIdx) {
        this.fileIdx = fileIdx;
    }
    public String getContentCode() {
        return contentCode;
    }
    public void setContentCode(String contentCode) {
        this.contentCode = contentCode;
    }
    public Integer getContentIdx() {
        return contentIdx;
    }
    public void setContentIdx(Integer contentIdx) {
        this.contentIdx = contentIdx;
    }
    public String getSaveName() {
        return saveName;
    }
    public void setSaveName(String saveName) {
        this.saveName = saveName;
    }
    public String getOriginalFileName() {
        return originalFileName;
    }
    public void setOriginalFileName(String originalFileName) {
        this.originalFileName = originalFileName;
    }
    public Date getCreateDatetime() {
        return createDatetime;
    }
    public void setCreateDatetime(Date createDate) {
        this.createDatetime = createDate;
    }
    public Date getDeleteDatetime() {
        return deleteDatetime;
    }
    public void setDeleteDatetime() {
        this.deleteDatetime = new Date();
    }
    public Integer getSize() {
        return size;
    }
    public void setSize(Integer size) {
        this.size = size;
    }
}

package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.Formula;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="popup") //이용내역
@DynamicUpdate
public class Popup {

    //pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer popupIdx;

    //제목
    @Column(nullable = false, length = 50)
    private String title;

    //내용
    @Column(length = 1000)
    private String content;

    //링크
    @Column(length = 200)
    private String link;

    //노출여부
    @Column(nullable = false)
    private Integer onoff;
    //0은 Y, 1은 N, default 0

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

    //이미지 원본명
    @Formula(value = "(select fs.original_file_name from file_storage fs where fs.content_idx=popup_idx and fs.content_code=\"popup\")")
    String image;

    //저장경로+저장이름
    @Formula(value = "(select concat('/uploads/',fs.save_name) from file_storage fs where fs.content_idx=popup_idx and fs.content_code=\"popup\")")
    String saveName;

    public Integer getPopupIdx() {
        return popupIdx;
    }
    public void setPopupIdx(Integer popupIdx) {
        this.popupIdx = popupIdx;
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
    public String getLink() {
        return link;
    }
    public void setLink(String link) {
        this.link = link;
    }
    public Integer getOnoff() {
        return onoff;
    }
    public void setOnoff(Integer onoff) {
        this.onoff = onoff;
    }
    public Date getRegDate() {
        return regDate;
    }
    public void setRegDate(Date regDate) {
        this.regDate = regDate;
    }
    public Date getModDate() {
        return modDate;
    }
    public void setModDate(Date modDate) {
        this.modDate = modDate;
    }
    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
    public String getSaveName() {
        return saveName;
    }
    public void setSaveName(String saveName) {
        this.saveName = saveName;
    }
}

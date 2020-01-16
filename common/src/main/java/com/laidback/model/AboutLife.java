package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.Formula;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="aboutLife")    //AboutLife
@DynamicUpdate
public class AboutLife {

    //pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer ablfIdx;

    //fk userIdx
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    @JoinColumn(nullable=false, name ="userIdx", referencedColumnName = "userIdx")
    private User user;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDatetime;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date deleteDatetime;

    @Formula(value = "(select fs.original_file_name from file_storage fs where fs.content_idx=ablf_idx and fs.content_code=\"life\")")
    String lifeFile;

    //저장경로+저장이름
    @Formula(value = "(select concat('/uploads/',fs.save_name) from file_storage fs where fs.content_idx=ablf_idx and fs.content_code=\"life\")")
    String saveName;



    public Integer getAblfIdx() {
        return ablfIdx;
    }
    public void setAblfIdx(Integer ablfIdx) {
        this.ablfIdx = ablfIdx;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public Date getCreateDatetime() {
        return createDatetime;
    }
    public void setCreateDatetime(Date createDatetime) {
        this.createDatetime = createDatetime;
    }
    public Date getDeleteDatetime() {
        return deleteDatetime;
    }
    public void setDeleteDatetime() {
        this.deleteDatetime = new Date();
    }
    public String getLifeFile() {
        return lifeFile;
    }
    public void setLifeFile(String lifeFile) {
        this.lifeFile = lifeFile;
    }
    public String getSaveName() {
        return saveName;
    }
    public void setSaveName(String saveName) {
        this.saveName = saveName;
    }
}

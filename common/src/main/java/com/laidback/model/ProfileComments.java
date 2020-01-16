package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="profileComments") //이용내역
@DynamicUpdate
public class ProfileComments {

    //pk 이용내역번호
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer pcIdx;

    //fk 프로필주인 Idx
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    @JoinColumn(nullable=false, name ="ownerIdx", referencedColumnName = "userIdx")
    private User user;

    //fk 댓글쓴사람 Idx
    @ManyToOne
    @JoinColumn(nullable=false, name ="writerIdx", referencedColumnName = "userIdx")
    private User user2;

    //댓글내용
    @Column(nullable=false, length = 500)
    private String pcContent;

    //작성일
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date pcDate;

    public Integer getPcIdx() {
        return pcIdx;
    }
    public void setPcIdx(Integer pcIdx) {
        this.pcIdx = pcIdx;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public User getUser2() {
        return user2;
    }
    public void setUser2(User user2) {
        this.user2 = user2;
    }
    public String getPcContent() {
        return pcContent;
    }
    public void setPcContent(String pcContent) {
        this.pcContent = pcContent;
    }
    public Date getPcDate() {
        return pcDate;
    }
    public void setPcDate() {
        this.pcDate = new Date();
    }
}

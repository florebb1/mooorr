package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name="aboutLinks")    //AboutLinks - sns링크
@DynamicUpdate
public class AboutLinks {

    //pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer ablkIdx;

    //fk userIdx
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    @JoinColumn(nullable=false, name ="userIdx", referencedColumnName = "userIdx")
    private User user;

    //About Me - Links 내용
    @Column
    private String type; //페북/인스타/개인홈피...

    @Column
    private String link; //링크주소

    @Column
    private String detail; //설명

    @Column
    private String snsId; //계정명

    public Integer getAblkIdx() {
        return ablkIdx;
    }
    public void setAblkIdx(Integer ablkIdx) {
        this.ablkIdx = ablkIdx;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getLink() {
        return link;
    }
    public void setLink(String link) {
        this.link = link;
    }
    public String getDetail() {
        return detail;
    }
    public void setDetail(String detail) {
        this.detail = detail;
    }
    public String getSnsId() {
        return snsId;
    }
    public void setSnsId(String snsId) {
        this.snsId = snsId;
    }
}

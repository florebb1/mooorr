package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name="aboutFavorite")    //AboutFavorite
@DynamicUpdate
public class AboutFavorite {

    //pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer abfvIdx;

    //fk userIdx
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    @JoinColumn(nullable=false, name ="userIdx", referencedColumnName = "userIdx")
    private User user;

    @Column
    private String link;
    //About Me - Favorite 설명
    @Column
    private String detail;

    public Integer getAbfvIdx() {
        return abfvIdx;
    }
    public void setAbfvIdx(Integer abfvIdx) {
        this.abfvIdx = abfvIdx;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
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
}

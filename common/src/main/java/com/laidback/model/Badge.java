package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name="badge")    //뱃지
@DynamicUpdate
public class Badge {

    //pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer bgIdx;

    //fk userIdx
    @JsonBackReference
    @ManyToOne
    @JoinColumn(nullable=false, name ="userIdx", referencedColumnName = "userIdx")
    private User user;


    //뱃지타입
    @Column(nullable=false, length = 10)
    private Integer badgeType;
    //1 : 본인인증뱃지
    //2 : 7대3뱃지
    //3 : 공인뱃지
    //4 : 기부뱃지





    public Integer getBgIdx() {
        return bgIdx;
    }
    public void setBgIdx(Integer bgIdx) {
        this.bgIdx = bgIdx;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public Integer getBadgeType() {
        return badgeType;
    }
    public void setBadgeType(Integer badgeType) {
        this.badgeType = badgeType;
    }
}

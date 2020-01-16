package com.laidback.model;

import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.Formula;

import javax.persistence.*;

@Entity
@Table(name="follow") //팔로워
@DynamicUpdate
public class Follow {

    //pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer idx;

    //fk userIdx
    @ManyToOne
    @JoinColumn(nullable=false, name ="userIdx", referencedColumnName = "userIdx")
    private User user;

    //fk userIdx가 팔로잉하는 사용자의 Idx
    @ManyToOne
    @JoinColumn(nullable=false, name ="followIdx", referencedColumnName = "userIdx")
    private User user2;

    //맞팔여부
    @Transient
    private Integer both;

    public Integer getIdx() {
        return idx;
    }
    public void setIdx(Integer idx) {
        this.idx = idx;
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

    public Integer getBoth() {
        return both;
    }
    public void setBoth(Integer both) {
        this.both = both;
    }

}

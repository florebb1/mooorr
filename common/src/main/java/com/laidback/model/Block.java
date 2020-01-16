package com.laidback.model;

import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name="block") //차단
@DynamicUpdate
public class Block {

    //pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer blockIdx;

    //fk 차단계정Idx
    @ManyToOne
    @JoinColumn(nullable=false, name ="userIdx", referencedColumnName = "userIdx")
    private User user;

    public Integer getBlockIdx() {
        return blockIdx;
    }
    public void setBlockIdx(Integer blockIdx) {
        this.blockIdx = blockIdx;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
}

package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.Formula;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="chatNo") //방번호
@DynamicUpdate
public class ChatNo {

    //pk 방번호
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer chatIdx;

    //fk 최초 보낸사람(돈쓴사람)
    @ManyToOne
    @JoinColumn(nullable=false, name ="senderIdx", referencedColumnName = "userIdx")
    private User user;

    //fk 최초 받는사람(수익자)
    @ManyToOne
    @JoinColumn(nullable=false, name ="receiverIdx", referencedColumnName = "userIdx")
    private User user2;

    //마지막쪽지내용
    @Column(length = 1000)
    private String finContent;

    //마지막쪽지작성일
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date finDate;

    // 안읽은메세지표시 - 유저1이 receiver일때
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Formula(value = "(select count(m.ms_idx) from message m where m.chat_idx=chat_idx and m.receiver_idx=sender_idx and m.receiver_read is null)")
    Integer u1receiver;

    //안읽은메세지표시 - 유저1이 sender일때
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Formula(value = "(select count(m.ms_idx) from message m where m.chat_idx=chat_idx and m.sender_idx=sender_idx and m.as_content is not null and m.sender_read is null)")
    Integer u1sender;

    @Transient
    private Integer u1NoRead;

    // 안읽은메세지표시 - 유저2가 receiver일때
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Formula(value = "(select count(m.ms_idx) from message m where m.chat_idx=chat_idx and m.receiver_idx=receiver_idx and m.receiver_read is null)")
    Integer u2receiver;

    //안읽은메세지표시 - 유저가 sender일때
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Formula(value = "(select count(m.ms_idx) from message m where m.chat_idx=chat_idx and m.sender_idx=receiver_idx and m.as_content is not null and m.sender_read is null)")
    Integer u2sender;

    @Transient
    private Integer u2NoRead;

    public Integer getU1NoRead() {
        return u1NoRead;
    }
    public void setU1NoRead(Integer u1NoRead) {
        this.u1NoRead = u1NoRead;
    }
    public Integer getU2NoRead() {
        return u2NoRead;
    }
    public void setU2NoRead(Integer u2NoRead) {
        this.u2NoRead = u2NoRead;
    }
    public Integer getU1receiver() {
        return u1receiver;
    }
    public void setU1receiver(Integer u1receiver) {
        this.u1receiver = u1receiver;
    }
    public Integer getU1sender() {
        return u1sender;
    }
    public void setU1sender(Integer u1sender) {
        this.u1sender = u1sender;
    }
    public Integer getU2receiver() {
        return u2receiver;
    }
    public void setU2receiver(Integer u2receiver) {
        this.u2receiver = u2receiver;
    }
    public Integer getU2sender() {
        return u2sender;
    }
    public void setU2sender(Integer u2sender) {
        this.u2sender = u2sender;
    }

    public Integer getChatIdx() {
        return chatIdx;
    }
    public void setChatIdx(Integer chatIdx) {
        this.chatIdx = chatIdx;
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
    public String getFinContent() {
        return finContent;
    }
    public void setFinContent(String finContent) {
        this.finContent = finContent;
    }
    public Date getFinDate() {
        return finDate;
    }
    public void setFinDate() {
        this.finDate = new Date();
    }
//    public Integer getUserIdx() {
//        return userIdx;
//    }
//    public void setUserIdx(Integer userIdx) {
//        this.userIdx = userIdx;
//    }
//    public Integer getUser2Idx() {
//        return user2Idx;
//    }
//    public void setUser2Idx(Integer user2Idx) {
//        this.user2Idx = user2Idx;
//    }
}
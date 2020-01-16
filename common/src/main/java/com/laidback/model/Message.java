package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="message") //쪽지
@DynamicUpdate
public class Message {

    //pk 메세지번호
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer msIdx;

    //방번호
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    @JoinColumn(nullable=false, name ="chatIdx", referencedColumnName = "chatIdx")
    private ChatNo chatNo;

    //fk 보낸사람(돈쓴사람)
    @ManyToOne
    @JoinColumn(nullable=false, name ="senderIdx", referencedColumnName = "userIdx")
    private User sender;

    //fk 받는사람(수익자)
    @ManyToOne
    @JoinColumn(nullable=false, name ="receiverIdx", referencedColumnName = "userIdx")
    private User receiver;

    //쪽지내용
    @Column(nullable=false, length = 1000)
    private String msContent;

    //사용된크레딧 -> 들어가야하나..?
    @Column(nullable=false)
    private Integer msPrice;

    //작성일
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date msDate;

    //답장내용
    @Column(length = 1000)
    private String asContent;

    //답장작성일
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date asDate;

    //보낸사람이 답장받은순간 읽음표시
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date senderRead;

    //받은사람이 읽은순간 읽음표시
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date receiverRead;


    // 한 ui안에서 내가 보낸 쪽지, 쟤가 먼저 보낸 쪽지 전부 다 보여줘야하고, 메세지에 답장보내기버튼 추가해서 보여줘야함
    //일정시간 이상 경과하도록 답장이 없는 쪽지는 크레딧 회수해서 돌려주기


    public Date getSenderRead() {
        return senderRead;
    }
    public void setSenderRead(Date senderRead) {
        this.senderRead = senderRead;
    }
    public Date getReceiverRead() {
        return receiverRead;
    }
    public void setReceiverRead(Date receiverRead) {
        this.receiverRead = receiverRead;
    }

    public Integer getMsIdx() {
        return msIdx;
    }
    public void setMsIdx(Integer msIdx) {
        this.msIdx = msIdx;
    }
    public User getSender() {
        return sender;
    }
    public void setSender(User sender) {
        this.sender = sender;
    }
    public User getReceiver() {
        return receiver;
    }
    public void setReceiver(User receiver) {
        this.receiver = receiver;
    }
    public String getMsContent() {
        return msContent;
    }
    public void setMsContent(String msContent) {
        this.msContent = msContent;
    }
    public Date getMsDate() {
        return msDate;
    }
    public void setMsDate(Date msDate) {
        this.msDate = msDate;
    }
    public Integer getMsPrice() {
        return msPrice;
    }
    public void setMsPrice(Integer msPrice) {
        this.msPrice = msPrice;
    }

    public ChatNo getChatNo() {
        return chatNo;
    }
    public void setChatNo(ChatNo chatNo) {
        this.chatNo = chatNo;
    }
    public String getAsContent() {
        return asContent;
    }
    public void setAsContent(String asContent) {
        this.asContent = asContent;
    }
    public Date getAsDate() {
        return asDate;
    }
    public void setAsDate() {
        this.asDate = new Date();
    }
}

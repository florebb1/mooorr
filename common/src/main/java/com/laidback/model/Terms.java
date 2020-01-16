package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="terms") //배너
@DynamicUpdate
public class Terms {

    //pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer termsIdx;

    //구분
    @Column
    private Integer type;
    //1 : 회원이용약관
    //2 : 개인정보 보호정책
    //3 : 개인정보 수집/이용
    //4 : 기부정책 안내

    //내용
    @Lob
    @Column
    private String content;

    //수정일
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date modDate;

    public Integer getTermsIdx() {
        return termsIdx;
    }
    public void setTermsIdx(Integer termsIdx) {
        this.termsIdx = termsIdx;
    }
    public Integer getType() {
        return type;
    }
    public void setType(Integer type) {
        this.type = type;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
    public Date getModDate() {
        return modDate;
    }
    public void setModDate(Date modDate) {
        this.modDate = modDate;
    }

}

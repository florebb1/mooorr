package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="joinCertification") //joinCertification
@DynamicUpdate
public class JoinCertification {

    //pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable=false)
    private Integer jcIdx;

    //이메일
    @Column(nullable=false, length = 50)
    private String email;

    //인증코드
    @Column(nullable=false, length = 1000)
    private String certCode;

    public Integer getJcIdx() {
        return jcIdx;
    }
    public void setJcIdx(Integer jcIdx) {
        this.jcIdx = jcIdx;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getCertCode() {
        return certCode;
    }
    public void setCertCode(String certCode) {
        this.certCode = certCode;
    }
}

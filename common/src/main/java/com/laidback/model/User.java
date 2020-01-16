package com.laidback.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import javafx.util.Builder;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.Formula;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Table(name = "user")
@DynamicUpdate
public class User {

    //pk 회원번호
    @Id // pk
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userIdx;

    //아이디(이메일)
    @Column
    private String loginId;

    //비밀번호
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(nullable = false, length = 68)
    private String pwd;

    //이름(닉네임)
    @Column(nullable = false, length = 20)
    private String userName;

    //약관동의여부
    @Column(nullable = false, length = 20)
    private Integer terms;
    //디폴트 0 : 동의안함
    //1 : 동의함

    //가입일자
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date joinDate;

    //탈퇴일자
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date leaveDate;

    //수정일자
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date updateDate;

    //국가
    @Column
    private String nation;

    //생년월일
    @Column
    private String birthdate;

    //성별
    @Column
    private String gender;

    //상태메세지
    @Column(length = 60)
    private String statusMessage;

    //본인인증여부
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date certificationDate;

    //계좌
    @Column(length = 100)
    private String account;

    //프로필 공개여부(팔로워 공개할껀지?)      //최초는 null, 비공개로 돌릴때만 1로 업데이트, 공개로 돌리면 0으로 업데이트.
    @Column
    private Integer infoOn;
    //공개 0,  비공개 1

    //AboutMe-공지 공개여부
    @Column
    private Integer noticeOn;
    //공개 0,  비공개 1

    //AboutMe-여행 공개여부
    @Column
    private Integer travelOn;

    //AboutMe-링크 공개여부
    @Column
    private Integer myLinksOn;

    //AboutMe-취향 공개여부
    @Column
    private Integer favoriteOn;

    //AboutMe-관심분야 공개여부
    @Column
    private Integer interestsOn;

    //MyLife 공개여부
    @Column
    private Integer myLifeOn;

    //프로필댓글 공개여부
    @Column
    private Integer commentsOn;

    //스케줄 공개여부
    @Column
    private Integer scheduleOn;

    //채팅옵션- 채팅시작시 인트로메세지
    @Column
    private String intro;

    //채팅옵션- 채팅시작시 인트로 상담분야
    @Column
    private String field;

    //채팅옵션- 메세지 단가
    @Column
    private Integer price;

    //본인인증 폰번호
    @Column
    private Integer phoneNum;

    //프로필편집페이지 최초인입 팝업표시여부. 0이면 표시 1이면 안표시
    @Column
    private Integer pfPopup;

    //메세지페이지 최초인입 팝업표시여부. 0이면 표시 1이면 안표시
    @Column
    private Integer msPopup;

    //메세지가격 최종변경일
    @Column
    private Integer priceUpdate;

    //로그인 상태
    @Column
    private Integer loginStatus;


    //마지막활동시간
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date finalAct;

    //보유뱃지리스트
    @JsonManagedReference
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private List<Badge> badges = new ArrayList<>();

    //기부여부 0이면N 1이면Y
    @Column
    private Integer donation;

    //구글로그인 토큰
    @Column
    private String gToken;
    //페북로그인 토큰
    @Column
    private String fToken;

    //보유크레딧
    @Formula(value = "(select ifnull(sum(pd.pd_amount),0) from point_details pd where pd.user_idx = user_idx)")
    Integer nowp;
    //누적충전크레딧
    @Formula(value = "(select ifnull(sum(pd.pd_amount),0) from point_details pd where pd.user_idx = user_idx and pd.pd_type=1)")
    Integer chargep;
    //누적지출크레딧
    @Formula(value = "(select ifnull(sum(pd.pd_amount)*-1,0) from point_details pd where pd.user_idx = user_idx and pd.pd_type=4)")
    Integer costp;
    //누적수익크레딧
    @Formula(value = "(select ifnull(sum(pd.pd_amount),0) from point_details pd where pd.user_idx = user_idx and pd.pd_type=2)")
    Integer incomep;
    //누적충전횟수
    @Formula(value = "(select count(pd.pd_idx) from point_details pd where pd.user_idx = user_idx and pd.pd_type=1)")
    Integer chargec;
    //댓글갯수
    @Formula(value = "(select count(pc.pc_idx) from profile_comments pc where pc.owner_idx=user_idx)")
    Integer pcamount;
    //누적신고횟수
    @Formula(value = "(select count(rp.report_idx) from report rp where rp.target_idx=user_idx)")
    Integer rpamount;
    //프로필이미지
    @Formula(value = "(select concat('/uploads/',fs.save_name) from file_storage fs where fs.content_idx=user_idx and fs.content_code = \"userProfile\" and fs.delete_datetime is null)")
    String profileImage;
    //배경이미지
    @Formula(value = "(select concat('/uploads/',fs.save_name) from file_storage fs where fs.content_idx=user_idx and fs.content_code = \"userBackground\" and fs.delete_datetime is null)")
    String backgroundImage;

    //팔로잉수
    @Formula(value = "(select count(f.idx) from follow f where f.user_idx=user_idx)")
    Integer following;
    //팔로워수
    @Formula(value = "(select count(f.idx) from follow f where f.follow_idx=user_idx)")
    Integer follower;

    public Integer getChargec() {
        return chargec;
    }
    public void setChargec(Integer chargec) {
        this.chargec = chargec;
    }
    public String getgToken() {
        return gToken;
    }
    public void setgToken(String gToken) {
        this.gToken = gToken;
    }
    public String getfToken() {
        return fToken;
    }
    public void setfToken(String fToken) {
        this.fToken = fToken;
    }
    public Integer getDonation() {
        return donation;
    }
    public void setDonation(Integer donation) {
        this.donation = donation;
    }
    public Integer getUserIdx() {
        return userIdx;
    }
    public void setUserIdx(Integer userIdx) {
        this.userIdx = userIdx;
    }
    public String getLoginId() {
        return loginId;
    }
    public void setLoginId(String loginId) {
        this.loginId = loginId;
    }
    public String getPwd() {
        return pwd;
    }
    public void setPwd(String pwd) {
        this.pwd = pwd;
    }
    public Integer getTerms() {
        return terms;
    }
    public void setTerms(Integer terms) {
        this.terms = terms;
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public Date getJoinDate() {
        return joinDate;
    }
    public void setJoinDate() {
        this.joinDate = new Date();
    }
    public Date getUpdateDate() {
        return updateDate;
    }
    public void setUpdateDate(Date newDate) {
        this.updateDate = newDate;
    }
    public Date getLeaveDate() {
        return leaveDate;
    }
    public void setLeaveDate(Date newDate) {
        this.leaveDate = newDate;
    }

    public String getAccount() {
        return account;
    }
    public void setAccount(String account) {
        this.account = account;
    }

    public String getNation() {
        return nation;
    }
    public void setNation(String nation) {
        this.nation = nation;
    }
    public String getBirthdate() {
        return birthdate;
    }
    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public String getProfileImage() {return profileImage;  }
    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }
    public String getBackgroundImage() {
        return backgroundImage;
    }
    public void setBackgroundImage(String backgroundImage) {
        this.backgroundImage = backgroundImage;
    }

    public String getStatusMessage() { return statusMessage;  }
    public void setStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
    }

    public Date getCertificationDate() {
        return certificationDate;
    }
    public void setCertificationDate(Date newDate) {
        this.certificationDate = newDate;
    }

    public Integer getInfoOn() {
        return infoOn;
    }
    public void setInfoOn(Integer infoOn) {
        this.infoOn = infoOn;
    }
    public Integer getNoticeOn() {
        return noticeOn;
    }
    public void setNoticeOn(Integer noticeOn) {
        this.noticeOn = noticeOn;
    }
    public Integer getTravelOn() {
        return travelOn;
    }
    public void setTravelOn(Integer travelOn) {
        this.travelOn = travelOn;
    }
    public Integer getMyLinksOn() {
        return myLinksOn;
    }
    public void setMyLinksOn(Integer myLinksOn) {
        this.myLinksOn = myLinksOn;
    }
    public Integer getFavoriteOn() {
        return favoriteOn;
    }
    public void setFavoriteOn(Integer favoriteOn) {
        this.favoriteOn = favoriteOn;
    }
    public Integer getInterestsOn() {
        return interestsOn;
    }
    public void setInterestsOn(Integer interestsOn) {
        this.interestsOn = interestsOn;
    }
    public Integer getMyLifeOn() {
        return myLifeOn;
    }
    public void setMyLifeOn(Integer myLifeOn) {
        this.myLifeOn = myLifeOn;
    }
    public Integer getCommentsOn() {
        return commentsOn;
    }
    public void setCommentsOn(Integer commentsOn) {
        this.commentsOn = commentsOn;
    }
    public Integer getScheduleOn() {
        return scheduleOn;
    }
    public void setScheduleOn(Integer scheduleOn) {
        this.scheduleOn = scheduleOn;
    }

    public String getIntro() {
        return intro;
    }
    public void setIntro(String intro) {
        this.intro = intro;
    }
    public String getField() {
        return field;
    }
    public void setField(String field) {
        this.field = field;
    }
    public Integer getPrice() {
        return price;
    }
    public void setPrice(Integer price) {
        this.price = price;
    }
    public Integer getPhoneNum() {
        return phoneNum;
    }
    public void setPhoneNum(Integer phoneNum) {
        this.phoneNum = phoneNum;
    }

    public Date getFinalAct() {
        return finalAct;
    }
    public void setFinalAct() {
        this.finalAct = new Date();
    }

    public List<Badge> getBadges() {
        return badges;
    }
    public void setBadges(List<Badge> badges) {
        this.badges = badges;
    }

    public Integer getNowp() {
        return nowp;
    }
    public void setNowp(Integer nowp) {
        this.nowp = nowp;
    }
    public Integer getChargep() {
        return chargep;
    }
    public void setChargep(Integer chargep) {
        this.chargep = chargep;
    }
    public Integer getCostp() {
        return costp;
    }
    public void setCostp(Integer costp) {
        this.costp = costp;
    }
    public Integer getIncomep() {
        return incomep;
    }
    public void setIncomep(Integer incomep) {
        this.incomep = incomep;
    }
    public Integer getPcamount() {
        return pcamount;
    }
    public void setPcamount(Integer pcamount) {
        this.pcamount = pcamount;
    }
    public Integer getRpamount() {
        return rpamount;
    }
    public void setRpamount(Integer rpamount) {
        this.rpamount = rpamount;
    }
    public Integer getFollowing() {
        return following;
    }
    public void setFollowing(Integer following) {
        this.following = following;
    }
    public Integer getFollower() {
        return follower;
    }
    public void setFollower(Integer follower) {
        this.follower = follower;
    }
    public Integer getPfPopup() {
        return pfPopup;
    }
    public void setPfPopup(Integer pfPopup) {
        this.pfPopup = pfPopup;
    }
    public Integer getMsPopup() {
        return msPopup;
    }
    public void setMsPopup(Integer msPopup) {
        this.msPopup = msPopup;
    }

    public Integer getPriceUpdate() {
        return priceUpdate;
    }
    public void setPriceUpdate(Integer priceUpdate) { this.priceUpdate = priceUpdate; }
    public Integer getLoginStatus() {
        return loginStatus;
    }
    public void setLoginStatus(Integer loginStatus) {
        this.loginStatus = loginStatus;
    }
}
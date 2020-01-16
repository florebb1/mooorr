package com.laidback.repository;

import com.laidback.model.ChatNo;
import com.laidback.model.Message;
import com.laidback.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Integer> {


    @Query(value="select ms.sender, MAX(ms.msDate) FROM Message ms where ms.receiver=:user2 group by ms.sender order by MAX(ms.msDate) desc")
    Page<Message> findReceiveByUser(@Param("user2") User user2, Pageable pageable);
    @Query(value="select ms from Message ms where ms.receiver=:user2 and ms.sender=:user order by ms.msDate desc")
    List<Message> findMessageDetailList(@Param("user2") User user2, @Param("user") User user);


    @Query(value="select ms.receiver, MAX(ms.msDate) FROM Message ms where ms.sender=:user group by ms.receiver order by MAX(ms.msDate) desc")
    Page<Message> findSendByUser(@Param("user") User user, Pageable pageable);

    @Query(value="select ms from Message ms where ms.receiver in :reportUser and ms.sender in :reportUser order by ms.msDate desc")
    List<Message> findReportDetailList(@Param("reportUser") List<User> reportUser);
    List<Message> findByChatNoAndReceiverAndReceiverReadIsNull(ChatNo chatNo, User user);
    List<Message> findByChatNoAndSenderAndAsContentIsNotNullAndSenderReadIsNull(ChatNo chatNo, User user);


    @Transactional
    @Modifying(clearAutomatically = true)
    @Query("update Message m set m.receiverRead = :newDate where m.msIdx=:msIdx")
    Integer updateReceiverRead(@Param("newDate") Date date, @Param("msIdx")Integer list);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query("update Message m set m.senderRead = :newDate where m.msIdx in :msIdx")
    Integer updateSenderRead(@Param("newDate") Date date, @Param("msIdx")Integer list);

    Integer countAllByReceiver(User user);
    Integer countAllBySender(User user);
    Message findByMsIdx(Integer msIdx);

    List<Message> findByChatNoOrderByMsIdxAsc(ChatNo chat);
    List<Message> findByChatNoOrderByMsIdxDesc(ChatNo chat);

    List<Message> findByAsDateIsNullAndMsDateIsBefore(Date date);
    @Transactional
    Integer deleteByAsDateIsNullAndMsDateIsBefore(Date date);




}

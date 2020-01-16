package com.laidback.repository;

import com.laidback.model.ChatNo;
import com.laidback.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface ChatNoRepository extends JpaRepository<ChatNo, Integer> {

    @Query("select c from ChatNo c where (c.user=:sender and c.user2=:receiver) or (c.user=:receiver and c.user2=:sender) ")
    ChatNo findByUserList(@Param("sender") User sender, @Param("receiver") User receiver);

    @Query("select c from ChatNo c where c.user=:user or c.user2=:user")
    Page<ChatNo> findByUser(@Param("user") User user, Pageable pageable);

    Page<ChatNo> findByUserIsOrUser2IsOrderByFinDateDesc(Pageable pageable, User user, User user2);

    @Query("select count(c) from ChatNo c where c.user=:user or c.user2=:user")
    Integer countAllByUser(@Param("user") User user);

    ChatNo findByChatIdx(Integer chatIdx);

    @Query(value = "select f.chat_idx from (select cn.chat_idx, ifnull(del, 0) as fin from chat_no cn left join (select count(*) as del, chat_idx from message group by chat_idx) as cc on cn.chat_idx=cc.chat_idx) f where f.fin=0", nativeQuery = true)
    List<Integer> getDelList();

    @Transactional
    Integer deleteByChatIdxIn(List<Integer> delList);

    @Transactional
    Integer deleteByChatIdx(Integer chatIdx);

    @Query("select cn from ChatNo cn where (cn.user=:user and cn.user2=:user2) or (cn.user=:user2 and cn.user2=:user)")
    ChatNo findByUserAndUser2(@Param("user")User user, @Param("user2")User user2);

}

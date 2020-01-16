package com.laidback.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.Message.RecipientType;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import java.io.File;
import java.nio.file.FileSystem;
import java.nio.file.Path;
import java.nio.file.Paths;


@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailService;
    Path fileStorageLocation;



    @Async
    public void sendmail(String from, String title, String content, String to, String bcc) throws Exception{

        this.fileStorageLocation = Paths.get("./logo").toAbsolutePath().normalize();

        MimeMessagePreparator preparator = new MimeMessagePreparator() {
            @Override
            public void prepare(MimeMessage mimeMessage) throws Exception {
                MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
                mimeMessageHelper.setTo(to);
                mimeMessageHelper.setFrom(from);
                mimeMessageHelper.setSubject(title);
                mimeMessageHelper.setText(content, true);
                FileSystemResource res = new FileSystemResource(new File(fileStorageLocation+"/email-logo.png"));
                mimeMessageHelper.addInline("logopng", res);
            };
        };
        try {
            javaMailService.send(preparator);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
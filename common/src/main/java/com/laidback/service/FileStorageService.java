package com.laidback.service;

import com.laidback.exception.FileStorageException;
import org.apache.commons.io.FilenameUtils;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.SecureRandom;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

@Service
public class FileStorageService {
    private Path fileStorageLocation;

    public String storeFile(MultipartFile file){
        this.fileStorageLocation = Paths.get("./uploads").toAbsolutePath().normalize();
        try{
            Files.createDirectories(this.fileStorageLocation);
        }catch (Exception e){
            throw new FileStorageException("Could not create the directory where the uploaded files will be stored.",e);
        }

        SimpleDateFormat mSimpleDateFormat = new SimpleDateFormat ( "yyyyMMdd_HHmmss", Locale.KOREA );
        Date currentTime = new Date ();
        String mTime = mSimpleDateFormat.format ( currentTime );

        String AB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        SecureRandom rnd = new SecureRandom();


            StringBuilder sb = new StringBuilder(6);
            for (int i = 0; i < 6; i++) sb.append(AB.charAt(rnd.nextInt(AB.length())));
            String newTitle = sb.toString();


        String orgName = org.springframework.util.StringUtils.cleanPath(file.getOriginalFilename());
        String result = FilenameUtils.getExtension(orgName);
        String fileName = mTime + "_" + newTitle+"."+result;
        try{
            if(fileName.contains("..")){
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            return fileName;
        }catch (IOException e){
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", e);
        }
    }

    public Resource loadFileAsResource(String fileName) {
        try {
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());

            if(resource.exists()) {
                return resource;
            }else {
                throw new FileStorageException(fileName + " 파일을 찾을 수 없습니다.");
            }
        }catch(MalformedURLException e) {
            throw new FileStorageException(fileName + " 파일을 찾을 수 없습니다.", e);
        }
    }
    public boolean deleteFile(String saveName){
        this.fileStorageLocation = Paths.get("./uploads").toAbsolutePath().normalize();
        try{
            System.out.println(fileStorageLocation+"/"+saveName);
            File file = new File(fileStorageLocation+"/"+saveName);
            if( file.exists() ){
                if(file.delete()){
                    System.out.println("파일삭제 성공");
                    return true;
                }else{
                    System.out.println("파일삭제 실패");
                    return false;
                }
            }else{
                System.out.println("파일이 존재하지 않습니다.");
                return false;
            }
        }catch (Exception e){
            throw new FileStorageException("Exception : ",e);
        }
   }
    public boolean deleteTempFile(String saveName){
        this.fileStorageLocation = Paths.get(".").toAbsolutePath().normalize();
        System.out.println("파일경로는 "+ fileStorageLocation);
        try{
            System.out.println(fileStorageLocation+"/"+saveName);
            File file = new File(fileStorageLocation+"/"+saveName);
            if( file.exists() ){
                if(file.delete()){
                    System.out.println("파일삭제 성공");
                    return true;
                }else{
                    System.out.println("파일삭제 실패");
                    return false;
                }
            }else{
                System.out.println("파일이 존재하지 않습니다.");
                return false;
            }
        }catch (Exception e){
            throw new FileStorageException("Exception : ",e);
        }
    }
}

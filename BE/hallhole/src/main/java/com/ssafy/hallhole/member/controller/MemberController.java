package com.ssafy.hallhole.member.controller;

import com.ssafy.hallhole.advice.exceptions.BadRequestException;
import com.ssafy.hallhole.advice.exceptions.NotFoundException;
import com.ssafy.hallhole.member.domain.Member;
import com.ssafy.hallhole.member.dto.*;
import com.ssafy.hallhole.member.service.MemberServiceImpl;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Arrays;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
@ApiOperation(value = "memberController")
public class MemberController {

    private final MemberServiceImpl memberService;

    @PostMapping("/join")
    @ApiOperation(value="[완료] 홀홀 회원가입")
    public TokenDto join(@RequestBody MemberJoinDTO member, HttpSession session) throws NotFoundException {
        String token = memberService.join(member, session.getId());
        return new TokenDto(token);
    }

    @PostMapping("/login")
    @ApiOperation(value="[완료] 홀홀 로그인")
    public TokenDto login(@RequestBody LoginDTO member,HttpSession session) throws NotFoundException {
        String token = memberService.login(member.getEmail(), member.getPw(), session.getId());
        return new TokenDto(token);
    }

    @PostMapping("/pwmail")
    @ApiOperation(value="[완료] 비밀번호 변경 링크 메일 전송")
    public ResponseEntity findPW(@RequestBody EmailDTO emailDto) throws NotFoundException {
        try{
            memberService.findPW(emailDto.getEmail());
            return new ResponseEntity(HttpStatus.OK);
        }catch(NotFoundException e){
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/new-pw")
    @ApiOperation(value = "[완료] 비밀번호 링크 접속 후 변경")
    public ResponseEntity changePW(@RequestBody LoginDTO member)  throws NotFoundException {
        try{
            memberService.changePW(member.getEmail(), member.getPw());
            return new ResponseEntity(HttpStatus.OK);
        }catch(NotFoundException e){
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/out")
    @ApiOperation(value = "[완료] 회원 탈퇴")
    public ResponseEntity delMember(@RequestBody IDDTO iddto) throws NotFoundException {
        try{
            memberService.delMem(iddto.getId());
            return new ResponseEntity(HttpStatus.OK);
        }catch(NotFoundException e){
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("")
    @ApiOperation(value = "[완료] 프로필 변경")
    public Member changeInfo(@RequestBody MyProfileDTO myDto) throws NotFoundException {
        return memberService.changeInfo(myDto);
    }

    @PostMapping("")
    @ApiOperation(value = "[완료] 유저 데이터 조회")
    public Member getInfo(@RequestBody IDDTO idDto) throws NotFoundException {
        return memberService.getInfo(idDto.getId());
    }

    @PostMapping("/deco")
    @ApiOperation(value = "캐릭터 꾸미기 현재")
    public CharacterDTO getCharacter(@RequestBody IDDTO idDto) throws NotFoundException{
        return memberService.getCharacter(idDto.getId());
    }

}

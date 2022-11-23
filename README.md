# 🎟️ PROJECT ‘HALLHOLE’

---

공연 관련 산업 시장이 점점 커지고 있고, 그 안에서 공연을 좋아하는 사람들이 소통할 수 있는 커뮤니티가 제한적으로 운영되고 있습니다.

저희는 커뮤니티 요소를 살리면서 접근이 쉽고 이용이 간편하게 이루어질 수 있는 홀홀 서비스를 제작하여, 많은 사람들이 관심 있는 공연에 대해 소통하고 또 정보를 수집할 수 있는 서비스를 제공하고자 이 프로젝트를 진행하게 되었습니다.

📼 **서비스 소개**

[소개 UCC](https://youtu.be/3h9D4Trq_EQ)

# 📅 프로젝트 기간

---

### 💡 **아이디어 회의 및 구상**

7월 5일 (화) ~ 7월 15일 (금)

### 🎨 **개발 및 디자인 작업**

7월 18일 (월) ~ 8월 18일 (목)

### 🛐 프로젝트 배포

8월 19일 (금)

# 👥 팀 구성

---

## 🖥️ Front-end

### 👑 김제관[🔗](https://github.com/jekwan)

### 👨🏻‍💻 강승리[🔗](https://github.com/cheecrma)

### 👩🏻‍💻 백경원[🔗](https://github.com/wynne-baek)

### 👨🏻‍💻 **임상빈**[🔗](https://github.com/Binzify)

## 🌐 Back-end

### 👨🏻‍💻 이재웅[🔗](https://github.com/QuiD-0)

### **👩🏻‍💻 임효정**[🔗](https://github.com/leemyo)

# 📝 데이터 모델링 (ERD)

---

![홀홀_220801 (1).png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9b69ec69-927d-44df-b82b-aff244b985f8/%ED%99%80%ED%99%80_220801_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T034515Z&X-Amz-Expires=86400&X-Amz-Signature=798d44de95ec3609a4245b5dcd90befc0c016ec49001715d712d7d6674defb1f&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25ED%2599%2580%25ED%2599%2580_220801%2520%281%29.png%22&x-id=GetObject)

# 주요 기술

---

- CI/CD
  - Jenkins
  - Docker
- 서버
  - AWS EC2
- 이슈 /버전 관리
  - GitLab
  - Jira
  - Notion
- 프론트엔드
  - React
  - 상태관리 : Redux
  - 라우팅 : react-router-dom
  - 번들링/컴파일 : webpack / babel
  - 비동기 : Axios
  - 코드 스타일 : prettier → frontend/.prettierrc
  - 문법 검사 : esLint
  - 툴 : react-developer-tools ([React Developer Tools - Chrome 웹 스토어](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi))
- 백엔드
  - SpringBoot
  - 빌드 : Gradle
  - ORM : JPA
  - DB : MySQL
  - 언어 : Java
  - API명세 : Swagger
  - 테스팅 : Junit
  - 로깅 : SLF4J & LogBack
  - 커넥션 풀 : HikariCP

# 🛎️ 서비스 소개 및 구현

---

### 📱 모바일에서 편하게 보다

홀홀은 모바일에서 편리하게 사용할 수 있도록 `웹앱(Web App)`으로 구현하였으며, 스마트폰 내에 설치된 브라우저를 통해 편리하게 이용할 수 있습니다.

### 로그인과 회원가입

**![이미지 이름](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d11d7eab-04a5-4b02-aa2a-45326632161c/Screen_Recording_20220825-102519_Samsung_Internet_1.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033303Z&X-Amz-Expires=86400&X-Amz-Signature=3def03cce24d1c95080d1a86c0e2c7dd9a8284fbb5b1be30c8a153acfcf94283&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_1.gif%22&x-id=GetObject)**

- 홀홀 페이지로 접속했을 때 보여지는 랜딩페이지로, 로그인이 되어있지 않은 경우에 보여집니다.
- 현재 티켓이 오픈된 공연 / 진행중인 공연의 포스터가 뒷 배경에 보여지며, 이 포스터들은 위로 움직입니다.
- 시작하기를 눌러 로그인과 회원가입 중 선택하여 서비스 이용을 시작할 수 있습니다.

![Screen_Recording_20220825-102519_Samsung Internet_2.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/14f6a91a-26a5-4b8b-bdc6-c557a5408dcd/Screen_Recording_20220825-102519_Samsung_Internet_2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033453Z&X-Amz-Expires=86400&X-Amz-Signature=8715d098764e51e09430fc7dc350af8e8c045c23c41c61aef58e3e5d6c366424&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_2.gif%22&x-id=GetObject)

![Screen_Recording_20220825-102519_Samsung Internet_1.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b7e31d10-279b-45fe-aa13-08628ce7c366/Screen_Recording_20220825-102519_Samsung_Internet_1.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033459Z&X-Amz-Expires=86400&X-Amz-Signature=f06db2c13b88e20cb9a85f53a72dff63b01142a960e0651b97f3885065f5a672&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_1.gif%22&x-id=GetObject)

- 로그인과 회원가입 시에는 이메일 형식과 비밀번호 형식에 맞추어야 하며, 아이디는 이메일로 가입가능하며, 비밀번호는 영문+숫자+특수문자의 조합으로 8자 이상이 되어야합니다.

---

### 메인 페이지

- 로그인에 성공하면 메인페이지로 이동합니다.

![Screen_Recording_20220825-102519_Samsung Internet_5.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/85bb70df-cf69-4a89-b474-aaddf40cb0c5/Screen_Recording_20220825-102519_Samsung_Internet_5.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033536Z&X-Amz-Expires=86400&X-Amz-Signature=99e1434fbf6b19def95ce56137e2f2a29d71e3c808edeeabccbd12195e6ede9f&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_5.gif%22&x-id=GetObject)

- 메인페이지에서는 채팅이 없는 경우 채팅을 시작해보라는 이미지가 보여지며, 그 하단으로는 홀홀 유저들의 좋아요를 많이 받은 인기 공연 10가지와 실시간 티켓 정보가 보여집니다.

![Screen_Recording_20220825-102519_Samsung Internet_6.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7c41f13a-d2d3-4d19-b42d-21347f4170ac/Screen_Recording_20220825-102519_Samsung_Internet_6.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033552Z&X-Amz-Expires=86400&X-Amz-Signature=88245135df65b0c73953a5f71c779559951c6997981df807560aa497b0e91109&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_6.gif%22&x-id=GetObject)

![Screen_Recording_20220825-102519_Samsung Internet_9.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1e82e60-0696-4ef7-9093-5f70118db26c/Screen_Recording_20220825-102519_Samsung_Internet_9.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033641Z&X-Amz-Expires=86400&X-Amz-Signature=96e4aa8e5da98ca330b0d69439a1ae62d31e6740fc9eb37b06d7acec78d6fe19&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_9.gif%22&x-id=GetObject)

- 인기 공연은 좌우로 스와이프하여 어떠한 공연들이 유저들로부터 인기를 끌고 있는지 확인하실 수 있습니다.
- 공연 포스터를 클릭하면 해당 공연의 상세정보 페이지로 이동합니다.

![Screen_Recording_20220825-102519_Samsung Internet_7.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c0e0a7ab-bc0f-440c-a32a-cde41b984e80/Screen_Recording_20220825-102519_Samsung_Internet_7.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033653Z&X-Amz-Expires=86400&X-Amz-Signature=c726e91cdd2a785d56821f6890686ab78395876b7581fa96bc986511619c4854&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_7.gif%22&x-id=GetObject)

![Screen_Recording_20220825-102519_Samsung Internet_8.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f468083a-6006-4940-9f27-7ca7efa843d7/Screen_Recording_20220825-102519_Samsung_Internet_8.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033705Z&X-Amz-Expires=86400&X-Amz-Signature=cffa017a73e7979c586fa8d103073eea570738d84392894874be0ed46dd8a4e5&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_8.gif%22&x-id=GetObject)

- 실시간 티켓 정보는 연극/뮤지컬의 예매 오픈 소식과 이벤트에 대한 내용이 올라오며, 예매하기 버튼을 클릭하여 공지사항이 올라와있는 페이지로 이동하여 관련 정보를 확인하실 수 있습니다.

---

### 공연 상세 페이지

![공연 상세페이지.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2d30e06d-8eb6-45af-bc42-1892b2f854ca/%EA%B3%B5%EC%97%B0_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033720Z&X-Amz-Expires=86400&X-Amz-Signature=868133033ff1ac540258c9f4b2ddc672369445e9aa619a4832d263e63d4218c5&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25EA%25B3%25B5%25EC%2597%25B0%2520%25EC%2583%2581%25EC%2584%25B8%25ED%258E%2598%25EC%259D%25B4%25EC%25A7%2580.png%22&x-id=GetObject)

- 공연 포스터를 눌러 이동하는 공연 상세페이지에서는 아래와 같은 기능을 제공합니다.

![Screen_Recording_20220825-102519_Samsung Internet_10.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1ba3c3c0-9ad6-49f7-be2b-f2da96b7c38f/Screen_Recording_20220825-102519_Samsung_Internet_10.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033734Z&X-Amz-Expires=86400&X-Amz-Signature=ed2f1bd94e4f2ff0a69160dcbabb40b96113adb8acd21e97ba2abe80ca41d058&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_10.gif%22&x-id=GetObject)

![Screen_Recording_20220825-102519_Samsung Internet_13.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ae2de15b-d7d4-48d2-b1c0-708b0bdf1ce0/Screen_Recording_20220825-102519_Samsung_Internet_13.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033744Z&X-Amz-Expires=86400&X-Amz-Signature=f54507417db357be8d3ed5245175b6e5071360d3ca0f22b4d344f0c5db9779c7&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_13.gif%22&x-id=GetObject)

![Screen_Recording_20220825-102519_Samsung Internet_14.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/62b41d3d-7a64-4b1c-a5ea-891fdeb0c6ad/Screen_Recording_20220825-102519_Samsung_Internet_14.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033752Z&X-Amz-Expires=86400&X-Amz-Signature=b30e7308688640c13955c35584aec248866da1b3fc45177415e9e7af93602871&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_14.gif%22&x-id=GetObject)

- 하트 버튼을 눌러 공연에 `좋아요` 표시를 할 수 있습니다. 좋아요한 공연은 내 프로필에서 확인이 가능합니다.
- 별점, 제목, 내용을 작성하여 해당 공연에 대한 후기를 작성하여 유저들과 공유할 수 있습니다.

![Screen_Recording_20220825-102519_Samsung Internet_15.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/61a08969-aac6-44b5-9f32-50835beaef1a/Screen_Recording_20220825-102519_Samsung_Internet_15.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033805Z&X-Amz-Expires=86400&X-Amz-Signature=1d15d9427dfb168e01aba2206d9b3b4bc4bca9ca97c45f28fc027d45c76723cd&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_15.gif%22&x-id=GetObject)

![Screen_Recording_20220825-102519_Samsung Internet_16.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ce2249a5-93b4-4ce3-9069-ec6989d96e5f/Screen_Recording_20220825-102519_Samsung_Internet_16.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033818Z&X-Amz-Expires=86400&X-Amz-Signature=d64cba2957d553beb30fb91925c51e2f42c196bd1d953981a7aad2125b1db40d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_16.gif%22&x-id=GetObject)

- 후기에는 작성이 가능하며, 후기의 수정과 삭제도 가능합니다.

![Screen_Recording_20220825-102519_Samsung Internet_28.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5c8f20a1-ee24-4c04-bca7-0e213f79d0d1/Screen_Recording_20220825-102519_Samsung_Internet_28.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033828Z&X-Amz-Expires=86400&X-Amz-Signature=35a5a3abf9cb6bce4be38c16eeb98007eb24151a42622a01c6272af1e052a3b7&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_28.gif%22&x-id=GetObject)

- 다른 유저들이 작성한 후기도 살펴볼 수 있으며, 댓글도 확인할 수 있습니다.

---

### 채팅

![Screen_Recording_20220825-102519_Samsung Internet_11.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5c8f20a1-ee24-4c04-bca7-0e213f79d0d1/Screen_Recording_20220825-102519_Samsung_Internet_28.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033828Z&X-Amz-Expires=86400&X-Amz-Signature=35a5a3abf9cb6bce4be38c16eeb98007eb24151a42622a01c6272af1e052a3b7&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_28.gif%22&x-id=GetObject)

![Screen_Recording_20220825-102519_Samsung Internet_12.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/04592df1-3936-4b35-9c69-79186ebde375/Screen_Recording_20220825-102519_Samsung_Internet_12.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033850Z&X-Amz-Expires=86400&X-Amz-Signature=f62327f012d2f2cb06acffc17cc25cc4ecec42893b4fbb5ac2a0e2eae29c965d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_12.gif%22&x-id=GetObject)

- 하트 옆에 말풍선을 눌러 해당 공연에서 진행되고 있는 채팅에 참여하여 대화를 나눌 수 있습니다.
- 공연 채팅방에 한 번 참여하게 되면 메인페이지에 변화가 생깁니다.

![Screen_Recording_20220825-102519_Samsung Internet_17.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5364456e-8d24-41ed-9975-674aa2e682d7/Screen_Recording_20220825-102519_Samsung_Internet_17.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033854Z&X-Amz-Expires=86400&X-Amz-Signature=fd36fc8d28928ec7cbf7a4a5b139e0aee2e640ab87aa4a5fa2e4b84d3397f2e5&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_17.gif%22&x-id=GetObject)

![Screen_Recording_20220825-102519_Samsung Internet_18.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8daf0ffc-dd35-4e52-b10a-6ae64bfaf1cd/Screen_Recording_20220825-102519_Samsung_Internet_18.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033909Z&X-Amz-Expires=86400&X-Amz-Signature=e5d9b99ec070f15cf47020f73ed2a627af2fd4d8feae589a7c5b237aa9a157aa&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_18.gif%22&x-id=GetObject)

- 채팅방에 입장을 안내하는 이미지가 사라지고, 이전에 참여했던 채팅방의 공연 포스터가 메인에 보여지게 됩니다.
- 이미 채팅이 진행된 채팅방에 접속하면, 기존 유저들이 채팅방에서 어떠한 내용을 언급했는지 확인이 가능하며, 이전 채팅 기록을 확인할 시 채팅박스 하단에 아래로 버튼이 활성화되며 누를 시 가장 최신의(마지막) 채팅으로 이동하게 됩니다.

![Screen_Recording_20220825-102519_Samsung Internet_19.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/046fb372-b299-4405-a3b9-5f9b54e4a221/Screen_Recording_20220825-102519_Samsung_Internet_19.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033920Z&X-Amz-Expires=86400&X-Amz-Signature=62180516d9337d9bea082c9763ae19e6048bed39c360c55861edaae8754b7cb9&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_19.gif%22&x-id=GetObject)

- 채팅방에 많이 참여할수록 메인 페이지에 보여지는 포스터도 많아지며, 스와이프를 통해 가장 최근에 참여했던 채팅방 상위 5개의 포스터를 확인하실 수 있습니다.

---

### 공연/채팅 목록

![Screen_Recording_20220825-102519_Samsung Internet_20.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fa481453-3a94-4ddb-90e8-d6560244b96b/Screen_Recording_20220825-102519_Samsung_Internet_20.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033935Z&X-Amz-Expires=86400&X-Amz-Signature=36d842529487ce9cfa35e020924f2d32252fdda65f12c1422a7408aab443d785&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_20.gif%22&x-id=GetObject)

- 공연/채팅 리스트에서는 현재 열려있는 공연에 대한 리스트가 있으며, 공연이 많이 존재하므로 검색을 통해 원하는 공연을 찾을 수 있습니다.

![Screen_Recording_20220825-102519_Samsung Internet_21.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3e4d1608-d47a-43e2-83b9-f78ac5999071/Screen_Recording_20220825-102519_Samsung_Internet_21.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033947Z&X-Amz-Expires=86400&X-Amz-Signature=128990fc149ed12ce8802c813c1bcb3b531be28f7b4d2d03798b2310e2f421f9&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_21.gif%22&x-id=GetObject)

- 우측처럼 입장을 누르면 채팅에 바로 입장하며, 포스터를 누르면 해당 공연의 상세 페이지로 이동합니다.

---

### 프로필

<img title="" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/62342dc6-75a3-4031-a324-eecec226a9e1/Screen_Recording_20220825-102519_Samsung_Internet_22.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033959Z&X-Amz-Expires=86400&X-Amz-Signature=49623c8caa77a17903b075f71c0e7ae60bcc9c91885ab3528ea51e7a2c3515a0&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_22.gif%22&x-id=GetObject" alt="Screen_Recording_20220825-102519_Samsung Internet_22.gif" width="305"><img title="" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/62342dc6-75a3-4031-a324-eecec226a9e1/Screen_Recording_20220825-102519_Samsung_Internet_22.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T033959Z&X-Amz-Expires=86400&X-Amz-Signature=49623c8caa77a17903b075f71c0e7ae60bcc9c91885ab3528ea51e7a2c3515a0&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_22.gif%22&x-id=GetObject" alt="프로필 수정 페이지.png" width="328">

- 상단에 고정되어있는 네비게이션 바의 프로필 아이콘을 통해 내 프로필로 이동할 수 있습니다.
- 내 프로필 페이지에서는 캐릭터를 꾸밀 수 있는 옷걸이 아이콘과 프로필 수정버튼, 그리고 좋아요한 공연 목록, 작성한 후기와 댓글의 목록을 확인할 수 있습니다.

![Screen_Recording_20220825-102519_Samsung Internet_24.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/28034589-c295-4f57-9220-65e3b84a0ab3/Screen_Recording_20220825-102519_Samsung_Internet_24.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T034016Z&X-Amz-Expires=86400&X-Amz-Signature=2151d67a3da2af64cee2965a4aa607cc3c3946ba9230e0badd37817f63169c6d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_24.gif%22&x-id=GetObject)

![프로젝트 소개 작업 악세서리.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/162e43d5-5632-470c-bc20-b31c938c3109/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%86%8C%EA%B0%9C_%EC%9E%91%EC%97%85_%EC%95%85%EC%84%B8%EC%84%9C%EB%A6%AC.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T034029Z&X-Amz-Expires=86400&X-Amz-Signature=6ebf38f5f6b1afd1a3551645e1e0bcde9b68e065626dffedc1b35d7ae9640b92&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25ED%2594%2584%25EB%25A1%259C%25EC%25A0%259D%25ED%258A%25B8%2520%25EC%2586%258C%25EA%25B0%259C%2520%25EC%259E%2591%25EC%2597%2585%2520%25EC%2595%2585%25EC%2584%25B8%25EC%2584%259C%25EB%25A6%25AC.png%22&x-id=GetObject)

![캐릭터 색상 안내.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4f22adba-ab51-4c6c-93b2-c91eb27ebe39/%EC%BA%90%EB%A6%AD%ED%84%B0_%EC%83%89%EC%83%81_%EC%95%88%EB%82%B4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T034038Z&X-Amz-Expires=86400&X-Amz-Signature=2a5b51a590ab4a91c38f80f52642b389a43b1769df21c1f7d26eb0e9ecbbe6f1&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25EC%25BA%2590%25EB%25A6%25AD%25ED%2584%25B0%2520%25EC%2583%2589%25EC%2583%2581%2520%25EC%2595%2588%25EB%2582%25B4.png%22&x-id=GetObject)

- 프로필로 홀홀의 마스코트인 홀리몰리를 꾸밀 수 있습니다. 색상과 액세서리가 존재하며, 해당 색상과 액세서리는 유명한 공연을 떠올릴 수 있도록 제작하였습니다.

![유저 프로필 수정 가능한 폼.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bee9e6ae-d047-40e0-834e-91f74441e730/%EC%9C%A0%EC%A0%80_%ED%94%84%EB%A1%9C%ED%95%84_%EC%88%98%EC%A0%95_%EA%B0%80%EB%8A%A5%ED%95%9C_%ED%8F%BC.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T034111Z&X-Amz-Expires=86400&X-Amz-Signature=6998bebae6199f84837057188b2a55a27c6cd982131d4c3dbf4f6c6df3d8572a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25EC%259C%25A0%25EC%25A0%2580%2520%25ED%2594%2584%25EB%25A1%259C%25ED%2595%2584%2520%25EC%2588%2598%25EC%25A0%2595%2520%25EA%25B0%2580%25EB%258A%25A5%25ED%2595%259C%2520%25ED%258F%25BC.png%22&x-id=GetObject)

- 이메일을 제외한 이름, 자기소개, 성별, 생일을 작성하고 수정할 수 있습니다.

![Screen_Recording_20220825-102519_Samsung Internet_26.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b39d21db-05e6-4de1-9e86-6f077ebbb2ab/Screen_Recording_20220825-102519_Samsung_Internet_26.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T034057Z&X-Amz-Expires=86400&X-Amz-Signature=b60b485e2caed290607a1efc0232082b2ac21cfd3958666475677e0e1cff947b&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_26.gif%22&x-id=GetObject)

- 좋아요한 목록을 눌러 내가 어떠한 공연에 좋아요를 눌렀는지 확인할 수 있습니다. 스와이프와 더보기로 많은 공연 목록을 확인할 수 있습니다.

![Screen_Recording_20220825-102519_Samsung Internet_29.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e5d77ee7-64fc-4d00-8eb6-0c6b858f24e2/Screen_Recording_20220825-102519_Samsung_Internet_29.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T034133Z&X-Amz-Expires=86400&X-Amz-Signature=9c78f7da189f199f82b1a8ebe77bd9209801b43cb5ef20ccb1c2e60dd09f75af&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_29.gif%22&x-id=GetObject)

![유저 팔로잉 팔로워.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dc8275d8-870c-4444-a3a6-3e1772b9ca47/%EC%9C%A0%EC%A0%80_%ED%8C%94%EB%A1%9C%EC%9E%89_%ED%8C%94%EB%A1%9C%EC%9B%8C.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T034142Z&X-Amz-Expires=86400&X-Amz-Signature=d8e23caf60c0893c2fc2ccc839f06b0db511f2e7b81873b657180dd20597bf5b&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25EC%259C%25A0%25EC%25A0%2580%2520%25ED%258C%2594%25EB%25A1%259C%25EC%259E%2589%2520%25ED%258C%2594%25EB%25A1%259C%25EC%259B%258C.png%22&x-id=GetObject)

- 팔로워와 팔로잉 텍스트를 누르면 어느 유저를 팔로우하고, 어느 유저가 팔로잉하는지 확인할 수 있습니다.

- 다른 유저의 프로필 페이지에도 접근이 가능하며, 타 유저 프로필 페이지 접근 시 기존 프로필 수정 버튼은 팔로우 버튼으로 전환됩니다.

- 팔로우 버튼을 눌러 다른 유저를 팔로우 또는 언팔로우 버튼을 눌러 언팔로우 할 수 있습니다.

<img title="" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e0bf3f3f-4bda-4cc8-a949-504853f0315d/Screen_Recording_20220825-102519_Samsung_Internet_30.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T034155Z&X-Amz-Expires=86400&X-Amz-Signature=f99e545f968e1e207a0410d5d88213e0046befa450e9d42870acc21f6b417e2d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screen_Recording_20220825-102519_Samsung%2520Internet_30.gif%22&x-id=GetObject" alt="Screen_Recording_20220825-102519_Samsung Internet_30.gif" width="314"><img title="" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/811c524a-1e8d-4d46-ba82-ae73e87d1c9f/VideoCapture_20220903-140730.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T034208Z&X-Amz-Expires=86400&X-Amz-Signature=83a53e8603986eac0c18df032dafdeeae2ada482ffb6f68800589eb705314ed4&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22VideoCapture_20220903-140730.jpg%22&x-id=GetObject" alt="VideoCapture_20220903-140730.jpg" width="314">

- 프로필 수정 내 최하단에 탈퇴하기 버튼이 있으며, 모달창으로 탈퇴를 한 번 더 물어보며, 탈퇴 버튼 클릭 시 “언제나 홀홀은 열려있습니다”라는 안내창이 뜨며 정보가 삭제됩니다.

---

# 🤔 프로젝트 회고

총 7주 간의 프로젝트를 마무리하며 KPT (Keep, Problem, Try) 기법을 사용하여 회고를 진행하였습니다.

```jsx
**Keep**
 - 적당한 온도감. 부족하지도 너무 뜨겁지도 않은 적절한 열정으로 오래 달릴 수 있었다고 생각합니다.
 - FE : Atomic 디자인으로 컴포넌트를 구분함으로써 SPA에서 자주 활용하여 좋고 
        재사용성 높은 프로젝트 구성에 도움이 됨 / 직접 경험하면서 다양한 시도에 대한 두려움이 덜해짐
 - 프로젝트 시작 할 때, 코드 컨벤션을 정해놓은 것이 좋았다.
 - BE : 젠킨스와 같은 CI/CD를 중간에 도입했던 것이 아주 좋았다. 개발 - 테스트 템포를 잘 가져갈 수 있었다.
 - 문제가 생기거나 의문이 생길때마다 바로 소통할 수 있는 분위기가 좋았다.
 - 좋은 팀워크.

**Problem**
 - 기술적인 준비가 미리미리 되어있었다면 더 잘 만들 수 있었을 것 같다.
 - 코드를 짜기 전에 설계를 우선해서 길을 잃지 않는 코딩을 할 수 있었으면 좋겠다.
 - JIRA 같은 툴을 용도에 맞게 잘 사용하지 못한 것 같다. 보여주기식의 사용이 되어버린 느낌.
 - 번다운 차트를 너무 의식하다보니 일정/일감 관리에 오히려 문제가 생기는 것 같다.
 - 일정이 너무 빠듯해서 코드 리뷰 / MR(PR) 할 시간이 없었다.

**Try**
 - JIRA와 같은 일정/일감 관리툴을 의도에 맞게 잘 사용하도록 노력하자
        조금 더 유동적이고 융통성있는 방식이 필요하다고 생각한다.
 - 노션(특히 추억 페이지)과 피그마가 아주 좋았다. 다음 프로젝트에서도 계속 사용하고 싶다.
        JIRA같은거는 조금 아쉬웠다.
```

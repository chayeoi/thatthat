# 학원 강의 리뷰 플랫폼, 댓댓

## About

댓댓은 학원 강의 리뷰 플랫폼으로, 댓댓 서비스에 회원 가입 후 교육 기관으로 인증하면 학원 강의 정보를 등록할 수 있고 일반 회원들은 해당 학원 강의에 대한 리뷰 및 문의를 남길 수 있다.

## Tech Stack

- React
- Redux
- React Router
- Firebase
- Semantic UI React
- Styled Components

## Getting Started

### Requirements

- Node 8^

### Installation

로컬 저장소에 [thatthat 저장소](https://github.com/YeonBong/thatthat)를 Clone한다.

```bash
git clone https://github.com/YeonBong/thatthat.git
```

Clone받은 디렉토리로 이동 후 의존성 패키지를 설치한다.

```bash
npm install
```

[Firebase 콘솔](https://console.firebase.google.com/)에서 개발용 프로젝트를 생성 후, 프로젝트의 루트 디렉토리에 `.env.local` 파일을 생성하고 아래와 같은 형식으로 자신의 Firebase 프로젝트의 환경 변수 설정 값을 입력한다.

```
REACT_APP_API_KEY=[apiKey]
REACT_APP_AUTH_DOMAIN=[authDomain]
REACT_APP_DATABASE_URL=[databaseURL]
REACT_APP_PROJECT_ID=[projectId]
REACT_APP_STORAGE_BUCKET=[storageBucket]
REACT_APP_MESSAGING_SENDER_ID=[messagingSenderId]
```

개발 서버를 실행한다.

```bash
npm start
```

## Documentation

### Coding Convention

- [코딩 컨벤션](https://github.com/YeonBong/thatthat/wiki/Coding-Convention)

### Rules for Collaboration

- [Git & Github](https://github.com/YeonBong/thatthat/wiki/Rules-for-Collaboration-(Git))

### Firebase Datebase Structure
- [Firebase 데이터베이스 구조](https://github.com/YeonBong/thatthat/wiki/Database)

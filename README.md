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

Firebase CLI를 전역으로 설치한다.

```bash
npm install -g firebase-tools
```

Firebase에 로그인한다.

```bash
firebase login
```

프로젝트 루트 디렉토리에서 다음 명령을 실행하여 Firebase 앱으로 초기화한다. 어떤 기능과 연동시킬 것인지 물으면 Database와 Store를 선택하고, 앞서 파이어베이스 콘솔에서 생성한 프로젝트를 연동하고자 하는 프로젝트로 선택한다.

```bash
firebase init
```

다음 명령을 실행하여 sample.json을 파이어베이스 데이터베이스에 업로드한다.

```bash
firebase database:set / sample.json
```

개발 서버를 실행한다.

```bash
npm start
```

### Storybook

Storybook은 .env 파일의 환경 변수 설정을 읽지 못하므로 절대 경로 import를 인식하려면 직접 OS 환경 변수를 설정할 필요가 있다. 터미널에 다음과 같이 입력하여 스토리북을 실행한다.

```bash
export NODE_PATH=src & npm run storybook
```

## Documentation

### Coding Convention

- [코딩 컨벤션](https://github.com/YeonBong/thatthat/wiki/Coding-Convention)

### Rules for Collaboration

- [Git & Github](https://github.com/YeonBong/thatthat/wiki/Rules-for-Collaboration-(Git))

### Firebase Datebase Structure
- [Firebase 데이터베이스 구조](https://github.com/YeonBong/thatthat/wiki/Database)

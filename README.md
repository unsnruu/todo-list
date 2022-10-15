# Todo List

`Todo List`로 시작하여 다시 `Todo List`로 돌아왔습니다. 멋진 프로젝트를 만들기 보다는 기본을 보여주는 것을 중요시 생각했습니다.

## 목차

## 배포 주소

## 사용한 기술 스택

<div>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white"/>
</div>

## 프로젝트 방향성과 기능

- TDD를 활용하여 컴포넌트를 제작하기
- 파이어베이스를 이용하여 실제 앱의 구현 보여주기
- redux를 사용하여 전역 상태 관리를 구현하기
- caching을 구현하기
- Authentication을 통해서 유저의 인증여부 확인하기

## 이슈

1. firebase를 통해 유저별로 데이터(todo)를 어떻게 다르게 보여줄 수 있을까?
2. 캐싱(Caching)을 어떻게 할 수 있을까?
3. react-router 6.4 대응과 firebase?
4. 로그인 여부에 따라 페이지를 어떻게 다르게 보여줄 수 있을까?
5. useUser을 사용해서 user 정보를 관리하는 게 맞는 방법일까?

- 왜냐하면 useUser을 사용하면 useUser을 실행할 떄마다 새로운 함수가 한 번 더 실행된다는 거나 마찬가지이기 때문.
- user 정보는 공유되는 정보이므로 굳이 그렇게 관리할 필요가 있을까 생각되는 것.
- 차라리 ContextAPI를 활용하는 방법이 낫지 않을까 싶다.

6. todos 데이터를 어떤 자료구조로 관리하는 게 나을까?

- 객체로 관리할지 배열로 관리할지 고민된다.

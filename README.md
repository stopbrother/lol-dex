# 리그오브레전드(LOL) 도감

Riot API를 활용한 리그 오브 레전드 정보 앱

# 배포 링크

https://lol-611kfftnb-stopbrothers-projects.vercel.app/champions

# 폴더 구조

<details>
<summary>폴더 구조</summary>
```
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜GeistMonoVF.woff
 ┃ ┃ ┗ 📜GeistVF.woff
 ┃ ┣ 📂items
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂rotation
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┣ 📂public
 ┣ 📂styles
 ┣ 📂types
 ┃ ┣ 📜Champion.ts
 ┃ ┣ 📜ChampionRotation.ts
 ┃ ┗ 📜Item.ts
 ┗ 📂utils
 ┃ ┣ 📜riotApi.ts
 ┃ ┗ 📜serverApi.ts
```
</details>

# 개발 환경

Next.js & TypeScript & tailwind CSS

# 주요 기능

### 챔피언 목록 페이지

![image](https://github.com/user-attachments/assets/e214003a-b3a2-4051-ac95-4dbd5cb754bd)
모든 챔피언의 목록을 표시
렌더링 방식: ISR
재검증 시간: 하루(86400)

### 챔피언 상세 페이지

![image](https://github.com/user-attachments/assets/6627d0d7-b528-4e59-91ea-5eb28a79d44a)
특정 챔피언의 상세 정보를 표시
렌더링 방식: SSR
서버 컴포넌트로 작성하여 서버 사이드에서 데이터를 가져옴

### 아이템 목록 페이지

![image](https://github.com/user-attachments/assets/f9aaa8ba-1a88-438d-b445-4c8237ee8b1d)
모든 아이템의 목룍을 표시
렌더링 방식: SSG
빌드시점에 페이지를 정적으로 생성

### 챔피언 로테이션 페이지

![image](https://github.com/user-attachments/assets/770ab07a-1d92-4542-83b9-f8017777f67a)
현재 무료로 플레이 가능한 챔피언들을 표시
렌더링 방식: CSR
클라이언트에서 데이터 가져와 렌더링

## Trouble Shooting

챔피언 로테이션 api 호출시 headers에 오류

```
headers: {"X-Riot-Token": apiKey}
이 호출과 일치하는 오버로드가 없습니다. 오버로드 1/2('(input: string | URL | Request, init?: RequestInit | undefined): Promise<Response>')
```

TypeScript에서는 process.env를 사용할때 기본적으로 타입이 string | undefined로 정의되어 있기 때문에 환경 변수를 사용할 때 타입 체크나 단언을 해야 한다고 한다.
그래서 as string으로 타입 단언을 사용하였다.
`const apiKey = process.env.RIOT_API_KEY as string;`

이후 로테이션 페이지에서 어떤 데이터가 가져와지는지 콘솔로 찍어 봤더니
`Uncaught (in promise) TypeError: Failed to fetch` 에러가 발생했다.

RiotAPI에 직접 클라이언트 측에서 요청을 보내려고 할 때 발생하는 오류라고 한다.
`const response = await fetch("/api/rotation");`를 사용해서 API대신 Next.js의 API 경로를 호출하여 확인 하였다.

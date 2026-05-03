/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "문인태",
    nameEn: "MOON INTAE",
    father: "문성일",
    mother: "박정미",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "안채영",
    nameEn: "AHN CHAEYOUNG",
    father: "안홍휘",
    mother: "강명옥",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-08",
    time: "13:00",
    venue: "JK아트컨벤션",
    hall: "아트리움홀 4층",
    address: "서울특별시 영등포구 문래로 164",
    tel: "02-2628-9100",
    mapLinks: {
      kakao: "https://kko.to/Ocril7ZoUf",
      naver: "https://naver.me/Gn0yrSdR"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "소중한 분들께서\n 귀한 걸음으로 함께해 주시어\n 저희의 앞날을 축복해 주신다면\n 더없는 기쁨이겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "여섯 해의 계절을 함께 지나며\n 서로의 사람이 된 저희,\n 이제 하나의 이름으로\n 새로운 이야기를 시작하려 합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "문인태", bank: "신한은행", number: "110-439-308470" },
      { role: "아버지", name: "문성일", bank: "농협은행", number: "171405-52-078120" },
      { role: "어머니", name: "박정미", bank: "농협은행", number: "170972-56-007117" }
    ],
    bride: [
      { role: "신부", name: "안채영", bank: "신한은행", number: "110-462-669389" },
      { role: "아버지", name: "안홍휘", bank: "신한은행", number: "625-02-640301" },
      { role: "어머니", name: "강명옥", bank: "신한은행", number: "110-035-647850" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "문인태 ♥ 안채영 결혼합니다",
    description: "2026년 8월 8일, 소중한 분들을 초대합니다."
  }
};

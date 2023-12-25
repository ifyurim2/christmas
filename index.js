// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "하랑이 조금만 힘내자!" },
  { "number": 2, "message": "너는 뭐든지 잘해낼 수 있어" },
  { "number": 3, "message": "힘들었던 만큼 좋은 결실 이룰거야" },
  { "number": 4, "message": "12월의 특별함을 내년엔 같이 보내자" },
  { "number": 5, "message": "너는 정말 귀여워" },
  { "number": 6, "message": "아프지말고 건강한 날만 될거야" },
  { "number": 7, "message": "화이트 크리스마스! 소원을 빌어봐" },
  { "number": 8, "message": "12월은 행복한 순간들이 가득한 달이야." },
  { "number": 9, "message": "우리 모두에게 찾아온 특별한 행복의 계절!" },
  { "number": 10, "message": "오늘만큼은 행복으로 가득 되길." },
  { "number": 11, "message": "12월, 행복이 가득한 당신과 나누는 소중한 시간." },
  { "number": 12, "message": "행복이 여러 가지 모습으로 찾아올 거야." },
  { "number": 13, "message": "김하랑은 여성상위를 좋아한다" },
  { "number": 14, "message": "너에겐 특별한 날이 되기를" },
  { "number": 15, "message": "아프지말고 행복하자" },
  { "number": 16, "message": "12월의 특별한 순간, 행복이 퍼져나가길." },
  { "number": 17, "message": "남은 기간도 잘해낼거야" },
  { "number": 18, "message": "너는 뭐든지 이룰 수 있어" },
  { "number": 19, "message": "나는 너를 믿어!" },
  { "number": 20, "message": "김하랑 최고!" },
  { "number": 21, "message": "김하랑 여드름짜주기 10회권" },
  { "number": 22, "message": "김유림과의 데이트 0회권" },
  { "number": 23, "message": "너는 하나님의 사랑이야" },
  { "number": 24, "message": "무엇이든지 해낼거야" }
];
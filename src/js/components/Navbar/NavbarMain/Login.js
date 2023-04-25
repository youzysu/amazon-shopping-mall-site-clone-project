import Component from '/src/js/components/base/Component.js';

export default class Login extends Component {
  getTemplate() {
    return `
<div class="login-area">
  <span class="label-text">안녕하세요, 로그인</span>
  <span class="main-text">계정 및 목록</span>
</div>
<dialog class="modal login-modal">
  <button class="login-btn">로그인</button>
  <div>
    <span>기존 사용자가 아니십니까?</span>
    <span><a href="/">여기에서 시작합니다.</a></span>
  </div>
</dialog>
<dialog class="modal extended-login-modal">
  <div class="base">
    <button class="login-btn">로그인</button>
    <div>
      <span>기존 사용자가 아니십니까?</span>
      <span><a href="/">여기에서 시작합니다.</a></span>
    </div>
  </div>
  <div class="extra">
    <div>
      <h3>귀하의 목록</h3>
      <ul>
        <li>목록 생성</li>
        <li>목록 또는 레지스트리 찾기</li>
        <li>AmazonSmile 자선 품목 목록</li>
      </ul>
    </div>
    <div>
      <h3>계정</h3>
      <ul>
        <li>계정</li>
        <li>주문</li>
        <li>권장 사항</li>
        <li>검색 기록</li>
        <li>워치리스트</li>
        <li>비디오 구매 및 대여</li>
        <li>Kindle 언리미티드</li>
        <li>콘텐츠 및 기기</li>
        <li>항목 구독 및 저장</li>
        <li>멤버십 및 구독</li>
        <li>음악 라이브러리</li>
      </ul>
    </div>
  </div>
</dialog>
    `;
  }
}

import Component from '/src/js/components/base/Component.js';

export default class Shipping extends Component {
  getTemplate() {
    return `
<a class="shipping-area" href="#">
  <div class="top">
    <img src="/src/assets/symbols/location.svg" alt="location icon" />
    <span class="label-text">배송처</span>
  </div>
  <span class="main-text">대한민국</span>
</a>
<dialog class="modal shipping-modal">
  <p>
    KR으로 배송할 품목을 표시하겠습니다. 다른 국가로 배송되는 품목을 보려면 배송 주소를
    변경하십시오.
  </p>
  <div>
    <button class="continue-btn">계속</button>
    <button class="address-btn">주소 변경</button>
  </div>
</dialog>
    `;
  }
}

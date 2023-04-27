import Component from '../../../base/Component.js';
import { debounce } from '/src/js/utils/utils.js';

export default class SearchBar extends Component {
  getTemplate() {
    return `
<input type="search" class="search-input" placeholder="검색 Amazon" />
<button type="submit" class="submit-btn"></button>
    `;
  }

  setEvent() {
    const { searchKeyword, recommendKeyword } = this.props;

    this.handleEvent(
      'input',
      '.search-input',
      debounce(({ target }) => searchKeyword(target.value), 300)
    );

    this.handleEvent(
      'click',
      '.search-input',
      debounce(({ target }) => {
        if (target.value) return;
        recommendKeyword();
      }, 300)
    );
  }
}

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

    this.addEvent(
      'input',
      '.search-input',
      debounce(({ target }) => searchKeyword(target.value), 300)
    );

    this.addEvent(
      'click',
      '.search-input',
      debounce(({ target }) => {
        if (target.value) return;
        recommendKeyword();
      })
    );
  }
}

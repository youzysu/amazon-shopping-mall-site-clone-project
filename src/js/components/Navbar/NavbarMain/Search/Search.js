import Component from '../../../base/Component.js';
import SearchStorage from '../Search/SearchStorage.js';
import SearchBar from './SearchBar.js';
import SearchPanel from './SearchPanel.js';
import { client } from '/src/js/domain/client.js';

export default class Search extends Component {
  async initState() {
    const searchStorage = new SearchStorage();

    this.state = {
      history: searchStorage.getSearchHistory(),
      keywords: [],
    };
  }

  getTemplate() {
    return `
<form class="search-bar" autocomplete="off"></form>
<ul class="search-panel"></ul>
    `;
  }

  renderChildren() {
    const { history, keywords } = this.state;
    const searchBarElement = this.element.querySelector('.search-bar');
    const searchPanelElement = this.element.querySelector('.search-panel');

    new SearchBar(searchBarElement, {
      searchKeyword: (value) => this.searchKeyword(value),
      recommendKeyword: () => this.recommendKeyword(),
    });
    new SearchPanel(searchPanelElement, {
      history: history,
      keywords: keywords,
    });
  }

  async recommendKeyword() {
    const recommend = await client.fetchRecommendWords(10);
    this.setState({ keywords: recommend });
  }

  async searchKeyword(value) {
    const autoComplete = await client.fetchAutoCompleteWords(value, 10);
    this.setState({ keywords: autoComplete });
  }
}

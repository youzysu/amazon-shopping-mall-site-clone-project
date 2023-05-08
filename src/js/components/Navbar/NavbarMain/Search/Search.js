import { debounce } from '../../../../utils/index.js';
import { Component } from '../../../base/Component.js';
import SearchModel from '../Search/SearchModel.js';
import SearchBar from './SearchBar.js';
import { SearchPanel } from './SearchPanel.js';

export default class Search extends Component {
  constructor(main) {
    super('search');
    this.main = main;
    this.model = new SearchModel();
    this.searchPanel = new SearchPanel({ deleteItem: (target) => this.deleteItem(target) });
    this.searchBar = new SearchBar({ closeSearchPanel: () => this.closeSearchPanel() });
    this.init();
  }

  initEventHandlers() {
    this.node.addEventListener(
      'click',
      debounce((event) => this.showRecommendWords(event), 300)
    );
    this.node.addEventListener(
      'input',
      debounce((event) => this.showAutoComplete(event), 300)
    );
    this.node.addEventListener('keydown', ({ key, isComposing }) =>
      this.handleKeyDown(key, isComposing)
    );
    this.node.addEventListener('submit', (event) => this.handleSubmit(event));
  }

  deleteItem(target) {
    const targetItem = target.closest('li');
    this.model.deleteSearchWord(targetItem.dataset.id);
  }

  async showRecommendWords({ target }) {
    const userInput = target.value;
    if (userInput) return;

    const { history, recommend } = this.model.getRecommend();
    this.searchPanel.render({ history: history, keywords: recommend });
    this.searchPanel.open();
    this.main.onDimmed();
  }

  async showAutoComplete(event) {
    const userInput = event.target.value;
    if (!userInput) {
      this.showRecommendWords(event);
      return;
    }

    await this.model.requestAutoCompleteWords(userInput, 10);
    const { autoComplete } = this.model.getAutoComplete();

    this.searchPanel.render({ keywords: autoComplete, history: [], value: userInput });
  }

  handleKeyDown(key, isComposing) {
    const isArrowDownKey = key === 'ArrowDown';
    const isArrowUpKey = key === 'ArrowUp';
    const isEscKey = key === 'Escape';

    if (!isComposing && (isArrowDownKey || isArrowUpKey)) {
      const value = this.searchPanel.onKeyDown(key);
      this.searchBar.setInputValue(value);
      return;
    }

    if (isEscKey) {
      this.closeSearchPanel();
    }
  }

  closeSearchPanel() {
    this.searchPanel.close();
    this.main.offDimmed();
  }

  handleSubmit(event) {
    event.preventDefault();

    const { search } = event.target.elements;
    const userInput = search.value;
    this.model.addSearchWord(userInput);

    const { history, recommend } = this.model.getRecommend();
    this.searchPanel.render({ history: history, keywords: recommend });
  }

  getTemplate() {
    return [this.searchBar.node, this.searchPanel.node];
  }
}

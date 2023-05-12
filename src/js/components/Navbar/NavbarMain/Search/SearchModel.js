import { BASE_API_DOMAIN, fetchData } from '../../../../utils/api.js';

export default class SearchModel {
  constructor() {
    this.history = {};
    this.autoComplete = [];
    this.recommend = [];
    this.init();
  }

  async init() {
    await this.requestRecommendWords(10);

    const store = JSON.parse(localStorage.getItem('searchHistory'));
    if (!store) return;
    this.history = store;
  }

  async requestRecommendWords(wordCount) {
    const RECOMMEND_API_PATH = new URL('recommend', BASE_API_DOMAIN);
    const recommendURL = `${RECOMMEND_API_PATH}?_limit=${wordCount}`;
    const recommendWords = await fetchData(recommendURL, 'word');

    this.recommend = recommendWords;
  }

  async requestAutoCompleteWords(searchWord, wordCount) {
    const AUTO_COMPLETE_API_PATH = new URL('autoComplete', BASE_API_DOMAIN);
    const autoCompleteURL = `${AUTO_COMPLETE_API_PATH}?word_like=${searchWord}&_limit=${wordCount}`;
    const autoCompleteWords = await fetchData(autoCompleteURL, 'word');

    this.autoComplete = autoCompleteWords;
  }

  addSearchWord(value) {
    this.deleteDuplicateWord(value);
    const id = Date.now();
    this.history[id] = value;
    this.saveLocalStorage();
  }

  deleteDuplicateWord(value) {
    for (const id in this.history) {
      if (this.history[id] === value) {
        this.deleteSearchWord(id);
      }
    }
  }

  deleteSearchWord(id) {
    delete this.history[id];
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem('searchHistory', JSON.stringify(this.history));
  }

  getRecommend() {
    return {
      history: Object.entries(this.history).slice(-5).toReversed(),
      recommend: this.recommend,
    };
  }

  getAutoComplete() {
    return { autoComplete: this.autoComplete };
  }
}

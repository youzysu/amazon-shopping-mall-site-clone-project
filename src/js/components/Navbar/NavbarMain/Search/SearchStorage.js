const STORAGE_KEY = 'searchHistory';

export default class SearchStorage {
  #searchHistory;

  constructor() {
    this.#searchHistory = {};
    this.init();
  }

  init() {
    const store = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!store) return;
    this.#searchHistory = store;
  }

  addSearchWord(value) {
    const id = Date.now();
    this.#searchHistory[id] = value;

    this.saveLocalStorage();
  }

  deleteSearchWord(id) {
    delete this.#searchHistory[id];
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.#searchHistory));
  }

  getSearchHistory() {
    return this.#searchHistory;
  }
}

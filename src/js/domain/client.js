const BASE_API_DOMAIN = 'http://localhost:3000';
const RECOMMEND_API_PATH = 'recommend';
const AUTO_COMPLETE_API_PATH = 'autoComplete';
const PROP_NAME = 'word';
const COUNT = 10;

export const client = {
  async fetchAutoCompleteWords(searchWord) {
    const autoCompleteURL = `${BASE_API_DOMAIN}/${AUTO_COMPLETE_API_PATH}?${PROP_NAME}_like=${searchWord}&_limit=${COUNT}`;
    const autoCompleteWords = await this.fetchWords(autoCompleteURL);

    return autoCompleteWords;
  },

  async fetchRecommendWords() {
    const recommendURL = `${BASE_API_DOMAIN}/${RECOMMEND_API_PATH}?_limit=${COUNT}`;
    const recommendWords = await this.fetchWords(recommendURL);

    return recommendWords;
  },

  async fetchWords(url) {
    try {
      const wordList = await this.fetchJSON(url);
      const words = wordList.map((list) => list.word);

      return words;
    } catch (err) {
      console.log(err);
    }
  },

  async fetchJSON(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  },
};

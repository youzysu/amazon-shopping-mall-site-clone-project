import Component from '../../../base/Component.js';

export default class SearchPanel extends Component {
  getTemplate() {
    const { history, keywords } = this.props;

    const historyView = this.getAllHistoryTemplate(history);
    const keywordView = this.getAllKeywordTemplate(keywords);

    return historyView + keywordView;
  }

  getAllHistoryTemplate(history) {
    const historyInfo = Object.entries(history).slice(-5);

    const historyTemplate = historyInfo.reduce((acc, cur) => {
      const historyId = cur[0];
      const historyWord = cur[1];
      return acc + this.getHistoryTemplate(historyId, historyWord);
    }, '');

    return historyTemplate;
  }

  getHistoryTemplate(id, word) {
    return `
<li data-id="${id}" class="history">
  <a href="#">${word}</a><button class="delete-btn"></button>
</li>
    `;
  }

  getAllKeywordTemplate(keywords) {
    const keywordTemplate = keywords.reduce((acc, cur) => {
      return acc + this.getKeywordsTemplate(cur);
    }, '');

    return keywordTemplate;
  }

  getKeywordsTemplate(keyword) {
    return `
<li class="keyword">
  <a href="#"><button class="shortcut-btn"></button>${keyword}</a>
</li>
    `;
  }
}

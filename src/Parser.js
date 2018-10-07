import * as rssParser from 'react-native-rss-parser';



class Work extends Component {

  rssFeed() {
    return fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        console.log(rss.title);
        console.log(rss.items.length);
      });
  }

  render() {
    return (
      <ul>
        {this.rssFeed.bind(this)}
      </ul>

    );
  }
}
o;

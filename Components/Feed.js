import React from 'React';
import {
  View, Text, FlatList, StyleSheet, ScrollView,
} from 'react-native';
import NewsCard from './NewsCard.js';


export default class Feed extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = { trend: '', feed: {} };
  }

  componentDidMount() {
    this._isMounted = true;
    console.log('LINE: 15, Feed.js: this.props.trend: ', this.props.trend);
    return fetch(`https://newsapi.org/v2/everything?q=${this.props.trend}&apiKey=ae4f730913f9476f97ccdda19fffe2c4`)
      .then(response => response.json())
      .then((responseJson) => {
        const { articles } = responseJson;
        if (this._isMounted) {
          this.setState({
            feed: articles,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }


  render() {
    console.log('LINE: 31, Feed.js: this.state.feed: ', this.state.feed);
    return (
      <View style={styles.container}>
        <NewsCard feed={this.state.feed} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

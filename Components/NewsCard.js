import React from 'react'
import {
  View, ScrollView, Image, Text, ImageBackground, StyleSheet, Linking, TouchableHighlight,
} from 'react-native'
import Webview from './Webview.js'

class NewsCard extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.onForward = this.onForward.bind(this)
  }

  onForward(url) {
    const nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: Webview,
      title: url,
      passProps: { navigator, index: nextIndex, url },
    });
  }

  render() {
    console.log('LINE: 24, NewsCard.js: this.props.feed: ', this.props.feed)


    const feed = this.props.feed;
    
    const renderedNewsCards = Object.entries(feed).map(([key, card]) => (
      <TouchableHighlight
        key={key}
        style={styles.card}
        onPress={() => this.onForward(card.url)}
      >
        
          <View style={styles.view}>
            <Image source={{uri: card.urlToImage || 'https://cdn3.iconfinder.com/data/icons/kitchen-universe-4/140/12_pretzel-256.png'}} style={styles.image} />
            <Text key={key} style={styles.header}>
              {card.title}
            </Text>

            <Text style={styles.description}>
              {card.description}
            </Text>
          </View>

      </TouchableHighlight>
    ));

    return (
      <ScrollView
        style={styles.cardContainer}
      >
        {renderedNewsCards}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    opacity: 0.6,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    overflow: 'scroll',
  },
  header: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 6,
    marginRight: 6,
  },
  description: {
    color: 'black',
    backgroundColor: 'transparent',
    alignSelf: 'auto',
    marginBottom: 6,
    marginLeft: 8,
    marginRight: 8,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius:10,
    borderBottomRightRadius: 10,
    paddingBottom: 5,
    margin: 6,
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'column',
    borderColor: '#D3D3D3',
    overflow: 'scroll',
  },
  image: {
    height: 180,
    minWidth: '100%',
    paddingTop: 6,
    position: 'relative',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
  view: {
    overflow: 'hidden',
    borderRadius: 23,
  }
});

export default NewsCard;

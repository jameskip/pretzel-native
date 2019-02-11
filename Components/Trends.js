import React from 'React';
import {
  View, Text, FlatList, StyleSheet,
} from 'react-native';
import Feed from './Feed.js';

export default class Trends extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onForward = this.onForward.bind(this);
    this.state = { trends: undefined };
  }

  componentDidMount() {
    return fetch('https://trends.google.com/trends/hottrends/visualize/internal/data')
      .then(response => response.json())
      .then((responseJson) => {
        const top20Trends = responseJson.united_states;
        this.setState({
          trends: top20Trends,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onForward(item) {
    const nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: Feed,
      title: item,
      passProps: { index: nextIndex, trend: item },
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.trends}
          keyExtractor={
            item => item
          }
          renderItem={({ item }) => (
            <Text key={item} onPress={() => this.onForward(item)} style={styles.item}>
              {item}
            </Text>
          )}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 1,
    fontSize: 18,
    paddingTop: 10,
  },
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    flexDirection: 'column',
  },
  header: {
    paddingBottom: 20,
    fontSize: 48,
  },
});

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Webview extends Component {
  constructor(props) {
    super(props)

  }
  

  render() {
    console.log('PROPS::::::  ', this.props)
    return (
      <WebView source={{ uri: `${this.props.url}` }} />
    );
  }
}
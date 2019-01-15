import "./config/reactotron";
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./components/TodoList";

const App = () => (
  <View>
    <Provider store={store}>
      <Text>Olá Mundo</Text>
      <TodoList />
    </Provider>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;

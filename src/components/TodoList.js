import React, {Component} from "react";
import {View,Text,Button} from "react-native";
import { bindActionCreators } from "redux";

import {connect} from "react-redux";
import * as todoListActions from "../store/actions/todoList";

const TodoList = ({todos, requestList}) => (
  <View>
    {todos.data.map(item => <Text key={item.id}>{item.text}</Text>)}
    <Button title="Adicionar" onPress={() => requestList()}></Button>
    {todos.loading && <Text>Carregando...</Text>}
  </View>
);

const mapDispatchToProps = dispatch  =>
bindActionCreators(todoListActions,dispatch);

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

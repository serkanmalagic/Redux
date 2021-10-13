import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

class Page extends Component {
    render() {
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 25, fontWeight: "bold", margin: 10 }}> {this.props.durum} </Text>
                <TouchableOpacity onPress={() => { this.props.degistir() }}>
                    <Text style={{}}>Redux random int press</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateProps = (state) => {
    return {
        durum: state.durum
    }
}

const mapDispatchToProps = (dispatch) => {

    var randomNumber = Math.floor(Math.random() * 1000) + 1;

    return {
        degistir: () => dispatch({ type: 'setDurum', payload: (Math.floor(Math.random() * 1000) + 1).toString() })
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Page);
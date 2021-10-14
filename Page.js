import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Button, Pressable, StyleSheet
} from 'react-native';
import { connect } from "react-redux";

class Page extends Component {

    state = {
        data: {
            'activity': 'loading...',
            'participants': 'loading...',
            'price': 'loading...'
        }
    }


    getJsonData = () => {
        fetch('https://www.boredapi.com/api/activity/', { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson
                })
            })
            .catch((error) => {
                console.error(error)
            });
    }

    componentDidMount = () => {
        this.getJsonData()
    }

    render() {
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ backgroundColor: "blue", width: "100%", height: "30%", justifyContent: "center" }}>
                    <Text style={{ fontSize: 25, margin: 10, fontWeight: "bold" }}>Activity : {this.state.data['activity']}</Text>
                    <Text style={{ fontSize: 25, margin: 10, fontWeight: "bold" }}>Participants : {this.state.data['participants']}</Text>
                    <Text style={{ fontSize: 25, margin: 10, fontWeight: "bold" }}>Price : {this.state.data['price']}</Text>

                </View>
                <Text style={{ fontSize: 25, fontWeight: "bold", margin: 10 }}> {this.props.durum} </Text>

                <Pressable style={styles.pressableHeader} onPress={this.getJsonData}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>Fetch Request</Text>
                </Pressable>

                <Pressable style={styles.pressableBottom} onPress={() => { this.props.degistir() }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>Random Int Redux</Text>
                </Pressable>
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

const styles = StyleSheet.create({
    pressableHeader: {
        backgroundColor: "aqua",
        margin: 10,
        borderRadius: 7,
        width: 200,
        height: "20%",
        alignItems: "center",
        justifyContent: "center"
    },
    pressableBottom: {
        backgroundColor: "pink",
        margin: 10,
        borderRadius: 7,
        width: 200,
        height: "20%",
        alignItems: "center",
        justifyContent: "center"
    },
});

export default connect(mapStateProps, mapDispatchToProps)(Page);
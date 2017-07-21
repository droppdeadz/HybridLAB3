import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
    Alert,
    Button

} from 'react-native';

export default class lab3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'Placeholder',
            arrayList: ['asdd', 'asdffrg', 'hfghtry', 'hytyyujty'],
        };
    }
    _handleName(event) {
        console.log('its work');
    }
    _onPush() {
        this.setState({
            arrayList: [...this.state.arrayList, this.state.text],
        })
    }
    _onPop() {
        Alert.alert(
            'Confirmation',
            'Are u sure?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => this._Pop() },
            ],
            { cancelable: false }
        )
    }
    _Pop() {
        var index = this.state.arrayList.indexOf(this.state.arrayList)
        this.setState({
            arrayList: this.state.arrayList.slice(0, index)
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container2}>
                    <TextInput style={{ width: 335, height: 50 }}
                        onSubmitEditing={(event) => this._handleName(event)} />
                    <View style={{ margin: 5 }}>
                        <Button
                            onPress={()=>this._onPush()}
                            title="PUSH"
                        color="#000000"/>
                    </View>
                    <View style={{ margin: 5 }}>
                        <Button
                            onPress={()=>this._onPop()}
                            title="POP"
                    color="#000000"/>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={this.state.arrayList}
                            renderItem={({ item }) => <Text>{item}</Text>} />
                    </View>
                </View>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        flex: 1,
        flexDirection: 'column',
    },
    container2: {
        borderWidth: 2,
        margin: 20,
        flex: 1,
        backgroundColor: '#f0faad',
    },
    container3: {
        flex: 2,
        flexDirection: 'column',
        margin: 20,
        borderWidth: 2,
    }
})
import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View, TouchableWithoutFeedback, StatusBar, Keyboard} from 'react-native';
import MapView, {Polygon} from 'react-native-maps';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Content, Item, Input} from 'native-base';

export default class SettingsScreen extends Component{
    render (){
        return(
            <Container>
                <Header style ={{backgroundColor: '#cc6600'}} 
                androidStatusBarColor = '#994d00'>
                    <Left>
                    <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name='menu'/>
                    </Button>
                    </Left>
                    <Body>
                    <Title>GeoFind</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Text>this is the settings screen</Text>
                </Content>
        </Container>
        )
    }
}
        
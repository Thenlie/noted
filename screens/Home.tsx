import React from 'react';
import { Button, Text, View } from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackParams';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({navigation}: Props ) => {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button 
            title="Task Lists"
            onPress={() => navigation.navigate('TaskLists')}
        />
    </View>
    );  
}

export default HomeScreen;
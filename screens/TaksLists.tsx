import React from 'react';
import { Button, Text, View } from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackParams';

type TaskListsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: TaskListsScreenNavigationProp;
}

const TaskListScreen = ({navigation}: Props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Task List Screen</Text>
            <Button 
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );  
}

export default TaskListScreen;
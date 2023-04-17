import React, {useContext} from 'react';
import {TabRoutes} from './tabNavigator';
import { StackNavigator } from './stackNavigator';
import {AuthContext} from '../contexts/AuthContext';

export default function Routes() {
    
    const { loggedIn } = useContext(AuthContext);
       
    return loggedIn ?
    <TabRoutes />
    :
    <StackNavigator />
    
}
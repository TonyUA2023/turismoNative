import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//apollo

import client from './config/apollo';
import { ApolloProvider } from '@apollo/client';
const turismoApp = () => {
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
}

AppRegistry.registerComponent(turismoApp, () =>App);

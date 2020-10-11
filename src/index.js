import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './reducks/store/store'
import { ConnectedRouter } from 'connected-react-router';
import * as History from 'history';
import {MuiThemeProvider} from '@material-ui/core'
import {theme} from './assets/theme'
import App from './App';
import * as serviceWorker from './serviceWorker';

const history = History.createBrowserHistory();
//　store.jsで作ったcreateStore関数を実行して定数化するとstoreが作られる
export const store = createStore(history);

// Provider はreact-reduxが提供するReduxとReactの仲介役
// ProviderでラップされたContainerは内部でstoreにアクセスできるようになる
ReactDOM.render(
    <Provider store={store} >  
        <ConnectedRouter history={history}>
            <MuiThemeProvider theme={theme}>
                <App style={{backgroundColor:  '#f6f6f4'}} />
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider >,
    document.getElementById('root')
);

serviceWorker.unregister();


// Uncaught Error: The error you provided does not contain a stack trace.

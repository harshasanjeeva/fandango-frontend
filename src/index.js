import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import  store  from './store/configureStore'

ReactDOM.render(
    <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
<App />
</PersistGate>
 </Provider>, document.getElementById('root'));
registerServiceWorker();
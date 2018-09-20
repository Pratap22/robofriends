import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { searchRobot } from './reducers';
const store = createStore (searchRobot);

ReactDOM.render(<Provider store = {store}>
                         <App/>
                </Provider>
                         ,document.getElementById('root'));
registerServiceWorker();
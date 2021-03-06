import {render} from 'react-dom';
import {restoreSession} from './services/session/authorization';
import Routes from './routes';
import './styles/base-styles.scss';
import 'antd/dist/antd.css';
init();

render(Routes, document.querySelector('#app'));


function init() {
    restoreSession();
}

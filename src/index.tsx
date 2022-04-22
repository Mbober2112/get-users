import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/reduxStore';
import ReactDOM from 'react-dom';

ReactDOM.render((
  <BrowserRouter>
     <Provider store={store}>
       <App />
     </Provider> 
  </BrowserRouter>
), document.getElementById('root'))

reportWebVitals();

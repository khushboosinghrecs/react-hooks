import {creatStore} from 'redux';
import counterReducer from './Reducer'

const store = creatStore(counterReducer);
export default store;
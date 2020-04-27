import HeaderFooterReducer from './HeaderFooterReducer';
import { combineReducers } from 'redux';

// Combine all reducers
const allReducers = combineReducers({
    headerFooter: HeaderFooterReducer,
});

export default allReducers;
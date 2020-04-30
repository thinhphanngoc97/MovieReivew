import HeaderFooterReducer from './HeaderFooterReducer';
import ReloadReducer from './ReloadReducer';
import { combineReducers } from 'redux';

// Combine all reducers
const allReducers = combineReducers({
    headerFooter: HeaderFooterReducer,
    reload: ReloadReducer,
});

export default allReducers;
import { combineReducers } from 'redux';
import repos from '../containers/Repos/reducer';
import issues from '../containers/Issues/reducer';

export default combineReducers({
  repos,
  issues
});

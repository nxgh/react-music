import { combineReducers } from 'redux'

import { reducer as recommendRender } from './Recommend'
import { reducer as PlayListReducer } from './PlayList'
export default combineReducers({
  recommend: recommendRender,
  playlist: PlayListReducer,
})

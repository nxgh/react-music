import { combineReducers } from 'redux'

import { reducer as recommendRender } from './Recommend'

export default combineReducers({
  recommend: recommendRender,
})

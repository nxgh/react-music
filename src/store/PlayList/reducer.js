import * as actionTypes from '../constants'

const defaultState = {
  currentPlayList: {},
  enterLoading: false,
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PLAYLIST:
      return { ...state, currentPlayList: action.data }
    case actionTypes.CHANGE_ENTER_LOADING:
      return { ...state, enterLoading: action.data }
    default:
      return state
  }
}

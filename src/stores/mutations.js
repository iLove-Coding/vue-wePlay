import UPDATE_CURRENT_VIEW from './mutation.types';

export default {
    [UPDATE_CURRENT_VIEW](state, value) {
        state.currentView = value
    }
}
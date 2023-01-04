import {legacy_createStore as createStore} from 'redux';

const reducerFn = (state = {counter: 0}, action) =>{
    // Needs to be a synchronous function
    // We should not mutate the original state

    if(action.type == "INC"){
        return {counter: state.counter+1}
    }

    return state;
}
const store = createStore(reducerFn);

export default store;
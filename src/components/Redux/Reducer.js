const initialState = 0;

const counterReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'INCREAMENT':
            return state +1;
        case 'DECREAMENT':
            return state -1;
        default:
            return state;
    }
}

export default counterReducer;
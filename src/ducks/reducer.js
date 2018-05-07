const initial_state={
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';

export function update_loan_type(loanType){
    return{
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

export function update_property_type(property){
    return{
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function update_city(city){
    return{
        type: UPDATE_CITY,
        payload: city
    }
}

function reducer(state=initial_state, action){
    switch(action.type){
        case UPDATE_LOAN_TYPE:
        return Object.assign({}, state, {loanType: action.payload});
        case UPDATE_PROPERTY_TYPE:
        return Object.assign({}, state, {property: action.payload})
        default:
        return state;
    }
}

export default reducer;
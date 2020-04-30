var defaultState = { 
    isReload: false
}

export default (preState = defaultState, action) => {
    switch (action.type) {
        case 'RELOAD_COMPONENT':
            return {
                ...preState,
                isReload: true
            };
        default:
            return preState;
    }   
}
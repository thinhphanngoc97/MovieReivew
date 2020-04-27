var defaultState = { 
    isShow: true, 
    // 1: full option, 0: do not show banner
    headerType: 1 
}

export default (preState = defaultState, action) => {
    switch (action.type) {
        case 'HIDE_HEADER_FOOTER':
            return {
                ...preState,
                isShow: false
            };
        case 'SHOW_HEADER_FOOTER_FULL_OPTION':
            return {
                ...preState,
                isShow: true,
                headerType: 1
            };
        case 'HIDE_BANNER':
            return {
                ...preState,
                isShow: true,
                headerType: 0
            };
        default:
            return preState;
    }   
}
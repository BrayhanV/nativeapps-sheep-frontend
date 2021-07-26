export const reducer = (state, action) => {
    switch (action.type){
        case "SET_REPORTS": 
            return {
                ...state,
                reports: action.reports
            }
    }
}
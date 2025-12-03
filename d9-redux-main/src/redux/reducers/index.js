const initialState = {
    favourite: {
        content: []
    }
}

const mainReducer = function (currentState = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_FAV':
            return {
                ...currentState,
                favourite: {...currentState.favourite, 
                    content : [...currentState.favourite.content, action.payload]
                }
            }

        case 'REMOVE_FROM_FAV':
            return {
                ...currentState,
                favourite: {
                    ...currentState.favourite.content.filter((company) => {
                        if (company.id === action.payload) {
                            return false
                        } else {
                            return true
                        }
                    }),
                }

                
            }
            default: 
                return currentState
    }

}

export default mainReducer
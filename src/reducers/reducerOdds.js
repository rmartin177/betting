export const saveOperation = (state, action) => ({
    ...state,
    operation: state.operation.concat(action.operation)
})

export const calculate = (state, action) => ({
    ...state, 
    probability: {
        adjust: {
            n1 : action.prob[0],
            n2 : action.prob[1]
        }
}
})


const Filter_rud = (state, action) => {
switch (action.type) {
    case "Sort_change":
        return{
            ...state,
            sort:action.payload
        }
        break;
        case "Size_change" :
            return {
                ...state,
                size:action.payload
            }

    default:
        break;
}

}

export default Filter_rud
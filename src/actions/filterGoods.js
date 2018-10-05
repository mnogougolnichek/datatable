
export const filterGoods = (arr, filter) => dispatch =>{
    let payload = arr.filter(item => {
        return item.name.indexOf(filter)>-1});
    dispatch({type: 'FILTER_GOODS', payload: payload});
};
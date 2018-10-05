
export const setPagination = (len, rowsQuantity) => dispatch =>{
    if(rowsQuantity === undefined){
        rowsQuantity = 5;
    }else if(typeof(rowsQuantity)==="string"){
        rowsQuantity = parseInt(rowsQuantity, 10);
    }

    let quantity = Math.ceil(len/rowsQuantity),
        buttons = [];

    for(let i=0;i<quantity;i++){
        buttons.push(i);
        console.log(buttons);
    }
    dispatch({type: 'SET_PAGINATION', payload: buttons});
};
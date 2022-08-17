

document.getElementById('btn-deposit').addEventListener('click',function(){
   //get the input id
   //get the input id value
   //convert a string to number
    const newDepositAmount = getInputFieldValueById('deposit-field');

    //get previous deposit total by id
    const previousDepositTotal = getTextElementValueById('deposit-total');
    
    //calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    //set deposit total value
    setTextElementValueById('deposit-total',newDepositTotal);

    //get previous balance using the function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal)
})
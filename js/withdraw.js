//
// add withdraw button event handler
// get withdraw amount using by getInputFieldValueById function
// get previous withdraw amount using by getTextElementValueById function
//calculate new withdraw total and set the value
// set the new withdraw total using by setTextElementValueById function
// get previous total balance using by getTextElementValueById function
//calculate new balance total
// set the new balance total using by setTextElementValueById function


document.getElementById('btn-withdraw').addEventListener('click',function(){
   const newWithdrawAmount = getInputFieldValueById('withdraw-field');
   const previousWithdrawTotal = getTextElementValueById('withdraw-total')

   const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
   setTextElementValueById('withdraw-total',newWithdrawTotal);

   const previousBalanceTotal = getTextElementValueById('balance-total');
   const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
   setTextElementValueById('balance-total',newBalanceTotal);

})
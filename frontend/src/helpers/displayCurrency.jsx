const displayNARCurrency = (num) => {
    // Convert to a number and ensure it's rounded to two decimal places
    const roundedNum = Number(num).toFixed(2);

    // Create a number formatter for Nigerian Naira
    const formatter = new Intl.NumberFormat('en-NG', { 
        style: 'currency',
        currency: 'NGN', 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
   
    return formatter.format(roundedNum);
}

export default displayNARCurrency;

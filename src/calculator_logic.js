function calculateTipAmountPerPerson(bill, percentage, peopleNumber) {
  return (bill * percentage) / 100 / peopleNumber;
}

function calculateTotal(bill, peopleNumber, tipAmountPerPerson) {
  return bill / peopleNumber + tipAmountPerPerson;
}

export { calculateTipAmountPerPerson, calculateTotal };

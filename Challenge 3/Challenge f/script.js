let date = 2050
let status = 'student'
let count = 0

if (date === 2050) {
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	count = count + 4

	if (status === "student") {
	  console.log('June', 'Youth Day')
		count = count + 1
  } else if  (status === "parent") {
	console.log('December', 'Christmas Day')
	  count = count + 1
}

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')

	console.log('December', 'Day of Reconciliation')
	count = count + 3



	console.log('December', 'Day of Goodwill')
	count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)

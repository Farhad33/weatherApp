export const weeks = {
	0: 'Sunday',
	1: 'Monday',
	2: 'Tuesday',
	3: 'Wednesday',
	4: 'Thursday',
	5: 'Friday',
	6: 'Saturday'
};

export const months = {
	0: 'January',
	1: 'February',
	2: 'March',
	3: 'April',
	4: 'May',
	5: 'June',
	6: 'July',
	7: 'August',
	8: 'September',
	9: 'October',
	10: 'November',
	11: 'December'
};

export const postfix = (day) => {
	let lastDigit = `${day}`;
	lastDigit = lastDigit[lastDigit.length - 1];
	switch (lastDigit) {
		case '1':
			return 'st';
		case '2':
			return 'nd';
		case '3':
			return 'rd';
		default:
			return 'th';
	}
};

export const dateFormat = (props) => {
	let timeStamp = props.current ? props.current.dt  * 1000 : new Date();
	let time = new Date(timeStamp);
	let day = time.getDay();
	let month = time.getMonth();
	let dayOfMonth = time.getDate();
	let dayOfMonthPostfix = postfix(dayOfMonth);
	let year = time.getFullYear();
	return `${weeks[day]},
	${months[month]}
	${dayOfMonth}${dayOfMonthPostfix}
	${year}`;
};

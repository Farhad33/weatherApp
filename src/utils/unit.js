export const conversion = (unit, temp) => {
	switch (unit) {
		case "Celsius":
			return `${Math.round(temp - 273.15)}°C`;
		case "Fahrenheit":
			return `${Math.round((9/5) * (temp - 273) + 32)}°F`
		default:
			return `${temp}`
	}
}

export const unitDefault = () => {
	let local = window.localStorage;
	let localUnit = local.getItem('unit');
	if (localUnit) {
		return localUnit
	} else {
		local.setItem('unit', 'Celsius');
		return 'Celsius';
	}
}

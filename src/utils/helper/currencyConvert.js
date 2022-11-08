export const currencyConvert = (num) => {
	let separator = ""
	let numStr = num
	if (typeof num === "number") {
		numStr = num.toString()
	}
	let numLeft = numStr.length % 3,
		rupiah = numStr.substr(0, numLeft),
		thousand = numStr.substr(numLeft).match(/\d{3}/g)

	if (thousand) {
		separator = numLeft ? "." : ""
		rupiah += separator + thousand.join(".")
	}
	return rupiah
}

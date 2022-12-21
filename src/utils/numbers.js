export const format2Digits = myNumber => (Math.round(myNumber * 100) / 100).toFixed(2);

export const formatUsdCurrency = myNumber => {
	const f = new Intl.NumberFormat('en-us', {
		currency: 'USD',
		currencyDisplay: 'narrowSymbol',
		style: 'currency',
	});
	return f.format(myNumber);
};

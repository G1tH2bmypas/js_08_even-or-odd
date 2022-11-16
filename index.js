function evenOrOdd(n) {
	if ( n < 0 ) {
		return 'NEGATIVE';
	} else if ( n === 0 ){
		return 'ZERO';
	} else if ( n % 2 === 1 ){
		return 'ODD';
	} else if ( n % 2 === 0 ){
		return 'EVEN';
	};
}

module.exports = evenOrOdd;
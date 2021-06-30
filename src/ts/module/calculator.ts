export default function calculator() {
	let prevVal: string = '0';
	let op: string = '';
	let currVal: string = '0';

	const totalH1 = document.getElementById('total');

	function onDigitClicked(e: Event) {
		if (Number(currVal) >= 100 || Number(currVal) <= -100)
			return ;
		currVal = String(Number(currVal) * 10);
		currVal = String(currVal + Number(e.target as Element));
		totalH1!.innerHTML = String(currVal);
	}

	function onACClicked(e: Event) {
		prevVal = '0';
		op = '';
		currVal = '0';
		totalH1!.innerHTML = '0';
	}

	function onOperationClicked(e: Event) {
		if (e.target!.toString() === '=')
		{
			switch (op) {
				case '+':
					currVal = String(Number(currVal) + Number(prevVal));
					console.log(currVal);
					totalH1!.innerHTML = String(currVal);
					op = '';
					break ;
				case '-':
					currVal = String(Number(prevVal) - Number(currVal));
					totalH1!.innerHTML = String(currVal);
					op = '';
					break ;
				case 'X':
					console.log('prevVal =' + prevVal);
					console.log('currVal =' + currVal);
					currVal = String(Number(currVal) * Number(prevVal));
					totalH1!.innerHTML = String(currVal);
					op = '';
					break ;
				case '/' :
					currVal = String(Number(prevVal) / Number(currVal));
					totalH1!.innerHTML = String(currVal);
					op = '';
					break ;
			}
		}
		else {
			op = e.target!.toString();
			prevVal = currVal;
			currVal = '0';
		}
	}
	document.getElementsByClassName('digits')[0].addEventListener('click', onDigitClicked);
	document.getElementsByClassName('modifier')[0].addEventListener('click', onACClicked);
	document.getElementsByClassName('operations')[0].addEventListener('click', onOperationClicked);
}

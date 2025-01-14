function calculate() {
	var page = parseFloat(document.getElementById('page').value);
	var spine;
	if (isNaN(page)) {
		alert('정수를 입력해주세요.')
	} else if (!Number.isInteger(page)) {
		alert('정수를 입력해주세요.')
	} else {
		spine = Number((0.046*page).toFixed(1))/10;
		document.getElementById('spine_width').innerText = spine.toFixed(1);
		document.getElementById('width').innerText = Number(((6 + 210*2)/10 + spine).toFixed(2));
		document.getElementById('height').innerText = 30.3;
		document.getElementById('fromTop').innerText = 0.3;
		document.getElementById('fromLeft').innerText = Number(((3 + 210)/10 + spine).toFixed(2));
	}
}

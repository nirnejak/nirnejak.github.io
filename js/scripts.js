function showContactModal() {
	var modal = document.getElementById('contactModal');
	modal.style.display = 'block';
}

function hideContactModal() {
	var modal = document.getElementById('contactModal');
	modal.style.display = 'none';
}

window.addEventListener('click', function(e) {
	var modal = document.getElementById('contactModal');
	if(e.target == modal){
		modal.style.display = 'none';
	}
});
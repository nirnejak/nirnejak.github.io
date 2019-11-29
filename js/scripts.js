const modal = document.getElementById('contactModal');

document.querySelector('.contactMe').addEventListener('click', e => {
	modal.style.display = 'block';
})

document.querySelector('.closeBtn').addEventListener('click', e => {
	modal.style.display = 'none';
})

window.addEventListener('click', e => {
	if (e.target === modal) {
		modal.style.display = 'none';
	}
});
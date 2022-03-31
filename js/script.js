const btnSubmit = document.getElementById('submit');
const email = document.getElementById('email');

btnSubmit.addEventListener('click', e => {

	e.preventDefault();

	emailValidation();

});

function emailValidation() {

	const emailValue = email.value.trim();

	if(emailValue === '') {

		setErrorFor(email, 'O campo não pode ficar vázio!');
		email.focus();

	} else if (!isValidEmail(emailValue)) {

		setErrorFor(email, 'Oops! Esse e-mail é inválido.');

	} else {

		setSuccessFor(email, 'Obrigado por se inscrever!');
		email.disabled = true;
		return true;

	}

};

function setErrorFor(input, message) {

	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'box-message error';
	small.innerText = message;
}

function setSuccessFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'box-message success';
	small.innerText = message;
}
	
function isValidEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/.test(email);
}

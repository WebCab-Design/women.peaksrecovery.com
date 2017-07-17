window.addEventListener('DOMContentLoaded', function () {

	var form = document.querySelector('.form');
	if (form) {
		Astatine.submit({
			query: form,
			method: 'post',
			responseType: 'json',
			action: 'https://www.enformed.io/zpn17s0',
			prepare: function (data, resolve) {
				data['*default_email'] = 'bburns@peaksrecovery.com';
				return resolve(data);
			},
			complete: function (error, success) {
				var response = document.querySelector('.response');
				if (error) {
					console.log(error);
					response.style.color = 'red';
					response.innerText = 'Error Plese See Console';
				} else {
					response.style.color = 'green';
					response.innerText = 'Form Is Submitted';
				}
			}
		});
	}
	var oldIndex = 0;
	var tabs = document.querySelectorAll('.tab');
	var panels = document.querySelectorAll('.panel');
	function tabHandler () {
		tabs[i].addEventListener('click', function () {
			var index = this.getAttribute('data-index');

			tabs[oldIndex].classList.remove('active');
			tabs[index].classList.toggle('active');
			panels[oldIndex].classList.remove('active');
			panels[index].classList.toggle('active');

			oldIndex = index;
		});
	}

	for (var i = 0; i < tabs.length; i++) {
		tabs[i].setAttribute('data-index', i);
		tabHandler();
	}
});

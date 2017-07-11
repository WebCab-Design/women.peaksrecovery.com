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

	var tprcOfficeGallery = document.querySelector('.tprc-office-gallery');
	if (tprcOfficeGallery) {
		Astatine.ajax({
			method: 'get',
			action: 'https://res.cloudinary.com/dbc2wlvk8/image/list/tprc-office.json',
			success: function (xhr) {
				var list = JSON.parse(xhr.response);
				var largeImages = [];
				var smallImages = [];

				for (var i = 0, l = list.resources.length; i < l; i++) {
					var item = list.resources[i];
					largeImages.push('https://res.cloudinary.com/dbc2wlvk8/image/upload/w_900/' + item.public_id + '.' + item.format);
					smallImages.push('https://res.cloudinary.com/dbc2wlvk8/image/upload/w_150/' + item.public_id + '.' + item.format);
				}

				erbium.gallery.create('.tprc-office-gallery', largeImages, smallImages);
			},
			error: function (xhr) {
				console.log(xhr);
			}
		});
	}

	var sprcOfficeGallery = document.querySelector('.sprc-office-gallery');
	if (sprcOfficeGallery) {
		Astatine.ajax({
			method: 'get',
			action: 'https://res.cloudinary.com/dbc2wlvk8/image/list/sprc-office.json',
			success: function (xhr) {
				var list = JSON.parse(xhr.response);
				var largeImages = [];
				var smallImages = [];

				for (var i = 0, l = list.resources.length; i < l; i++) {
					var item = list.resources[i];
					largeImages.push('https://res.cloudinary.com/dbc2wlvk8/image/upload/w_900/' + item.public_id + '.' + item.format);
					smallImages.push('https://res.cloudinary.com/dbc2wlvk8/image/upload/w_150/' + item.public_id + '.' + item.format);
				}
				erbium.gallery.create('.sprc-office-gallery', largeImages, smallImages);
			},
			error: function (xhr) {
				console.log(xhr);
			}
		});
	}

	var residentialHousingGallery = document.querySelector('.residential-housing-gallery');
	if (residentialHousingGallery) {
		Astatine.ajax({
			method: 'get',
			action: 'https://res.cloudinary.com/dbc2wlvk8/image/list/residential-housing-gallery.json',
			success: function (xhr) {
				var list = JSON.parse(xhr.response);
				var largeImages = [];
				var smallImages = [];

				for (var i = 0, l = list.resources.length; i < l; i++) {
					var item = list.resources[i];
					largeImages.push('https://res.cloudinary.com/dbc2wlvk8/image/upload/w_900/' + item.public_id + '.' + item.format);
					smallImages.push('https://res.cloudinary.com/dbc2wlvk8/image/upload/w_150/' + item.public_id + '.' + item.format);
				}
				erbium.gallery.create('.residential-housing-gallery', largeImages, smallImages);
			},
			error: function (xhr) {
				console.log(xhr);
			}
		});
	}

	var bioToggles = document.querySelectorAll('.bio-toggle');
	var fullBios = document.querySelectorAll('.full-bio');
	if (bioToggles) {
		for (var i = 0; i < bioToggles.length; i++) {
			var bioToggle = bioToggles[i];
			var fullBio = fullBios[i];
			var closeButton = document.createElement('div');

			closeButton.classList.add('close-button')
			closeButton.innerText = 'CLOSE BIO';
			fullBio.firstElementChild.appendChild(closeButton);

			bioToggle.addEventListener('click', function () {
				var fullBioCurrent = this.parentNode.querySelector('.full-bio');
				fullBioCurrent.classList.toggle('active');
				document.body.style = 'overflow-y: hidden';
				// main.classList.toggle('blur');
			});

			closeButton.addEventListener('click', function () {
				this.parentNode.parentNode.classList.toggle('active');
				document.body.style = 'overflow-y: inherit';
			});
		}
		// var closeText = document.createTextNode('CLOSE');
		// closeButton.appendChild(closeText);
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

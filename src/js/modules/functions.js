/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
import events from "events";

export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

/* Мобильное меню */
export function mobileMenu() {
	const burgerButton = document.querySelector('.mobile_menu');
	const menu = document.querySelector('.menu_list');

	if (burgerButton) {
		burgerButton.addEventListener("click", activateMobileMenu);

		window.addEventListener('click', e => { // при клике в любом месте окна браузера
			const target = e.target // находим элемент, на котором был клик
			if (!target.closest('.mobile_menu') && !target.closest('.menu_list')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
				document.body.classList.remove('open-menu');
				menu.classList.remove('open-menu');
			}
		})
	}

	function activateMobileMenu () {
		if (document.body.classList.contains('open-menu')){
			document.body.classList.remove('open-menu');
			menu.classList.remove('open-menu');
		} else {
			document.body.classList.add('open-menu');
			menu.classList.add('open-menu');
		}
	}
}

/* Форма далее и подтвердить */
export function formSteps() {
	const formBlock = document.querySelector('.form_screen .form form');

	const nextStep = formBlock.querySelector('.next_step');
	const prevStep = formBlock.querySelector('.prev_step');

	if (formBlock) {
		nextStep.addEventListener("click", nextStepClick);
		prevStep.addEventListener("click", prevStepClick);
	}

	function nextStepClick () {
		formBlock.querySelector('.form--first').classList.remove('active');
		formBlock.querySelector('.form--second').classList.add('active');
	}

	function prevStepClick () {
		formBlock.querySelector('.form--second').classList.remove('active');
		formBlock.querySelector('.form--first').classList.add('active');
	}
}
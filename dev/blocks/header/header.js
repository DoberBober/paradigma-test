var menuChecker = document.querySelector('.header__menuChecker')
var menu = document.querySelector('.menu')

var contactsChecker = document.querySelector('.header__contactsChecker')
var contacts = document.querySelector('.header__wrap')

if(menuChecker && menu){
	menuChecker.addEventListener('click', () => {
		if(contactsChecker && contacts){
			contacts.classList.remove('header__wrap--active')
			contactsChecker.classList.remove('header__contactsChecker--active')
		}

		menu.classList.toggle('menu--active')
		menuChecker.classList.toggle('header__menuChecker--active')
	})
}

if(contactsChecker && contacts){
	contactsChecker.addEventListener('click', () => {
		if(menuChecker && menu){
			menu.classList.remove('menu--active')
			menuChecker.classList.remove('header__menuChecker--active')
		}

		contacts.classList.toggle('header__wrap--active')
		contactsChecker.classList.toggle('header__contactsChecker--active')
	})
}

"use strict";

// Menu Behaviors

const wrapperMenu = document.querySelector('.wrapper-menu');
const nav = document.querySelector('.main-nav-container');
const hideMenu = document.querySelectorAll('.main-nav-container a');

wrapperMenu.addEventListener('click', () => {
	wrapperMenu.classList.toggle('open');
    nav.classList.toggle('active');
});




// $(function() {

// 	$(".wrapper-menu").on("click", function () {
// 		$(".main-nav-container").addClass("active");
// 	});

// 	$(".main-navigation a").on("click", function () {
// 		$(".main-nav-container").removeClass("active");
// 	});

// });



/////////////////////////////////////////////////////////////////////////////////


// Back to top button

const backToTop = document.querySelector('.backtotop');

window.onscroll = () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		backToTop.style.display = 'block';
	} else {
		backToTop.style.display = 'none';
	}
}

backToTop.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});

////////////////////////////////////////////////////////////////////////////////


// Gallery 

const panels = document.querySelectorAll('.panel');
function toggleOpen() {
	this.classList.toggle('open');
}

function toggleActive(e) {
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}

panels.forEach(panel => panel.addEventListener('click',toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));

////////////////////////////////////////////////////////////////////////////////


// Stats counter

const counters = document.querySelectorAll('.count');
const speed = 1500;


counters.forEach((counter) => {
	const updateCount = () => {
		const target = parseInt(counter.getAttribute('data-target'));
		const count = parseInt(counter.innerText);
		const increment = Math.trunc(target / speed);

		if (count < target) {
			counter.innerText = count + increment;
			setTimeout(updateCount, 1);
		} else {
			count.innerText = target;
		}
	};
	updateCount();
});

////////////////////////////////////////////////////////////////////////////////


// Smooth Scroll

$(function(){
    
    $('.smoothscroll').on('click', function(e){

        e.preventDefault();

        const goToSection = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(goToSection).offset().top
        }, 1500)

    });

});

////////////////////////////////////////////////////////////////////////////////


// Form Reset

const resetBtn = document.querySelector('.reset-button');

resetBtn.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('form').reset();
	// document.querySelector('.errors').remove();
});

/////////////////////////////////////////////////////////////////////////////////


// Form Validation

function validate(e) {

	e.preventDefault();

	const name = this.name.value;
	const mail = this.mail.value;
	const subject = this.subject.value;
	const message = this.message.value;

	const placeError = document.querySelector('.errors');


	let errors = [];

	const namePattern = /^[A-Ż]+[a-ż]{3,20}$/;
	const testName = namePattern.test(name);
	if (!testName)
		errors.push('Name too short');
	
	const mailPattern = /^[a-z\d]+[\w.-]*@[a-z\d]+[a-z\d-]*\.[a-z]{2,4}$/i;
	const testMail = mailPattern.test(mail);
	if (!testMail)
		errors.push('Invalid e-mail format');

	const subjectPattern = /^[\w]{3,20}$/;
	const testSubject = subjectPattern.test(subject);
	if (!testSubject)
		errors.push('Subject too short');

	const messagePattern = /^[\w]{3,20}$/;
	const testMessage = messagePattern.test(message);
	if (!testMessage)
		errors.push('Message too short');

	if (errors.length > 0) {
		placeError.innerHTML = errors.join('<br>');
	}
}

const form = document.querySelector('form');
form.addEventListener('submit', validate);


//////////////////////////////////////////////////////////////////////////////////


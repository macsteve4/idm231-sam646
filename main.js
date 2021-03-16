function fade2Content() {
	console.log('fade2Content called');
	document.body.classList.remove("blackScreen");
  }

const subaruobj = document.getElementById('subaru');
const vwobj = document.getElementById('vw');
const miataobj = document.getElementById('miata');
const hondaobj = document.getElementById('honda');
const jagobj = document.getElementById('jag');
const toyotaobj = document.getElementById('toyota');
const audiobj = document.getElementById('audi');
const fordobj = document.getElementById('ford');
const jeepobj = document.getElementById('jeep');
const volvoobj = document.getElementById('volvo');
const mercobj = document.getElementById('merc');
const marquisobj = document.getElementById('marquis');

const audirobj = document.getElementById('audirev');
const fordrobj = document.getElementById('fordrev');
const jagrobj =document.getElementById('jagrev');

function stopAllAudio() {
	audirobj.pause();
	audirobj.currentTime = 0;
	//
	fordrobj.pause();
	fordrobj.currentTime = 0;
	//
	jagrobj.pause();
	jagrobj.currentTime = 0;
  }

const displayObj = document.getElementById('display');

subaruobj.addEventListener('click', function (beej) {
  console.log('subaru clicked: ' + beej.target.id);
  const idName = beej.target.id;
  userPicked(idName);
});

vwobj.addEventListener('click', function (beej) {
  console.log('vw clicked: ' + beej.target.id); 
  const idName = beej.target.id;
  userPicked(idName);
});

miataobj.addEventListener('click', function (beej) {
  console.log('miata clicked: ' + beej.target.id);
  const idName = beej.target.id;
  userPicked(idName);
});

marquisobj.addEventListener('click', function (beej) {
	console.log('audi clicked: ' + beej.target.id);
	const idName = beej.target.id;
	userPicked(idName);
});

audiobj.addEventListener('click', function (beej) {
	console.log('audi clicked: ' + beej.target.id);
	const idName = beej.target.id;
	userPicked(idName);
});

jeepobj.addEventListener('click', function (beej) {
	console.log('audi clicked: ' + beej.target.id);
	const idName = beej.target.id;
	userPicked(idName);
});

mercobj.addEventListener('click', function (beej) {
	console.log('audi clicked: ' + beej.target.id);
	const idName = beej.target.id;
	userPicked(idName);
});

hondaobj.addEventListener('click', function (beej) {
	console.log('audi clicked: ' + beej.target.id);
	const idName = beej.target.id;
	userPicked(idName);
});

toyotaobj.addEventListener('click', function (beej) {
	console.log('audi clicked: ' + beej.target.id);
	const idName = beej.target.id;
	userPicked(idName);
});

jagobj.addEventListener('click', function (beej) {
	console.log('audi clicked: ' + beej.target.id);
	const idName = beej.target.id;
	userPicked(idName);
});

fordobj.addEventListener('click', function (beej) {
	console.log('audi clicked: ' + beej.target.id);
	const idName = beej.target.id;
	userPicked(idName);
});

volvoobj.addEventListener('click', function (beej) {
	console.log('audi clicked: ' + beej.target.id);
	const idName = beej.target.id;
	userPicked(idName);
});

const modal = document.getElementById('modal');

const closeModalObj = document.getElementById('btn-modal-close');
closeModalObj.addEventListener('click', function() {
  modal.hidden = !modal.hidden;
  stopAllAudio();
});

function userPicked(whichOne) {
	console.log('User picked ' + whichOne);
	switch (whichOne) {
		case 'subaru':
			// displayObj.src = 'img/ful_scorpio.png';
			zDisplayObj.src = 'images/wrx.png';
			// display title
			zTitleObj.innerHTML = 'Subaru WRX';
			// display date range
			zDateRangeObj.innerHTML = '##-Month to ##-Month';
			// display description
			zMoreInfo.innerHTML = '<p>The Jaguar XJ6 mirrors the _ </p>';
			// Show hide modal
			modal.hidden = !modal.hidden;
		  	// play sound
		  	break;
		case 'vw':
			// displayObj.src = 'img/ful_scorpio.png';
			zDisplayObj.src = 'images/vw.png';
			// display title
			zTitleObj.innerHTML = 'Volkswagen Jetta';
			// display date range
			zDateRangeObj.innerHTML = '##-Month to ##-Month';
			// display description
			zMoreInfo.innerHTML = '<p>The Jaguar XJ6 mirrors the _ </p>';
			// Show hide modal
			modal.hidden = !modal.hidden;
		  	// play sound
		  	break;  
		case 'miata':
			// displayObj.src = 'img/ful_scorpio.png';
			zDisplayObj.src = 'images/miata.png';
			// display title
			zTitleObj.innerHTML = 'Mazda Miata';
			// display date range
			zDateRangeObj.innerHTML = '##-Month to ##-Month';
			// display description
			zMoreInfo.innerHTML = '<p>The Jaguar XJ6 mirrors the _ </p>';
			// Show hide modal
			modal.hidden = !modal.hidden;
		 	// play sound
		  	break;
		case 'audi':
			// displayObj.src = 'img/ful_scorpio.png';
			zDisplayObj.src = 'images/audi.png';
			// display title
			zTitleObj.innerHTML = 'Audi A6';
			// display date range
			zDateRangeObj.innerHTML = '##-Month to ##-Month';
			// display description
			zMoreInfo.innerHTML = '<p>The Jaguar XJ6 mirrors the _ </p>';
			// Show hide modal
			modal.hidden = !modal.hidden;
			// play sound
			stopAllAudio()
			audirobj.play();
			break;
		case 'jag':
      		// displayObj.src = 'img/ful_scorpio.png';
      		zDisplayObj.src = 'images/jag.png';
      		// display title
      		zTitleObj.innerHTML = 'Jaguar XJ6';
      		// display date range
      		zDateRangeObj.innerHTML = '##-Month to ##-Month';
      		// display description
      		zMoreInfo.innerHTML = '<p>The Jaguar XJ6 mirrors the _ </p>';
      		// Show hide modal
      		modal.hidden = !modal.hidden;
      		// play sound
			stopAllAudio()
			jagrobj.play();
			break;
		case 'jeep':
			// displayObj.src = 'img/ful_scorpio.png';
			zDisplayObj.src = 'images/jeep.png';
			// display title
			zTitleObj.innerHTML = 'Jeep Rubicon';
			// display date range
			zDateRangeObj.innerHTML = '##-Month to ##-Month';
			// display description
			zMoreInfo.innerHTML = '<p>The Jaguar XJ6 mirrors the _ </p>';
			// Show hide modal
			modal.hidden = !modal.hidden;
			// play sound
			break;
		case 'marquis':
			// displayObj.src = 'img/ful_scorpio.png';
			zDisplayObj.src = 'images/marquis.png';
			// display title
			zTitleObj.innerHTML = 'Mercury Grand Marquis';
			// display date range
			zDateRangeObj.innerHTML = '##-Month to ##-Month';
			// display description
			zMoreInfo.innerHTML = '<p>The Jaguar XJ6 mirrors the _ </p>';
			// Show hide modal
			modal.hidden = !modal.hidden;
			// play sound
			break;
		case 'toyota':
			// displayObj.src = 'img/ful_scorpio.png';
			zDisplayObj.src = 'images/toyota.png';
			// display title
			zTitleObj.innerHTML = 'Toyota Camry';
			// display date range
			zDateRangeObj.innerHTML = '##-Month to ##-Month';
			// display description
			zMoreInfo.innerHTML = '<p>The Jaguar XJ6 mirrors the _ </p>';
			// Show hide modal
			modal.hidden = !modal.hidden;
			// play sound
			break;
		case 'volvo':
			// displayObj.src = 'img/ful_scorpio.png';
			zDisplayObj.src = 'images/volvo.png';
			// display title
			zTitleObj.innerHTML = 'Volvo S40';
			// display date range
			zDateRangeObj.innerHTML = '##-Month to ##-Month';
			// display description
			zMoreInfo.innerHTML = '<p>The Volvo mirrors the _ </p>';
			// Show hide modal
			modal.hidden = !modal.hidden;
			// play sound
			break;
		case 'merc':
			// displayObj.src = 'img/ful_scorpio.png';
			zDisplayObj.src = 'images/merc.png';
			// display title
			zTitleObj.innerHTML = 'Mercedes-Benz 300CE';
			// display date range
			zDateRangeObj.innerHTML = '##-Month to ##-Month';
			// display description
			zMoreInfo.innerHTML = '<p>The Jaguar XJ6 mirrors the _ </p>';
			// Show hide modal
			modal.hidden = !modal.hidden;
			// play sound
			break;
		case 'ford':
			// displayObj.src = 'img/ful_scorpio.png';
			zDisplayObj.src = 'images/ford.png';
			// display title
			zTitleObj.innerHTML = 'Ford Ranger';
			// display date range
			zDateRangeObj.innerHTML = '##-Month to ##-Month';
			// display description
			zMoreInfo.innerHTML = '<p>The Jaguar XJ6 mirrors the _ </p>';
			// Show hide modal
			modal.hidden = !modal.hidden;
			// play sound
			stopAllAudio()
			fordrobj.play();
			break;
		case 'honda':
			// displayObj.src = 'img/ful_scorpio.png';
			zDisplayObj.src = 'images/honda.png';
			// display title
			zTitleObj.innerHTML = 'Honda Odyssey';
			// display date range
			zDateRangeObj.innerHTML = '##-Month to ##-Month';
			// display description
			zMoreInfo.innerHTML = '<p>The Jaguar XJ6 mirrors the _ </p>';
			// Show hide modal
			modal.hidden = !modal.hidden;
			// play sound
			break;

		default:
		  displayObj.src = 'images/car_stage.png';
	  }
	}

const userSubmitObj = document.getElementById('userSubmit');

// Link modal element/objects to JS
const zDisplayObj = document.getElementById('zDisplayImg');
const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreInfoObj = document.getElementById('zMoreInfo');

userSubmitObj.addEventListener('click', function () {
  console.log('User submit button clicked');
  // Get the user first name and store it in a variable
  const userFirstName = document.getElementById('fname').value;
  console.log('userFirstName is: ' + userFirstName);

  // Get the user date and extract the month of year and day of month
  const userBday = new Date(document.getElementById('bday').value);
  console.log('userBday is: ' + userBday);

  // Figure out the zodiac sign based on month and of year and day of month
  let whichMonth = userBday.getUTCMonth();
  whichMonth++;
  console.log('whichMonth is: ' + whichMonth);

  const whichDayOfMonth = userBday.getUTCDate();
  console.log('whichDayOfMonth is: ' + whichDayOfMonth);

  let AstroSign = "";

  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "volvo";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "jeep";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "ford";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "audi";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "toyota";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "jag";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "honda";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "miata";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "vw";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "subaru";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "marquis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "merc";
  }

  console.log('AstroSign is: ' + AstroSign);

  userPicked(AstroSign);

}); 
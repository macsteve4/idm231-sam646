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
			zDateRangeObj.innerHTML = 'March 21st to April 19th';
			// display description
			zMoreInfo.innerHTML = '<p>The courageousness and optimism of an Aries is perfectly shown in the little Subaru Impreza WRX. This generation, running from 2000-2007, was a competitor in many regards, like an Aries. It won car of the year awards in 2000, 2002, and 2004. This variant, the WRX, had a tremendous win-rate in the world of rally cross, which is a true estimate of the car’s energy and determination.</p>';
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
			zDateRangeObj.innerHTML = 'April 20th to May 20th';
			// display description
			zMoreInfo.innerHTML = '<p>The sign of Taurus’ love for practicality and stability is well realized in the 2005-2010 Volkswagen Jetta. A simple point A to B car, it comprises thrills, but guarantees drivers a rock solid and decently long-lasting experience. The car uses high quality materials as well, something that the sign heavily appreciates. Like a Taurus, these cars can be very stubborn though, as mechanical faults are not uncommon with these cars.</p>';
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
			zDateRangeObj.innerHTML = 'May 21st to June 20th';
			// display description
			zMoreInfo.innerHTML = '<p>Geminis are adaptable, almost as much as the little Mazda Miata. This model here is from the 1999-2005 generation, which is heralded as one of the best. It is a classic roadster that can make any type of driving fun with its small size. It is ready for fun, but can get serious and be reliable, similar to the sign. They are unique little cars that have a cult following, and for good reason.</p>';
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
			zDateRangeObj.innerHTML = 'September 23rd to October 22nd';
			// display description
			zMoreInfo.innerHTML = '<p>The 1998-2004 Audi A6 had an extremely symmetrical body, one that allowed it to have the lowest drag coefficient of any car in its class. This German attention to detail and symmetry is very similar to the focuses of the sign it embodies, the Libra. If well-taken care of, an Audi A6 can be an incredibly fun and dependable car. If however, the driver is less caring, the car will be an unreliable mess, kind of like how a Libra will carry a grudge.</p>';
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
      		zDateRangeObj.innerHTML = 'July 23rd to August 22nd';
      		// display description
      		zMoreInfo.innerHTML = '<p>The 2002-2008 Jaguar XJ6 is a car that very much embodies the sign of Leo. It’s strengths as a car are that it’s self-confident, dominant and extremely difficult to resist. People see a Jaguar and their heads will turn, like a Leo. Its and Leo’s weaknesses though, are being arrogant, stubborn, self-centered, lazy, inflexible. Especially with a used Jaguar, they are very unreliable and high maintenance, and will have mechanical problems that will hinder their usability as daily drivers.</p>';
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
			zDateRangeObj.innerHTML = 'November 22nd to December 21st';
			// display description
			zMoreInfo.innerHTML = '<p>The 2007-2013 Jeep Rubicon (Wrangler) is the premiere outdoor vehicle. What better sign for it to illustrate, than Sagittarius. The Jeep loves exploration and being in touch with the outdoors, which are direct traits of the sign. These cars can be driven deep into the desert or woods, no questions asked. Be warned, as they do share weaknesses with the Sagittarius; mainly in that they promise more than they deliver. These Jeeps promised to be just as reliable as the previous generation, but this was not the case…</p>';
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
			zDateRangeObj.innerHTML = 'February 19th to March 20th';
			// display description
			zMoreInfo.innerHTML = '<p>The sign of Pisces holds a wisdom and gentility that only a 2003-2011 Mercury Grand Marquis could offer. One of the last true body-on-frame American sedans, it was the end of an era. But, this car would continue to live on in the used market in the company of very different drivers, old and young alike. Like the pisces, it is selfless, in never expecting to get anything in return  from the service and reliability it offers.</p>';
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
			zDateRangeObj.innerHTML = 'August 23rd to September 22nd';
			// display description
			zMoreInfo.innerHTML = '<p>The definition of practicality is the 2006-2013 Toyota Camry. Just like the sign of Virgo, it is a car that is hard-working and analytical, but it certainly also suffers from being all work and no play. For most people that just want a solid and dependable car, the Camry is the best choice without a doubt. If drivers fancy something with a little bit more character though, they should probably look elsewhere.</p>';
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
			zDateRangeObj.innerHTML = 'December 22nd to January 19th';
			// display description
			zMoreInfo.innerHTML = '<p>Nothing describes the sign of Capricorn better than the 1996-2004 Volvo S40. It is a responsible, disciplined car, that suffers from being a know-it-all. The Swedish design exudes the Capricorn’s appreciations of quality craftsmanship and understated status. Like how a Capricorn always expects the worse, the Volvo S40 has a tremendous amount of safety features, getting some of the best ratings for these in its class.</p>';
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
			zDateRangeObj.innerHTML = 'January 20th to February 18th';
			// display description
			zMoreInfo.innerHTML = '<p>The 1984-1997 Mercedes-Benz W124 (this model a 300CE) series were some of the most well built cars of all time. The strengths of this series were in line with its sign of Aquarius’ strengths, such as being progressive, original, independent and humanitarian. These cars used very new technology for the time, were uniquely designed, reliable, and very worldwide, being commonplace in many third world countries as they aged.</p>';
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
			zDateRangeObj.innerHTML = 'October 23rd to November 21th';
			// display description
			zMoreInfo.innerHTML = '<p>The 1998-2011 Ford Ranger is an incredibly resourceful little work truck. That resourcefulness makes it attributed perfectly to the sign of Scorpio. The Scorpio likes longtime friends and a grand passion. The Ford Ranger is a truck you buy to get work done, and to keep as a longtime vehicular companion. Average ownership of these trucks can go well past 20 years. That’s true passion.</p>';
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
			zDateRangeObj.innerHTML = 'June 21st to July 22nd';
			// display description
			zMoreInfo.innerHTML = '<p>The 1999-2004 Honda Odyssey is a clear representation of the sign of Cancer’s love for home-based activities and helping loved ones. It is the ultimate mom car, and a loyal and sympathetic one at that, (these traits are shared by Cancer). It was Honda’s second generation of the Odyssey model, and it sold very well. This car like Cancer, will always be happy and content to be surrounded by a loving family.</p>';
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
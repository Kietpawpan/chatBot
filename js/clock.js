/* This code was modifed from
https://www.geeksforgeeks.org/
how-to-create-analog-clock-using-
html-css-and-javascript

Images source: https://media.geeksforgeeks.org/wp-content/uploads/20210302161254/imgonlinecomuaCompressToSizeOmNATjUMFKw-300x300.jpg

with the Copyright infromation given at
https://www.geeksforgeeks.org/copyright-information/

*/

setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

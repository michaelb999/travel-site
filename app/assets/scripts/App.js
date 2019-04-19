import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"),"85%");
new RevealOnScroll($(".testimonial"),"60%");
var stickyHeader = new StickyHeader();






/* testing stuff up front
var $ = require('jquery');
// var Person = require('./modules/Person');

import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes $0 in taxes");
	}
}

 alert("abc 54321");

var john = new Person("John Doe","blue");
john.greet();

var jane = new Adult("Jane Smith", "Orange");
jane.greet();
jane.payTaxes();

$("h1").remove();

*/

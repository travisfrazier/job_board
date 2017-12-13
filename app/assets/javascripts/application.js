// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require jquery_ujs
//= require home

/* ----------------------------------
	@ Jolpai
	@ Version: 1.0
	@ Author: DynamicWebLab
	@Email: dynamicweblab@gmail.com
-------------------------------------*/
"use strict";
//Make sure jQuery has been loaded before main.js
if (typeof jQuery === "undefined") {
  throw new Error("Jolpai requires jQuery to work on!");
}

/* jolpaiObj
 *
 * @type Object
 * @description $.jolpaiObj Will hold options and functions.
 */
$.jolpaiObj = {};

/* ---------------------
 * /// Jolpai Options ///
 * ---------------------
 * You can enable disable functions here
 */
$.jolpaiObj.options = {

};


/* topMenu()
 * ==========
 * Adds Menu functionality.
 *
 * @type Function
 * @usage: $.jolpaiObj.topMenu()
 */
$.jolpaiObj.TopMenu = function() {

  var navMenu = $('.menu-list')

  navMenu.onePageNav();

  $(window).on('scroll resize', function(e) {
    if ($(this).scrollTop() > 70) {
      $('.header-section').addClass('sticky animated fadeInDown');
    } else {
      $('.header-section').removeClass('sticky animated fadeInDown');
    }
    e.preventDefault();
  });

  $('.responsive').on('click', function(event) {
    $('.menu-list').slideToggle(400);
    $('.header-section').toggleClass('bgc');
    event.preventDefault();
  });

  $('.menu-list li a').on('click', function(event) {
    if ($(window).width() < 768) {
      $('.menu-list').slideUp(400);
      $('.header-section').removeClass('bgc');
    }
  });

};
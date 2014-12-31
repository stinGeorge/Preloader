'use strict';
var preloader = document.getElementById('preloader');
window.onload = function(){
    $(document).ready(function($) {
        var preloader = $('#preloader');
        var wraper = $('#wraper');
        wraper.css('display', 'block');
        preloader.fadeOut();;
    });
}
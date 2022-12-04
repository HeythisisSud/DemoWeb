$(document).ready(function(){
    $('.pin').hover(function(){
        $(this).removeClass('shadow-lg')
    },function(){
        $(this).addClass('shadow-lg')
    })})
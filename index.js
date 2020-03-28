var arrSide = ['brand-side-1','brand-side-2','brand-side-3','brand-side-4']

// function scrollPage(y) {
//    var ele = document.getElementsByClassName('brand-side-bar')
// //    ele.classListadd('hellos')
//     window.scrollTo(0,y);
// }

$(document).ready(function (){

    // $('.info-box-item').carousel();

    $('#brand-side-1').css('background','#ffdf00')
    $('.brand-side-2-content').css('display','none')
    $('.brand-side-3-content').css('display','none')
    $('.brand-side-4-content').css('display','none')
    
    $('.brand-side-bar').on('click', function() {
        var panelId = $(this).attr('data-panelid')
        $('#'+panelId).css('background','#ffdf00')
        $('.'+panelId + '-content').css('display','block')

        for(var i in arrSide){
            if(arrSide[i] !== panelId){
              $('#'+arrSide[i]).css('background','white')
              $('.'+arrSide[i]+'-content').css('display','none')
            }
        }
    })
})
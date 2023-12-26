

$(function () {
      console.log($('.innerstar').eq(4))
      $('.innerstar').eq(3).on('click',function(){
            $('.contents1').css('transform','translateX(-100%)')
            $('.contents2').css('transform','translateX(-100%)')
            for(e = 0; e < database.length; e++){
                  $(`.innerstar:nth-child(${e})`).removeClass('twinkle')
            }
            $(`.innerstar:nth-child(${4})`).addClass('twinkle')
      })

})

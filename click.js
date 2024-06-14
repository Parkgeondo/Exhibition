$(function () {
      function change(id, event){
            const dataNumber = $(event).data('number');
            $(`.contents${id}`).find('.Con-title').html(database[dataNumber].name)
            $(`.contents${id}`).find('.Con-title').find('.Dname').html(database[dataNumber].Dname)
            $(`.contents${id}`).find('.image1').css('background-image',`url(${database[dataNumber].backgroundImage}`)
            $(`.contents${id}`).find('.image2').css('background-image',`url(${database[dataNumber].profileImage}`)
            $(`.contents${id}`).find('.info').find('h5').html(database[dataNumber].Dname)
            $(`.contents${id}`).find('.info').find('p').html(database[dataNumber].say)
            $(`.contents${id}`).find('.sub-title').html(database[dataNumber].sub_title)
            $(`.contents${id}`).find('.text').html(database[dataNumber].text)
      }

      $('.innerstar').each(function(index, element) {
          $(element).on('click', function(f) {
            scrollToTop()

              $('.contents1').css({
                  'transform': 'translateX(-100%)',
                  'transition': 'transform 0.5s' // 예시로 0.5초 애니메이션
              });
              $('.contents2').css({
                  'transform': 'translateX(-100%)',
                  'transition': 'transform 0.5s'
              });

              change(2, f.target)
  
              setTimeout(function() {
                  $('.contents1').css('transition', 'none');
                  $('.contents2').css('transition', 'none');
  
                  $('.contents1').css('transform', 'translateX(0%)');
                  $('.contents2').css('transform', 'translateX(0%)');
  
                  change(1, f.target)
   
              }, 500);
  
              $('.innerstar').removeClass('twinkle');
  
              $(element).addClass('twinkle');
          });
      });
      function scrollToTop() {
            $('.contents1').animate({ scrollTop: 0 });
            $('.contents2').animate({ scrollTop: 0 });
      }
  });
  
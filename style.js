let hover = false;
let click = false;
let touch = false;
// modal();

let starData = new Array();
let rotate = new Array();

for(i = 0; i < database.length; i++){
    starData[i] = document.querySelector(`#star${i}`)
}

    rotate = document.querySelector(`#rotate`)


console.log(starData)

function sayHi() {
    $('.tooltip').css('opacity',`1`)
    $('.tooltip').css('top',`240px`)
  }
  

  let one = document.querySelector(`#one`)
  let two = document.querySelector(`#two`)

$(function () {

    one.addEventListener('click', function () {
        one.object3D.visible = !one.object3D.visible
        two.object3D.visible = !two.object3D.visible

    });
    two.addEventListener('click', function () {
        one.object3D.visible = !one.object3D.visible
        two.object3D.visible = !two.object3D.visible
    });

    show()
    let back = document.querySelector('.back');

    for(i = 0; i < database.length; i++){
        starData[i].addEventListener('mouseenter',function(){
            
            for(e = 0; e < database.length; e++){
                if(String($(this).prop('id')) == `star${e}`){
                    //미리보기 작가 이름
                    $('.name').html(database[e].name)
                    $('.contents1').find('.Con-title').html(`${database[e].name}<div class="Dname"></div>`)

                    $('.Dname').html(database[e].Dname)
                    $('.preview').css('background-image',`url(${database[e].preimage})`)

                    // console.log(database[2].backgroundImage)
                }

            }

            rotate.setAttribute("animation","dur:100000000")
            hover = true;
            show();
            // $('.name').text('sogeun sogeun')
            // $('.Dname').text('김채원')
            console.log(i)
        })

        
        //페이지
        starData[i].addEventListener('click',function(){
            for(e = 0; e < database.length; e++){
                if(String($(this).prop('id')) == `star${e}`){
                $('.contents1').find('.image1').css('background-image',`url(${database[e].backgroundImage}`)
                $('.contents1').find('.image2').css('background-image',`url(${database[e].profileImage}`)
                $('.contents1').find('.info').find('h5').html(database[e].Dname)
                $('.contents1').find('.info').find('p').html(database[e].say)
                $('.contents1').find('.sub-title').html(database[e].sub_title)
                $('.contents1').find('.text').html(database[e].text)
                $('.contents1').find('.image1').css('background-image',`url(${database[e].backgroundImage}`)

                //누른 위치가 밝아진다
                $(`.innerstar:nth-child(${e+1})`).addClass('twinkle')
                }
            }

            for(e = 0; e < 8; e++){
                if(String($(this).prop('id')) == `star${e}`){
                    touch=false;
                }
            }
            for(e = 8; e < 16; e++){
                if(String($(this).prop('id')) == `star${e}`){
                    touch=true;
                    
                }

            }

            //툴팁 잠시 올라가는?
            setTimeout(sayHi, 10);
        })

        
        starData[i].addEventListener('mouseleave',function(){
            rotate.setAttribute("animation","dur:250000;")
            hover = false;
            show();
        })
    
        starData[i].addEventListener('click',function(){
            click = true;
            modal();
            $(`.innerstar:nth-child(4)::after`).on('click',function(){
                console.log("ASDSDA");
            })
        })
        
        back.addEventListener('click',function(){
            click = false;
            modal();
            for(i = 0; i < database.length; i++){
                $(`.innerstar:nth-child(${i+1})`).removeClass('twinkle')
                console.log("ASdds")
            }
            $('.tooltip').css('opacity',`0`)
            $('.tooltip').css('top',`280px`)
        })


        
        
    }














})

function show(){
    if(hover){
        $('.preview').stop(true).delay(200).slideDown();
    }else{
        $('.preview').stop(true).slideUp();
    }
}

function modal(){
    if(click){
        $('.modal').fadeIn(100)
        $('.background').fadeIn(100)
    }else{
        $('.modal').fadeOut(100)
        $('.background').fadeOut(100)
    }
}
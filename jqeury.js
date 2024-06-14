// let Constellations = [
//     {first:{x:30,y:30},second:{x:10,y:10},third:[50,30]},
//     {first:{x:260,y:160},second:{x:10,y:10},third:{x:10,y:10}},
//     {first:{x:260,y:400},second:{x:10,y:10},third:{x:10,y:10}}
// ]
let Constellations = [
    {first:[{x:160,y:60},{x:260,y:220},{x:-20,y:300},{x:390,y:290},{x:320,y:400},{x:30,y:420},{x:190,y:290},{x:100,y:390}]},
    // {second:[{x:10,y:60},{x:20,y:230},{x:-20,y:380},{x:230,y:190},{x:320,y:400},{x:30,y:420},{x:190,y:290},{x:100,y:390}]}
]


$(function () {
    $(document).on("click", function() {
    })

    let project = $('<div class="box"></div>');
    for(let i = 0; i < 8; ++i){
        project.append(`<div class = "innerstar" data-number="${i}"/>`)
        $('.Constellation').append(project);
        $(`.innerstar:nth-child(${i+1})`).css({'transform':`translate(${Constellations[0].first[i].x}px,${Constellations[0].first[i].y}px)`})
        // $('.Constellation').append(designer);
        // $('.star:nth-child(1)').css('transform','translate(50px,50px)')
    }
    // for(let i = 0; i < 8; ++i){
    //     project.append('<div class = "innerstar2"/>')
    //     $('.Constellation').append(project);
    //     $(`.innerstar2:nth-child(${i+9})`).css({'transform':`translate(${Constellations[1].second[i].x}px,${Constellations[1].second[i].y}px)`})
    //     // $('.Constellation').append(designer);
    //     // $('.star:nth-child(1)').css('transform','translate(50px,50px)')
    // }

})





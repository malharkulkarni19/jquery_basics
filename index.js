$(document).ready(function () {
    //jquery code here, if this running on code, this will not run until document can't load properly
    console.log($);
    //basic syntax of jQuery ------>>>>>>> $('selector').action()  //here, selector is p and action is click on p.
    // $('p').click();//click on p
    $('p').click(function () {
        //console.log("Hello, from heaven", this)
        // $('p').hide();
        //if we want to hide spefic then use this keyword.
        //$(this).hide();

        //there are 3 types of selectors
        // 1) Element selector
        // 2) id selector
        // 3) class selector
        // above example is element selector

        //2) id selector
        //$("#second").hide();

        //3) class selector
        //$('.first').hide();

        // $('*').click(function(){
        //     console.log("You have clicked : " + this);
        // })

        // $('.first').hovar(function(){
        //     console.log("You hovered this : " + this);
        // })

        //multiple event handler
        // $('p').on(
        //     {
        //         click:  function() {
        //             console.log("Hello, you have clicked : " + this);
        //         },
        //         mouseleave:  function(){
        //             console.log("Hello, mouse leaved : " + this);
        //         }
        // })

    })

    // $('#ronaldo').hide(2000, function(){
    //     console.log("locked");
    // })

    // $('#ronaldo').show(2000, function(){
    //     console.log("loaded");
    // })

    $('#toggle').click(function () {  //toggle means if data is hided, then it shows when clicked ans vice-versa
        $('#ronaldo').toggle(1000, function () {
            console.log("Done" + this);
        });   //1000 is milliseconds, means 1 seconds
    })

    //use fadeIn, fadeOut, fadeToggle and fadeTo as like.

    //now animation, three methods, slideUp, slideDown, slideToggle and after seconds, callback method is optional.speed is also optional.
    $('#animation').click(function () {
        $('#ronaldo').slideToggle(1000, function () {
            console.log("Done" + this);
        });
    })

    //animate function in JQuery
    // $('#ronaldo').animate({
    //     opacity:0.3,
    //     height:"1500px",
    //     width:"220px"
    // }, "slow");

    $('#ronaldo').animate({ opacity: 0.2 }, 3000);
    $('#ronaldo').animate({ opacity: 0.9 }, 3000);
    $('#ronaldo').animate({ height: "250px" }, 15000);

    //whevever we want to stop a animation, use stop() function.
    // $('#ronaldo').stop();

    //for removing a selector, use .remove(); and empty the fields in selector, use .empty()
    //to get value of selector, use .val() and to get html code, use .html()
    //for editing value and html, use it inside the brackets of val and html.
    //for adding new class, use .addClass() and for removing use .removeClass() same for id.

    //--------------------------------------------------Adding css----------------------------------------------//


    $('#form1').css('background-color', 'red');
    $('#ronaldo').css('background-color', 'blue');
    $('#form').css('background-color', 'green');

    //to get property, dont use the value.
    // $('#form').css('background-color');

    //-----------------------------------AJAX using JQuery---------------------------------------//
    // $.get('https://code.jquery.com/jquery-3.6.3.j');
})


//Events
/*
Mouse
scroll, click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, load, resize, scroll, unload, error
Keyboard
keydown, keypress, keyup
Form
submit, change, focus, blur
DOM Element
blur, focus, focusin, focusout, change, select, submit
Browser
load, resize, scroll, unload, error
*/



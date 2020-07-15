function slider_1() {
    $('.header__circle').css('background-color','rgba(54, 54, 54, 0.1)');
    $('.header__circle-1').css('background-color','rgba(125, 181, 44, 0.67)');
    $('.header__girl').css('background','url(../images/girl.png)'); 
    $('.header__girl').css('background-size','contain');
    $('.header__girl').css('background-position','center');
    $('.header__girl').css('background-repeat','no-repeat');  
}

function slider_2() {
    $('.header__circle').css('background-color','rgba(54, 54, 54, 0.1)');
    $('.header__circle-2').css('background-color','rgba(125, 181, 44, 0.67)');
    $('.header__girl').css('background','url(../images/girl.png)'); 
    $('.header__girl').css('background-size','contain');
    $('.header__girl').css('background-position','center');
    $('.header__girl').css('background-repeat','no-repeat');     
}

function slider_3() {
    $('.header__circle').css('background-color','rgba(54, 54, 54, 0.1)');
    $('.header__circle-3').css('background-color','rgba(125, 181, 44, 0.67)');
    $('.header__girl').css('background','url(../images/girl.png)'); 
    $('.header__girl').css('background-size','contain');
    $('.header__girl').css('background-position','center');
    $('.header__girl').css('background-repeat','no-repeat');     
}

d=0;

function drop() {
    if (d==0) {
        $('.drop-down_menu').fadeIn(250);
        $('.drop-down_menu').css('display','flex');
        d=1;
    }
    
    else {
        $('.drop-down_menu').fadeOut(250);
        d=0;
    }
}

function show_add_1() {
    $('.drop-down_menu__add').css('display','none');
    $('.drop-down_menu__add-1').css('display','block');
}

function show_add_2() {
    $('.drop-down_menu__add').css('display','none');
    $('.drop-down_menu__add-2').css('display','block');
}

function show_add_3() {
    $('.drop-down_menu__add').css('display','none');
    $('.drop-down_menu__add-3').css('display','block');
}

function show_add_4() {
    $('.drop-down_menu__add').css('display','none');
    $('.drop-down_menu__add-4').css('display','block');
}

function show_add_5() {
    $('.drop-down_menu__add').css('display','none');
    $('.drop-down_menu__add-5').css('display','block');
}

function show_add_6() {
    $('.drop-down_menu__add').css('display','none');
    $('.drop-down_menu__add-6').css('display','block');
}

function show_add_7() {
    $('.drop-down_menu__add').css('display','none');
    $('.drop-down_menu__add-7').css('display','block');
}
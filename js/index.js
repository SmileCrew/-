$(function(){
    var a=$('.lunbo>.daohang_li>a');
    var ul=$('.lunbo>.daohang_li>a>ul');
    $.each(a,function(index,value){
        $(this).hover(function(){
            ul.eq(index).slideDown(500);
        },function(){
            ul.eq(index).slideUp(500);
        });
    });


    var img=$('.lunbo>.img>img');
    var btn=$('.lunbo>.btn>ul>li');
    var img_width=$('.lunbo').width();
    var ling=0;
    var yi=1;
    var time;
    img.eq(0).css({
        zIndex:2,
        left:0
    });
    img.eq(1).css({
        zIndex:2,
        left:img_width+'px'
    });
    function autoPlay(){
        time=setInterval(function(){
            if(ling==img.length-1){yi=0;}
            else if(ling>img.length-1){ling=0;yi=1;}
            else{yi=ling+1;};
            img.eq(ling).css('left','0px').animate({left:-img_width+'px'},500);
            img.eq(yi).css('left',img_width+'px').animate({left:'0px'},500);
            btn.eq(yi).addClass('btnx').siblings().removeClass('btnx');
            ling++;
        },3000);
    };
    autoPlay();
    $.each(btn,function(index,value){
        $(this).click(function(){
            if(!!time){clearInterval(time)};
            ling=index;
            if(ling==img.length-1){yi=0}
            else if(ling>img.length-1){ling=0;yi=1}
            else{yi=ling+1};
            img.eq(ling).css('zIndex',3).css('left',img_width+'px').animate({left:0},500).siblings().css('zIndex',0);
            img.eq(yi).css('zIndex',3).css('left',img_width+'px');
            btn.eq(ling).addClass('btnx').siblings().removeClass('btnx');
            autoPlay();
        });
    });

    $('.zuopin>.zuopinyi').hover(function(){
        $('.zuopin>.zuopinyi>.topzuopinyi').animate({top:'0px'},500);
    },function(){
        $('.zuopin>.zuopinyi>.topzuopinyi').animate({top:'352px'},500);
    });
    $('.zuopin>.zuopiner').hover(function(){
        $('.zuopin>.zuopiner>.topzuopiner').animate({top:'0px'},500);
    },function(){
        $('.zuopin>.zuopiner>.topzuopiner').animate({top:'352px'},500);
    });
    $('.zuopin>.zuopinsan').hover(function(){
        $('.zuopin>.zuopinsan>.topzuopinsan').animate({top:'0px'},500);
    },function(){
        $('.zuopin>.zuopinsan>.topzuopinsan').animate({top:'716px'},500);
    });
    $('.zuopin>.zuopinsi').hover(function(){
        $('.zuopin>.zuopinsi>.topzuopinsi').animate({top:'0px'},500);
    },function(){
        $('.zuopin>.zuopinsi>.topzuopinsi').animate({top:'352px'},500);
    });
    $('.zuopin>.zuopinwu').hover(function(){
        $('.zuopin>.zuopinwu>.topzuopinwu').animate({top:'0px'},500);
    },function(){
        $('.zuopin>.zuopinwu>.topzuopinwu').animate({top:'352px'},500);
    });



    $('.kepian>.kepianyi').hover(function(){
        $('.kepian>.kepianyi>.topkepianyi').animate({top:'194px'},500);
    },function(){
        $('.kepian>.kepianyi>.topkepianyi').animate({top:'254px'},500);
    });
    $('.kepian>.kepianer').hover(function(){
        $('.kepian>.kepianer>.topkepianer').animate({top:'194px'},500);
    },function(){
        $('.kepian>.kepianer>.topkepianer').animate({top:'254px'},500);
    });
    $('.kepian>.kepiansan').hover(function(){
        $('.kepian>.kepiansan>.topkepiansan').animate({top:'464px'},500);
    },function(){
        $('.kepian>.kepiansan>.topkepiansan').animate({top:'524px'},500);
    });
    $('.kepian>.kepiansi').hover(function(){
        $('.kepian>.kepiansi>.topkepiansi').animate({top:'194px'},500);
    },function(){
        $('.kepian>.kepiansi>.topkepiansi').animate({top:'254px'},500);
    });
    $('.kepian>.kepianwu').hover(function(){
        $('.kepian>.kepianwu>.topkepianwu').animate({top:'194px'},500);
    },function(){
        $('.kepian>.kepianwu>.topkepianwu').animate({top:'254px'},500);
    });
    $('.kepian>.kepianliu').hover(function(){
        $('.kepian>.kepianliu>.topkepianliu').animate({top:'464px'},500);
    },function(){
        $('.kepian>.kepianliu>.topkepianliu').animate({top:'524px'},500);
    });
    $('.kepian>.kepianqi').hover(function(){
        $('.kepian>.kepianqi>.topkepianqi').animate({top:'194px'},500);
    },function(){
        $('.kepian>.kepianqi>.topkepianqi').animate({top:'254px'},500);
    });

    var img1=$('.jijie>.img');
    var tou=$('.jijie .tou');
    $('.jijie').hover(function(){
        tou.fadeIn(500);
    },function(){
        tou.fadeOut(500);
    });
    $.each(img1,function(index,value){
        $(this).hover(function(){
            tou.eq(index).fadeOut(500);
        },function(){
            tou.eq(index).fadeIn(500);
        });
    });
    

    var btn_left=$('.anli>.left');
    var btn_right=$('.anli>.right');
    var zhanshi=$('.anli>.chaochu>.anlizhanshi');
    var img_2=$('.chaochu').width();

     var index_length =3;
     var index = 0;

     btn_left.click(function(){

        index++;
        if(index_length<0){
            zhanshi.css('left','0px');
        } else {
            zhanshi.animate({left:img_2*index+'px'},500);
        } 

       
    });

    btn_right.click(function(){
      index--;

       
        if(index>index_length-1){
            zhanshi.css('left',img_2*index_length-1 + '0px');
        } else {
            zhanshi.animate({left:img_2*index+'px'},500);
        } 
        
    });
    




    var dt=$('.jiage dl dt');
    $.each(dt,function(index,value){
        $(this).hover(function(){
            $(this).animate({
                top:'-8px'
            },300)
        },function(){
            $(this).animate({
                top:'0px'
            },300)
        },1)
    });


});
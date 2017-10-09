//    判断导航的固定
$(function () {
    //导航
    //$('.nav-product').hover(function () {
    //    $('.subnav').slideDown();
    //},function() {
    //    $('.subnav').slideUp().stop();
    //});
    $("#scrolltop").click(function () {
        var speed = 600;
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });
   // 产品二级菜单
    var cpNav, cpNavClose;
    $(".nav-product").mouseover(function () {
        clearTimeout(cpNavClose);
        $(".menubg").slideDown(200);
        cpNav = setTimeout(function () {
            $(".subnav").fadeIn(200);
            $(".menubg").show();
        }, 200);

    });
    $(".nav-product").mouseout(function () {
        clearTimeout(cpNavClose);
        cpNavClose = setTimeout(function () {
            $(".menubg").hide();
            $(".subnav").hide();
        }, 200);
    });

    $(".subnav").mouseover(function () {
        clearTimeout(cpNavClose);
        $(".menubg").show();
        $(".subnav").show();
    });
    $(".subnav").mouseout(function () {
        clearTimeout(cpNavClose);
        cpNavClose = setTimeout(function () {
            $(".menubg").hide();
            $(".subnav").hide();
        }, 200);
    });






    $('.nav').data('size', 'full');


});

$(window).scroll(function () {
    if ($(document).scrollTop() > 130) {
        if ($('.nav').data('size') == 'full') {
            $('.nav').data('size', 'short').addClass('active');
        }
    }
    else {
        if ($('.nav').data('size') == 'short') {
            $('.nav').data('size', 'full').removeClass('active');
        }
    }
});


var main= {
    product: function () {
        //底部图片轮播
        $(".plan-hiSlider").hiSlider({
            intervalTime: 9000,
            isAuto: false,
            mode: 'fade',
            onMoveAfter: function () {
                var $index = $('.hiSlider-pages a.active').index();
                $('.plan-hiSlider li').eq($index).addClass('active').siblings().removeClass('active');
            }
        });
        $('.plan li').eq(0).addClass('active');

        //推荐产品搭配
        $('.product-subnav a').on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
            $('.product-collocation ul').eq($(this).index()).show().siblings().hide();
        });
        //亮点切换
        $('.highlights-icon a').on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
            $('.highlights-list li').eq($(this).index()).show().addClass('active').siblings().hide().removeClass('active');
        });

        //banner 文字垂直居中
        $('.hiSlider-item').each(function() {
            var $height = (700 - $(this).find('.plam-text').height()) / 2;
            $(this).find('.plam-text').css("top", $height).css('opacity',1);
        });
        //页面定位
        $(".nva-list li").click(function () {
            $(this).addClass('cur').siblings().removeClass('cur');
            var index = $(this).index();
            var position = $(".fixed-top").eq(index).offset().top;
            if (index == 0) {
                $("html,body").animate({
                    scrollTop: position - 80
                }, 700);
            } else {
                $("html,body").animate({
                    scrollTop: position - 80
                }, 700);
            }

        });

        //$(".fixed-top").each(function() {
        //    var x = $(this).offset().top - $(window).height();
        //    alert(x)
        //});

        function scroll() {
            var o = $('.fixed-top');
            $(window).scroll(function () {
                var top = $(this).scrollTop();
                var height = $(this).height();
                o.each(function (i) {
                    if ($(this).offset().top - top-200 < height / 100) {
                        $('.nva-list li').removeClass('cur').eq(i).addClass('cur');
                    } else return;
                });
            });

        }
scroll();
    }
}


















$('#audiu_on').click(function () {
    $('#audio_off').show()
    $('#audiu_on').hide()
})
$('#audio_off').click(function () {
    $('#audiu_on').show()
    $('#audio_off').hide()
})
//导航栏
window.addEventListener('load', function () {
    let header_navitem = this.document.querySelector('.header_navitem')
    let header_Cloud = this.document.querySelector('.header_Cloud')
    let SuspendedStyle = header_navitem.querySelectorAll('a')
    let header__navbar = this.document.querySelector('.header__navbar')
    let current = 0
    for (let i = 0; i < SuspendedStyle.length; i++) {
        SuspendedStyle[i].addEventListener('mouseenter', function () {
            animate(header_Cloud, this.offsetLeft);
        })
        header__navbar.addEventListener('mouseleave', function () {
            animate(header_Cloud, 308);
        })
    }

})


//视频
$(function () {
    var video = $('.video');
    $('.poster-play .poster-play-button').click(function () {
        $('.poster-modal').show()
    })
    $('.poster-modal').click(function () {
        // 朦层隐藏
        $('.poster-modal').hide()
    })
})


//轮播图
$(function () {
    $('.news-banner-indicators span').click(function () {
        let index = $(this).index()
        $(this).addClass('active').siblings().removeClass('active')
        $('.news-banner-links').css({
            left: index * -$('.news-banner-links a img').width() + 'px'
        })
    })
    let index = 0
    let time = setInterval(move, 5000)
    function move() {
        index++;
        if (index == 4) {
            index = 0
        }
        $('.news-banner-links').css({
            left: index * -$('.news-banner-links a img').width() + 'px'
        })
        $('.news-banner-indicators span').eq(index).addClass('active').siblings().removeClass('active')
    }
})

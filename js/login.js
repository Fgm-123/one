let social__btn_off = document.querySelector('.social__btn_off')
let social__btn_offImg = document.querySelector('.social__btn_off img')
let social = document.querySelector('.social')
let flgt = true
social__btn_off.onclick = function () {
    if (flgt) {
        social__btn_offImg.style.transform = 'rotate(180deg)'
        social.style.right = -178 + 'px'
    } else {
        social__btn_offImg.style.transform = ''
        social.style.right = 0 + 'px'
    }
    flgt = !flgt
}
window.addEventListener('scroll', function () {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    if (scrollTop >= 500) {
        social.style.opacity = 1
    } else {
        social.style.opacity = 0

    }
})


//登录
let header__login = this.document.querySelector('.header__login')
let btn = document.querySelector('.btn')
let close = this.document.querySelector('.close-icon')
let x2 = this.document.getElementById('x2')
let login = this.document.getElementById('login')
let mimalogin = this.document.getElementById('mimalogin')
let yzmloginer = this.document.getElementById('yzmloginer')
let mimaloginer = this.document.getElementById('mimaloginer')//第一个
let mimaloginers = this.document.getElementById('mimaloginers')//第二个
let containerinput = this.document.getElementById('containerinput')
let error_text = this.document.querySelector('.error-text')
let MobilePhoneFormat = this.document.getElementById('MobilePhoneFormat')
let mhy_toast = this.document.querySelector('.mhy-toast')
let mhy_account_flow_dialog_content = document.querySelector('.mhy-account-flow-dialog-content')
header__login.addEventListener('click', function () {
    login.style.display = 'block'
    mhy_account_flow_dialog_content.style.display = 'block'
})
close.addEventListener('click', function () {
    login.style.display = 'none'
})
x2.addEventListener('click', function () {
    login.style.display = 'none'

})
mimaloginers.addEventListener('click', function () {
    mimalogin.style.display = 'block';
    mhy_account_flow_dialog_content.style.display = 'none'

})
yzmloginer.addEventListener('click', function () {
    mhy_account_flow_dialog_content.style.display = 'block'
    mimalogin.style.display = 'none';

})

//判断用户在输入手机号格式是否正确
let regtel = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;

containerinput.onblur = function () {
    if (regtel.test(this.value)) {
        error_text.style.display = 'none';
        MobilePhoneFormat.style.display = 'none'
        mhy_toast.style.display = 'none'
        //发送短信
        let VerificationCode = document.getElementById('VerificationCode');
        let time = 59;
        VerificationCode.addEventListener('click', function () {
            VerificationCode.disabled = true;
            var timer = setInterval(function () {
                if (time == 0) {
                    // 清除定时器和复原按钮
                    clearInterval(timer);
                    VerificationCode.disabled = true;
                    VerificationCode.innerHTML = '发送验证码'
                    time = 59; //这个数需要重新开始
                }
                else {
                    VerificationCode.innerHTML = '已发送' + time + '(S)';
                    VerificationCode.disabled = false;
                    time--;
                }
            }, 1000);
        })
    } else if (this.value.length == '') {
        error_text.style.display = 'block';
        error_text.style.color = 'red';
        MobilePhoneFormat.style.color = 'red';
        mhy_toast.style.display = 'block'
        // MobilePhoneFormat.style.display = 'block'
    } else {
        MobilePhoneFormat.style.display = 'block'
        error_text.style.display = 'none';
        mhy_toast.style.display = 'block'
    }
}
setInterval(function () {
    mhy_toast.style.display = 'none'
}, 5000);

$(function () {
    $('.news-nav span').click(function () {
        $(this).addClass('currenters').siblings().removeClass('currenters')
        let index = $(this).index();
        $('.tab_con .item').eq(index).show().siblings().hide();
    })
})
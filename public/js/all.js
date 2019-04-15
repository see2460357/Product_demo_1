'use strict';

$(document).ready(function () {
  var vm = new Vue({
    el: '#app',
    data: {
      banner: [{
        cover: 'https://www.dahuandesign.com/upload/banner_list/a633e2df00cde9f806e1cb5803274863.jpg',
        href: 'http://www.dahuandesign.com/case/',
        span: '台中室內設計最佳推薦 大桓室內設計',
        p: '先體驗設計，再設計你的家',
        div: '請立即來電預約！'
      }, {
        cover: 'https://www.dahuandesign.com/upload/banner_list/1410c1275b34d0c787703d2a61650f52.jpg',
        href: 'http://www.dahuandesign.com/case/',
        span: '「 回家 」',
        p: '回到一個擁有情感、回憶的地方',
        div: '是一件多快樂的事'
      }, {
        cover: 'https://www.dahuandesign.com/upload/banner_list/30a1a2fac67f2c1e3fc7d871af8d11bf.jpg',
        href: 'http://www.dahuandesign.com/case/',
        span: '「 回家 」',
        p: '回到一個擁有情感、回憶的地方',
        div: '是一件多快樂的事'
      }, {
        cover: 'https://www.dahuandesign.com/upload/banner_list/2f63d1737bbcaee7cfb74bdd822f3249.jpg',
        href: 'http://www.dahuandesign.com/case/',
        span: '「 回家 」',
        p: '回到一個擁有情感、回憶的地方',
        div: '是一件多快樂的事'
      }, {
        cover: 'https://www.dahuandesign.com/upload/banner_list/080d870de19560948b7f1733a724afe6.jpg',
        href: 'http://www.dahuandesign.com/case/',
        span: '「 回家 」',
        p: '回到一個擁有情感、回憶的地方',
        div: '是一件多快樂的事'
      }, {
        cover: 'https://www.dahuandesign.com/upload/banner_list/d30f98faa945057fd09f485bdf51cbd2.jpg',
        href: 'http://www.dahuandesign.com/case/',
        span: '「 回家 」',
        p: '回到一個擁有情感、回憶的地方',
        div: '是一件多快樂的事'
      }],
      list: [{
        href: '',
        cover: 'https://www.dahuandesign.com/upload/catalog_list_pic/tw_catalog_list_18i11_hqz2q9a7qt.jpg',
        title: '室內設計 | 精品紳士密居',
        text: '墨色石材沉穩高雅，低調雅趣的藝術收藏，將空間打造成具紳士氣息的精品宅。'
      }, {
        href: '',
        cover: 'https://www.dahuandesign.com/upload/catalog_list_pic/tw_catalog_list_18i11_7bkyxrtrmh.jpg',
        title: '室內設計 | 洗鍊德式生活',
        text: '洗鍊經典的德式風味餐桌，輕鬆打造俐落優雅的每一餐。'
      }, {
        href: '',
        cover: 'https://www.dahuandesign.com/upload/catalog_list_pic/tw_catalog_list_18i11_gckt9q37cf.jpg',
        title: '室內設計 | 純淨北歐廚房',
        text: '純淨的白搭配核桃色系，加上生機盎然窗景，讓烹飪也能是一種享受。'
      }, {
        href: '',
        cover: 'https://www.dahuandesign.com/upload/catalog_list_pic/tw_catalog_list_18i11_jvg5taymhx.jpg',
        title: '室內設計 | 北歐中的窗景',
        text: '窗外的光景直入眼簾，與自然的氣息共享一片空間，回歸內心最渴望的生活。'
      }],
      processArea: [{
        cover: 'https://www.dahuandesign.com/images/processIcon01.png',
        title: '諮詢'
      }, {
        cover: 'https://www.dahuandesign.com/images/processIcon02.png',
        title: '平面配置'
      }, {
        cover: 'https://www.dahuandesign.com/images/processIcon03.png',
        title: '設計階段'
      }, {
        cover: 'https://www.dahuandesign.com/images/processIcon04.png',
        title: '工程階段'
      }, {
        cover: 'https://www.dahuandesign.com/images/processIcon05.png',
        title: '傢飾階段'
      }, {
        cover: 'https://www.dahuandesign.com/images/processIcon06.png',
        title: '驗收交屋'
      }],
      news: [{
        cover: 'https://www.dahuandesign.com/upload/news_list_pic/tw_news_list_18k11_zvqacwwx7k.jpg',
        type: 'Nov 11, 2018 / 室內設計文章',
        title: '簡單室內設計其實不簡單',
        content: '給與人呼吸感，不緊迫的感覺，讓這個空間與自己的情緒產生良好互動。一個好的空間，可以... '
      }, {
        cover: 'https://www.dahuandesign.com/upload/news_list_pic/tw_news_list_18k02_26a9243pe3.jpg',
        type: 'Nov 02, 2018 / 室內設計文章',
        title: '回家就是「度假」的開始',
        content: '我們出國度假是想要得到甚麼呢？不外乎是放鬆身心、轉換心情、一個暫時的逃避，或者是換... '
      }, {
        cover: 'https://www.dahuandesign.com/upload/news_list_pic/tw_news_list_18j31_h4ay8xkw9g.jpg',
        type: 'Oct 31, 2018 / 自地自建文章',
        title: '最推薦的自地自建療癒系建築',
        content: '「療癒系建築」不是單只是冰冷的建築而已，更是一個帶著健康又讓人能放鬆的建築，後延伸... '
      }]
    },
    methods: {}
  });
  $('#banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1200,
    dots: true,
    dotsClass: 'dots',
    cssEase: 'ease-in-out'
  });
  $(window).scroll(function () {
    var vw = $(window).innerWidth();
    if (scrollY > 400) {
      $('.bottomLinkArea').addClass('show');
    } else {
      $('.bottomLinkArea').removeClass('show');
    };
    if (scrollY > 650) {
      $('header').addClass('head_show');
    } else {
      $('header').removeClass('head_show');
    }
  });
  //AJAX page
  $('nav a').on('click', function (e) {
    e.preventDefault();
    var url = this.href;

    $('nav a.current').removeClass('current');
    $(this).addClass('current');

    $('#container').remove();
    $('#content').load(url + ' #container').hide().fadeIn('slow');
  });
  //Wow.js
  new WOW().init();
});
'use strict';

$(document).ready(function () {

  //AJAX page
  $('nav a').on('click', function (e) {
    e.preventDefault();
    var url = this.href;

    $('nav a.current').removeClass('current');
    $(this).addClass('current');

    $('#container').remove();
    $('#content').load(url + ' #container').hide().fadeIn('fast');
  });
  // 常見問題選項開關
  $('ul.faqList').find('h3').click(function () {
    var _this = $(this);
    var _li = _this.next();
    _li.slideToggle('normal', function () {
      if ($(this).css('display') == 'none') {
        _this.find('a.toggleOpen').text('+');
      }
    });
    if (_li.css('display') == 'block') {
      $(this).find('a.toggleOpen').text('-');
    }
  }); //ul open End
});
//# sourceMappingURL=all.js.map

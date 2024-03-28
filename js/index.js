/*=============================
fadeIn
=============================*/
$(window).on('load scroll', function () {

    var box = $('.fadeIn,.slide-left,.slide-right');
    var animated = 'animated';
    
    box.each(function(){
    
        var boxOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();
        var windowWidth = $(window).width();
        var windowSm = 750;

        console.log(scrollPos)

        if (windowWidth <= windowSm) {
        //横幅768px以下（スマホ）に適用させるJavaScriptを記述
            if(scrollPos > boxOffset - wh + 50 ){
            $(this).addClass(animated);
      }
        } else {
            if(scrollPos > boxOffset - wh + 200 ){
            $(this).addClass(animated);
      }
        //横幅768px以上（PC、タブレット）に適用させるJavaScriptを記述
        }


  
    });
  
});

/*=============================
hamburger
=============================*/
$('.btn-trigger').on('click', function(){
    $('.menu').toggleClass('is-active');
    $('.btn-trigger').toggleClass('active');
    
});


$(function(){
$('.menu__item').on('click', function(){
    $('.menu').css('display:none');
    $('.menu').toggleClass('is-active');
});
}());

/*=============================
menu-bar
=============================*/
$(function(){
  $(".has-sub").hover(function(){
    $(this).children(".sub").stop().slideToggle();
  });
});
$(function(){
    $('.dropdwn li').hover(function(){
        $("ul:not(:animated)", this).slideDown();
    }, function(){
        $("ul.dropdwn_menu",this).slideUp();
    });
});
// alert('heelo');

/*=============================
change-img
=============================*/

var doc = document.getElementById('text-box');
    const thumbs01 = document.querySelectorAll('.thumb');
thumbs01.forEach(function (item, index) {
    console.log(item);
        item.onclick = function() {
            if(index === 0) {
                console.log('00です');
                doc.innerHTML = 'フロントの様子です。';
            } if (index === 1) {
                console.log('01です');
                doc.innerHTML = 'ロビーでは、オセロや将棋も楽しんで頂けます。';
            } if (index === 2) {
                console.log('02です');
                doc.innerHTML = 'これは３枚目の画像です';
            } if (index === 3) {
                console.log('03です');
                doc.innerHTML = 'これは4枚目の画像です';
            };
            document.getElementById('bigimg').src = this.dataset.image;
        }
    });
var doc01 = document.getElementById('text-box-1');
    const thumbs02 = document.querySelectorAll('.thumb-1');
    thumbs02.forEach(function(item, index) {
        item.onclick = function() {
            if(index === 0) {
                console.log('0です');
                doc01.innerHTML = '昔ながらの温かい雰囲気の銭湯です。';
            } if (index === 1) {
                console.log('1です');
                doc01.innerHTML = 'さあ、どうぞ。日頃の疲れを洗い流しましょう。';
            } if (index === 2) {
                console.log('2です');
                doc01.innerHTML = '「好きやねん」の煙突が目印です。';
            } if (index === 3) {
                console.log('3です');
                doc01.innerHTML = 'これは4枚目の画像です1';
            };
            document.getElementById('bigimg-1').src = this.dataset.image;
        }
    });
var doc02 = document.getElementById('text-box-2');
    const thumbs03 = document.querySelectorAll('.thumb-2');
    thumbs03.forEach(function(item, index) {
        item.onclick = function() {
            if(index === 0) {
                console.log('0です');
                doc02.innerHTML = '明るく清潔感のある脱衣所です。';
            } if (index === 1) {
                console.log('1です');
                doc02.innerHTML = '創業50年。天井はあの頃のまま。<br>ぜひ一度見上げてみてください。';
            } if (index === 2) {
                console.log('2です');
                doc02.innerHTML = 'お子様大歓迎です。<br>学校や家庭では学べないことをいりふね温泉で体験してください。';
            } if (index === 3) {
                console.log('3です');
                doc02.innerHTML = '外国のお客様から人気な歌舞伎の暖簾も。';
            };
            document.getElementById('bigimg-2').src = this.dataset.image;
        }
    });
var doc03 = document.getElementById('text-box-3');
    const thumbs04 = document.querySelectorAll('.thumb-3');
    thumbs04.forEach(function(item, index) {
        item.onclick = function() {
            if(index === 0) {
                console.log('0です');
                doc03.innerHTML = 'おいしい生ビールに、昔懐かしい駄菓子など多数ご用意しております。';
            } if (index === 1) {
                console.log('1です');
                doc03.innerHTML = '缶ジュースに瓶ジュース。<br>種類豊富に揃っています。';
            } if (index === 2) {
                console.log('2です');
                doc03.innerHTML = '火照った身体に冷たいアイスはいかがですか？';
            } if (index === 3) {
                console.log('3です');
                doc03.innerHTML = 'ソフトアイスは、完熟メロン・巨峰・マンゴーなど<br>季節に応じてメニューを取り揃えております。';
            }if(index === 4) {
                console.log('4です');
                doc03.innerHTML = '';
            };
            document.getElementById('bigimg-3').src = this.dataset.image;
        }
    });


var doc04 = document.getElementById('text-box-4');
    const thumbs05 = document.querySelectorAll('.thumb-4');
    thumbs05.forEach(function(item, index) {
        item.onclick = function() {
            if(index === 0) {
                console.log('0です');
                doc04.innerHTML = 'フィンランド式サウナ<br><br>炉の石から、定期的に蒸気が発生する自動ロウリュウのサウナです。<br> 肌の奥まで入り込んだ汚れや老廃物は、大量の発汗によって皮膚の外へ押し出されます。<br>新陳代謝が高まれば、血行もよくなり、皮膚の細胞もイキイキと働くようになります。';
            } if (index === 1) {
                console.log('1です');
                doc04.innerHTML = 'クリニックバス<br><br>子供でも安心！少し浅めで、湯船の底からブクブクと泡が出てくる気泡風呂です。<br>気泡浴は手軽な全身マッサージ。泡から出るマイナスイオンが疲れた身体を癒してくれます。';
            } if (index === 2) {
                console.log('2です');
                doc04.innerHTML = 'ジェットバス<br><br>強力なジェット噴流を身体に当てることで血液の循環をよくさせるため<br>マッサージ効果は抜群。 9穴式と1穴式があります。';
            } if (index === 3) {
                console.log('3です');
                doc04.innerHTML = '電気風呂<br><br>お湯の中を低周波の電流が流れています。<br>※心臓病・高血圧症・腎臓病・動脈硬化症・神経過敏症・てんかん<br>その他医師から禁じられている人はご遠慮願います';
            }if (index === 4) {
                console.log('4です');
                doc04.innerHTML = '水風呂<br><br>｢いりふね温泉｣の水風呂は機械で冷却された水を使用しています。<br>汗をかいて老廃物を流し、水風呂で毛穴を引き締めることで肌の運動を活発にしてくれます。<br>冷え性・不眠症の方は是非おためしください。';
            }if (index === 5) {
                console.log('5です');
                doc04.innerHTML = '露天風呂<br><br>音楽を聴きながらゆったりと露天風呂につかるのは、家庭風呂では味わえない爽快さです。<br>露天風呂は薬湯になっており、季節によって玉露、ラベンダー等の色々な香りや効能が楽しめます。<br>※ 南側の浴室が和風、北側の浴室が洋風になっています。';
            };
            document.getElementById('bigimg-4').src = this.dataset.image;
        }
    });
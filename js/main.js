// ============================================
// 高豐登光電 - 網站互動
// ============================================
(function () {
  'use strict';

  // ---------- 行動版選單 ----------
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('open');
      mainNav.classList.toggle('open');
    });
    // 點選連結後自動關閉選單
    mainNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navToggle.classList.remove('open');
        mainNav.classList.remove('open');
      });
    });
  }

  // ---------- 案例資料 ----------
  // 案例照片已本地化至本站 images/cases/ 資料夾
  var cases = [
    // 案例圖片逐一對應服務項目（service-1..9）
    { img: 'images/cases/case_ix35_refurbish_01.jpg', cap: '大燈翻新修復', service: 'service-1' },
    { img: 'images/cases/case_camry_fisheye_01.jpg', cap: '魚眼改裝', service: 'service-2' },
    { img: 'images/cases/case_led_bulbs_01.jpg', cap: 'LED 燈泡升級', service: 'service-3' },
    { img: 'images/cases/case_tt_wiring_01.jpg', cap: '線圈重建', service: 'service-4' },
    { img: 'images/cases/case_a6_leak_01.jpg', cap: '大燈漏水處理', service: 'service-5' },
    { img: 'images/cases/case_ml350_remote_01.jpg', cap: '無線遙控驗車模組', service: 'service-6' },
    { img: 'images/cases/case_cayenne_prog_01.jpg', cap: '編程設碼', service: 'service-7' },
    { img: 'images/cases/case_e71_upgrade_01.jpg', cap: '老款改新款', service: 'service-8' },
    { img: 'images/cases/case_g30_upgrade_01.jpg', cap: '低階改高階', service: 'service-9' }
  ];

  var grid = document.getElementById('caseGrid');
  if (grid) {
    cases.forEach(function (item) {
      var el = document.createElement('div');
      el.className = 'case-item';
      el.innerHTML =
        '<a href="' + item.img + '" target="_blank" rel="noopener">' +
        '<img src="' + item.img + '" alt="' + item.cap + '" loading="lazy"></a>' +
        '<div class="case-caption">' + item.cap + '</div>' +
        '<a class="case-service-link" href="#' + item.service + '">對應服務：' + item.cap + ' →</a>';
      grid.appendChild(el);
    });
  }

  // ---------- 淡入動畫（可選） ----------
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card').forEach(function (card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(card);
  });
})();

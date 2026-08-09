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
  // 使用現有官網的實際施工案例照片（gogfc.com.tw /uploads）
  var cases = [
    { img: 'https://www.gogfc.com.tw/uploads/use/xiufu2023062701.jpg', cap: 'BMW G30 大燈光圈修復' },
    { img: 'https://www.gogfc.com.tw/uploads/use/xiufu2023062702.jpg', cap: 'W167 GLE 方向燈修復' },
    { img: 'https://www.gogfc.com.tw/uploads/use/xiufu2023062703.jpg', cap: '現代 Santafe 一體式高亮魚眼' },
    { img: 'https://www.gogfc.com.tw/uploads/use/xiufu2023062704.jpg', cap: '本田 FIT 大燈泛黃翻新' },
    { img: 'https://www.gogfc.com.tw/uploads/use/xiufu2023062705.jpg', cap: 'Toyota Wish 大燈外表翻新' },
    { img: 'https://www.gogfc.com.tw/uploads/use/xiufu2023062706.jpg', cap: '奧迪 TT 大燈泛黃翻新' },
    { img: 'https://www.gogfc.com.tw/uploads/use/xiufu2023062707.jpg', cap: 'Mazda2 外表翻新' },
    { img: 'https://www.gogfc.com.tw/uploads/use/xiufu2023062708.jpg', cap: 'Benz Smart 大燈翻新' },
    { img: 'https://www.gogfc.com.tw/uploads/product/202106/ddfx2021062912.jpg', cap: '燈殼受外力撞擊破裂修復' }
  ];

  var grid = document.getElementById('caseGrid');
  if (grid) {
    cases.forEach(function (item) {
      var el = document.createElement('div');
      el.className = 'case-item';
      el.innerHTML =
        '<img src="' + item.img + '" alt="' + item.cap + '" loading="lazy">' +
        '<div class="case-caption">' + item.cap + '</div>';
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

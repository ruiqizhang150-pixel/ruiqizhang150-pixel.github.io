/*
  檔案功能：site.js
  被引用目的：為靜態 HTML 頁面加入互動層，讓導覽選單、動畫狀態與可及性屬性能依使用者操作而改變。
  編寫安排：等待 DOMContentLoaded 後才執行，確保 HTML 結構已載入；再使用 querySelector 取得元素，透過 classList 切換 CSS class，讓 JavaScript 控制狀態、CSS 負責視覺。
  與 HTML/CSS 的關係：HTML 提供 .site-header-toggle、.site-menu、.card、.widget 等 class；CSS 定義 .is-open、.js-reveal、.is-visible 的樣式；本檔負責在適當時機加入或移除這些 class。
*/

// 監聽事件；當指定事件發生時執行後方函式。
document.addEventListener("DOMContentLoaded", function () {
  // 宣告變數，保存 DOM 元素、狀態或資料。
  var menuButton = document.querySelector(".site-header-toggle");

  // 宣告變數，保存 DOM 元素、狀態或資料。
  var siteMenu = document.querySelector(".site-menu");

  // 條件判斷，只有符合條件時才執行內部程式。
  if (menuButton && siteMenu) {
    // 設定 HTML 屬性，常用於無障礙或互動狀態。
    menuButton.setAttribute("aria-label", "切換網站選單");

    // 設定 HTML 屬性，常用於無障礙或互動狀態。
    menuButton.setAttribute("aria-expanded", "false");

    // 監聽事件；當指定事件發生時執行後方函式。
    menuButton.addEventListener("click", function (event) {
      // 取消連結或按鈕的預設行為，改由 JavaScript 控制互動。
      event.preventDefault();

      // 宣告變數，保存 DOM 元素、狀態或資料。
      var isOpen = siteMenu.classList.toggle("is-open");

      // 設定 HTML 屬性，常用於無障礙或互動狀態。
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // 宣告變數，保存 DOM 元素、狀態或資料。
  var revealItems = document.querySelectorAll(".card, .widget, .content, .sidebar");

  // 逐一處理一組元素或資料。
  revealItems.forEach(function (item) {
    // 新增 CSS class，讓元素套用指定樣式或動畫狀態。
    item.classList.add("js-reveal");
  });

  // 條件判斷，只有符合條件時才執行內部程式。
  if ("IntersectionObserver" in window) {
    // 宣告變數，保存 DOM 元素、狀態或資料。
    var observer = new IntersectionObserver(
      function (entries) {
        // 逐一處理一組元素或資料。
        entries.forEach(function (entry) {
          // 條件判斷，只有符合條件時才執行內部程式。
          if (entry.isIntersecting) {
            // 新增 CSS class，讓元素套用指定樣式或動畫狀態。
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    // 逐一處理一組元素或資料。
    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    // 逐一處理一組元素或資料。
    revealItems.forEach(function (item) {
      // 新增 CSS class，讓元素套用指定樣式或動畫狀態。
      item.classList.add("is-visible");
    });
  }
});

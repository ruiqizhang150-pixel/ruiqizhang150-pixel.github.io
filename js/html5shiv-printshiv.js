/*
  檔案功能：html5shiv-printshiv.js
  被引用目的：協助舊版瀏覽器辨識 HTML5 語意標籤，屬於相容性支援檔。
  編寫安排：此檔通常不負責頁面互動，也不改變藝術家網站的視覺風格；它的角色是讓 header、nav、section、main、footer 等元素在舊瀏覽器中能被正確處理。
*/

(function () {
  "use strict";

  // 宣告變數，保存 DOM 元素、狀態或資料。
  var note = "這個檔案保留為舊版瀏覽器 HTML5 支援示範；現代課堂可主要閱讀 site.js。";

  // 條件判斷，只有符合條件時才執行內部程式。
  if (window.console && typeof window.console.info === "function") {
    window.console.info(note);
  }
})();

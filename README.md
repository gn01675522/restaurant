# 餐廳清單
　　此專案為簡易版餐廳清單，詳細功能及使用方式請見下方！

## 功能列表
  1. 可於主頁觀看全數餐廳的概略介紹，包括名稱、料理類型及評分。
  2. 點擊餐廳圖片可查看您有興趣的餐廳的詳細資料，內含餐廳名稱、料理類型、地址、電話及簡介。
  3. 可透過搜尋欄搜尋您想要的關鍵字，關鍵字類別包含餐廳名稱、料理類型、地區。
  4. 針對輸入欄位進行優化處理，可避免空格搜尋又或是未輸入關鍵字即進行搜尋的狀況產生。

## 如何執行
  首先，先確保您有下載 git bash 或其他有相同功能之 terminal 應用程式，
  並依序於該 terminal 執行以下步驟：

  1. **複製此專案於您本機資料夾，可參照以下指令：**
    <pre><code>git clone `https://github.com/gn01675522/restaurant.git`</code>
  2. **將 terminal 路徑指向至您存放此專案之資料夾，並將路徑切換至專案資料夾：**
    <pre><code>cd restaurant</code></pre>
  3. **接著執行下列指令來安裝 npm 、 express 、 nodemon**
    <pre><code>npm install</code></pre>
    <pre><code>npm i express</code></pre>
    <pre><code>npm i nodemon</code></pre>
  4. **再來輸入下列指令：**
    <pre><code>nodemon app.js</code></pre>
  5. **若您於 terminal 中看見以下訊息，則代表成功啟動 server：**
    <pre><code>Server is listening on port:3000</code></pre>
  6. **接著在您的瀏覽器輸入 http://localhost:3000/ 即可前往專案網頁；若想要中斷執行可於 terminal 中按 ctrl + c 即可中斷！**

## 開發工具
  1. node.js：16.14.2
  2. express：4.18.1
  3. express-handlebars：6.06
  4. nodemon：2.0.16
  5. bootstrap：5.13
  6. Fontawesome：6.11

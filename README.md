# 新的一年從 CSS Architecture 開始

## Statement
此篇為整理網路上抄來的筆記，由於實務經驗不足，有許多論述無法驗證。

## SMACSS
At the very core of SMACSS is categorization.
Base、Layout、Module、State、Theme

1. Base
基底，一些預設的樣式
例如：CSS Reset、CSS Normalize
```
* {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
}

a {
  text-decoration: none;
}
```
2. Layout
專案中較大塊的 component
如：Header、Footer
4. Module
專案中較小塊的 component
如：Modal、Carousel
5. State
狀態或動作，複寫原本的樣式
如：is-active、is-collapsed
7. Theme 
主題，複寫原本的樣式
如：明／暗主題、多國語系的字型設定

SMACSS 分類是個概念，可依專案需求自行增減
看看大神們怎麼寫，畢竟學習總是從模仿開始

1. [the-7-1-pattern](https://sass-guidelin.es/#the-7-1-pattern)
2. [sass-7-1-pattern](https://gist.github.com/rveitch/84cea9650092119527bc)


## OOCSS
將介面視為好幾個 component，並盡可能的複用 component，減少程式碼重複撰寫
物件導向的概念（寫出彈性且可重複使用的 component）

兩大原則
1. Separation of structure and skin
結構與樣式分離，以 antdv button 為例
![antdv-btn](https://i.imgur.com/Xvygb0h.png)
2. Separation of container and content
容器與內容分離，以 antdv modal 為例
![antdv-modal](https://i.imgur.com/Ad5XrKG.png)

其他概念：
減少層數
如
```
header nav ul li a img {
  display: block;
  max-width: 100%;
}
```
```
<img src="" class="pic" />
.pic {
  display: block;
  max-width: 100%;
}
```

以下連結結論：最好每個 tag 都取 className，選擇器直接選取該 className 效能較好
[Optimizing CSS: ID Selectors and Other Myths](https://www.sitepoint.com/optimizing-css-id-selectors-and-other-myths/)
*尚須補足的觀念：CSSOM、一些效能跟瀏覽器如何 render......*


## BEM
Block、Element、Modifier
1. 區塊 Block
通常是一個 component 的基底，如 header、footer

2. 元素 Element
用兩個底線(`__`)接在 block 之後，通常是 block 的子元素，如 `header__logo`

3. 修飾符 Modifier
用兩個 dash(`--`)可接在 block 或 element 之後，通常用於一個狀態，
如 `header--hide`、`menu__link--active`
注意使用時要搭配原生樣式的 class，如下
`<a class="menu__link menu__link--active">link</a>`
常見的狀態：
　* active（連結觸發）
　* collapses（sidebar 隱藏）
　* 多國語系（不同語言不同樣式）
　* 主題（明暗主題或相同按鈕不同樣式）

優點：命名不易重複，較能避免全域汙染，但還是有可能會汙染

缺點：class 名稱太長讓 HTML 標籤較肥


[BEM範例](https://codepen.io/OE3OE3OE3/pen/eYdemqG)

## 結論
CSS 架構百家爭鳴，共同用意都是降低複寫、寫出更具維護與擴展性質的程式碼
這些規範都不是死的，不一定要全然遵守，可依照專案或團隊性質進行調整

## 主委加碼 CSS Modules

[CSS Modules 範例](https://github.com/yyhurs/css-modules-project/blob/master/src/views/Home.vue)

優點：
* 與「非 css in js」相比
    1. 跟 scoped 一樣自動避免全域汙染

* 與「scoped」相比
    1. scoped 會提升該選擇器的權重 
    2. scoped 不能完全避免全域汙染

缺點：
* emmet 目前不支援降低開發速度
* 還有下面遇到的問題 (?

遇到的問題：
1. 一個 tag 裡同時綁定一個既有的 class 跟一個動態的 class

原本會這樣寫
```
<div class="link" :class="{'link-active' : isActive}" />
```
用 CSS Modules 我寫不出來......
```
// 1. 綁定一個既有 class
<div :class="[$style['link']]" />
// 2. 綁定多個既有 class
<div :class="[$style['link'], $style['link-active']]" />
// 3. 綁定需判斷是否要加入的 class
<div :class="{$style['link-active'] : isActive}" />

// 4. 綁定一個既有 class 跟一個需判斷是否要加入的 class
// 以下只是示意，寫法是錯的
<div :class="[$style['link'], [[$style['link-active']] : isActive]]" />
```

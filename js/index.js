cards = [
  {
    "id": "product",
    "title": "即將上市",
    "label": "pro01_label",
    "target": "#pro01",
    "target_id": "pro01",
    "img": "./img/product/01.jpg"
  },
  {
    "id": "product",
    "title": "即將上市",
    "label": "pro02_label",
    "target": "#pro02",
    "target_id": "pro02",
    "img": "./img/product/01.jpg"
  },
  {
    "id": "product",
    "title": "即將上市",
    "label": "pro03_label",
    "target": "#pro03",
    "target_id": "pro03",
    "img": "./img/product/01.jpg"
  },
  {
    "id": "product",
    "title": "即將上市",
    "label": "pro04_label",
    "target": "#pro04",
    "target_id": "pro04",
    "img": "./img/product/01.jpg"
  },
  {
    "id": "product",
    "title": "即將上市",
    "label": "pro05_label",
    "target": "#pro05",
    "target_id": "pro05",
    "img": "./img/product/01.jpg"
  },
  {
    "id": "product",
    "title": "即將上市",
    "label": "pro06_label",
    "target": "#pro06",
    "target_id": "pro06",
    "img": "./img/product/01.jpg"
  },
  {
    "id": "product",
    "title": "即將上市",
    "label": "pro07_label",
    "target": "#pro07",
    "target_id": "pro07",
    "img": "./img/product/01.jpg"
  },
  {
    "id": "product",
    "title": "即將上市",
    "label": "pro08_label",
    "target": "#pro08",
    "target_id": "pro08",
    "img": "./img/product/01.jpg"
  },

  {
    "id": "experiment",
    "title": "冷啟動模擬器",
    "label": "exp01_label",
    "target": "#exp01",
    "target_id": "exp01",
    "img": "./img/experiment/01.jpg"
  },
  {
    "id": "experiment",
    "title": "高溫高剪切測定儀",
    "label": "exp02_label",
    "target": "#exp02",
    "target_id": "exp02",
    "img": "./img/experiment/02.jpg"
  },
  {
    "id": "experiment",
    "title": "消泡測試儀",
    "label": "exp03_label",
    "target": "#exp03",
    "target_id": "exp03",
    "img": "./img/experiment/03.jpg"
  },
  {
    "id": "experiment",
    "title": "低溫流動測定儀",
    "label": "exp04_label",
    "target": "#exp04",
    "target_id": "exp04",
    "img": "./img/experiment/04.jpg"
  },
  {
    "id": "experiment",
    "title": "MINI-ROTARY VISCOMETER",
    "label": "exp05_label",
    "target": "#exp05",
    "target_id": "exp05",
    "img": "./img/experiment/05.jpg"
  },
  {
    "id": "experiment",
    "title": "自動黏度測定儀",
    "label": "exp06_label",
    "target": "#exp06",
    "target_id": "exp06",
    "img": "./img/experiment/06.jpg"
  },
  {
    "id": "experiment",
    "title": "閉杯式閃火點測定儀",
    "label": "exp07_label",
    "target": "#exp07",
    "target_id": "exp07",
    "img": "./img/experiment/07.jpg"
  },
  {
    "id": "experiment",
    "title": "開杯式閃火點測定儀",
    "label": "exp08_label",
    "target": "#exp08",
    "target_id": "exp08",
    "img": "./img/experiment/08.jpg"
  },
  {
    "id": "experiment",
    "title": "TAN、TBN 酸價、鹼價測",
    "label": "exp09_label",
    "target": "#exp09",
    "target_id": "exp09",
    "img": "./img/experiment/09.jpg"
  },
  {
    "id": "experiment",
    "title": "銅板腐蝕測試儀",
    "label": "exp10_label",
    "target": "#exp10",
    "target_id": "exp10",
    "img": "./img/experiment/10.jpg"
  },
  {
    "id": "experiment",
    "title": "色相分析儀",
    "label": "exp11_label",
    "target": "#exp11",
    "target_id": "exp11",
    "img": "./img/experiment/11.jpg"
  },
  {
    "id": "experiment",
    "title": "831KF Coulometer 庫倫式水分測定",
    "label": "exp12_label",
    "target": "#exp12",
    "target_id": "exp12",
    "img": "./img/experiment/12.jpg"
  },
  {
    "id": "experiment",
    "title": "乳化測定儀",
    "label": "exp13_label",
    "target": "#exp13",
    "target_id": "exp13",
    "img": "./img/experiment/13.jpg"
  },
  {
    "id": "experiment",
    "title": "傅立葉紅外線光譜儀",
    "label": "exp14_label",
    "target": "#exp14",
    "target_id": "exp14",
    "img": "./img/experiment/14.jpg"
  },
  {
    "id": "experiment",
    "title": "潤滑脂錐入度測定儀",
    "label": "exp15_label",
    "target": "#exp15",
    "target_id": "exp15",
    "img": "./img/experiment/15.jpg"
  },
  {
    "id": "experiment",
    "title": "寬潤滑脂溫度範圍滴定測定儀",
    "label": "exp16_label",
    "target": "#exp16",
    "target_id": "exp16",
    "img": "./img/experiment/16.jpg"
  },
  {
    "id": "experiment",
    "title": "XRF光譜",
    "label": "exp17_label",
    "target": "#exp17",
    "target_id": "exp17",
    "img": "./img/experiment/17.jpg"
  }
]


Vue.component("card",{
  template: "#card",
  props: ["card_data"]
})

var vm = new Vue({
  el: "#app",
  data: {
    cards: cards
  }
})


//點擊continue按鈕後，顯示導覽列、產品、footer
function start(){
  $("#nav").css("display","block")
  $("#product").css("display","block")
  $("#footer").css("display","block")
  $("#home").css("display","none")
}
//點擊導覽列的首頁名稱，回到首頁，並把其他隱藏
function home(){
  $("#home").css("display","block")
  $("#nav").css("display","none")
  $("#product").css("display","none")
  $("#experiment").css("display","none")
  $("#about").css("display","none")
  $("#QA").css("display","none")
  $("#footer").css("display","none")
}
//點擊導覽列項目，把其他不相關的區塊隱藏
function fn(i){
  $("#footer").css("display","block")
  $("#home").css("display","none")

  switch(i){
    case 0:
      $("#product").css("display","block")
      $("#experiment").css("display","none")
      $("#about").css("display","none")
      $("#QA").css("display","none")
      break
    case 1:
      $("#product").css("display","none")
      $("#experiment").css("display","block")
      $("#about").css("display","none")
      $("#QA").css("display","none")
      break
    case 2:
      $("#product").css("display","none")
      $("#experiment").css("display","none")
      $("#about").css("display","block")
      $("#QA").css("display","none")
      break
    case 3:
      $("#product").css("display","none")
      $("#experiment").css("display","none")
      $("#about").css("display","none")
      $("#QA").css("display","block")
      break

  }
}
//螢幕小於480px，點擊選單項目後會自動收合(再點一次按鈕)
$(function(){
  if($(window).width() < 480){
    $(".navbar a").on("click",function(){
      $(".navbar-toggler").click();
    })
  }
})

//index.js
//获取应用实例
const app = getApp()
Page({
  data:{
    list:[],
    interval: 2000,
    duration: 500,
  },
  intervalChange  (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  pinglun() {
    console.log('pinglun');
  },
  bierenxihuanpx () {
    console.log('bierenxihuanpx');
  },
  fenxiang() {
    console.log('fenxiang');
  }
})    

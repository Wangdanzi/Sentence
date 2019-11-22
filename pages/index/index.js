//index.js
//获取应用实例
const app = getApp()
Page({
  data:{
    list:[
      {
        time:'1',
        background:'red',
        text:'今天天气真晴朗'
      },
      {
        time:'2',
        background:'blue',
        text:'处处好风光'
      },
      {
        time:'3',
        background:'pink',
        text:'耶斯'
      }
    ],
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

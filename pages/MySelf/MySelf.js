//获取应用实例
const app = getApp()
Page({
  data:{
    jiantou:'xia',
    haha:1,
    list:[
      {
        title:'我的消息',
        iocn:'xiaoxi'
      },
      {
        title: '我的收藏夹·',
        iocn: 'shoucang'
      },
      {
        title: '我的评论',
        iocn: 'pinglun'
      },
      {
        title: '反馈帮助',
        iocn: 'bangzhufankui'
      },
      {
        title: '推荐句读',
        iocn: 'tuijian'
      },
      {
        title: '设置',
        iocn: 'shezhi'
      }
    ]
  },
  click(e,index){
    console.log(e, e.currentTarget.dataset.index);
    if (e.currentTarget.dataset.index){
      console.log(12354);
    if (this.data.jiantou === 'xia') {
      this.setData({
        jiantou: 'shangjiantou'
      })

    } else {
      this.setData({
        jiantou: 'xia'
      })
    }

    }
    // if (this.data.jiantou === 'xia') {
    //   this.setData({
    //     jiantou: 'shangjiantou'
    //   })

    // } else {
    //   this.setData({
    //     jiantou: 'xia'
    //   })

    // }
    // e.map(item=>{
    //   console.log(item);
      
    // })
  }
})
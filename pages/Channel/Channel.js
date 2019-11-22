Page({
  data: {
    addflag:true,  //判断是否显示搜索框右侧部分
    addimg:'../../images/activity_add.png',
    searchstr:'',
    list:[  
      {
        id:1,
        title:'金句'
      },
      {
        id:2,
        title:'美文'
      },
      {
      id:3,
      title:'换题'
      }
    ]
  },
  onLoad(){
  },
  onShow(){
   
  },

  tap(e) {

  },
 add() {
  console.log('添加频道');
 },
 handleChannel (event) {
  console.log(event.currentTarget.id,event);
 },
  // 搜索框右侧 事件
  addhandle() {
    console.log('触发搜索框右侧事件')
  },

  //搜索框输入时触发
  searchList(ev) {
    let e = ev.detail;
    this.setData({
      searchstr: e.detail.value
    })
  },
  //搜索回调
  endsearchList(e) {
    console.log('查询数据')
  },
  // 取消搜索
  cancelsearch() {
    this.setData({
      searchstr: ''
    })
  },
  //清空搜索框
  activity_clear(e) {
    this.setData({
      searchstr: ''
    })
  },


})
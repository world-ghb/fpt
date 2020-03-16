//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
 name:'mike',
 age:"28",
 count:0,
 students:[
   {name:'张三',age:'31'},
   {name:'李四',age:'32'},
   {name:'孙五',age:'33'}
 ]
  },
btnclick(){
  //1.其它开发的惯例做法,但是在这里是错误的，因为界面不刷新
  //this.data.count +=1,
  //console.log(this.data.count)
  //2.正确做法this.setData
  this.setData({
      count:this.data.count + 1
      })
}
})

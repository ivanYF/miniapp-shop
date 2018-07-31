// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
    /**
    * 页面的初始数据
    */
    data: {
        title: 'Index page',
        userInfo: {},
        curIndex:0,
        category:[
            {
                name:'推荐',
                id:1,
            },
            {
               name:'护肤',
                id:2, 
            },
            {
                name:'彩妆',
                id:3,
            },
            {
                name:'洗漱',
                id:4,
            },
            {
                name:'居家',
                id:5,
            },
            {
                name:'服饰',
                id:6,
            },
            {
                name:'包包',
                id:7,
            },
            {
                name:'化妆',
                id:8,
            },
            {
                name:'口红',
                id:9,
            },
            {
                name:'防晒',
                id:10,
            },
            {
                name:'书籍',
                id:11,
            },
        ],
        wWidth: 0,
        wHeight:0,
        scrollL: 0,

        loadImgSrcList:[],   // 预加载 src
        flData:{
            fHeight:0,   // 左边容器的高度
            imgList:[]   // 左边容器的图片集合
        }, 
        frData:{
            fHeight:0,   // 右边容器的高度
            imgList:[]   // 右边容器的图片集合
        },
        screenWidth:0,   // 屏幕宽度
        paddingWidth:20, // 图片左右边距
        imgWidth:0,      // 图片的实际宽度
        imgListLength:0, // 图片数组的个数
        imgLoadedCount:0,// 图片加载完成的个数
    },
    /**
    * 生命周期函数--监听页面加载
    */
    onLoad () {
        // console.dir(app.data)
        let screenData = wx.getSystemInfoSync();
        let imgWidth = screenData.screenWidth/2 - 20;
        this.setData({ 
            wWidth:screenData.screenWidth,
            wHeight:screenData.screenHeight,
            imgWidth: imgWidth
        });
        this.getImgList();
    },
    /**
    * 生命周期函数--监听页面初次渲染完成
    */
    onReady () {
    },
    /**
    * 生命周期函数--监听页面显示
    */
    onShow () {
        
    },
    switchCategory:function(e){
        let idx = e.currentTarget.dataset.index; // 获取点击元素的索引
        this.setData({curIndex:idx}) 
        let offsetL = e.target.offsetLeft; // 点击的item距离适口view左边界距离
        /**
         * 获取点击元素距离中心的偏移量
         * 滚动距离 = 偏移数值 - 视口／2 (稍微增加一些元素的中间数值)
         */
        let scrollL = offsetL - this.data.wWidth/2 + 20;
        scrollL = scrollL > 0 ? scrollL : 0;
        this.setData({ scrollL:scrollL }) 
    },
    scrollFun:function(e){
        // console.log(e);
    },
    /**
     * 
     */
    imgOnLoad: function(e){
        var _this = this;

        var link = e.currentTarget.dataset.link;
        var imgWidth = _this.data.imgWidth;
        var realWidth = e.detail.width;
        var realHeight = e.detail.height;

        // 计算 imgHeight
        var imgHeight = imgWidth/realWidth*realHeight;

        var flData = _this.data.flData;
        var frData = _this.data.frData;
        
        // 对比左右轨道
        if (flData.fHeight <=  frData.fHeight) {
            // 加入右边
            flData.imgList.push(link);
            flData.fHeight = flData.fHeight + imgHeight;
            _this.setData({ flData:flData })

        }else{
            // 加入左边
            frData.imgList.push(link);
            frData.fHeight = frData.fHeight + imgHeight;

            _this.setData({ frData:frData })
        }   


        // 统计是否全部计算完成 然后清空
        if (_this.data.imgLoadedCount == _this.data.imgListLength - 1) {
            _this.setData({
                imgLoadedCount:0,
                loadImgSrcList:[],
            })  
        }else{
            var num = _this.data.imgLoadedCount + 1;
            _this.setData({
                imgLoadedCount: num,
            })
        }
    },
    /**
     * [getImgList 获取图片数据]
     * return {[type]} [description]
     */
    getImgList: function(){
        var _this = this;

        //load完成加载下一页
        if (_this.data.imgLoadedCount) { return};

        var imgList = [
            '../../images/pbl/timg1.jpeg',
            '../../images/pbl/timg2.jpeg',
            '../../images/pbl/timg3.jpeg',
            '../../images/pbl/timg4.jpeg',
            '../../images/pbl/timg5.jpeg',
            '../../images/pbl/timg6.jpeg',
            '../../images/pbl/timg1.jpeg',
            '../../images/pbl/timg2.jpeg',
            '../../images/pbl/timg3.jpeg',
            '../../images/pbl/timg4.jpeg',
            '../../images/pbl/timg5.jpeg',
            '../../images/pbl/timg6.jpeg',
        ]
        
        // 逐渐插入 形成插入动画
        for (var i = 0; i < imgList.length; i++) {
            (function(i){
                setTimeout(function(time){
                    var newpic  = _this.data.loadImgSrcList;
                    newpic.push(imgList[i])
                    _this.setData({ loadImgSrcList:newpic })
                },(i+1)*300)
            })(i)
        };

        _this.setData({
            imgListLength: imgList.length
        })

    },
    onReachBottom: function(){
        this.getImgList();
    },
    /**
    * 生命周期函数--监听页面隐藏
    */
    onHide () {
        // console.log(' ---------- onHide ----------')
    },
    /**
    * 生命周期函数--监听页面卸载
    */
    onUnload () {
        // console.log(' ---------- onUnload ----------')
    },
    /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
    onPullDownRefresh () {
        // console.log(' ---------- onPullDownRefresh ----------')
    }
})

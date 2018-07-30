# 微信小程序 模块集合

> 微信小程序 商城


## 介绍

- 商城项目开始

- 首页商品瀑布流

- 商城分类页面

- 我的 （收藏列表 订单 收货地址  意见反馈）

## 将项目克隆到本地

```bash
# 定位到任意目录
$ cd path/to/root

# 克隆仓库到指定的文件夹
$ git clone https://github.com/ivanYF/minapp-shop.git [project-name] --depth 1

# 进入指定的文件夹
$ cd [project-name]
```

## 安装项目`CNPM`依赖

```bash
$ cnpm install
```

# 查看demo
$ npm run watch
```

通过`微信Web开放者工具`打开项目根目录下`dist`文件夹，预览~

可以通过任意开发工具完成`src`下的编码，`gulp`会监视项目根目录下`src`文件夹，当文件变化自动编译


### 生产阶段

执行如下命令

```bash
# 启动编译
$ npm run build
```

生产阶段的代码会经过压缩处理，最终输出到`dist`下。

同样可以通过`微信Web开放者工具`测试。



## 有问题？

Welcome PR or Issue！


## 许可

MIT &copy; [ivan](https://github.com/ivanYF)

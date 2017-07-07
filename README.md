<p align=center>
  <img src="https://xuffy.github.io/wms-logo.png" alt="" width="140">
</p>
<p align=center>
  网站后台管理系统模版
</p>

---

模版在[layui-wms](https://github.com/Xuffy/layui-wms)基础上重构，基于`layui`和`vue.js`。

启动说明
===
```
// 安装开发环境
$ npm i -g fis3

// 进入项目根目录
$ npm i

// 启动服务
$ npm run server

// 停止服务
$ npm run stop

// 开发调试
$ npm run dev

// 发布项目
$ npm run pro
```

依赖模块
===
- `layui`
- `underscore-min.js`
- `mock.js`
- `vue.js`

扩展模块(layui_modules)
===
## route.js
* setBreadcrumb&nbsp;&nbsp;&nbsp;&nbsp;_route.setBreadcrumb(params[, setting])
 ```
 每个模块应调用此方法显示当前位置导航。params显示导航参数,可配置导航点击后跳转业务模块。
 setting地址导航配置,现在可以配置是否显示导航。
 ```
 示例：
 ```
 //隐藏地址导航栏
_route.setBreadcrumb(null, {hide: true}); 
//不配置点击后跳转
_route.setBreadcrumb(['前一级目录', '当前目录']); 
//配置点击后跳转
_route.setBreadcrumb(['前两级目录', {url: '业务模块路径', name: '前一级目录',data:'传递的参数'}, '当前目录']); 
 ```

* go&nbsp;&nbsp;&nbsp;&nbsp;_route.go(url[, urlParams])
 ```
 业务模块之间相互跳转。url指向业务模块名，urlParams所需要传递的参数。
 ```
 示例：
 ```
 _route.go('user',{id:1});
 ```

* config&nbsp;&nbsp;&nbsp;&nbsp;_route.config
 ```
 设置跳转的业务模块路径，在app.js中配置。
 ```
 示例：
 ```
_route.config.base = 'modules/{0}/index.js';
 ```

* params&nbsp;&nbsp;&nbsp;&nbsp;_route.params
 ```
 获取上个页面传递到当前页面的参数。
 ```
 示例：
 ```
_route.params.id获取id参数
 ```
 

更新日志
===
### v0.0.2
* 删除扩展模块view.js
* 解决layer自定义弹窗遮罩层BUG。

### v0.0.1
* 重构[layui-wms](https://github.com/Xuffy/layui-wms)，使用[vue.js](https://cn.vuejs.org/)做视图渲染。
* 重构页面布局，支持扩展移动端显示（现已支持pad显示，分辨率小于1280）

文档
===
[layui官网](http://www.layui.com/)&nbsp;&nbsp;&nbsp;&nbsp;[Fis3官网](http://fis.baidu.com/fis3/index.html)&nbsp;&nbsp;&nbsp;&nbsp;[Mock.js官网](http://mockjs.com/)&nbsp;&nbsp;&nbsp;&nbsp;

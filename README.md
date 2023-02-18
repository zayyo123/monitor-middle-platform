
<div align=center style="height:200px; overflow:200px; border-radius:50px">
    <img src="https://s1.ax1x.com/2022/08/18/vrul7D.png" style="zoom:40%;border-radius:50px" />
</div>

<p align="center">
 <a><img src="https://img.shields.io/static/v1?label=platform&message=dev by RevueMonitor&color=blue&logo=Platform.sh&Color=white"></a>
 <a><img src="https://img.shields.io/static/v1?label=plugin&message=used revue-monitor&color=40E0D0&logo=AdGuard&logoColor=white&link=https://www.npmjs.com/package/revue-monitor"></a>
 <a><img src="https://img.shields.io/static/v1?label=application&message=vue2 | vue3&color=green&logo=Vue.js&logoColor=white&link=https://www.npmjs.com/package/revue-monitor"></a>
    
</p>

> 如果你是一位前端工程师，那你一定不止一次去解决一些顽固的线上问题，你也曾想方设法复现用户的bug，结果可能都不太理想。 怎样定位前端线上问题，一直以来，都是很头疼的问题，因为它发生于用户的一系列操作之后。错误的原因可能源于机型，网络环境，复杂的操作行为等等，在我们想要去解决的时候很难复现出来，自然也就无法解决。

> 身为一名前端工程师，我每天都要面临很多线上的问题，一时间让我焦头烂额。公司其他的监控系统也有，但是每次解决问题都需要辗转于各种监控系统之间，亦是疲惫不堪。所以，我便为自己（前端工程师）量身定做了这样一款监控系统，现在分享给大家使用，欢迎点击了解。

> 只需要简单几步，你就可以搭建一套属于自己的前端监控系统了。

# 快速上手

1. 在vue2 vue3项目中下载npm包 revue-monitor

   ```bash
   npm i revue-monitor
   ```
2. 私有化部署监控中台 或 使用在线的监控中台
   
# 监控内容
1.  可交互性：请求性能
2.  服务器稳定性：主要是计算请求成功率
3.  加载速度：主要监控首屏性能
4.  可用性：包含渲染错误/白屏、请求错误、JS错误、静态资源错误
5.  业务数据：包含PV/UV、自定义事件/打点

# 首页：
<p align=center><img src="https://img-blog.csdnimg.cn/a68481d874cf45bd91890b376887b54d.png" alt="首页"> </p>

# JSError数据展示页面：

   <p align=center><img src="https://img-blog.csdnimg.cn/23c1dcbbca80478094f12e1e10b687b9.png" alt="中台的JSError数据展示页面"> </p>

# 性能数据展示页面

   <p align=center><img src="https://img-blog.csdnimg.cn/39074f32d47d48dd812b151e86fd974a.png" alt="中台的性能数据展示页面"> </p>

# 接口错误数据展示页面

   <p align=center><img src="https://img-blog.csdnimg.cn/953d409c8f564f488713507c7461867c.png" alt="中台的页面接口错误数据展示页面"> </p>

1. 根据项目需求和侧重，插拔的局部使用插件

   中台网站，会根据插件的使用情况，智能的显示信息（在线监控中台）；并且您还可以根据独特的需求，扩展插件内容（通过自我开发或者使用在线开发者的插件）；具体使用方法，可    
   以查看[插件使用文档](https://gitee.com/re-vue-monitor/revue-monitor)

## 性能指标

1.  FP（First Paint）:首屏渲染的时间点，FP时间点之前，用户看到的都是没有任何信息的白屏。标记浏览器渲染任何在视觉上不同于导航前屏幕内容之内容的时间点
  
2.  FCP（First Contentful）：首次有内容渲染的时间点。标记的是浏览器渲染来自 DOM 第一位内容的时间点，该内容可能是文本、图像、SVG 
3.  FMP（First Meaningful paint）：首次绘制有意义内容的时间点。标记的是页面主要内容绘制的时间点，例如视频应用的视频组件、天气应用的天气信息、新闻应用中的新闻条目。
4.  TTI（Time to Interactive）：首次可交互时间。测量页面从开始加载到主要子资源完成渲染，并能够快速、可靠的响应用户输入所需的时间。TTI反映页面可用性的重要指标，TTI值越小，代表用户可以更早的操作页面，用户体验就更好。
5.  SI（Speed Index）：衡量页面可视区域加载速度，帮助检测页面的加载体验差异。
6.  FID（First Input Delay）：测量从用户第一次与页面交互直到浏览器对交互做出响应，实际能够处理事件时处理程序所经过的时间。
7.  LCP（Largest Contentful）：最大的内容在可视区域内变的可见的时间点。标记在可视区“内容”最大的可见元素开始绘制在屏幕上的时间点。
8.  TBT（Total Blocking Time）：量化主线程在空闲之前的繁忙时间程度，有助于理解在加载时间，页面无法响应用户输入的时间有多久。
9.  CLS（Cumulative Layout Shift）：量化了在页面加载期间，视口中元素的移动速度。
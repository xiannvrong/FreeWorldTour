

## 前言 ##
本项目由vue+webpack+es6+vuex


## 目录结构介绍 ##

	|-- build                            // webpack配置文件
	|-- config
	    |-- dev.env                      //开发环境地址
	    |-- index                        //生产开发环境配置
	    |-- prod.env                     //生产环境地址
	|-- dist                             // 构建的成品项目
	|-- src                              // 源码目录
	|   |-- api                          // 请求地址
	|       |-- ns_api                   // 每个系统的对应请求
	|       |-- request.js               // 对所有请求的拦截配置
	|   |-- common                       // 公共方法
	|   |-- components                   // 组件
	|       |-- common                   // 公共组件
	|           |-- Header.vue           // 公共头部
	|           |-- Home.vue           	 // 公共路由入口
	|		|-- page                   	 // 项目页面组件
	|   |-- router                       // 路由配置
	|   |-- vuex                         // 状态管理
	|       |-- modules                  // 状态模块
	|       |-- store.js                 // 状态中心
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- static                           // 资源
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明


## 安装步骤 ##
 
	npm install         // 安装项目依赖，等待安装完成之后

## 本地开发 ##
 
	npm run dev

## 构建生产 ##
 
	npm run build
 
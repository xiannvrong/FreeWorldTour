export default [ 
    {
        path: "home", 
        name: "首页",
        component: resolve =>
            require(["../../components/page/clubCard/page/index.vue"], resolve)
    },
    {
        path: "personage", 
        name: "个人端页面",
        component: resolve =>
            require(["../../components/page/clubCard/page/personage.vue"], resolve)
    }, 
    {
        path: "friend", 
        name: "好友端页面",
        component: resolve =>
            require(["../../components/page/clubCard/page/friend.vue"], resolve)
    }
]
export default [ 
    { 
        path: "index", 
        name: "拼车",
        component: resolve =>
            require(["../../components/page/carSharing/page/index.vue"], resolve)
    }, 
    { 
        path: "carDetails", 
        name: "拼车详情",
        component: resolve =>
            require(["../../components/page/carSharing/page/carDetails.vue"], resolve)
    }, 
    { 
        path: "announceInfo", 
        name: "发布信息",
        component: resolve =>
            require(["../../components/page/carSharing/page/announceInfo.vue"], resolve)
    }, 
]
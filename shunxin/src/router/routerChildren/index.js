import routerClubCard from './clubCard'
import routerCardetails from './routerCardetails'
export default [ 
    {
        path: "clubCard", 
        name: "首页",
        component: resolve =>
            require(["../../components/page/clubCard/clubCard.vue"], resolve),
        children: routerClubCard
    },
    {
        path: "payment", 
        name: "立即支付",
        component: resolve =>
            require(["../../components/page/clubCard/page/payment.vue"], resolve)
    },
    {
        path: "carSharing", 
        name: "拼车",
        component: resolve =>
            require(["../../components/page/carSharing/carSharing.vue"], resolve),
            children: routerCardetails
    } 
]
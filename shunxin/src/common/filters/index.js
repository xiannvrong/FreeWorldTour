import Vue from 'vue'
// 全局过滤手机号
Vue.filter('filterTelphone', (items, start,end) => {
    if (!items) return ''
    if (items.length > end && end!='') {
        let items1 = items.toString().slice(0, start)
        items = items.toString().slice(end);
        items = items1 + '*'.repeat(end-start) + items;
        return items;
    } else {
        if (start) {
            let items1 = items.toString().slice(0, start);
            items = items1 + '*'.repeat(items.length - start);
            return items
        }else{
            return items
        }
        
    }
})

// 全局过滤器截取几位小数
Vue.filter('filterToFixed', (items,index) => {
    if (!items) return ''
    if (isNaN(parseInt(items))) {
        return '-'
    }else{
        return items.toFixed(index)
    }
})
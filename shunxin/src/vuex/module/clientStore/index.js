import * as types from './types';

//初始化状态
const state = { 
    lxc:'刘学超测试数据！', 
    skipRouter:0
};

//获取数据
const getters = { 
    lxc:state=>state.lxc,
    skipRouter:state=>state.skipRouter
};
//数据保存方法
const mutations = { 
    [types.LXCSHUJU](state, lxc) {
        state.lxc = lxc;
    }, 
    [types.SKIP_ROUTER](state, skipRouter) {
        state.skipRouter = skipRouter;
    }, 
};

export default {
    state,getters,mutations
}
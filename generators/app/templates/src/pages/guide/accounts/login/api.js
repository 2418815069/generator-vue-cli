import request from '@/api/request';
// 登录
export const loginApi = (params = {}) => {
    return request({
        url: 'public/api/v1/login',
        method: 'post',
        params,
        isPublic: true,
        showLoading: true
    });
};

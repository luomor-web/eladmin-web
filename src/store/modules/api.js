// 适配 Nginx 反向代理
const baseUrl = process.env.VUE_APP_BASE_API === '/' ? '' : process.env.VUE_APP_BASE_API
const api = {
  state: {
    // 部署包上传
    deployUploadApi: baseUrl + '/bsc/deploy/upload',
    // SQL脚本上传
    databaseUploadApi: baseUrl + '/bsc/database/upload',
    // 图片上传
    imagesUploadApi: baseUrl + '/bsc/localStorage/pictures',
    // 修改头像
    updateAvatarApi: baseUrl + '/bsc/users/updateAvatar',
    // 上传文件到七牛云
    qiNiuUploadApi: baseUrl + '/bsc/qiNiuContent',
    // Sql 监控
    sqlApi: baseUrl + '/druid/index.html',
    // swagger
    swaggerApi: baseUrl + '/doc.html',
    // 文件上传
    fileUploadApi: baseUrl + '/bsc/localStorage',
    // baseUrl，
    baseApi: baseUrl
  }
}

export default api

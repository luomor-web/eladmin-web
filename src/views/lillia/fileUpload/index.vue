<template>
  <div class="app-container">
    <el-row class="row">
      <el-row class="row">
        <el-form ref="dataForm" :inline="true" :rules="rules" :model="dataForm" status-icon>
          <el-form-item label="上传类型" prop="uploadType">
            <el-select
              v-model="dataForm.uploadType"
              :loading="loading"
              loading-text="正在加载类型"
              placeholder="请选择上传类型"
              class="filter-item"
            >
              <el-option
                v-for="item in allUploadType"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="上传批次号" prop="uploadName">
            <el-input v-model="dataForm.uploadName" style="width:300px" maxlength="32" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addLilliaFileBatch">新建上传批次号</el-button>
          </el-form-item>
        </el-form>
        <el-tag>按批次进行Excel读取</el-tag>
      </el-row>
      <el-row class="row">
        <el-alert :closable="false" title="上传过程请勿关闭或刷新网页" type="error" />
      </el-row>
      <el-row class="row">
        <aside>
          一共<span>{{ uploadTotalNum }}</span>个文件，已上传<span>{{ uploadSuccessNum }}</span>个文件，上传失败<span>{{ uploadFailNum }}</span>张文件，未上传<span>{{ unUploadNum }}</span>个文件
        </aside>
        <el-progress :percentage="percentage" color="#8e71c7" />
      </el-row>
    </el-row>
    <el-row class="row">
      <el-upload
        ref="upload"
        class="upload-demo"
        list-type="text"
        :headers="headers"
        :action="uploadPath"
        :on-preview="handlePictureCardPreview"
        :on-success="handleGalleryUrl"
        :on-remove="handleRemove"
        :auto-upload="false"
        :on-exceed="handleExceed"
        :before-upload="onBeforeUpload"
        :on-progress="handleProgress"
        multiple
        accept=".xls,.xlsx,.zip"
      >
        <!--<i class="el-icon-plus"></i>-->
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传xls文件</div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogFileUrl" alt="">
      </el-dialog>
    </el-row>
  </div>
</template>

<style>
.row {
  margin-bottom: 10px;
}
</style>

<script>
import { createLilliaFileBatch } from '@/api/lillia-file-batch'
import { addLilliaFileWithBatch, deleteLilliaFileWithBatch } from '@/api/lillia-file'
import { uploadPath } from '@/api/storage'
import { getToken } from '@/utils/auth'

export default {
  name: 'LilliaFileUpload',
  data() {
    return {
      dataForm: {
        uploadName: '',
        uploadType: ''
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '创建'
      },
      rules: {
        uploadName: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        uploadType: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ]
      },
      loading: false,
      allUploadType: null,
      lilliaFileBatchId: 0,
      updateBatch: false,
      uploadTotalNum: 0,
      uploadSuccessNum: 0,
      uploadFailNum: 0,
      unUploadNum: 0,
      percentage: 0,
      uploadPath,
      dialogFileUrl: '',
      dialogVisible: false
    }
  },
  computed: {
    headers() {
      return {
        'Authorization': getToken()
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    init: function() {
      console.log(this.uploadPath)
      const random = parseInt(Math.random() * 100000)
      this.dataForm.uploadName = '批次-' + this.getNo() + '-' + random

      this.loading = true
      this.allUploadType = [
        { id: 1, name: 'Exam1' },
        { id: 2, name: 'Exam2' }
      ]
      this.loading = false
    },
    getNo: function() {
      var date1 = new Date()
      var y = date1.getFullYear()
      var m = date1.getMonth() + 1
      var d = date1.getDate()
      var date = y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + date1.toTimeString().substr(0, 8)
      return date
    },
    addLilliaFileBatch() {
      if (this.lilliaFileBatchId > 0) {
        this.$notify.warning({
          title: '已存在',
          message: '上传批次已存在，可以上传文件了'
        })
        return
      }
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          createLilliaFileBatch(this.dataForm)
            .then(response => {
              /*
              createTime: 1599446451
              lilliaFileBatchId: 1
              status: 0
              updateTime: 1599446451
              uploadName: "批次-2020-09-07 10:40:01-80733"*/
              console.log(response)
              this.lilliaFileBatchId = response.lilliaFileBatchId
              this.dialogFormVisible = false
              this.$notify.success({
                title: '成功',
                message: '添加批次成功'
              })
            })
            .catch(response => {
              // message
              console.log(response)
              this.$notify.error({
                title: '失败',
                message: response.message
              })
            })
        }
      })
    },
    submitUpload() {
      if (this.lilliaFileBatchId === 0) {
        this.$message({
          showClose: true,
          message: '请先新增批次',
          type: 'warning'
        })
        return
      }
      this.$refs.upload.submit()
    },
    handleRemove(file, fileList) {
      this.uploadTotalNum = fileList.length
      const updateNum = {
        lilliaFileBatchId: this.lilliaFileBatchId,
        localPath: file.url,
        uploadTotalNum: this.uploadTotalNum
      }
      deleteLilliaFileWithBatch(updateNum)
        .then(response => {
          this.dialogFormVisible = false
          this.$notify.success({
            title: '成功',
            message: '删除文件成功'
          })
        })
        .catch(response => {
          this.$notify.error({
            title: '失败',
            message: response.message
          })
        })
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handlePictureCardPreview(file) {
      // this.dialogFileUrl = file.url
      // this.dialogVisible = true
    },
    handleExceed(files, fileList) {

    },
    onBeforeUpload(file) {

    },
    handleProgress(event, file, fileList) {
      this.uploadTotalNum = fileList.length
    },
    handleGalleryUrl(response, file, fileList) {
      /*
      name: (...)
      percentage: (...)
      raw: (...)
      response: {errno: 0, data: {…}, errmsg: "成功"}
      size: (...)
      status: (...)
      uid: (...)
      url: (...)*/
      console.log(response)
      if (response.id > 0) {
        this.uploadSuccessNum++
        console.log(response.path)
      } else {
        this.uploadFailNum++
        this.$notify.error({
          title: '失败',
          message: file.name + '上传失败'
        })
      }
      this.percentage = parseInt((this.uploadSuccessNum / this.uploadSuccessNum) * 100)
      this.unUploadNum = this.uploadTotalNum - this.uploadSuccessNum - this.uploadFailNum

      const dataFile = {
        lilliaFileBatchId: this.lilliaFileBatchId,
        fileName: file.name,
        fileSize: file.size,
        fileType: this.dataForm.uploadType,
        localPath: file.url,
        uploadSuccessNum: this.uploadSuccessNum,
        uploadTotalNum: this.uploadTotalNum,
        uploadFailNum: this.uploadFailNum,
        unUploadNum: this.unUploadNum
      }
      if (response.id > 0) {
        dataFile.filePath = process.env.VUE_APP_BASE_API + response.path.replace('/storage', '')
      }
      addLilliaFileWithBatch(dataFile)
        .then(response => {
          this.dialogFormVisible = false
          this.$notify.success({
            title: '成功',
            message: '添加文件成功'
          })
        })
        .catch(response => {
          this.$notify.error({
            title: '失败',
            message: response.message
          })
        })
    }
  }
}
</script>

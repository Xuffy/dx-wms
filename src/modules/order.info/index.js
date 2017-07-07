'use strict';

// require('index.css');
layui.use(['form', 'laypage', '_route', '_ajax', 'laydate', 'element'], function () {
  var form = layui.form()
    , laypage = layui.laypage
    , _route = layui._route
    , _ajax = layui._ajax
    , layer = layui.layer
    , laydate = layui.laydate
    , element = layui.element()
    , app = null;

  // 初始化当前位置
  _route.setBreadcrumb(['工单管理', {url: 'order',name:'工单列表'},'详情']);

  // _layer.open();

  app = new Vue({
    el: '#content-app',
    data: {
      list: [],
      pageSize: 8,
      pageNum: 1,
      operateType: 0
    },
    mounted: function () {
    },
    methods: {
      getList: function (pageNum) {
        var _this = this;
        return _ajax.get({url: 'test', data: {pageNum: pageNum || 1}}).then(function (data) {
          _this.list = data.list;
          _this.pageSize = data.pageSize;
          _this.pageNum = pageNum;
        });
      }
    }
  });


});
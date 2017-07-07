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
  _route.setBreadcrumb(['工单管理', '工单列表']);

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
      var _this = this;
      this.getList();

      // 渲染表单
      form.render();
      // 自定义验证规则
      form.verify({
        username: function (value) {
          if (value.length > 20) {
            return '用户名称过长，请重新输入';
          }
        },
        phone: function (value) {
          if (value && (value.length > 11 || value.length < 6)) {
            return '请输入正确的联系方式';
          }
        }
      });

      // 分页初始化
      laypage({
        cont: 'dx-page-default',
        pages: _this.$data.pageSize || 1,
        first: 1,
        skin: '#9f9f9f',
        curr: _this.$data.pageNum,
        jump: function (obj, first) {
          !first && _this.getList(obj.curr);
        }
      });

      // 监听提交按钮
      form.on('submit(search)', function (data) {
        layer.alert(JSON.stringify(data.field), {
          title: '最终的提交信息2'
        });
        return false;
      });
    },
    methods: {
      getList: function (pageNum) {
        var _this = this;
        return _ajax.get({url: 'test', data: {pageNum: pageNum || 1}}).then(function (data) {
          _this.list = data.list;
          _this.pageSize = data.pageSize;
          _this.pageNum = pageNum;
        });
      },
      operateBox: function (type) {
        this.operateType = type;
        var timeout = setTimeout(function () {
          clearTimeout(timeout);
          layer.open({
            type: 1,
            shadeClose: true,
            title: type === 1 ? '接收' : '拒绝',
            offset: '20%',
            content: $('#operateBox').html()
          });
        }, 0)
      },
      goInfo: function () {
        _route.go('order.info');
      }
    }
  });


});
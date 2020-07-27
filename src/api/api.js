/**
 * 小程序配置文件
 */

// 此处主机域名是腾讯云解决方案分配的域名
// 小程序后台服务解决方案：https://www.qcloud.com/solution/la

/* 本地配置 */
var host = 'https://xggadmin.gongsibao.com'

// var host = 'http://192.168.18.105:3002'

var config = {
  // 用户相关接口
  // 首页 数据图
  transData: `${host}/web/index/managerCtl/transData`,
  // 首页 列表
  deliverData: `${host}/web/index/managerCtl/deliverData`,
  // 首页 业务办理数据
  businessData: `${host}/web/index/managerCtl/businessData`,
  // 图片验证
  captcha: `${host}/web/common/captchaCtl/captcha`,
  // 获取oss参数地址
  getOssConfig: `${host}/web/common/metaCtl/getOssConfig`,
  // 注册地
  domicileCtlAll: `${host}/web/common/domicileCtl/all`,
  // 注册地名称列表
  domicileCtlNameList: `${host}/web/common/domicileCtl/nameList`,
  // 注册地列表
  domicileCtlPage: `${host}/web/common/domicileCtl/page`,
  // 注册地查询
  domicileCtlInfo: `${host}/web/common/domicileCtl/info`,
  // 注册地添加/修改
  domicileCtlSave: `${host}/web/common/domicileCtl/save`,
  // 注册地删除
  domicileCtlDel: `${host}/web/common/domicileCtl/del`,
  // 经营范围列表
  businessscopeCtlPage: `${host}/web/common/businessscopeCtl/page`,
  // 经营范围查询
  businessscopeCtlInfo: `${host}/web/common/businessscopeCtl/info`,
  // 经营范围添加/修改
  businessscopeCtlSave: `${host}/web/common/businessscopeCtl/save`,
  // 经营范围删除
  businessscopeCtlDel: `${host}/web/common/businessscopeCtl/del`,
  // 按注册地查询
  businessscopeCtlByDomicile: `${host}/web/common/businessscopeCtl/byDomicile`,
  // 交付商列表页
  deliveryPage: `${host}/web/common/deliverCtl/page`,
  // 交付商查询
  deliveryInfo: `${host}/web/common/deliverCtl/info`,
  // 交付商添加/修改
  deliverySave: `${host}/web/common/deliverCtl/save`,
  // 交付商删除
  deliveryDel: `${host}/web/common/deliverCtl/del`,
  // 商户nameList
  nameList: `${host}/web/merchant/merchantCtl/nameList`,
  // 商户信息列表
  merchantsInfoPage: `${host}/web/merchant/merchantCtl/infoPage`,
  // 新增商户
  merchantsAdd: `${host}/web/merchant/merchantCtl/add`,
  // 修改商户
  merchantsUpd: `${host}/web/merchant/merchantCtl/upd`,
  // 商户审核
  merchantsAudit: `${host}/web/merchant/merchantCtl/audit`,
  // // 短信验证
  smsCode: `${host}/web/auth/userCtl/smsCode`,
  // // 当前用户信息查询
  currentUser: `${host}/web/auth/userCtl/currentUser`,
  // // 登录
  login: `${host}/web/auth/userCtl/login`,
  // // 获取菜单
  getMenu: `${host}/web/auth/userCtl/getMenu`,
  // 地址列表
  merchantPage: `${host}/web/merchant/merchantaddressCtl/page`,
  // 地址信息
  merchantInfo: `${host}/web/merchant/merchantaddressCtl/info`,
  // 添加修改抬头
  merchantSave: `${host}/web/merchant/merchantaddressCtl/save`,
  // 抬头列表
  merchantTitleList: `${host}/web/merchant/merchanttitleCtl/merchantTitleList`,
  // 签约
  merchantSign: `${host}/web/merchant/merchantsignedCtl/save`,
  // 查看签约
  showSign: `${host}/web/merchant/merchantsignedCtl/info`,
  // 签约列表
  signList: `${host}/web/merchant/merchantsignedCtl/page`,
  // 资金账户列表
  accountList: `${host}/web/merchant/merchantaccountCtl/page`,
  // 充值申请列表
  rechargeList: `${host}/web/merchant/merchantrechargeCtl/page`,
  // 充值申请详情 信息
  rechargeAdd: `${host}/web/merchant/merchantrechargeCtl/add`,
  // 充值申请审核
  rechargeAudit: `${host}/web/merchant/merchantrechargeCtl/audit`,
  // // 资金交易列表
  // tradeList: `${host}/web/merchant/merchanttradeCtl/tradeList`,
  // // 资金流水列表
  // processList: `${host}/web/merchant/merchanttradeprocessCtl/processList`,
  // 订单列表
  orderList: `${host}/web/order/orderCtl/allPage`,
  // 订单关闭
  orderClose: `${host}/web/order/orderCtl/close`,
  // 订单分配
  orderAssign: `${host}/web/order/orderCtl/assign`,
  // 查看详情
  orderAllInfo: `${host}/web/order/orderCtl/allInfo`,
  // 订单编辑
  orderEdit: `${host}/web/order/orderCtl/orderEdit`,
  // 交付审核
  deliverAudit: `${host}/web/order/orderCtl/deliverAudit`,
  // 交付完成
  orderComplete: `${host}/web/order/orderCtl/orderComplete`,
  // 订单办理列表
  handlePage: `${host}/web/order/orderCtl/handlePage`,
  // 订单办理详情
  deliverInfo: `${host}/web/order/orderCtl/deliverInfo`,
  // 订单办理编辑
  deliverEdit: `${host}/web/order/orderCtl/deliverEdit`,
  // 订单办理关闭
  deliverClose: `${host}/web/order/orderCtl/deliverClose`,
  // 交付商查询
  deliveryList: `${host}/web/common/deliverCtl/all`,
  // 新建进度
  deliverHandle: `${host}/web/order/orderCtl/deliverHandle`,
  // 个体户信息列表
  sohoAllPage: `${host}/web/business/businessmenCtl/allPage`,
  // 个体户详情
  sohoInfo: `${host}/web/business/businessmenCtl/info`,
  // 用户签约
  sohoSign: `${host}/web/business/businessmenCtl/sign`,
  // 签约管理列表
  signPage: `${host}/web/business/businessmenCtl/signPage`,
  // 签约管理个体户名称下拉
  signNames: `${host}/web/business/businessmenCtl/signNames`,
  // 个体户列表
  deliverPage: `${host}/web/business/businessmenCtl/deliverPage`,
  // 发票内容列表
  invoiceContentList: `${host}/web/common/invoicecontentCtl/list`,
  // 发票添加/编辑
  invoicecontentSave: `${host}/web/common/invoicecontentCtl/save`,
  // 发票申请列表
  queryApplyInvoices: `${host}/web/invoice/invoiceCtl/queryApplyInvoices`,
  // 查看详情
  queryInvoice: `${host}/web/invoice/invoiceCtl/queryInvoice`,
  // 申请审核 业务分配 交付审核
  platformAssignment: `${host}/web/invoice/invoiceCtl/platformAssignment`,
  //  全部发票列表
  queryInvoices: `${host}/web/invoice/invoiceCtl/queryInvoices`,
  //  全部发票查看完税证明
  springboard: `${host}/api/op/action/springboard`,
  // 发票删除
  invoicecontentDel: `${host}/web/common/invoicecontentCtl/del`,
  // 发票管理列表
  delivererInvoices: `${host}/web/invoice/invoiceCtl/delivererInvoices`,
  // 发票办理列表
  delivererApplyInvoices: `${host}/web/invoice/invoiceCtl/delivererApplyInvoices`,
  //  全部办理详情
  queryInvoiceDeliverer: `${host}/web/invoice/invoiceCtl/queryInvoiceDeliverer`,
  // 上传完税
  txPayment: `${host}/web/invoice/invoiceCtl/txPayment`,
  // 发票办理提交审核
  delivererAssignment: `${host}/web/invoice/invoiceCtl/delivererAssignment`
}

module.exports = config

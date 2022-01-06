const globals: Record<string, boolean | 'readonly' | 'readable' | 'writable' | 'writeable'> = {
  // 钉钉小程序 https://open.dingtalk.com/
  dd: 'readonly',
  // 京东小程序 https://mp.jd.com/
  jd: 'readonly',
  // 快手小程序 https://mp.kuaishou.com/
  ks: 'readonly',
  // 支付宝小程序 https://opendocs.alipay.com/mini/
  my: 'readonly',
  // uni-app http://www.html5plus.org/doc/h5p.html
  plus: 'readonly',
  // 360 小程序 https://mp.360.cn/
  qh: 'readonly',
  // QQ 小程序 https://q.qq.com/
  qq: 'readonly',
  // 百度小程序 https://smartprogram.baidu.com/docs
  swan: 'readonly',
  // 字节小程序 https://microapp.bytedance.com/
  // 飞书小程序 https://open.feishu.cn/
  tt: 'readonly',
  // uni-app https://uniapp.dcloud.io/
  uni: 'readonly',
  // weex https://weex.apache.org/
  weex: 'readonly',
  // 微信小程序 https://developers.weixin.qq.com/miniprogram/dev/framework/
  wx: 'readonly',
};

export default globals;

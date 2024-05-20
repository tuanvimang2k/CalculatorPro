import React from 'react';
import { WebView } from 'react-native-webview';

const MyWebComponent = () => {
  return (
    <WebView source={{ uri: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?vnp_Amount=10000000&vnp_BankCode=NCB&vnp_Command=pay&vnp_CreateDate=20240517144810&vnp_CurrCode=VND&vnp_IpAddr=192.168.1.1&vnp_Locale=vn&vnp_OrderInfo=Thanh+toan+cho+ma+GD+16113430&vnp_OrderType=other&vnp_ReturnUrl=http%3A%2F%2Flocalhost%3A3000%2Fvnpay%2Fvnpay_return&vnp_TmnCode=0IVDBS98&vnp_TxnRef=17144810&vnp_Version=2.1.0&vnp_SecureHash=71e3875cb7229824dcadc07e9388f736fb8faf0671c2293078d704eaa12719acab5e445ace032f97d05846a01183faef6336180e29f7e6e013df78d8c29e80d3' }} />
  );
}

export default MyWebComponent;
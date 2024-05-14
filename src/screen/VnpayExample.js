import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { createPaymentUrl,handleVnpayReturn } from '../service/vnpay';

const VnpayExample = () => {
  const [amount, setAmount] = useState('');
  const [orderInfo, setOrderInfo] = useState('');
  const [orderId, setOrderId] = useState('');
  const [locale, setLocale] = useState('vn');
  const [bankCode, setBankCode] = useState('');
  const [paymentUrl, setPaymentUrl] = useState(null); // Thêm state để lưu URL thanh toán

  const handleCreatePayment = async () => {
    try {
      const data = await createPaymentUrl(amount, orderInfo, orderId, locale, bankCode);
      console.log('Payment URL:', data.paymentUrl);
      setPaymentUrl(data.paymentUrl); // Lưu URL thanh toán vào state
    } catch (error) {
      Alert.alert('Error', 'Failed to create payment URL');
    }
  };

  // Giả sử bạn có một query từ URL callback của VNPay
  const query = {
    vnp_Amount: '1000000',
    vnp_TxnRef: '123456',
    vnp_ResponseCode: '00',
    vnp_SecureHash: 'd41d8cd98f00b204e9800998ecf8427e',
  };

  const handleReturn = async () => {
    try {
      const result = await handleVnpayReturn(query);
      Alert.alert('Result', result);
    } catch (error) {
      Alert.alert('Error', 'Failed to handle VNPay return');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {paymentUrl ? (
        <WebView source={{ uri: paymentUrl }} />
      ) : (
        <View>
          <Text>Amount:</Text>
          <TextInput value={amount} onChangeText={setAmount} keyboardType="numeric" />

          <Text>Order Info:</Text>
          <TextInput value={orderInfo} onChangeText={setOrderInfo} />

          <Text>Order ID:</Text>
          <TextInput value={orderId} onChangeText={setOrderId} />

          <Text>Locale:</Text>
          <TextInput value={locale} onChangeText={setLocale} />

          <Text>Bank Code:</Text>
          <TextInput value={bankCode} onChangeText={setBankCode} />

          <Button title="Create Payment URL" onPress={handleCreatePayment} />
          <Button title="Handle VNPay Return" onPress={handleReturn} />
        </View>
      )}
    </View>
  );
};

export default VnpayExample;

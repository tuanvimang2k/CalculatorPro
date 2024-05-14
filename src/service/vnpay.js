import AxiosInstance from "../helper/AxiosInstance";
// Hàm tạo URL thanh toán
export const createPaymentUrl = async (amount, orderInfo, orderId, locale, bankCode) => {
    try {
      const params = {
        amount,
        orderInfo,
        orderId,
        locale,
        bankCode,
      };
      const response = await AxiosInstance.get('/create_payment_url', { params });
      return response.data;
    } catch (error) {
      console.error('Error creating payment URL:', error);
      throw error;
    }
  };

  // Hàm xử lý kết quả thanh toán
export const handleVnpayReturn = async (query) => {
    try {
      const response = await AxiosInstance.get('/vnpay_return', { params: query });
      return response.data;
    } catch (error) {
      console.error('Error handling VNPay return:', error);
      throw error;
    }
  };
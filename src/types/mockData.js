export const outlet = {
  code: 'HC30658',
  name: 'Samsora Premier - Chu Văn An',
  address: 'Tầng 1, Samsora Premier, Chu Văn An, Hà Đông, Hà Nội',
  hours: '07:00 - 23:00',
  phone: '1800 6936'
}

export const categories = ['Tất cả', 'Cà phê Phin', 'Freeze', 'Trà quả / Trà sữa', 'Bánh & Đồ ăn nhẹ', 'Món mới']

export const products = [
  { id: 'CF-01', name: 'Phin Sữa Đá', category: 'Cà phê Phin', price: 39000, description: 'Cà phê phin đậm vị cùng sữa đặc Ngôi Sao.', image: '/PHIN_SUA_DA.png', tag: 'Bán chạy nhất', ingredients: ['Hạt cà phê', 'Sữa đặc'], tone: 'from-[#ead7b8] to-[#b67645]' },
  { id: 'CF-02', name: 'Phin Đen Đá', category: 'Cà phê Phin', price: 29000, description: 'Vị cà phê Robusta-Arabica mạnh mẽ, hậu vị dài.', image: '/PHIN_DEN_DA.png', tag: '', ingredients: ['Hạt cà phê'], tone: 'from-[#c7a37d] to-[#513327]' },
  { id: 'TEA-01', name: 'Trà Sen Vàng', category: 'Trà quả / Trà sữa', price: 49000, description: 'Trà sen thanh mát, hạt sen và củ năng giòn.', image: '/TRA_SEN_VANG.png', tag: 'Bán chạy nhất', ingredients: ['Trà Oolong', 'Hạt sen', 'Củ năng'], tone: 'from-[#f7dd79] to-[#e7a82c]' },
    { id: 'FRZ-01', name: 'Freeze Trà Xanh', category: 'Freeze', price: 59000, description: 'Trà xanh xay mát lạnh phủ kem cheese.', image: '/FREEZE_TRA_XANH.png', tag: 'Món mới', ingredients: ['Bột matcha', 'Kem cheese', 'Sữa đặc'], tone: 'from-[#c7e1b1] to-[#5d9a6d]' },
    { id: 'FRZ-02', name: 'Freeze Cà Phê', category: 'Freeze', price: 59000, description: 'Cà phê xay cùng sữa và đá tuyết mịn.', image: '/FREEZE_CHOCOLATE.png', tag: '', ingredients: ['Hạt cà phê', 'Sữa đặc'], tone: 'from-[#d1b39a] to-[#805537]' },
  { id: 'FOOD-01', name: 'Bánh Mì Que Pate', category: 'Bánh & Đồ ăn nhẹ', price: 25000, description: 'Bánh mì que giòn, pate thơm béo.', image: '/BANH_MI_QUE.png', tag: '', ingredients: ['Bánh mì', 'Pate'], tone: 'from-[#f4cf98] to-[#bc7138]' },
  { id: 'TEA-02', name: 'Trà Đào Cam Sả', category: 'Trà quả / Trà sữa', price: 45000, description: 'Trà đào, cam tươi và hương sả thanh nhẹ.', image: '/TRA_DAO_CAM_SA.png', tag: '', ingredients: ['Trà Oolong', 'Syrup đào', 'Cam tươi'], tone: 'from-[#ffc7a7] to-[#e56c4c]' },
  { id: 'LTO-01', name: 'Bạc Xỉu Đá', category: 'Món mới', price: 45000, description: 'Sữa tươi dịu ngọt với lớp cà phê phin.', image: '/BAC_SIU.png', tag: 'LTO', ingredients: ['Hạt cà phê', 'Sữa tươi'], tone: 'from-[#eadcca] to-[#c08b63]' }
]

export const vouchers = [
  { id: 1, partner: 'MoMo', title: 'Giảm 30.000đ cho đơn từ 99.000đ', code: 'HIGHLANDMOMO30', expiry: '30/09/2026', color: 'bg-[#fbe4e3]', text: 'text-[#b22830]' },
  { id: 2, partner: 'ZaloPay', title: 'Ưu đãi 20% tối đa 40.000đ', code: 'ZALOHL20', expiry: '15/10/2026', color: 'bg-[#e2f0f8]', text: 'text-[#1976a8]' },
  { id: 3, partner: 'GrabFood', title: 'Freeship đơn Highlands từ 79.000đ', code: 'GRABHL30658', expiry: '31/12/2026', color: 'bg-[#e1f5e8]', text: 'text-[#19834a]' },
  { id: 4, partner: 'Got It', title: 'Thẻ quà tặng Highlands Coffee', code: 'GOTIT-500K', expiry: 'Không thời hạn', color: 'bg-[#fff1d4]', text: 'text-[#a06a0e]' }
]

export const expoOrders = [
  { id: '#HD-30658-1048', channel: 'Tại bàn', status: 'pending', age: 1, items: [{ name: 'Phin Sữa Đá', detail: 'Size M · 70% đá', qty: 2 }, { name: 'Bánh Mì Que Pate', detail: 'Nóng giòn', qty: 1 }] },
  { id: '#HD-30658-1049', channel: 'GrabFood', status: 'pending', age: 2, items: [{ name: 'Trà Sen Vàng', detail: 'Size L · Ít ngọt, nhiều hạt sen', qty: 1 }] },
  { id: '#HD-30658-1044', channel: 'Mang về', status: 'brewing', age: 3, items: [{ name: 'Freeze Trà Xanh', detail: 'Size M · Kem cheese', qty: 1 }, { name: 'Phin Đen Đá', detail: 'Size M · 100% đá', qty: 1 }] },
  { id: '#HD-30658-1045', channel: 'ShopeeFood', status: 'brewing', age: 5, items: [{ name: 'Trà Sen Vàng', detail: 'Size M · Ít ngọt, nhiều củ năng', qty: 2 }] },
  { id: '#HD-30658-1041', channel: 'Tại bàn', status: 'ready', age: 6, items: [{ name: 'Phin Sữa Đá', detail: 'Size S · 70% đá', qty: 1 }, { name: 'Trà Đào Cam Sả', detail: 'Size L · 100% ngọt', qty: 1 }] },
  { id: '#HD-30658-1042', channel: 'GrabFood', status: 'ready', age: 4, items: [{ name: 'Freeze Cà Phê', detail: 'Size L · Kem cheese', qty: 1 }] }
]

export const inventory = [
  { sku: 'RM-001', name: 'Hạt cà phê Robusta-Arabica', unit: 'Kg', opening: 18, used: 5.4, actual: 11.8, min: 10, expiry: '12/12/2026', status: 'Đủ hàng', price: 185000 },
  { sku: 'RM-002', name: 'Sữa đặc Ngôi Sao', unit: 'Lon', opening: 48, used: 21, actual: 24, min: 18, expiry: '22/08/2027', status: 'Đủ hàng', price: 28000 },
  { sku: 'RM-003', name: 'Hạt sen tươi', unit: 'Kg', opening: 8, used: 5.8, actual: 1.4, min: 3, expiry: '25/09/2026', status: 'Cần nhập gấp', price: 125000 },
  { sku: 'RM-004', name: 'Trà Oolong túi lọc', unit: 'Hộp', opening: 16, used: 5, actual: 10, min: 6, expiry: '14/03/2027', status: 'Đủ hàng', price: 98000 },
  { sku: 'RM-005', name: 'Cốt dừa', unit: 'Túi', opening: 12, used: 4, actual: 6, min: 5, expiry: '28/09/2026', status: 'Sắp hết', price: 76000 },
  { sku: 'PK-001', name: 'Ly nhựa Size S / M / L', unit: 'Cái', opening: 620, used: 386, actual: 214, min: 250, expiry: '-', status: 'Sắp hết', price: 1800 },
  { sku: 'PK-002', name: 'Ống hút giấy', unit: 'Túi', opening: 20, used: 9, actual: 10, min: 8, expiry: '-', status: 'Đủ hàng', price: 45000 },
  { sku: 'RM-006', name: 'Syrup đào & cam', unit: 'Chai', opening: 10, used: 3, actual: 6, min: 4, expiry: '02/11/2026', status: 'Đủ hàng', price: 145000 }
]

export const formatCurrency = (value) => new Intl.NumberFormat('vi-VN').format(value) + 'đ'

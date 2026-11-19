import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Toast from './components/common/Toast'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import PromotionsPage from './pages/PromotionsPage'
import ExpoStationPage from './pages/ExpoStationPage'
import InventoryPage from './pages/InventoryPage'

export default function App() { const [page, setPage] = useState('home'); const [cart, setCart] = useState([]); const [toast, setToast] = useState(''); const notify = (message) => { setToast(message); window.setTimeout(() => setToast(''), 2600) }; const addToCart = (item) => setCart((current) => [...current, item]); const content = { home: <HomePage onNavigate={setPage} onSelectProduct={() => setPage('products')} />, products: <ProductsPage cart={cart} onAddToCart={addToCart} onSubmitOrder={() => { setCart([]); notify('Đơn hàng đã được gửi sang quầy POS') }} onToast={notify} />, promotions: <PromotionsPage onToast={notify} />, expo: <ExpoStationPage onToast={notify} />, inventory: <InventoryPage onToast={notify} /> }[page]; return <><Navbar activePage={page} onNavigate={setPage} cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />{content}{page !== 'expo' && page !== 'inventory' && <Footer />}<Toast message={toast} onClose={() => setToast('')} /></> }

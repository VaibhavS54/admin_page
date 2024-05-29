import logo from './logo.svg';
import './App.css';
import Order from './components/order/order';
import Invoice from './components/gifttable/invoice';
import CouponInvoice from './components/coupontable/couponinvoice';
import BlogInvoice from './components/blog/bloginvoice';
import PageInvoice from './components/pages/pageinvoice';
import CommentInvoice from './components/comments/commentinvoice';
import SizeInvoice from './components/size/sizeinvoice';
import Coupon from './components/coupon/coupon';
import UserInvoice from './components/user/userinvoice';
import OrderInvoice from './components/ordertable/orderinvoice';
import Email from './components/email/email';
import Sidebar from './components/slidebar/sidebar';

function App() {
  return (
    <div className="App">
     {/* <Order/>
     <Invoice/>
      <CouponInvoice/>
     <PageInvoice/>
    <CommentInvoice/>
    <SizeInvoice/>
    <Coupon/>   */}
    {/* <UserInvoice/> */}
    {/* <OrderInvoice/> */}
    {/* <Email/> */}
     <Sidebar/>
    </div>
  );
}

export default App;

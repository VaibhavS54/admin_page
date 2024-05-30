import logo from './logo.svg';
import './App.css';
import Order from './components/order/order';
import Invoice from './components/gifttable/invoice';
import CouponInvoice from './components/coupontable/couponinvoice';
import BlogInvoice from './components/blog/bloginvoice';
import PageInvoice from './components/pages/pageinvoice';
import CommentInvoice from './components/comments/commentinvoice';
import SizeInvoice from './components/size/sizeinvoice';
import Coupon from './components/couponusage/coupon';
import UserInvoice from './components/user/userinvoice';
import OrderInvoice from './components/ordertable/orderinvoice';
import Email from './components/email/email';
import Sidebar from './components/slidebar/sidebar';
import ImageGallery from './components/mediagallery/mediagallery';
import Media from './components/media/media';
import GiftCardSettings from './components/gift/gift';
import LocationSettings from './components/multi/multi';
import CouponComponent from './components/couponusage/coupon';
import CouponGeneral from './components/coupongeneral/coupongeneral';
import CouponLimit from './components/couponlimit/couponlimit';
import Checkout from './components/multicheck/multicheck';
import Currency from './components/multigeneral/multigeneral';
import GiftCard from './components/giftcard/giftcard';

function App() {
  return (
    <div className="App">
       {/* <Sidebar/>
       <Order/>
     <Invoice/>
      <CouponInvoice/>
     <PageInvoice/>
    <CommentInvoice/>
      <SizeInvoice/>   
    <Coupon/> 
    <OrderInvoice/>*/}
    {/* <Email/> */}
    <GiftCard/>
     {/* <UserInvoice/>  */}
     {/* <ImageGallery/> */}
    {/* <Media/> */}
    {/* <GiftCardSettings/>
   <LocationSettings/>
    <BlogInvoice/> */}
    {/* <CouponComponent/> */}
    {/* <CouponGeneral/> */}
    {/* <CouponLimit/> */}
    {/* <Checkout/> */}
    {/* <Currency/> */}
    </div>
  );
}

export default App;

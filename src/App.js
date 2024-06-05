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
import Dashboard from './components/dashboard/dashboard';
import OrderDetails from './components/orderdetails/orderdetails';
import ProductInvoice from './components/product/productinvoice';
import MeasurementCalculator from './components/productdata/productdata';
import ProductData from './components/productdata/productdata';
import ProductInventory from './components/productinvent/productinvent';
import ShippingForm from './components/productshipping/productshipping';
import ProductLink from './components/productlink/productlink';
import AttributeForm from './components/productattribute/productattribute';
import ProductCustom from './components/productcustom/productcustom';
import ProductFeq from './components/productfreq/productfreq';
import ProductCategories from './components/category/category';
import ProductMedia from './components/productmedia/productmedia';

function App() {
  return (
    <div className="App">
       {/* <Sidebar/> 
       <Dashboard/>
       <Currency/>
       <LocationSettings/>
       <Checkout/>
       <BlogInvoice/>
       <PageInvoice/>
       <CommentInvoice/>
       <SizeInvoice/> 
       <CouponInvoice/> 
       <CouponGeneral/>
       <CouponComponent/>
       <CouponLimit/>
       <Invoice/> 
       <GiftCard/>
       <Email/>
       <UserInvoice/>
       <Order/>
       <OrderInvoice/>
      <GiftCardSettings/> */}
      {/* <OrderDetails/> */}
      {/* <ImageGallery/> */}
      {/* <Media/> */}
      {/* <ProductInvoice/> */}
      {/* <ProductData/> */}
      {/* <ProductInventory/> */}
    {/* <ShippingForm/> */}
    {/* <ProductLink/> */}
    {/* <AttributeForm/> */}
    {/* <ProductCustom/> */}
    {/* <ProductFeq/> */}
    {/* <ProductCategories/> */}
    <ProductMedia/>
    </div>
  );
}

export default App;

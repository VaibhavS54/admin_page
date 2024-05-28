import logo from './logo.svg';
import './App.css';
import Order from './components/order/order';
import Invoice from './components/gifttable/invoice';
import CouponInvoice from './components/coupontable/couponinvoice';
import BlogInvoice from './components/blog/bloginvoice';

function App() {
  return (
    <div className="App">
     {/* <Order/> */}
     {/* <Invoice/> */}
     {/* <CouponInvoice/> */}
     <BlogInvoice/>
    </div>
  );
}

export default App;

import "./couponinvoice.css";
import { CouponCounter } from "./couponcounter";
import { CouponToggle } from "./coupontoggle";

const couponData = [
  {
    code: "CODE123",
    amount: "10%",
    description: "10% off on all items",
    productId: "12345",
    usageLimit: "5/10",
    expiry: "31-12-2024"
  },
  {
    code: "CODE456",
    amount: "20%",
    description: "20% off on selected items",
    productId: "67890",
    usageLimit: "3/5",
    expiry: "30-11-2024"
  }
];

function CouponInvoice() {
  return (
    <div className="top">
      <div className="topButtons">
        <button className="coupons">Coupons</button>
        <button className="giftCards">Gift Cards</button>
      </div>
      <div className="mainInvoiceContainer">
        <div className="middleInputs">
          <button className="but">Add New</button>
        </div>

        <div className="redButtonsContainer">
          <button>ALL</button>
          <button>Trash</button>
        </div>

        <div className="lastInputContainer">
        <div className="leftInputs">
        <select className="bulk">
            <option>Bulk action</option>
            <option>Edit</option>
            <option>Move to trash</option>
            </select>
            <button>Apply</button>
            <select className="bulk">
            <option>fixed cart discount</option>
            <option>percentage discount</option>
            <option>fixed product discount</option>
            </select>
            </div>
          <div className="rightInputs">
            <input placeholder="search" type="text" />
            <CouponCounter />
          </div>
        </div>

        <div className="invoiceTable">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Code</th>
                <th>Coupon Amount</th>
                <th>Description</th>
                <th>Product ID</th>
                <th>Usage/Limit</th>
                <th>Expiry Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {couponData.map((coupon, index) => (
                <tr key={index}>
                  <td><input type="checkbox" /></td>
                  <td>{coupon.code}</td>
                  <td>{coupon.amount}</td>
                  <td>{coupon.description}</td>
                  <td>{coupon.productId}</td>
                  <td>{coupon.usageLimit}</td>
                  <td>{coupon.expiry}</td>
                  <td><CouponToggle /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CouponInvoice;

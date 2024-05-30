import "./orderinvoice.css";
import { OrderCounter } from "./ordercounter";
import { OrderToggle } from "./ordertoggle";

const orderData = [
  {
    code: "9JSX-3F8K-WaRy",
    order: "19990",
    balance: "0.00",
    redeem: "In Order: #19990",
    expiry: "23-05-2014",
    recipient: "digital marketing@ ogi vetechnology.com"
  },
  {
    code: "P7Q9-B6T2-Y1M4",
    order: "",
    balance: "101",
    redeem: "",
    expiry: "Unlimited",
    recipient: ""
  }
];

function OrderInvoice() {
  return (
    <div className="top">
      <div className="topButtons">
        <button className="coupons">Orders</button>
      </div>
      <div className="mainInvoiceContainer">
        <div className="middleInputs">
          <button className="but">Add order</button>
        </div>

        <div className="orderredButtonsContainer">
          <button>ALL</button>
          <button>Mine</button>
          <button>Processing</button>
          <button>on hold</button>
          <button>Comleted</button>
          <button>Cancelled</button>
          <button>Refunded</button>
        </div>

        <div className="lastInputContainer">
          <div className="leftInputs">
             <select className="bulk">
            <option>Bulk action</option>
            <option>Change to Processing</option>
            <option>Change to On hold</option>
            <option>Change to completed</option>
            <option>Change to cancelled</option>
            <option>Ship to Delivery Partner</option>
            <option>Move to Trash</option>
            </select>
            <button>Apply</button>
            <select className="bulk">
            <option>Register coustomer</option>
            </select>
            <button>Fliter</button>
            <select>
              <option>Date</option>
            </select>
          </div>
          <div className="orderrightInputs">
            <input placeholder="search" type="text" />
            <OrderCounter />
          </div>
        </div>

        <div className="orderinvoiceTable">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Order</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>View/Edit</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order, index) => (
                <tr key={index}>
                  <td><input type="checkbox" /></td>
                  <td>{order.code}</td>
                  <td>{order.order}</td>
                  <td>{order.balance}</td>
                  <td>{order.redeem}</td>
                  <td>{order.expiry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default OrderInvoice;

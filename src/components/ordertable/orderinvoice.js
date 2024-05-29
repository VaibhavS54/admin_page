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
    <div>
      <div className="ordertopButtons">
        <button className="ordercoupons">Orders</button>
      </div>
      <div className="mainInvoiceContainer">
        <div className="middleInputs">
          <button className="orderbut">Add order</button>
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
            <input placeholder="Bulk Actions" />
            <button>Apply</button>
            <input placeholder="Change role to" />
            <button>Change</button>
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

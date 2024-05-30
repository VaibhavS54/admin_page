import "./invoice.css";
import { InvoiceCounter } from "./invoicecounter";
import { Toggle } from "./toggle";

const invoiceData = [
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

function Invoice() {
  return (
    <div className="top">
      <div className="topButtons">
        <button className="coupons"> Coupons</button>
        <button className="giftCards">Gift card</button>
      </div>
      <div className="mainInvoiceContainer">
        <div className="middleInputs">
          <button className="but">Add new</button>
          <button className="but">import/export</button>
        </div>

        <div className="redButtonsContainer">
          <button>ALL</button>
          <button>Redeemed</button>
          <button>Not Redeemed</button>
        </div>

        <div className="lastInputContainer">
        <div className="leftInputs">  
            <select className="bulk">
            <option>Bulk action</option>
            <option>Delete</option>
            <option>Enable</option>
            </select>
            <button>Apply</button>
            <select className="bulk">
            <option>Dashboard</option>
            </select>
          </div>
          <div className="rightInputs">
            <input placeholder="search" type="text" />
            <InvoiceCounter />
          </div>
        </div>

        <div className="invoiceTable">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Code</th>
                <th>Order</th>
                <th>Balance</th>
                <th>Redeem</th>
                <th>Expiry on</th>
                <th>Recipient</th>
                <th>Enable</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.map((invoice, index) => (
                <tr key={index}>
                  <td><input type="checkbox" /></td>
                  <td>{invoice.code}</td>
                  <td>{invoice.order}</td>
                  <td>{invoice.balance}</td>
                  <td>{invoice.redeem}</td>
                  <td>{invoice.expiry}</td>
                  <td>{invoice.recipient}</td>
                  <td><Toggle /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Invoice;

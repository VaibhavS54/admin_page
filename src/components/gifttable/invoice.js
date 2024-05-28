
import "./invoice.css"
import { InvoiceCounter } from "./invoicecounter"
import { Toggle } from "./toggle"


 function Invoice() {

  return (
    <div>
    <div className="topButtons">
    <button className="coupons">Coupons</button>
    <button className="giftCards">Gift Cards</button>
  </div>
      <div className="mainInvoiceContainer">

        <div className="middleInputs">
          <input type="" placeholder="+ Add new" />
          <input placeholder="Import/Export" />
        </div>

        <div className="redButtonsContainer">
          <button>ALL</button>
          <button>Redeemed</button>
          <button>Not Redeemed</button>
        </div>

        <div className="lastInputContainer">
          <div className="leftInputs">
            <input placeholder="Bulk Actions" />
            <button>Apply</button>
            <input placeholder="Dashboard" />
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
                <th> </th>
                <th>Code</th>
                <th>Order</th>
                <th>Balance </th>
                <th>Redeem</th>
                <th>Expiry on</th>
                <th>Recipient</th>
                <th>Enable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>9JSX-3F8K-WaRy</td>
                <td>19990</td>
                <td>0.00</td>
                <td>In Order: #19990</td>
                <td>23-05-2014</td>
                <td>digital marketing@ ogi vetechnology.com</td>
                <td><Toggle /></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>P7Q9-B6T2-Y1M4</td>
                <td></td>
                <td>101</td>
                <td></td>
                <td>Unlimited</td>
                <td></td>
                <td><Toggle /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
  )
}
 export default Invoice;
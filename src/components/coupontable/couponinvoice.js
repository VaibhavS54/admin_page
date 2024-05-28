
import "./couponinvoice.css"
import { CouponCounter } from "./couponcounter"
import { CouponToggle } from "./coupontoggle"


 function CouponInvoice() {

  return (
    <div>
    <div className="topButtons">
    <button className="coupons">Coupons</button>
    <button className="giftCards">Gift Cards</button>
  </div>
      <div className="mainInvoiceContainer">

        <div className="middleInputs">
          <input type="" placeholder="+ Add new" />
        </div>

        <div className="redButtonsContainer">
          <button>ALL</button>
          <button>Trash</button>
        </div>

        <div className="lastInputContainer">
          <div className="leftInputs">
            <input placeholder="Bulk Actions" />
            <button>Apply</button>
            <input placeholder="Coupon Type" />
            <button>Apply</button>
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
                <th> </th>
                <th>Code</th>
                <th>Coupon Amount</th>
                <th>Discription </th>
                <th>Product ID</th>
                <th>Usage/Limit</th>
                <th>Expirt Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><CouponToggle /></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><CouponToggle /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
  )
}
 export default CouponInvoice;
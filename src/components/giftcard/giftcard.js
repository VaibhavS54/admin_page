import "./giftcard.css";
import { CardCounter } from "./cardcounter";
function GiftCard() {
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
            </select>
            <button>Apply</button>
            <select className="bulk">
            <option>Setting</option>
            </select>
          </div>
          <div className="rightInputs">
            <input placeholder="search" type="text" />
            <CardCounter />
          </div>
        </div>
        <div className="gift-card-settings">
      <table>
        <tbody>
          <tr>
            <td>Gift card code pattern</td>
            <td><input type="text"   /></td>
          </tr>
          <tr>
            <td>Make Recipient Info Mandatory</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>Recipient & Delivery Setting</td>
            <td>Allow the User to Choose Delivery Date and Time <input type="checkbox" /></td>
          </tr>
          <tr>
            <td>E-mail Settings</td>
            <td>Show a button in Gift Card E-mail <input type="checkbox" /></td>
          </tr>
          <tr>
            <td></td>
            <td><input type="text" /></td>
          </tr>
        </tbody>
      </table>
    </div>
          </div>
          </div>
);
}
            export default GiftCard;
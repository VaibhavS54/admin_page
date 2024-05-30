import "./userinvoice.css";
import { UserCounter } from "./usercounter";
import { UserToggle } from "./usertoggle";

const userData = [
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

function UserInvoice() {
  return (
    <div className="top">
      <div className="topButtons">
        <button className="coupons">User</button>
      </div>
      <div className="mainInvoiceContainer">
        <div className="middleInputs">
          <button className="but">Add new</button>
        </div>

        <div className="redButtonsContainer">
          <button>ALL</button>
          <button>Administrator</button>
          <button>Editor</button>
          <button>Author</button>
          <button>Subscriber</button>
          <button>Customer</button>
        </div>

        <div className="lastInputContainer">
          <div className="leftInputs">
          <select className="bulk">
            <option>Bulk action</option>
            <option>Delete</option>
            <option>Send Password Reset</option>
            </select>
            <button>Apply</button>
            <select className="bulk">
            <option>Change role to</option>
            <option>Shop Manager</option>
            <option>Customer</option>
            <option>Customer</option>
            <option>Subscriber</option>
            <option>contributor</option>
            <option>Author</option>
            <option>Editor</option>
            </select>
            <button>Change</button>
          </div>
          <div className="userrightInputs">
            <input placeholder="search" type="text" />
            <UserCounter />
          </div>
        </div>

        <div className="userinvoiceTable">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Post/Order</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index}>
                  <td><input type="checkbox" /></td>
                  <td>{user.code}</td>
                  <td>{user.order}</td>
                  <td>{user.balance}</td>
                  <td>{user.redeem}</td>
                  <td>{user.expiry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default UserInvoice;

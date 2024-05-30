import "./sizeinvoice.css";
import { SizeCounter } from "./sizecounter";
import { SizeToggle } from "./sizetoggle";

const sizeData = [
  {
    title: "Small",
    author: "John Doe",
    message: "Suitable for petite sizes"
  },
  {
    title: "Medium",
    author: "Jane Smith",
    message: "Standard medium size"
  }
];

function SizeInvoice() {
  return (
    <div className="top">
    <div className="mainInvoiceContainer">
      <div className="middleInputs">
        <h2>Size Chart</h2>
        <button className="but">Add new </button>
      </div>

      <div className="redButtonsContainer">
        <button>ALL</button>
        <button>Trash</button>
      </div>

      <div className="lastInputContainer">
        <div className="leftInputs">
        <select className="bulk">
            <option>Bulk action</option>
            <option></option>
            <option></option>
            </select>
            <button>Apply</button>
        </div>
        <div className="rightInputs">
          <input placeholder="search" type="text" />
          <SizeCounter />
        </div>
      </div>

      <div className="invoiceTable">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Author</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {sizeData.map((size, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>{size.title}</td>
                <td>{size.author}</td>
                <td>{size.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default SizeInvoice;

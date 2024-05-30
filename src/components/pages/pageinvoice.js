import "./pageinvoice.css";
import { PageCounter } from "./pagecounter";
import { PageToggle } from "./pagetoggle";

const pageData = [
  {
    title: "How to use React",
    author: "John Doe",
    message: "Introduction to React",
    date: "12-01-2023"
  },
  {
    title: "Advanced JavaScript",
    author: "Jane Smith",
    message: "Deep dive into JS",
    date: "23-02-2023"
  }
];

function PageInvoice() {
  return (
    <div className="top">
    <div className="mainInvoiceContainer">
      <div className="middleInputs">
        <h2>Pages</h2>
        <button className="but">Add new</button>
      </div>

      <div className="redButtonsContainer">
        <button>ALL</button>
        <button>Published</button>
        <button>Drafts</button>
      </div>

      <div className="lastInputContainer">
        <div className="leftInputs">  
            <select className="bulk">
            <option>Bulk action</option>
            <option>edit</option>
            <option>move to trash</option>
            <option>Duplicate</option>
            </select>
            <button>Apply</button>
            <select className="bulk">
            <option>All dates</option>
            </select>
          </div>
        <div className="rightInputs">
          <input placeholder="search" type="text" />
          <PageCounter />
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
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((page, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>{page.title}</td>
                <td>{page.author}</td>
                <td>{page.message}</td>
                <td>{page.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default PageInvoice;

import "./commentinvoice.css";
import { CommentCounter } from "./commentcounter";
import { CommentToggle } from "./commenttoggle";

const commentData = [
  {
    title: "Great Post!",
    author: "John Doe",
    message: "I really enjoyed reading this article.",
    date: "12-01-2023"
  },
  {
    title: "Helpful Tips",
    author: "Jane Smith",
    message: "Thanks for sharing these tips.",
    date: "23-02-2023"
  }
];

function CommentInvoice() {
  return (
    <div className="top">
    <div className="mainInvoiceContainer">
      <div className="middleInputs">
        <h2>Comments</h2>
      </div>

      <div className="redButtonsContainer">
        <button>ALL</button>
        <button>Pending</button>
        <button>Approved</button>
        <button>Spam</button>
        <button>Trash</button>
      </div>

      <div className="lastInputContainer">
        <div className="leftInputs">
        <select className="bulk">
            <option>Bulk action</option>
            <option>Delete</option>
            <option>Enable</option>
            </select>
            <button>Apply</button>
        </div>
        <div className="rightInputs">
          <input placeholder="search" type="text" />
          <CommentCounter />
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
            {commentData.map((comment, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>{comment.title}</td>
                <td>{comment.author}</td>
                <td>{comment.message}</td>
                <td>{comment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default CommentInvoice;

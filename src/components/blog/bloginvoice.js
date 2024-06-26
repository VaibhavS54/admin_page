import "./bloginvoice.css";
import { BlogCounter } from "./blogcounter";
import { BlogToggle } from "./blogtoggle";

const blogData = [
  {
    title: "How to Use React",
    author: "John Doe",
    categories: "Development",
    tags: "React, JavaScript",
    comments: 5,
    date: "23-05-2023"
  },
  {
    title: "Understanding JavaScript",
    author: "Jane Smith",
    categories: "Programming",
    tags: "JavaScript, ES6",
    comments: 10,
    date: "15-06-2023"
  }
];

function BlogInvoice() {
  return (
    <div className="top">
    <div className="mainInvoiceContainer">
      <div className="middleInputs">
        <h2>Blog</h2>
        <button className="but">Add new</button>
      </div>
      <div className="redButtonsContainer">
        <button>ALL</button>
        <button>Published</button>
        <button>Draft</button>
      </div>

      <div className="lastInputContainer">
        <div className="leftInputs">
        <select className="bulk">
            <option>Bulk action</option>
            <option>Edit</option>
            <option>Trash</option>
            <option>Duplicate</option>
            </select>
            <button>Apply</button>
            <select className="bulk">
            <option>All Dates</option>
            </select>
            <select className="bulk">
            <option>All Categories</option>
            </select>
            <button>Filter</button>
        </div>
        <div className="rightInputs">
          <input placeholder="search" type="text" />
          <BlogCounter />
        </div>
      </div>

      <div className="invoiceTable">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Author Name</th>
              <th>Categories</th>
              <th>Tags</th>
              <th>Comments</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {blogData.map((blog, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>{blog.categories}</td>
                <td>{blog.tags}</td>
                <td>{blog.comments}</td>
                <td>{blog.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default BlogInvoice;

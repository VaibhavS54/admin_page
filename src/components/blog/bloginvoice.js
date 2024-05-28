
import "./bloginvoice.css"
import { BlogCounter } from "./blogcounter"
import { BlogToggle } from "./blogtoggle"


 function BlogInvoice() {

  return (
      <div className="mainInvoiceContainer">

        <div className="middleInputs">
          <input type="" placeholder="+ Add new" />
        </div>

        <div className="redButtonsContainer">
          <button>ALL</button>
          <button>Published</button>
          <button>Draft</button>
        </div>

        <div className="lastInputContainer">
          <div className="leftInputs">
            <input placeholder="Bulk Actions" />
            <button>Apply</button>
            <input placeholder="All Dates" />
            <input placeholder="All Categories" />
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
                <th> </th>
                <th>Title</th>
                <th>Auther Name</th>
                <th>Categories </th>
                <th>tags</th>
                <th>comments</th>
                <th>RDates</th>
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
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>P7Q9-B6T2-Y1M4</td>
                <td></td>
                <td>101</td>
                <td></td>
                <td>Unlimited</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )
}
 export default BlogInvoice;
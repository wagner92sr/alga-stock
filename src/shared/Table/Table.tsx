import React from 'react'
import './Table.scss'

const Table = () => {
  return <table className="AppTable">
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th className="right">Stock</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cookie</td>
        <td>$1.25</td>
        <td className="right">23</td>
      </tr>
      <tr>
        <td>Waffer</td>
        <td>$1.00</td>
        <td className="right">32</td>
      </tr>
      <tr>
        <td>Cookie</td>
        <td>$1.25</td>
        <td className="right">23</td>
      </tr>
      <tr>
        <td>Waffer</td>
        <td>$1.00</td>
        <td className="right">32</td>
      </tr>
    </tbody>

  </table>
}

export default Table
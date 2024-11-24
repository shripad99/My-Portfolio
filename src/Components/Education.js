import React from 'react';
import './Education.css';

const Education = () => {
  return <table className='table'>
    <thead>
        <tr className='title'>
            <th>Degree</th>
            <th>Department</th>
            <th>Institute</th>
            <th>Year</th>
        </tr>
    </thead>
    <tbody>
        <tr className='table-1'>
            <td>Master Of Science</td>
            <td>Information Technology</td>
            <td>Usha Pravin Gandhi College</td>
            <td>2019-2021</td>
        </tr>
        <tr className='table-2'>
            <td>Bachelor Of Science</td>
            <td>Information Technology</td>
            <td>Usha Pravin Gandhi College</td>
            <td>2016-2019</td>
        </tr>
        <tr className='table-3'>
            <td>HSC</td>
            <td>Science Stream</td>
            <td>Mithibhai College</td>
            <td>2014-2016</td>
        </tr>
        <tr className='table-4'>
            <td>SSC</td>
            <td>General</td>
            <td>IES New English School</td>
            <td>2002-2014</td>
        </tr>
    </tbody>
  </table>
}

export default Education
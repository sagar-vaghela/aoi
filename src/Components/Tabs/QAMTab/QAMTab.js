import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from '../../../Button';
import EditModal from '../../../Modal/EditModal';

export default function QAMTab() {
  const [modalShow, setModalShow] = useState(false);
  const handleClick = () => {
    setModalShow(true)
  }
  console.log(modalShow);
  const tablerow = [
    { no: 1, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 2, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 3, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 4, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 5, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 6, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 7, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 8, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 9, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 10, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 11, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 12, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 13, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 14, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 15, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 16, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 17, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 18, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' },
    { no: 19, frequency: "test", Power: 25, width: '10', modulation: 'test', annex: 'test', op_mode: 'test' }
  ]

  return (
    <div className='channel_tab '>
      <div className='border border-dark mb-4'>
        <div className='searchbar table_top_bar d-flex justify-content-end border-bottom border-dark'>
          <label htmlFor="search">Search:</label>
          <input type="text" id='search' />
        </div>
        <Table responsive bordered className='main_table mb-0' >
          <thead>
            <tr>
              <th>No</th>
              <th>Frequency</th>
              <th>Power</th>
              <th>Width</th>
              <th>Modulation</th>
              <th>Annex</th>
              <th>OP Mode</th>
              <th>Muted</th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            {tablerow.map((item) => (
              <tr key={item.no}>
                <td>{item.no}</td>
                <td>{item.frequency}</td>
                <td>{item.Power}</td>
                <td>{item.width}</td>
                <td>{item.modulation}</td>
                <td>{item.annex}</td>
                <td>{item.op_mode}</td>
                <td>
                  <label className="toggle_box">
                    <input type="checkbox" />
                    <span className="slider"></span>
                    <span className="labels" data-on="Yes" data-off="No"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="action mb-4 border border-dark p-2">
        <h5 className='d-inline-block'>Action</h5>
        <div className="action_btns justify-content-between">
          <div className="left_btns">
            <Button label={'Edit'} handleClick={handleClick} />
            <EditModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
          <div className="right_btn">
            <Button label={'Save as'} />
            <Button label={'Make Default'} />
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import Button from '../../../Button';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import ModalAoi from '../../../Modal/ModalAoi';

export default function QAMTab(props) {

  const [search, setSearch] = useState('')
  const [selectBtn, setSelectBtn] = useState('Select All')
  const [modalShow, setModalShow] = useState(false);
  const [saveAs, setSaveAs] = useState(false)
  const [saveName, setSaveName] = useState('')
  const [editValue, setEditValue] = useState(0)

  const muted = (<div><label className="toggle_box">
    <input type="checkbox" />
    <span className="slider"></span>
    <span className="labels" data-on="Yes" data-off="No"></span>
  </label></div>)

  const tablerow = [
    { no: 1, frequency: "test1", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 2, frequency: "test2", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 3, frequency: "test3", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 4, frequency: "test4", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 5, frequency: "test5", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 6, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 7, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 8, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 9, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 10, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 11, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 12, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 13, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 14, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 15, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 16, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 17, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 18, frequency: "test", power: '25', width: '10', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted },
    { no: 19, frequency: "test", power: '25', width: '11', modulation: 'test', annex: 'test', op_mode: 'test', muted: muted }
  ]
  const columns = [
    {
      dataField: 'no',
      text: 'No',
      // headerClasses: 'col-1',
      // classes: 'col-1',
      sort: true
    },
    {
      dataField: 'frequency',
      text: 'Frequency',
      // headerClasses: 'col-2',
      // classes: 'col-2'
    },
    {
      dataField: 'power',
      text: 'Power',
      // headerClasses: 'col-1',
      // classes: 'col-1'
    },
    {
      dataField: 'width',
      text: 'Width',
      // headerClasses: 'col-1',
      // classes: 'col-1'
    },
    {
      dataField: 'modulation',
      text: 'Modulation'
    },
    {
      dataField: 'annex',
      text: 'Annex'
    },
    {
      dataField: 'op_mode',
      text: 'OP Mode',
      // headerClasses: 'col-2',
      // classes: 'col-2'
    },
    {
      dataField: 'muted',
      text: 'Muted',
      editable: false,
      // headerClasses: 'col-1',
      // classes: 'col-1'
    }
  ];


  const editHandleClick = () => {
    const selectRowLength = document.querySelectorAll('#running_qam_table .selection-row').length;
    selectRowLength === 0 ? setModalShow(true) : setModalShow(true)  // changes on ticket 1
    setEditValue(selectRowLength);
  }

  const saveHandleClick = () => {
    setSaveAs(true)
  }

  const defaultHandleClick = () => {
    console.log(props);
    props.showAlertBox('Action was complete successfully!', 'success')
  }

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    classes: 'selection-row',
    clickToEdit: true,
    hideSelectColumn: true
  };

  const selectHandleClick = () => {
    var trElements = document.querySelectorAll("#running_qam_table tbody tr");
    console.log(trElements);

    if (selectBtn === 'Select All') {
      trElements.forEach(function (element) {
        element.classList.add("selection-row");
      });
      setSelectBtn('Deselect All')
    } else {
      trElements.forEach(function (element) {
        element.classList.remove("selection-row");
      });
      setSelectBtn('Select All')
    }
  }

  const editBody = () => {
    return (

      <>
        {editValue === 0 ?

          <div>Please Select at list one Row !</div>
          :
          <>

            <div className="selected_channel mb-3">
              <label htmlFor="" className='me-2'>Number of Selected Channels: </label>
              <input type="text" value={editValue} readOnly className='bg-secondary text-light border-0' disabled />
            </div>

            <div className="d-flex justify-content-center mb-3">
              <div className="me-3">
                <label htmlFor="" className='me-2'>Power: </label>
                <input type="text" />
              </div>

              <div>
                <label htmlFor="" className='me-2'>Mute: </label>
                <label className="toggle_box">
                  <input type="checkbox" />
                  <span className="slider"></span>
                  <span className="labels" data-on="Yes" data-off="No"></span>
                </label>
              </div>
            </div>

          </>
        }
      </>
    )
  }

  const editFooter = () => {

    return (
      <>
        {editValue === 0 ?
          <></>
          :
          <div className='edit_btns'>
            <Button label={'Edit'} />
            <Button label={'Cancel'} handleClick={() => setModalShow(false)} />
          </div>
        }
      </>
    )

  }


  const saveBody = (
    <input type="text" placeholder='Enter a name' className='w-100' value={saveName} onChange={(e) => setSaveName(e.target.value)} style={{ maxWidth: '100%' }} />
  )
  const saveFooter = (
    <div className='edit_btns'>
      <Button label={'Save'} />
      <Button label={'Cancel'} handleClick={() => setSaveAs(false)} />
    </div>
  )
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(`clicked on row with index: ${rowIndex}`);
    }
  };

  return (
    <>
      < div className='channel_tab ' >
        <div className='border border-dark mb-4'>
          <div className='searchbar table_top_bar d-flex justify-content-end align-items-center border-bottom border-dark'>
            <label htmlFor="search">Search:</label>
            <input type="text" id='search' value={search || ''} onChange={e => setSearch(e.target.value)} />
          </div>
          <BootstrapTable
            id='running_qam_table'
            keyField="no"
            data={tablerow.filter((row) =>
              (row?.frequency?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
              (row?.power?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
              (row?.width?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
              (row?.op_mode?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
              (row?.modulation?.toUpperCase().indexOf(search.toUpperCase()) > -1) ||
              (row?.annex?.toUpperCase().indexOf(search.toUpperCase()) > -1))
            }
            columns={columns}
            selectRow={selectRow}
            cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
            headerClasses="table_header"
            classes="mb-0"
            rowEvents={rowEvents}
          />
        </div>

        <div className="action mb-4 border border-dark p-2">
          {/* <h5 className='d-inline-block fw-bold'>Action</h5> */}
          <div className="action_btns justify-content-between">
            <div className="left_btns text-center">
              <Button label={'Edit'} handleClick={editHandleClick} />
              <button onClick={selectHandleClick}>{selectBtn}</button>
              <ModalAoi
                show={modalShow}
                onHide={() => setModalShow(false)}
                modalTitle=''
                modalBody={editBody()}
                modalFooter={editFooter()}
              />
            </div>
            <div className="right_btn text-center">
              <Button label={'Save as'} handleClick={saveHandleClick} />
              <ModalAoi
                show={saveAs}
                onHide={() => setSaveAs(false)}
                modalTitle='Save As'
                modalBody={saveBody}
                modalFooter={saveFooter}
              />
              <Button label={'Make Default'} handleClick={defaultHandleClick} />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

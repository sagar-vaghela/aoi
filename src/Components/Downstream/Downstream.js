import React from 'react'
import RunningConfigPage from '../RunningConfigPages/RunningConfigPage'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ManageConfigurationPage from '../ManageConfigurationPage/ManageConfigurationPage';


const Downstream = () => {
  return (
    <div className='tabs_wrapper'>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="nav_tabs"
      >
        <Tab eventKey="RunningConfigPage" title="Running Cofiguration">
          <RunningConfigPage />
        </Tab>
        <Tab eventKey="MaintenancePage" title="Maintenance">
          <ManageConfigurationPage />
        </Tab>
        <Tab eventKey="configuration" title="Cofiguration">
          Cofiguration
        </Tab>
      </Tabs>
    </div>
  )
}

export default Downstream

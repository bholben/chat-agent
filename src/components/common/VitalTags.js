import React from 'react';
import md5 from 'md5';
import DropDown from './DropDown';

const vitalStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: 5,
};

const labelStyle = { marginRight: 10 };

const assigneeOptions = [
  { id: 'NHl2onCI4DTHFfCvN87JuUXxf2C3', name: 'Addison', color: `#${md5('addison@gmail.com').substr(0, 6)}`, email: 'addison@gmail.com' },
  { id: 'kj9z5Yz9y9W9Kw7eR7H4k970uaj1', name: 'Bob', color: `#${md5('bob@gmail.com').substr(0, 6)}`, email: 'bob@gmail.com' },
  { id: 'hgrrPjnAAbXane9WwjGrlIOprJp2', name: 'bholben', color: `#${md5('bholben@gmail.com').substr(0, 6)}`, email: 'bholben@gmail.com' },
];

const statusOptions = [
  { id: 'inQueue', name: 'In Queue', color: 'red' },
  { id: 'inProgress', name: 'In Progress', color: '#ddd' },
  { id: 'closed', name: 'Closed', color: '#444' },
];

const severityOptions = [
  { id: 'trivial', name: 'Trivial', color: 'lightblue' },
  { id: 'critical', name: 'Critical', color: 'orange' },
];

const loyaltyOptions = [
  { id: 'gold', name: 'Gold', color: 'goldenrod' },
  { id: 'silver', name: 'Silver', color: 'silver' },
  { id: 'bronze', name: 'Bronze', color: 'darkgoldenrod' },
];

function VitalTags(props) {
  const { vitals, changeVitalsItem } = props;
  return (
    <div style={{fontSize: '0.9em'}}>
      <div style={vitalStyle}>
        <div style={labelStyle}>Assignee:</div>
        <DropDown
            options={assigneeOptions}
            selected={vitals.assignee}
            changeItem={id => changeVitalsItem('assignee', id)} />
      </div>
      <div style={vitalStyle}>
        <div style={labelStyle}>Status:</div>
        <DropDown
            options={statusOptions}
            selected={vitals.status}
            changeItem={id => changeVitalsItem('status', id)} />
      </div>
      <div style={vitalStyle}>
        <div style={labelStyle}>Severity:</div>
        <DropDown
            options={severityOptions}
            selected={vitals.severity}
            changeItem={id => changeVitalsItem('severity', id)} />
      </div>
      <div style={vitalStyle}>
        <div style={labelStyle}>Loyalty:</div>
        <DropDown
            options={loyaltyOptions}
            selected={vitals.loyalty}
            changeItem={id => changeVitalsItem('loyalty', id)} />
      </div>
    </div>
  );
}

export default VitalTags;
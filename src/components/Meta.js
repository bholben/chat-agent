import React from 'react';
import * as moment from 'moment';

const metaStyle = {
  position: 'absolute',
  top: -20,
  right: 10,
  width: 300,
  textAlign: 'right',
  color: 'gray',
  fontSize: 13
};

const agentMetaStyle = Object.assign({}, metaStyle, {
  left: 10,
  textAlign: 'left'
});

function Meta(props) {
  const agentMeta = (
    <div style={agentMetaStyle}>
      <span style={{fontWeight: 700}}>{props.message.name}</span>
      <span> - {moment(props.message.dateTime).fromNow()}</span>
    </div>
  );

  const customerMeta = (
    <div style={metaStyle}>
      {moment(props.message.dateTime).fromNow()}
    </div>
  );

  return props.message.isAgent ? agentMeta : customerMeta;
}

export default Meta;

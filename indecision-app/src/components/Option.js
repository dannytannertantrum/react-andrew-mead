import React from 'react';

const Option = (props) => (
// export default (props) => { - can do something like this, but <Unknown> will show in Developer tools
  <div>
    <p>
      {props.optionText}
      <button
        onClick={(e) => {
          // we don't want to pass the e argument up, so we create this function to pass up what we actually want
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </p>
  </div>
);

export default Option;
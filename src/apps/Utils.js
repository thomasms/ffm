import React from 'react';


function DropdownInput(props) {
  return (
    <span className={props.classname}>
    <select onChange={props.handler} defaultValue={props.selected}>
      {
        props.data.map((x, i) =>
            <option
              key={i}
              value={x}>
              {x}
            </option>
        )
      }
    </select>
  </span>
  );
}

function LabelWithCheck(props){
    return (
      <div className="pretty p-default p-round p-pulse">
        <span>
          <input type="checkbox" name={props.name} 
                                onChange={props.handler} 
                                value={props.value} 
                                defaultChecked={props.value}
                                className={props.classname}/>
          <div className="state p-warning">
            <i className="icon mdi mdi-check"></i>
            <label> {props.label}</label>
          </div>
        </span>
      </div>
    );
  }

  export { DropdownInput };
  export { LabelWithCheck };
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
      <span>
        <input type="checkbox" name={props.name} 
                               onChange={props.handler} 
                               value={props.value} 
                               defaultChecked={props.value}
                               className={props.classname}/>
        <label> {props.label}</label>
      </span>
    );
  }

  export { DropdownInput };
  export { LabelWithCheck };
export default function Input ({ label, type, value, onChange }) {
return(  
<div>
    <label>{label}</label>
    <Input type={type} value={value} onChange={onChange}/>
  </div>
);}
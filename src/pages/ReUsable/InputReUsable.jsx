const Input=({
    label,
    placeHolder,
    value,
    onChange,
    errorMessage,
    type="text",
    id,
    disabled =false
})=>{
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeHolder} value={value} onChange={onChange} disabled={disabled}/>
            {errorMessage && <div>{errorMessage}</div>}
        </div>
    )
}
export default Input
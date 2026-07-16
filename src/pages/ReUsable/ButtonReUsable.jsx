    const Button=({
        children,
        variant,
        onClick,
        disabled
    })=>{
        return(
            
                <button className={`btn ${variant}`} onClick={onClick} disabled={disabled}>
                    {children}
                </button>
            
        )
    }

    export default Button;


    //text
    //variant
    //click handlers
    //disabled state
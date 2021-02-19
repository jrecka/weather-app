const Form = ({value, change, submit}) => {
    return (
        <form 
            className='input-group mb-3 form-width'
            onSubmit={submit}> 
            <input 
                className='form-control'
                type='text' 
                value={value}
                placeholder='enter city'
                onChange={change}/>
            <button className='btn btn-dark btn-outline-secondary'>search</button>
        </form>
    ) 
}

export default Form
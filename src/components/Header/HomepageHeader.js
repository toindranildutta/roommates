


function HomepageHeader(){
    return(
        <>
        <div className='d-flex justify-content-between m-3 p-3'>
            <div>
              <h2>Room<span className='text-success'>Mates</span></h2>  
            </div>
            <div className='input-group w-25'>
                <h5>LogIn</h5>
                <h5 className='ms-3'>Signup</h5>
                <button className='btn btn-success ms-3'>Visit Full Site </button>
            </div>
        </div>
        </>
    )
}

export default HomepageHeader;
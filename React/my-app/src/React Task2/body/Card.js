function Card(props) {    
    const prodDetail = props.data
    return(
        <>
        {
            prodDetail.map((prod)=>(
                <div className='card col-md-3'>
                    <img src={prod.url} className="card-img-top" alt="..."/>     
                    <div className="card-body">
                        <h5 className="card-title">{prod.name}</h5>
                        <p>{prod.price}</p>
                        <p className="card-text">{prod.description}</p>
                        <a href={prod.url} className="btn btn-primary">Add to card</a> 
                    </div>       
                </div>
            ))
        }
        </>
    )
}
export default Card
function CounterComponent(props){
    return(
        <div>
            {console.log(props)}
            <button onClick={props.plus}>+</button>
            <h2>{props.count}</h2>
            <button onClick={props.minus}>-</button>
        </div>
    )
}

export default CounterComponent
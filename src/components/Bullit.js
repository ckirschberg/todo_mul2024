function Bullit(props) {

    const bullitStyle = {
        color: props.color || 'black',
        padding: '1.5em',
        fontSize: props.size
     }

    return (
        <li style={bullitStyle}>
            {props.message}
        </li>
    )
}
export default Bullit;
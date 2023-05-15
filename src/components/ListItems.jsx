export function ListItems(props) {
    return <ul>
        {
            props.listItems.map((item, index) => <li key={index}>{item} &nbsp; <button>X</button></li>)
        }
    </ul>;
}
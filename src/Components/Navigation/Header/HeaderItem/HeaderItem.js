import classes from './HeaderItem.module.css'

const headerItem = (props) => (
    <li className={classes.HeaderItem}>
        {props.Item}
    </li>
)

export default headerItem
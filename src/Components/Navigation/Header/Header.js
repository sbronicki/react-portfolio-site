import classes from './Header.module.css'
import HeaderItem from './HeaderItem/HeaderItem'

const header = () => (
    <nav>
        <ul className={classes.Header}>
            <HeaderItem Item='Home' />
            <HeaderItem Item='About' />
            <HeaderItem Item='Skills' />
            <HeaderItem Item='Education' />
            <HeaderItem Item='Contact' />
        </ul>
    </nav>
)

export default header
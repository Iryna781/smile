import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './ButtonRead.css'
type Props = {
    to: string
    children: React.ReactNode
}
const ButtonRead = ({ to, children }: Props) => {
    return (
        <>
            <Button color="inherit" className="btn-read">
                <NavLink
                    to={to}
                    className={({ isActive }) =>
                        isActive ? 'button-item-active' : 'button-item'
                    }
                >
                    {children}
                </NavLink>
            </Button>
        </>
    )
}
export default ButtonRead

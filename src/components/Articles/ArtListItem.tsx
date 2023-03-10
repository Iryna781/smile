import { Card, CardContent } from '@mui/material'
import './ArtListItem.css'

type Props = {
    image: string
    title: string
    text: string
}

const ArtListItem = ({ image, title, text }: Props) => {
    return (
        <Card className="art-list-item">
            <CardContent className="cont">
                <div className="art-img">
                    <img src={image} alt="" />
                </div>
                <div>
                    <h4 className="art-title">{title}</h4>
                    <p className="art-text">{text}</p>
                </div>
            </CardContent>
        </Card>
    )
}
export default ArtListItem

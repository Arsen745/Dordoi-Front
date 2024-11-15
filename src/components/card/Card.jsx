import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import './Card.css'
import Photo from '../../assets/png/photo-card.png'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Card = () => {
    return (
        <div className='card-homepage'>
            <div className="top-content">
                <img src={Photo} alt="" />
                <div className="like">
                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </div>
                <div className="scidka">
                    <p>-20%</p>
                </div>
            </div>
            <div className="bottom-content">
                <div className="name">
                    <h2>Пылесос</h2>
                </div>
                <div className="model">
                    <h2>Blesk BL-XCQ 15</h2>
                </div>
                <div className="price">
                    <h2>9000 <span>KGZ</span></h2>
                </div>
                <div className="shop">
                    <h2><span>магазин: </span>Dordoi Techno</h2>
                </div>
                <div className="button">
                    <button>Добавить Корзину</button>
                </div>
            </div>
        </div>
    )
}

export default Card
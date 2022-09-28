function Card({ img, name, artist, info }) {
    return (
        <div id='canciones'>
            <img src={img} id='musica_img'></img>
            <div id='ficha'>
                <h4>{name}</h4>
                <h4>{artist}</h4>
                <h5>{info}</h5>
            </div>
        </div>
    )
}
export default Card;
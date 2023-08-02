import '../styles/main.css';

export function SecondComponent(props) {
    return (
        <div className='user'>
            <img className='user-img' src={props['userImg']} alt='user img'></img>
            <div className='user-info'>
                <h3 className='user-name'>{props['userName']}</h3>
                <h6 className='user-nickname'>{props['userNickname']}</h6>
            </div>
        </div>
    )
}



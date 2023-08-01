import '../styles/main.css';

export function SecondComponents(props) {
    return (
        <div className='post'>
            <div className='profile'>
                <img className='profile-img' src={props['profileImg']} alt='profile image'></img>
                <h3 className='profile-name'>{props['profileName']}</h3>
                <p className='profile-nickname'>{props['profileNickname']}</p>
                <p className='profile-post-data'>{props['profilePostData']}</p>
            </div>

            <div className='text-content'>
                <p className='text-content'>{props['textContent']}</p>
            </div>
            {/* Without media contents */}

            <div className='bottom-post'>
                <div className='comments'> 
                    <img className='comments-img' src={props['commentsImg']} alt='comments image'></img>
                    <p className='bottom-post-number'>{props['commentsNumber']}</p>
                </div>
                <div className='retweets'> 
                    <img className='retweets-img' src={props['retweetImg']} alt='retweet image'></img>
                    <p className='bottom-post-number'>{props['retweetsNumber']}</p>
                </div>
                <div className='likes'> 
                    <img className='likes-img' src={props['likesImg']} alt='likes image'></img>
                    <p className='bottom-post-number'>{props['likesNumber']}</p>
                </div>
                <div className='views'> 
                    <img className='views-img' src={props['viewsImg']} alt='views image'></img>
                    <p className='bottom-post-number'>{props['viewsNumber']}</p>
                </div>
            </div>
        </div>
    )
}


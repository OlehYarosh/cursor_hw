import '../styles/main.css';

export function FirstComponents(props) {
    return (
        <div className='post'>
            <div className='profile'>
                <img className='profile-img' src={props['profileImg']} alt='profile img'></img>
                <h3 className='profile-name'>{props['profileName']}</h3>
                <p className='profile-nickname'>{props['profileNickname']}</p>
                <p className='profile-post-data'>{props['profilePostData']}</p>
            </div>

            <div className='text-content'>
                <p className='text-content'>{props['textContent']}</p>
            </div>
            {props.mediaContent &&(
            <div className='media-content'>
                <img className='media-content' src={props['mediaContent']} alt='media img'></img>
            </div>
            )}

            <div className='bottom-post'>
                <div className='comments'> 
                    <img className='comments-img' src={props['commentsImg']} alt='comments icon'></img>
                    <p className='bottom-post-number'>{props['commentsNumber']}</p>
                </div>
                <div className='retweets'> 
                    <img className='retweets-img' src={props['retweetImg']} alt='retweet icon'></img>
                    <p className='bottom-post-number'>{props['retweetsNumber']}</p>
                </div>
                <div className='likes'> 
                    <img className='likes-img' src={props['likesImg']} alt='likes icon'></img>
                    <p className='bottom-post-number'>{props['likesNumber']}</p>
                </div>
                <div className='views'> 
                    <img className='views-img' src={props['viewsImg']} alt='views icon'></img>
                    <p className='bottom-post-number'>{props['viewsNumber']}</p>
                </div>
            </div>
        </div>
    )
}


import './styles/App.css';
import { FirstComponents } from './components/FirstComponent';
import gimli from './assets/gimli.jpg';
import legolas from './assets/legolas.webp';
import aragorn from './assets/aragorn.jpg';
import gandalf from './assets/gandalf.jpg';
import mediaContent1 from './assets/pic.jpg';
import commentIcon from './assets/comments-icon.png';
import retweetIcon from './assets/retweet-icon.png';
import likeIcon from './assets/like-icon.png';
import viewIcon from './assets/views-icon.png';
import { SecondComponents } from './components/SecondComponents';

function App() {
  return (
    <div className="App">
      <header>
          <h4>Fellowship of Tweets</h4>
      </header>
      
      <div class="container">
          <div class="left-sidebar">
              <h4>left sidebar</h4>
          </div>
      
          <main class="main-content">
              <SecondComponents 
                profileImg = {gimli}
                profileName = "Gimli"
                profileNickname = "@son_of_gloin"
                profilePostData = "дата"

                textContent = "Щойно відбулося змагання з Леголасом, хто зможе нарубати більше дров! Ельф може бути швидким, але сила гнома перемогла! #WoodChoppingChallenge #DwarfVsElf"
                mediaContent = {null}

                commentsImg = {commentIcon}
                commentsNumber = "..."
                retweetImg = {retweetIcon}
                retweetsNumber = "..."
                likesImg = {likeIcon}
                likesNumber = "..."
                viewsImg = {viewIcon}
                viewsNumber = "..."
              />
              <FirstComponents 
                profileImg = {legolas}
                profileName = "Legolas"
                profileNickname = "@son_of_thranduil"
                profilePostData = "дата"

                textContent = "Ах, Гімлі, який завжди прагне довести свою силу! Можливо, я програв змагання зі стрільби з лука із зав’язаними очима, але я помщуся у змаганні з відрощування бороди! #ElvenArcherySkills #BeardBattle"
                mediaContent = {mediaContent1}

                commentsImg = {commentIcon}
                commentsNumber = "..."
                retweetImg = {retweetIcon}
                retweetsNumber = "..."
                likesImg = {likeIcon}
                likesNumber = "..."
                viewsImg = {viewIcon}
                viewsNumber = "..."
              />
              <FirstComponents 
                profileImg = {aragorn}
                profileName = "Aragorn "
                profileNickname = "@son_of_arathorn"
                profilePostData = "дата"

                textContent = "Спостерігати за змаганнями Гімлі та Леголаса — це чиста розвага! Тепер вони кидають виклик один одному на танці в Рівенделлі. Не можу дочекатися, щоб побачити, хто вміє рухатися! #DanceBattle #MiddleEarthParty"
                mediaContent = {mediaContent1}

                commentsImg = {commentIcon}
                commentsNumber = "..."
                retweetImg = {retweetIcon}
                retweetsNumber = "..."
                likesImg = {likeIcon}
                likesNumber = "..."
                viewsImg = {viewIcon}
                viewsNumber = "..."
              />

              <FirstComponents 
                profileImg = {gandalf}
                profileName = "? "
                profileNickname = "?"
                profilePostData = "дата"

                textContent = "text content"
                // mediaContent = {mediaContent1}

                commentsImg = {commentIcon}
                commentsNumber = "..."
                retweetImg = {retweetIcon}
                retweetsNumber = "..."
                likesImg = {likeIcon}
                likesNumber = "..."
                viewsImg = {viewIcon}
                viewsNumber = "..."
              />

          </main>
      
          <div class="right-sidebar">
              <h4>right sidebar</h4>
          </div>
      </div>
      
    </div>
  );
}

export default App;

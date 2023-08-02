import './styles/App.css';
import { FirstComponents } from './components/FirstComponent';
import { SecondComponent } from './components/SecondComponents';
import logo from './assets/logo.png'
import gimli from './assets/gimli.jpg';
import legolas from './assets/legolas.webp';
import aragorn from './assets/aragorn.jpg';
import gandalf from './assets/gandalf.jpg';
import frodo from './assets/frodo.jpg'
import commentIcon from './assets/comments-icon.png';
import retweetIcon from './assets/retweet-icon.png';
import likeIcon from './assets/like-icon.png';
import viewIcon from './assets/views-icon.png';
import dancing from './assets/dancing.jpg';
import singingDwarves from './assets/singingDwarves.png'
import drink from './assets/drink.webp'
import gimliWarior from './assets/gimliWarior.png'
import swordAragorn from './assets/swordAragorn.jpg'
import gandalfLaughs from './assets/gandalfLaughs.jpg'
import gandalfDancing from './assets/gandalfDancing.jpg'
import gandalfSmile from './assets/gandalfSmile.png'

function App() {
  return (
    <div className="App">
      <header>
        <img className="logo" alt="logo" src={logo}></img>
        <h4>FellowshipTweets</h4>
      </header>
      
      <div class="container">
        <div class="left-sidebar">
          <p>Головна</p>
          <p>Ознайомлення</p>
          <p>Сповіщення</p>
          <p>Повідомлення</p>
          <p>Списки</p>
          <p>Профіль</p>
          <p>Інші дії</p>
          <SecondComponent
            userImg = {frodo}
            userName = "Frodo"
            userNickname = "@son_of_drogo"
          />
        </div>

        <main class="main-content">
          <FirstComponents  
            profileImg = {gimli}
            profileName = "Gimli"
            profileNickname = "@son_of_gloin"
            profilePostData = "1 Ечмір, 3021 Третього віку"

            textContent = "Леголас побився об заклад, що він зможе випустити більше стріл із зав’язаними очима. Скажімо, він винен мені випити та потренуватися зі стрільбою! #BlindfoldedArcher #DwarfVsElfChallenge"

            commentsImg = {commentIcon}
            commentsNumber = "213"
            retweetImg = {retweetIcon}
            retweetsNumber = "180"
            likesImg = {likeIcon}
            likesNumber = "503"
            viewsImg = {viewIcon}
            viewsNumber = "12 431"
          />
          <FirstComponents 
            profileImg = {legolas}
            profileName = "Legolas"
            profileNickname = "@son_of_thranduil"
            profilePostData = "1 Ечмір, 3021 Третього віку"

            textContent = "Ах, Гімлі, який завжди прагне довести свою силу! Можливо, я програв змагання зі стрільби з лука із зав’язаними очима, але я помщуся у змаганні з відрощування бороди! #ElvenArcherySkills #BeardBattle"

            commentsImg = {commentIcon}
            commentsNumber = "145"
            retweetImg = {retweetIcon}
            retweetsNumber = "215"
            likesImg = {likeIcon}
            likesNumber = "604"
            viewsImg = {viewIcon}
            viewsNumber = "14 087"
          />
          <FirstComponents 
            profileImg = {aragorn}
            profileName = "Aragorn"
            profileNickname = "@son_of_arathorn"
            profilePostData = "1 Ечмір, 3021 Третього віку"

            textContent = "Спостерігати за змаганнями Гімлі та Леголаса — це чиста розвага! Тепер вони кидають виклик один одному на танці в Рівенделлі. Не можу дочекатися, щоб побачити, хто вміє рухатися! #DanceBattle #MiddleEarthParty"
            mediaContent = {dancing}

            commentsImg = {commentIcon}
            commentsNumber = "187"
            retweetImg = {retweetIcon}
            retweetsNumber = "240"
            likesImg = {likeIcon}
            likesNumber = "572"
            viewsImg = {viewIcon}
            viewsNumber = "13 856"
          />


          <FirstComponents  
            profileImg = {gimli}
            profileName = "Gimli"
            profileNickname = "@son_of_gloin"
            profilePostData = "2 Ечмір, 3021 Третього віку"

            textContent = "Леголас наполягає на тому, що ельфи краще співають, але я не погоджуюсь! У нас був караоке-вечір у Лотлоріені, і скажімо так, моє виконання «Балади про Дуріна» викликало у них благоговіння! #DwarvenKaraoke #KaraokeMaster"
            mediaContent = {singingDwarves}

            commentsImg = {commentIcon}
            commentsNumber = "198"
            retweetImg = {retweetIcon}
            retweetsNumber = "172"
            likesImg = {likeIcon}
            likesNumber = "491"
            viewsImg = {viewIcon}
            viewsNumber = "11 977"
          />
          <FirstComponents 
            profileImg = {legolas}
            profileName = "Legolas"
            profileNickname = "@son_of_thranduil"
            profilePostData = "2 Ечмір, 3021 Третього віку"

            textContent = "Здібності Гімлі до караоке справді є чим подивитись! Але зараз ми знову проводимо змагання зі стрільби з лука із зав’язаними очима. Цього разу я налаштований перемогти! #ElvenArchery #BlindfoldedChallengeRound2"

            commentsImg = {commentIcon}
            commentsNumber = "150"
            retweetImg = {retweetIcon}
            retweetsNumber = "200"
            likesImg = {likeIcon}
            likesNumber = "569"
            viewsImg = {viewIcon}
            viewsNumber = "13 421"
          />
          <FirstComponents 
            profileImg = {aragorn}
            profileName = "Aragorn"
            profileNickname = "@son_of_arathorn"
            profilePostData = "3 Ечмір, 3021 Третього віку"

            textContent = "Схоже, Гімлі та Леголас не можуть припинити змагання! Вчора в них знову було змагання зі стрільби з лука із зав'язаними очима. Сьогоднішнє завдання: оповідання! Я буду судити, хто зможе розповісти найепічнішу історію, але будемо сподіватися, що вони не перетворять її на битву епічних масштабів! #StorytellingContest #MiddleEarthTales"

            commentsImg = {commentIcon}
            commentsNumber = "212"
            retweetImg = {retweetIcon}
            retweetsNumber = "218"
            likesImg = {likeIcon}
            likesNumber = "615"
            viewsImg = {viewIcon}
            viewsNumber = "14 352"
          />


          <FirstComponents  
            profileImg = {gimli}
            profileName = "Gimli"
            profileNickname = "@son_of_gloin"
            profilePostData = "4 Ечмір, 3021 Третього віку"

            textContent = "Гей, Леголасе, ти бачив, як Арагорн намагається використати лук розміром з ельфа? Це все одно, що дивитися, як гном намагається осідлати коня, призначеного для ента! 😄 #AragornFail #ElfProblems #DwarfHumor"

            commentsImg = {commentIcon}
            commentsNumber = "182"
            retweetImg = {retweetIcon}
            retweetsNumber = "158"
            likesImg = {likeIcon}
            likesNumber = "514"
            viewsImg = {viewIcon}
            viewsNumber = "12 569"
          />
          <FirstComponents 
            profileImg = {legolas}
            profileName = "Legolas"
            profileNickname = "@son_of_thranduil"
            profilePostData = "4 Ечмір, 3021 Третього віку"

            textContent = "Справді, Гімлі! А ти чув про той час, коли Арагорн намагався прокрастися, як ельф, у лісі? Він звучав, як стадо кабанів, що пробиваються крізь кущі! 🤣 #AragornInDisguise #WoodlandFail #NotSoStealthy"

            commentsImg = {commentIcon}
            commentsNumber = "157"
            retweetImg = {retweetIcon}
            retweetsNumber = "192"
            likesImg = {likeIcon}
            likesNumber = "551"
            viewsImg = {viewIcon}
            viewsNumber = "13 781"
          />
          <FirstComponents 
            profileImg = {aragorn}
            profileName = "Aragorn"
            profileNickname = "@son_of_arathorn"
            profilePostData = "4 Ечмір, 3021 Третього віку"

            textContent = "Ах, мої любі друзі, Гімлі та Леголас, знову знущаються з мене. Але давайте подивимося, хто сміятиметься останнім, коли я виграю наступне змагання по випивці у «Гарцюючого поні»! 🍻 #AragornTheVictor #KingOfPints #DwarfVsElf"
            mediaContent = {drink}

            commentsImg = {commentIcon}
            commentsNumber = "200"
            retweetImg = {retweetIcon}
            retweetsNumber = "227"
            likesImg = {likeIcon}
            likesNumber = "593"
            viewsImg = {viewIcon}
            viewsNumber = "14 215"
          />


          <FirstComponents  
            profileImg = {gimli}
            profileName = "Gimli"
            profileNickname = "@son_of_gloin"
            profilePostData = "5 Ечмір, 3021 Третього віку"

            textContent = "Ха! Арагорне, ти, можливо, король Гондору, але чи зможеш ти зрівнятися з могутніми помахами моєї сокири в бою? Я хочу, щоб ти знав, я пробив більше орків, ніж ти їв гарячої їжі! 💪 #AxeMaster #DwarfPower #OrcSlayer"
            mediaContent = {gimliWarior}
            commentsImg = {commentIcon}
            commentsNumber = "175"
            retweetImg = {retweetIcon}
            retweetsNumber = "146"
            likesImg = {likeIcon}
            likesNumber = "499"
            viewsImg = {viewIcon}
            viewsNumber = "12 293"
          />
          <FirstComponents 
            profileImg = {legolas}
            profileName = "Legolas"
            profileNickname = "@son_of_thranduil"
            profilePostData = "5 Ечмір, 3021 Третього віку"

            textContent = "О, Гімлі, ти завжди хвалишся своїми подвигами у вбивстві орків! Але не забуваймо, як ти заплутався у власній бороді під час тієї епічної битви. Навіть орки не могли стримати сміху! 🤣 #BeardTroubles #DwarfHumor #TangledInBattle"

            commentsImg = {commentIcon}
            commentsNumber = "143"
            retweetImg = {retweetIcon}
            retweetsNumber = "181"
            likesImg = {likeIcon}
            likesNumber = "527"
            viewsImg = {viewIcon}
            viewsNumber = "13 009"
          />
          <FirstComponents 
            profileImg = {aragorn}
            profileName = "Aragorn"
            profileNickname = "@son_of_arathorn"
            profilePostData = "5 Ечмір, 3021 Третього віку"

            textContent = "Ах, жарти між друзями, ознака справжнього товариства. Але пам’ятайте, поки ви двоє сваритеся, я буду вести наше товариство до перемоги проти сил темряви! Разом ми переможемо! 🗡️ #FellowshipUnite #UnitedWeStand #MiddleEarthHeroes"

            commentsImg = {commentIcon}
            commentsNumber = "207"
            retweetImg = {retweetIcon}
            retweetsNumber = "235"
            likesImg = {likeIcon}
            likesNumber = "574"
            viewsImg = {viewIcon}
            viewsNumber = "13 892"
          />


          <FirstComponents  
            profileImg = {gimli}
            profileName = "Gimli"
            profileNickname = "@son_of_gloin"
            profilePostData = "6 Ечмір, 3021 Третього віку"

            textContent = "Ха! Арагорне, ти забув той раз, коли ти намагався вразити Арвен віршем, але врешті-решт спіткнувся на власних словах? Навіть Леголас не зміг стримати сміху! 😄 #BardOfGondor #PoetryFail #AragornTheWordsmith"

            commentsImg = {commentIcon}
            commentsNumber = "189"
            retweetImg = {retweetIcon}
            retweetsNumber = "154"
            likesImg = {likeIcon}
            likesNumber = "506"
            viewsImg = {viewIcon}
            viewsNumber = "12 589"
          />
          <FirstComponents 
            profileImg = {legolas}
            profileName = "Legolas"
            profileNickname = "@son_of_thranduil"
            profilePostData = "6 Ечмір, 3021 Третього віку"

            textContent = "Справді, Гімлі! І давайте не забувати про той час, коли Арагорн прийняв пень за ворога і кинувся на нього з усієї сили. О, вираз його обличчя, коли він зрозумів, що це просто нешкідливий шматок дерева! 🌳 #StumpVsAragorn #TreeTussle #WarriorMistake"
            mediaContent = {swordAragorn}

            commentsImg = {commentIcon}
            commentsNumber = "158"
            retweetImg = {retweetIcon}
            retweetsNumber = "197"
            likesImg = {likeIcon}
            likesNumber = "556"
            viewsImg = {viewIcon}
            viewsNumber = "13 381"
          />
          <FirstComponents 
            profileImg = {aragorn}
            profileName = "Aragorn"
            profileNickname = "@son_of_arathorn"
            profilePostData = "6 Ечмір, 3021 Третього віку"

            textContent = "Ах, мої любі друзі, ви точно маєте рацію! Але давайте не будемо забувати, як одного разу Леголас прийняв лося за страшного ворога, а потім щедро вибачився перед істотою! 😂 І Гімлі, ваша нещасна зустріч із вуликом під час нашого подорож все ще викликає посмішку на моєму обличчі! 🐝"

            commentsImg = {commentIcon}
            commentsNumber = "213"
            retweetImg = {retweetIcon}
            retweetsNumber = "230"
            likesImg = {likeIcon}
            likesNumber = "598"
            viewsImg = {viewIcon}
            viewsNumber = "14 019"
          />


          <FirstComponents  
            profileImg = {gimli}
            profileName = "Gimli"
            profileNickname = "@son_of_gloin"
            profilePostData = "7 Ечмір, 3021 Третього віку"

            textContent = "Ах, Араґорне, ти, можливо, законний король Гондору, але не забуваймо той раз, коли ти спіткнувся об власний плащ під час Ради Елронда! Навіть Боромир не міг приховати свого задоволення! 😄 #GracefulKing #CloakTripping #FellowshipLaughs"

            commentsImg = {commentIcon}
            commentsNumber = "181"
            retweetImg = {retweetIcon}
            retweetsNumber = "149"
            likesImg = {likeIcon}
            likesNumber = "495"
            viewsImg = {viewIcon}
            viewsNumber = "12 372"
          />
          <FirstComponents 
            profileImg = {legolas}
            profileName = "Legolas"
            profileNickname = "@son_of_thranduil"
            profilePostData = "7 Ечмір, 3021 Третього віку"

            textContent = "Справді, Ґімлі! А як щодо того часу, коли Араґорн намагався вразити жінок Рохану своїми навичками верхової їзди, але опинився в багнюці? Еомер не втримався від сміху! 🐎 #RohanRidingFails #HorsebackOops #AragornTheMudskipper"

            commentsImg = {commentIcon}
            commentsNumber = "140"
            retweetImg = {retweetIcon}
            retweetsNumber = "179"
            likesImg = {likeIcon}
            likesNumber = "538"
            viewsImg = {viewIcon}
            viewsNumber = "13 128"
          />
          <FirstComponents 
            profileImg = {aragorn}
            profileName = "Aragorn"
            profileNickname = "@son_of_arathorn"
            profilePostData = "7 Ечмір, 3021 Третього віку"

            textContent = "Досить, друзі мої! Так, можливо, зі мною було кілька нещасних випадків на цьому шляху, але не забуваймо незабутній танець Ґімлі на бенкеті в Лотлорієні! Навіть Ґаладріель було важко зберігати прямий вигляд! 😂 А Леголас, ваша спроба заспівати в лісі була справжньою музичною пригодою! 🎶 #FellowshipFollies #HumorAndHeart #AdventuresTogether"

            commentsImg = {commentIcon}
            commentsNumber = "195"
            retweetImg = {retweetIcon}
            retweetsNumber = "227"
            likesImg = {likeIcon}
            likesNumber = "587"
            viewsImg = {viewIcon}
            viewsNumber = "13 829"
          />
          <FirstComponents 
            profileImg = {gandalf}
            profileName = "Ґандальф"
            profileNickname = "@mitrandir_of_white"
            profilePostData = "7 Ечмір, 3021 Третього віку"

            textContent = "Оповідання на віки, мій дорогий Гімлі, Леголасе та Араґорне! Чи пам’ятаєте ви той день, коли Гімлі, зачарований красою Лотлоріену, прийняв гілку дерева, що коливається, за ельфійську діву? Він підніс незграбний лук і щирий комплімент, перш ніж усвідомити свою помилку! 😄 А Леголасе, той раз, коли ти викликав пустотливу білку на поєдинок з лука, вважаючи, що це якийсь ельфійський шулер? Білка точно довела свою влучність! 🐿️ Щодо тебе, Арагорне, хто міг би забути той час, коли ти прийняли нешкідливого їжака за шпигуна орків і витягли свій меч у бойовій стойці? Їжак викривився, і ми добре посміялися! 😆 О, яка радість від наших ескапад у Середзем’ї! #ComedyOfErrors #AdventuresUnforgettable #MirthfulMoments"
            mediaContent = {gandalfLaughs}
            commentsImg = {commentIcon}
            commentsNumber = "235"
            retweetImg = {retweetIcon}
            retweetsNumber = "189"
            likesImg = {likeIcon}
            likesNumber = "526"
            viewsImg = {viewIcon}
            viewsNumber = "13 545"
          />


          <FirstComponents  
            profileImg = {gimli}
            profileName = "Gimli"
            profileNickname = "@son_of_gloin"
            profilePostData = "8 Ечмір, 3021 Третього віку"

            textContent = "Слухайте, Леголас і Арагорн, ви не повірите, що Гендальф зробив в Рівенделлі! Він помилково вважав дзеркало пана Ельронда за портал і намагався крокнути в нього, думаючи, що це якийсь коротший шлях до Лотлорієни! Леді Галадріель м'яко розвеселила його. ))) #GandalfsMirrorMisadventure #WizardInWonderland #ElvenLaughter"

            commentsImg = {commentIcon}
            commentsNumber = "197"
            retweetImg = {retweetIcon}
            retweetsNumber = "151"
            likesImg = {likeIcon}
            likesNumber = "507"
            viewsImg = {viewIcon}
            viewsNumber = "12 645"
          />
          <FirstComponents 
            profileImg = {legolas}
            profileName = "Legolas"
            profileNickname = "@son_of_thranduil"
            profilePostData = "8 Ечмір, 3021 Третього віку"

            textContent = "Ха! Це безцінно, Гімлі! Але дозвольте мені розповісти про той час, коли Гендальф намагався навчити хоббітів танцювати, як ельфи. Він почав вертітися і стрибати, але виглядало це більше як незграбний танок тролів! Фродо ледь не впав зі стільця від сміху! 🕺🧙‍♂️ #GandalfsElvenDanceClass #HobbitsInStitches #AwkwardWizardMoves"
            mediaContent = {gandalfDancing}

            commentsImg = {commentIcon}
            commentsNumber = "147"
            retweetImg = {retweetIcon}
            retweetsNumber = "180"
            likesImg = {likeIcon}
            likesNumber = "543"
            viewsImg = {viewIcon}
            viewsNumber = "13 342"
          />
          <FirstComponents 
            profileImg = {aragorn}
            profileName = "Aragorn"
            profileNickname = "@son_of_arathorn"
            profilePostData = "8 Ечмір, 3021 Третього віку"

            textContent = "Ах, це легендарні оповідання, мої друзі! Але дозвольте мені згадати час, коли Гендальф вирішив вразити Орлів своїм феєричним шоу. Він не знав, що Орли не дуже люблять гучні вибухи, і вони розлетілися, як листя на вітрі! 😅 #GandalfsEagleFireworks #WizardsAndFeatheredFriends #FireworksFiasco"

            commentsImg = {commentIcon}
            commentsNumber = "208"
            retweetImg = {retweetIcon}
            retweetsNumber = "232"
            likesImg = {likeIcon}
            likesNumber = "603"
            viewsImg = {viewIcon}
            viewsNumber = "14 101"
          />
          <FirstComponents 
            profileImg = {gandalf}
            profileName = "Ґандальф"
            profileNickname = "@mitrandir_of_white"
            profilePostData = "8 Ечмір, 3021 Третього віку"

            textContent = "Ах, мої дорогі спутники, це правда, у мене було декілька комічних моментів. Але пам'ятайте, сміх - це ліки для серця, і кожна оповідь розфарбовує наш пригодницький мозаїчний шлях. Продовжуймо цінувати ці спогади на нашій великій подорожі! 🌈😄 #ComedyInCompany #FellowshipOfLaughs #MirthfulMoments"
            mediaContent = {gandalfSmile}
            
            commentsImg = {commentIcon}
            commentsNumber = "210"
            retweetImg = {retweetIcon}
            retweetsNumber = "208"
            likesImg = {likeIcon}
            likesNumber = "582"
            viewsImg = {viewIcon}
            viewsNumber = "14 312"
          />
        </main>
      
        <div class="right-sidebar">
          <div className="right-sidebar-content">
            <h2>Популярне</h2>
            <div className="popular">
              <p>Культура хоббітів</p>
              <p>#DwarfVsElfChallenge</p>
              <p>#AragornFail </p>
              <p>Пригоди хоббітів</p>
              <p>#DwarfVsElf</p>
              <p>Таємниці Середзем'я</p>
              <p>#MiddleEarthHeroes</p>
              <p>#ComedyInCompany </p>
              <p>#MiddleEarthAdventures </p>
              <p>Таємниці Середзем'я</p>
              <p>Пригоди хоббітів</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


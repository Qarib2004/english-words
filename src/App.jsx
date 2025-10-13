import React, { useState } from 'react';
import { RotateCcw, ChevronRight, ChevronLeft } from 'lucide-react';

const App = () => {
  const shuffleArray = (array) => {
    const shuffled = [...array]; 
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  const topicsData = {
    'A1-Fruits': [
      { en: 'fruit', phonetic: 'fruːt', az: 'meyvə' },
      { en: 'apple', phonetic: 'ˈæp(ə)l', az: 'alma' },
      { en: 'pear', phonetic: 'peər', az: 'armud' },
      { en: 'orange', phonetic: 'ˈɒrɪndʒ', az: 'portağal' },
      { en: 'mandarin', phonetic: 'ˈmændərɪn', az: 'mandalin' },
      { en: 'tangerine', phonetic: 'ˌtændʒəˈriːn', az: 'mandalin, naringi' },
      { en: 'grapefruit', phonetic: 'ˈɡreɪpfruːt', az: 'qreypfrut' },
      { en: 'lemon', phonetic: 'ˈlemən', az: 'limon' },
      { en: 'lime', phonetic: 'laɪm', az: 'yaşıl limon' },
      { en: 'pomegranate', phonetic: 'ˈpɒmɪˌɡrænət', az: 'nar' },
      { en: 'quince', phonetic: 'kwɪns', az: 'heyva' },
      { en: 'pineapple', phonetic: 'ˈpaɪnˌæp(ə)l', az: 'ananas' },
      { en: 'peach', phonetic: 'piːtʃ', az: 'şaftalı' },
      { en: 'plum', phonetic: 'plʌm', az: 'gavalı' },
      { en: 'apricot', phonetic: 'ˈeɪprɪˌkɒt', az: 'ərik' },
      { en: 'fig', phonetic: 'fɪɡ', az: 'əncil' },
      { en: 'date', phonetic: '', az: 'xurma' },
      { en: 'banana', phonetic: 'bəˈnɑːnə', az: 'banan' },
      { en: 'a bunch of bananas', phonetic: '', az: 'bir salxım banan' },
      { en: 'kiwi', phonetic: 'ˈkiːwiː', az: 'kivi' },
      { en: 'grape', phonetic: 'ɡreɪp', az: 'üzüm' },
      { en: 'berry', phonetic: 'ˈberi', az: 'giləmeyvə' },
      { en: 'blueberry', phonetic: 'ˈbluːb(ə)ri', az: 'qaragilə' },
      { en: 'blackberry', phonetic: 'ˈblækbəri', az: 'böyürtkən' },
      { en: 'raspberry', phonetic: 'ˈrɑːzbəri', az: 'moruq' },
      { en: '(white) mulberry', phonetic: 'ˈwaɪtb(ə)ri', az: 'tut' },
      { en: 'strawberry', phonetic: 'ˈstrɔːb(ə)ri', az: 'çiyələk' },
      { en: 'currant', phonetic: 'ˈkʌrənt', az: 'qarağat' },
      { en: 'red currant', phonetic: 'red ˈkʌrənt', az: 'qırmızı qarağat' },
      { en: 'cherry', phonetic: 'ˈtʃeri', az: 'gilas' },
      { en: 'cornel', phonetic: '', az: 'zoğal' },
      { en: 'melon', phonetic: 'ˈmelən', az: 'yemiş, qovun' },
      { en: 'watermelon', phonetic: 'ˈwɔːtə(r)ˌmelən', az: 'qarpız' },
      { en: 'coconut', phonetic: 'ˈkəʊkəˌnʌt', az: 'kokos, hind qozu' },
      { en: 'avocado', phonetic: 'ˌævəˈkɑːdəʊ', az: 'avocado' },
      { en: 'mango', phonetic: 'ˈmæŋɡəʊ', az: 'manqo' },
      { en: 'ripe banana', phonetic: 'raɪp bəˈnɑːnə', az: 'yetmişmiş banan' },
      { en: 'unripe banana', phonetic: 'ʌnˈraɪp bəˈnɑːnə', az: 'kal banan' },
      { en: 'rotten banana', phonetic: 'ˈrɒtən bəˈnɑːnə', az: 'çürümüş banan' },
      { en: 'peel', phonetic: 'piːl', az: 'soymak, qabıq' },
      { en: 'almond', phonetic: 'ˈɑːmənd', az: 'badam' },
      { en: 'walnut', phonetic: 'ˈwɔːlnʌt', az: 'qoz' },
      { en: 'nut', phonetic: 'nʌt', az: 'fındıq' },
      { en: 'chestnut', phonetic: 'ˈtʃesnʌt', az: 'şabalıd' },
      { en: 'raisin', phonetic: 'ˈreɪzən', az: 'kişmiş' },
      { en: 'prune', phonetic: 'pruːn', az: 'gavalı qurusu' },
      { en: 'persimmon', phonetic: 'pʌsɪmən', az: 'kaki (karalyok)' },
    ],
    'A1-Weather': [
      { en: 'sun', phonetic: 'sʌn', az: 'günəş' },
      { en: 'rain', phonetic: 'reɪn', az: 'yağış' },
      { en: 'cloud', phonetic: 'klaʊd', az: 'bulud' },
      { en: 'lightning', phonetic: 'ˈlaɪtnɪŋ', az: 'şimşək' },
      { en: 'thunder', phonetic: 'ˈθʌndə(r)', az: 'gurultu' },
      { en: 'wind', phonetic: 'wɪnd', az: 'külək' },
      { en: 'fog', phonetic: 'fɒɡ', az: 'duman' },
      { en: 'snow', phonetic: 'snəʊ', az: 'qar' },
      { en: 'sunny', phonetic: 'ˈsʌni', az: 'günəşli' },
      { en: 'rainy', phonetic: 'ˈreɪni', az: 'yağışlı' },
      { en: 'windy', phonetic: 'ˈwɪndi', az: 'küləkli' },
      { en: 'cloudy', phonetic: 'ˈklaʊdi', az: 'buludlu' },
      { en: 'snowy', phonetic: 'ˈsnəʊi', az: 'qarlı' },
      { en: 'foggy', phonetic: 'ˈfɒɡi', az: 'dumanlı' },
      { en: 'thundery', phonetic: 'ˈθʌndəri', az: 'ildırımlı' },
      { en: 'hot', phonetic: 'hɒt', az: 'isti' },
      { en: 'cold', phonetic: 'kəʊld', az: 'soyuq' },
      { en: 'cool', phonetic: 'kuːl', az: 'sərin' },
      { en: 'mild', phonetic: 'maɪld', az: 'mülayim' },
      { en: 'degree', phonetic: 'dɪˈɡriː', az: 'dərəcə' },
      { en: 'dry', phonetic: 'draɪ', az: 'quru' },
      { en: 'wet', phonetic: 'wet', az: 'yaş' },
      { en: 'hurricane', phonetic: 'ˈhʌrɪkən', az: 'tufan' },
      { en: 'storm', phonetic: 'stɔː(r)m', az: 'qasırğa' },
      { en: 'shining', phonetic: 'ˈʃaɪnɪŋ', az: 'parlaq' },
      { en: 'lovely', phonetic: 'ˈlʌvli', az: 'sevimli' },
      { en: 'horrible', phonetic: 'ˈhɒrəb(ə)l', az: 'qorxunc' },
      { en: 'warm', phonetic: 'wɔː(r)m', az: 'ilıq' },
      { en: 'forecast', phonetic: 'ˈfɔːkɑːst', az: 'proqnoz' },
      { en: 'drizzle', phonetic: 'ˈdrɪzl', az: 'çiskin' },
      { en: 'shower', phonetic: 'ˈʃaʊə(r)', az: 'leysan' },
      { en: 'thunderstorm', phonetic: 'ˈθʌndəstɔːm', az: 'ildırım fırtınası' },
      { en: 'hail', phonetic: 'heɪl', az: 'dolu' },
      { en: 'drought', phonetic: 'draʊt', az: 'quraqlıq' },
      { en: 'dew', phonetic: 'djuː', az: 'şeh' },
      { en: 'rainbow', phonetic: 'ˈreɪnbəʊ', az: 'göy qurşağı' },
      { en: 'flood', phonetic: 'flʌd', az: 'daşqın' },
      { en: 'breezy', phonetic: 'ˈbriːzi', az: 'zəif küləkli' },
      { en: 'chilly', phonetic: 'ˈtʃɪli', az: 'sərin' },
      { en: 'frigid', phonetic: 'ˈfrɪdʒɪd', az: 'çox soyuq' },
      { en: 'scorching', phonetic: 'ˈskɔːtʃɪŋ', az: 'qızmar' },
    ],
    'A1-Feelings': [
      { en: 'confident (about)', phonetic: 'ˈkɒnfɪd(ə)nt', az: 'inamlı, arxayın' },
      { en: 'shy', phonetic: 'ʃaɪ', az: 'utancaq' },
      { en: 'embarrassed (about / by)', phonetic: 'ɪmˈbærəst', az: 'xəcalətli' },
      { en: 'excited (about)', phonetic: 'ɪkˈsaɪtɪd', az: 'həyəcanlı' },
      { en: 'worried (about)', phonetic: 'ˈwʌrid', az: 'narahat, nigaran, təşvişli' },
      { en: 'relaxed', phonetic: 'rɪˈlækst', az: 'rahat' },
      { en: 'comfortable', phonetic: 'ˈkʌmftəb(ə)l', az: 'rahat' },
      { en: 'uncomfortable', phonetic: 'ʌnˈkʌmftəb(ə)l', az: 'narahat, rahat olmayan' },
      { en: 'full', phonetic: 'fʊl', az: 'tox, doymuş' },
      { en: 'nervous', phonetic: 'ˈnɜː(r)vəs', az: 'gərgin, əsəbi' },
      { en: 'calm', phonetic: 'kɑːm', az: 'sakit, dinc' },
      { en: 'patient', phonetic: 'ˈpeɪʃ(ə)nt', az: 'səbirli, hövsələli, taqətli, dözümlü' },
      { en: 'impatient', phonetic: 'ɪmˈpeɪʃ(ə)nt', az: 'səbirsiz, hövsələsiz, taqətsiz, dözümsüz' },
      { en: 'sad', phonetic: 'sæd', az: 'qəmgin' },
      { en: 'upset', phonetic: 'ʌpˈset', az: 'dilxor' },
      { en: 'fed up (with)', phonetic: 'fed ʌp', az: 'bezmiş, usanmış, boğaza yığılmış' },
      { en: 'sleepy', phonetic: 'ˈsliːpi', az: 'yuxulu' },
      { en: 'in pain', phonetic: 'ɪn peɪn', az: 'ağrı içində' },
      { en: 'sick / ill', phonetic: 'sɪk / ɪl', az: 'xəstə' },
      { en: 'hurt', phonetic: 'hɜː(r)t', az: 'incimiş' },
      { en: 'lonely', phonetic: 'ˈləʊnli', az: 'yalnız' },
      { en: 'in love', phonetic: 'ɪn lʌv', az: 'aşiq, vurulmuş' },
      { en: 'jealous', phonetic: 'dʒɛləs', az: 'qısqanc' },
      { en: 'proud', phonetic: 'praʊd', az: 'qürurlu, iftixarlı, məğrur' },
      { en: 'confused', phonetic: 'kənˈfjuːzd', az: 'fikri qarışmış, çaşqın, şaşqın' },
      { en: 'in a good / bad mood', phonetic: '', az: 'kefi saz olan, kefi yaxşı olan, şən / kefi pis olan, kefsiz' },
      { en: 'love', phonetic: 'lʌv', az: 'sevmək' },
      { en: 'like', phonetic: 'laɪk', az: 'bəyənmək' },
      { en: 'hate', phonetic: 'heɪt', az: 'nifrət etmək' },
      { en: 'prefer', phonetic: 'prɪˈfɜː(r)', az: 'üstün tutmaq, üstünlük vermək' },
      { en: 'hope', phonetic: 'həʊp', az: 'ümüd etmək' },
      { en: 'want', phonetic: 'wɒnt', az: 'istəmək' },
      { en: 'adore', phonetic: 'əˈdɔː(r)', az: 'heyran olmaq' },
      { en: 'admire', phonetic: 'ədˈmaɪə(r)', az: 'heyran olmaq' },
      { en: 'tired', phonetic: 'tʌɪəd', az: 'yorğun' },
      { en: 'scared', phonetic: 'skɛːd', az: 'qorxmuş' },
      { en: 'confused', phonetic: 'kənˈfjuːzd', az: 'qarışıq, çaşqın' },
      { en: 'bored', phonetic: 'bɔːd', az: 'canısıxılmış' },
      { en: 'annoyed', phonetic: 'əˈnɔɪd', az: 'qıcıqlanmış' },
      { en: 'irritated', phonetic: 'ɪrɪteɪtɪd', az: 'qıcıqlanmış' },
      { en: 'anxious', phonetic: 'aŋ(k)ʃəs', az: 'narahat, həyəcanlı' },
    ],
    'A1-Shopping': [
      { en: 'department', phonetic: 'dɪˈpɑː(r)tmənt', az: 'şöbə' },
      { en: 'newsagent', phonetic: 'ˈnjuːzˌeɪdʒ(ə)nt', az: 'köşk' },
      { en: 'gift shop', phonetic: 'ɡɪft ʃɒp', az: 'hədiyyə mağazası' },
      { en: 'bookshop', phonetic: 'ˈbʊkˌʃɒp', az: 'kitab mağazası' },
      { en: 'supermarket', phonetic: 'ˈsuːpə(r)ˌmɑː(r)kɪt', az: 'supermarket' },
      { en: 'toy', phonetic: 'tɔɪ', az: 'oyuncaq' },
      { en: 'beauty products', phonetic: 'ˈbjuːti ˈprɒdʌkt', az: 'gözəllik məhsulları' },
      { en: 'furniture', phonetic: 'ˈfɜː(r)nɪtʃə(r)', az: 'mebel' },
      { en: 'floor', phonetic: 'flɔː(r)', az: 'mərtəbə' },
      { en: 'basement', phonetic: 'ˈbeɪsmənt', az: 'baza' },
      { en: 'ground floor', phonetic: 'ɡraʊnd flɔː(r)', az: 'birinci mərtəbə' },
      { en: 'open', phonetic: 'ˈəʊpən', az: 'açmaq' },
      { en: 'close', phonetic: 'kləʊz', az: 'bağlamaq' },
      { en: 'pay', phonetic: 'peɪ', az: 'ödəmək' },
      { en: 'fee', phonetic: 'fiː', az: 'haqq' },
      { en: 'fare', phonetic: 'feə(r)', az: 'yol pulu' },
      { en: 'fine', phonetic: 'faɪn', az: 'cərimə' },
      { en: 'bill', phonetic: 'bɪl', az: 'hesab' },
      { en: 'check', phonetic: 'tʃek', az: 'yoxlamaq' },
      { en: 'refund', phonetic: 'ˈriːfʌnd', az: 'qalıq pul' },
      { en: 'change', phonetic: 'tʃeɪndʒ', az: 'xırda pul, dəyişmək' },
      { en: 'push', phonetic: 'pʊʃ', az: 'itələmək' },
      { en: 'pull', phonetic: 'pʊl', az: 'dartmaq' },
      { en: 'try on', phonetic: 'traɪ ɒn', az: 'geyimi yoxlamaq' },
      { en: 'colour', phonetic: 'ˈkʌlə(r)', az: 'rəng' },
      { en: 'size', phonetic: 'saɪz', az: 'ölçü' },
      { en: 'large', phonetic: 'lɑː(r)dʒ', az: 'geniş' },
      { en: 'medium', phonetic: 'ˈmiːdiəm', az: 'orta' },
      { en: 'small', phonetic: 'smɔːl', az: 'balaca' },
      { en: 'big', phonetic: 'bɪɡ', az: 'böyük' },
      { en: 'cost', phonetic: 'kɒst', az: 'dəyər' },
      { en: 'cheap', phonetic: 'tʃiːp', az: 'ucuz' },
      { en: 'expensive', phonetic: 'ɪkˈspensɪv', az: 'bahalı' },
      { en: 'credit card', phonetic: 'ˈkredɪt kɑː(r)d', az: 'kredit kartı' },
      { en: 'cash', phonetic: 'kæʃ', az: 'nəğd' },
      { en: 'note', phonetic: 'nəʊt', az: 'kağız pul' },
      { en: 'coin', phonetic: 'kɔɪn', az: 'qəpik' },
      { en: 'receipt', phonetic: 'rɪˈsiːt', az: 'qəbz' },
      { en: 'store', phonetic: 'stɔː', az: 'market' },
      { en: 'retail', phonetic: 'riːteɪl', az: 'pərakəndə satiş' },
      { en: 'wholesale', phonetic: 'həʊlseɪl', az: 'topdan satiş' },
      { en: 'sale', phonetic: 'seɪl', az: 'endirim' },
      { en: 'discount', phonetic: 'dɪskaʊnt', az: 'endirim' },
      { en: 'cart/trolley', phonetic: '', az: 'məhsulları daşımaq üçün araba' },
      { en: 'pharmacy', phonetic: 'fɑːməsi', az: 'aptek' },
      { en: 'window shopping', phonetic: '', az: 'vitrinə baxmaq' },
      { en: 'product', phonetic: 'prɒdʌkt', az: 'məhsul' },
    ],  
    'A1-Cinema': [
      { en: 'horror', phonetic: 'ˈhɒrə(r)', az: 'qorxulu' },
      { en: 'action', phonetic: 'ˈækʃ(ə)n', az: 'vuruşma' },
      { en: 'musical', phonetic: 'ˈmjuːzɪk(ə)l', az: 'musiqili' },
      { en: 'cartoon', phonetic: 'kɑː(r)ˈtuːn', az: 'cizgi filmi' },
      { en: 'comedy', phonetic: 'ˈkɒmədi', az: 'komediya' },
      { en: 'thriller', phonetic: 'ˈθrɪlə(r)', az: 'triller' },
      { en: 'science fiction', phonetic: 'ˈsaɪəns ˈfɪkʃ(ə)n', az: 'fantastika' },
      { en: 'romantic comedy', phonetic: 'rəʊˈmæntɪk ˈkɒmədi', az: 'romantik komediya' },
      { en: 'film star', phonetic: 'stɑː(r)', az: 'kino ulduzu fɪlm' },
      { en: 'director', phonetic: 'dəˈrektə(r) / daɪˈrektə(r)', az: 'rejissor' },
      { en: 'enjoy', phonetic: 'ɪnˈdʒɔɪ', az: 'əylənmək' },
      { en: 'boring', phonetic: 'ˈbɔːrɪŋ', az: 'darıxdırıcı' },
      { en: 'make a film', phonetic: 'meɪk ə fɪlm', az: 'film çəkmək' },
      { en: 'take photo', phonetic: 'teɪk ə ˈfəʊtəʊ', az: 'şəkil çəkmək' },
      { en: 'genre', phonetic: 'ʒɒnrə', az: 'janr' },
      { en: 'screen', phonetic: 'skriːn', az: 'ekran' },
      { en: 'ticket', phonetic: 'tɪkɪt', az: 'bilet' },
      { en: 'audience', phonetic: 'ɔːdɪəns', az: 'tamaşaçı' },
      { en: 'plot', phonetic: 'plɒt', az: 'sujet' },
      { en: 'cast', phonetic: 'kɑːst', az: 'aktyor heyyəti' },
      { en: 'scene', phonetic: 'siːn', az: 'səhnə' },
    ]      
  };

  const [currentView, setCurrentView] = useState('topics');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [mode, setMode] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const [shuffledVocabulary, setShuffledVocabulary] = useState([]);

  const vocabulary = shuffledVocabulary;

  const fullVocabulary = selectedTopic ? topicsData[selectedTopic] : [];

  const getRandomOptions = () => {
    const current = vocabulary[currentIndex];
    const allAnswers = fullVocabulary.map((v) => mode === 'en-az' ? v.az : v.en);
    const correctAnswer = mode === 'en-az' ? current.az : current.en;
    
    let options = [correctAnswer];
    while (options.length < 4) {
      const random = allAnswers[Math.floor(Math.random() * allAnswers.length)];
      if (!options.includes(random)) {
        options.push(random);
      }
    }
    
    return options.sort(() => Math.random() - 0.5);
  };
  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    setCurrentView('modes');
  };

  const handleStartQuiz = (selectedMode) => {
     const topicVocab = topicsData[selectedTopic];
     const newShuffledVocab = shuffleArray(topicVocab);
     
     setShuffledVocabulary(newShuffledVocab);
    setMode(selectedMode);
    setCurrentView('quiz');
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
  };

  const handleAnswer = (answer) => {
    if (answered) return;

    const current = vocabulary[currentIndex];
    const correct = mode === 'en-az' ? current.az : current.en;
    const isRight = answer === correct;

    setSelectedAnswer(answer);
    setIsCorrect(isRight);
    setAnswered(true);

    if (isRight) {
      setScore(score + 5);
    }
  };

  const handleNext = () => {
    if (currentIndex < vocabulary.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAnswered(false);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setCurrentView('results');
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleRestart = () => {
    setCurrentView('topics');
    setSelectedTopic(null);
    setMode(null);
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShuffledVocabulary([]); 
  };

  const handleBackToModes = () => {
    setCurrentView('modes');
    setMode(null);
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShuffledVocabulary([]); 
  };

  const handleBackToTopics = () => {
    setCurrentView('topics');
    setSelectedTopic(null);
    setMode(null);
    setCurrentIndex(0);
    setScore(0);
    setShuffledVocabulary([]); 
  };

  const current = vocabulary[currentIndex];
  const options = current ? getRandomOptions() : [];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {currentView === 'topics' && (
        <div className="min-h-screen px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">English Vocab</h1>
              <p className="text-gray-600">Choose a topic for training</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.keys(topicsData).map((topic) => (
                <button
                  key={topic}
                  onClick={() => handleSelectTopic(topic)}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-8 text-left hover:bg-blue-50"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{topic}</h2>
                  <p className="text-gray-600 mb-4">{topicsData[topic].length} words</p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <span>Start</span>
                    <ChevronRight size={20} className="ml-2" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {currentView === 'modes' && (
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="max-w-md w-full">
            <button
              onClick={handleBackToTopics}
              className="flex items-center text-blue-600 font-semibold mb-8 hover:text-blue-800"
            >
              <ChevronLeft size={20} />
              <span>Back</span>
            </button>

            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{selectedTopic}</h1>
              <p className="text-gray-600">Select a learning mode</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="space-y-3">
                  <button
                    onClick={() => handleStartQuiz('en-az')}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition flex items-center justify-between"
                  >
                    <span>English → Azerbaijani</span>
                    <ChevronRight size={20} />
                  </button>
                  <button
                    onClick={() => handleStartQuiz('az-en')}
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition flex items-center justify-between"
                  >
                    <span>Azerbaijani → English</span>
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentView === 'quiz' && (
        <div className="flex items-center justify-center min-h-screen px-4 py-8">
          <div className="max-w-2xl w-full">
            <button
              onClick={handleBackToModes}
              className="flex items-center text-blue-600 font-semibold mb-6 hover:text-blue-800"
            >
              <ChevronLeft size={20} />
              <span>Back</span>
            </button>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <div className="text-gray-700 font-semibold">
                  Question {currentIndex + 1}/{vocabulary.length}
                </div>
                <div className="text-2xl font-bold text-blue-600">{score} pts</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / vocabulary.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-4">
                  {mode === 'en-az' ? 'What is this in Azerbaijani?' : 'What is this in English?'}
                </p>
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-8 mb-6">
                  <p className="text-4xl font-bold text-gray-800 mb-2">
                    {mode === 'en-az' ? current.en : current.az}
                  </p>
                  {mode === 'en-az' && (
                    <p className="text-lg text-gray-500">{current.phonetic}</p>
                  )}
                </div>
              </div>

              <div className="space-y-3 mt-8">
                {options.map((option, index) => {
                  const correct = mode === 'en-az' ? current.az : current.en;
                  let buttonClass = 'bg-gray-100 hover:bg-gray-200 text-gray-800';

                  if (answered) {
                    if (option === correct) {
                      buttonClass = 'bg-green-500 text-white';
                    } else if (option === selectedAnswer && !isCorrect) {
                      buttonClass = 'bg-red-500 text-white';
                    } else {
                      buttonClass = 'bg-gray-100 text-gray-800';
                    }
                  } else if (selectedAnswer === option) {
                    buttonClass = 'bg-blue-500 text-white';
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      disabled={answered}
                      className={`w-full p-4 rounded-lg font-semibold transition ${buttonClass} ${
                        answered ? 'cursor-default' : 'cursor-pointer'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <div className={`mt-6 p-4 rounded-lg text-center font-semibold ${
                  isCorrect
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {isCorrect ? '✓ Correct! +5 points' : '✗ Incorrect'}
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleSkip}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-4 rounded-lg transition"
              >
                Skip
              </button>
              {answered && (
                <button
                  onClick={handleNext}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2"
                >
                  <span>Next</span>
                  <ChevronRight size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {currentView === 'results' && (
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Quiz Complete!</h2>
              
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-8 mb-8">
                <p className="text-gray-600 mb-2">Your Score</p>
                <p className="text-5xl font-bold text-blue-600 mb-2">{score}</p>
                <p className="text-gray-700">out of {vocabulary.length * 5} points</p>
                <p className="text-lg font-semibold text-gray-700 mt-4">
                  {Math.round((score / (vocabulary.length * 5)) * 100)}%
                </p>
              </div>

              <button
                onClick={handleRestart}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2"
              >
                <RotateCcw size={20} />
                Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
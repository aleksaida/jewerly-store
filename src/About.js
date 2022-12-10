import './App.css';
import all from './all.jfif';
import mail from './mail.png';
import telephone from './telephone.png';




function About (){

    return (
    <div>
    <div>
    <h1 className='header'>О магазине</h1>   
    </div>

    <div className='containerAbout'>
      <img className='imgAbout' src={ all } alt="foto"/>
      <p className='text'>Наша компания стремится создавать ювелирные изделия, которые дарят ощущение красоты, эстетики и вкус жизни каждую минуту – на работе, в окружении семьи и друзей, на прогулке с детьми. Эстетика окружающих вещей добавляет красок в повседневность. Это секретный ингредиент, без которого жизнь кажется пресной. Мы поможем увидеть изящное в повседневном, посмотреть на мир через чувственное восприятие. Наш ювелирный дом видит миссию в том, чтобы каждый день дарить клиентам красоту и гармонию, начиная с дизайна украшений и заканчивая визуальным оформлением упаковки. Верим, что наши изделия придадут изящества и блеска даже самым будничным моментам жизни.</p>
    </div>

    
    <div className='contactContainer'>

    <div className='mailNumber'>
    <h2>Рады ответить на ваши вопросы</h2>
    <a className='number' href="tel:8800111111111"><span><img src={telephone} width="30px" alt='tel'/></span>8800111111111</a>
    <a className='mail' href="mailto:madambigu@gmail.com"><span><img src={mail} width="30px" alt='mail'/></span>madambigu@gmail.com</a>
    </div>

    <div className='mailNumber'>         
    <h3>Время работы:</h3>
    <p className='workTime'>Понедельник-Пятница 9:00 - 21:00</p>
    <p className='workTime'>Суббота-Воскресенье 9:00 - 18:00</p>
    </div>  

    
    </div>
    <hr></hr>
    
    </div>
  
    )
   
}

export default About;
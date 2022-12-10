import './App.css';
import deli from './deli.png';
import pay from './pay.png';
import chek from './chek.png';


function Contact (){

    return (<div>

    <div>
    <h1 className='header'>Доставка и оплата</h1>   
    </div>
    <div className='payContainer'>

    <div className='ulContainer'>
        <h3>ДОСТАВКА ПО МОСКВЕ И МО</h3>
        <ul>            
        <li><span><img src={deli} width="30px" alt="deli"></img></span>Доставка осуществляется в течение 1-3 рабочих дней со дня оформления заказа.</li>
        <li><span><img src={deli} width="30px" alt="deli"></img></span>Доставка за МКАД осуществляется при 100% оплате заказа на сайте.</li>
        <li><span><img src={pay} width="30px" alt="pay"></img></span>Стоимость доставки по Москве в пределах МКАД - 440 рублей.</li>
        <li><span><img src={pay} width="30px" alt="pay"></img></span>При заказе от 10.000 рублей - доставка БЕСПЛАТНАЯ! (ТОЛЬКО В ПРЕДЕЛАХ МКАДа)</li>
        </ul>
    </div>

    <div className='ulContainer'>
        <h3>ДОСТАВКА ПО РОССИИ</h3>
        <ul>
        <li><span><img src={deli} width="30px" alt="deli"></img></span>Доставка осуществляется при 100% оплате заказа транспортной компанией.</li>
        <li><span><img src={deli} width="30px" alt="deli"></img></span>Срок доставки в города России 4-7 рабочих дней.</li>
        <li><span><img src={pay} width="30px" alt="pay"></img></span>Стоимость доставки рассчитывается автоматически при оформлении заказа.</li>
        <li><span><img src={chek} width="30px" alt="chek"></img></span>Срок сбора заказа 1 рабочий день, не считая дня оформления заказа.</li>
        <li><span><img src={chek} width="30px" alt="chek"></img></span>При оформлении заказа в выходные и праздничные дни - отправка осуществляется в ближайший рабочий день.</li>
          
        </ul>
    </div>
    </div>

<hr></hr>

    </div>
    
)   
}

export default Contact;






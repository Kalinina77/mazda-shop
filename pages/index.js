import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from 'react-player';
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mazda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Carousel autoPlay infiniteLoop interval={5000}>
          <div>
            <img src="/auto/1.jpg" />
            <p className="legend">Mazda CX-5</p>
          </div>
          <div>
            <img src="/auto/main.jpg" />
            <p className="legend">Mazda CX-30</p>
          </div>
          <div>
            <img src="/auto/gh.jpg" />
            <p className="legend">Mazda</p>
          </div>
          <div>
            <img src="/auto/2.jpg" />
            <p className="legend">Mazda CX-5</p>
          </div>
          <div>
            <img src="/auto/range.jpg" />
            <p className="legend">Mazda</p>
          </div>
        </Carousel>
        <div className="hh">
          <h2>БЕСКОНЕЧНЫЙ ПРОГРЕСС</h2>
          <h4>
            Создавая новую Mazda, мы никогда не делаем кардинальных перемен, но
            всегда вносим заметные и важные изменения. Каждое обновление модели
            – это развитие лучших ее качеств. Поэтому обновление любой модели
            Mazda – это не революция. Это эволюция. Прогресс от лучшего к
            превосходному.
          </h4>
        </div>
        <div className="VideoMain">
          <h3>ПУСТЬ ВСЕ БУДЕТ ПО-ВАШЕМУ</h3>
           <ReactPlayer className="Vv" url="https://www.mazda.ru/globalassets/test-images/04_configurator_promo1280x720px.mp4" width={1500}
        height={800}      loop = {true} playing/>
        </div> 
    
        <div>
          <img className="MainImgmin" src="/auto/af.jpg" />
          <h4 className="hh">
            30 января 2020 года Mazda празднует свой столетний юбилей. Узнайте
            больше о легендарных автомобилях и людях, их создавших. Поделитесь
            своей историей с Mazda и познакомьтесь с историями других
            владельцев.
          </h4>
          <div className="ContBtn">
            <button className="btnkk "  onClick={() => "/shop"}>Стать диллером</button>
          </div>
         
        </div>
        <div class="imageM">
        <img src="/auto/as.png" />
        <h10>ПУСТЬ ВСЕ БУДЕТ ПО-ВАШЕМУ<br />Создайте свой идеальный автомобиль из огромного набора опций Mazda.</h10>
      
        </div>
        <div className="imgg" className="scale" >
        <a href="https://www.mazda.ru/globalassets/-/1/mazda-cx-9-imp4/cx9_ipm4_brochure_rus_v2_web_ipad_03.2021.pdf">
         <img  src="/auto/r.jpg" />
        <img  src="/auto/rr.png" /></a>
        
        </div>


      </main>
    </div>
  );
}

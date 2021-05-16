import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <h2 className="Footer__Title">Контакты</h2>
        <p> Телефон: +7(976) 543 47 55</p>
        <p>Mazda@mazda.com</p>
        <p> Москва, Олимпийсикй пр. 81</p>
      </div>
      <div>
      <h2 className="Footer__Title">Следите за нами</h2>
        <a className="a" href  = "https://vk.com/mazda"> VКонтакте </a>
        <p></p>
        <a className="a" href = "https://www.instagram.com/mazda_russia/?hl=ru"> Instagram</a>
        <p> Москва, Олимпийсикй пр. 81</p>
      </div>
    </div>
  );
};

export default Footer;

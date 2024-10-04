import React from "react";

export default function Bio({ shouldShowPresentation }) {
  return (
      <main>
        <div className='presentation'>
          <p className="biowelcome">Добро пожаловать на страницу Биографии!</p>
          <section className="tara">
            <div className="container">
              <p className="first__subtitle">Биография</p>
              <h2 className="tara__title">Тара</h2>
              <p className="tara__desc">
                <i> «Карты Тары предрекают тебе суровые испытания!  Но не волнуйся, у неё полно волшебных талисманов, которые она готова продать по выгодной цене.»</i>
              </p>
              <div className="tara__post">
                  <img src="/img/taracardbio.webp" alt="" />
                  <div className="tara__right">
                    <p className="tara__text">
                      Тара (англ. Tara) — мифический боец класса «Урон-классУрон».<br /> Её можно получить за 1900 кредитов на Дороге Старр. 
                    </p>
                    <div className="student__info">
                      <div className="student__info-item">
                        <img src="/img/nazik.jpg" alt="" />
                        <p className="student__name">
                          Nazik
                          <p className="student__work">Student</p>
                        </p>
                      </div>
                      <p className="student__date">October 04, 2024</p>
                    </div>
                  </div>
              </div>
            </div>
          </section>
        </div>
      </main>
  );
}

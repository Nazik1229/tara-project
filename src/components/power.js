import React, { Component } from 'react';

export class Power extends Component {
  state = {
    visibleAccordions: [false, false], 
  };

  toggleVisibility = (index) => {
    this.setState(prevState => {
      const newVisibleAccordions = [...prevState.visibleAccordions];
      newVisibleAccordions[index] = !newVisibleAccordions[index]; 
      return { visibleAccordions: newVisibleAccordions };
    });
  };

  render() {
    const { visibleAccordions } = this.state;

    return (
        <div className='container2'>
            <div className='container1'>
                <h1>Основные атаки</h1>
                <hr></hr>
                <div className="accordion">
                    <div className="accordion-header" onClick={() => this.toggleVisibility(0)}>
                        <span className="accordion-title">Атака: Три карты таро</span>
                        <span className={`accordion-arrow ${visibleAccordions[0] ? "open" : ""}`}>➤</span>
                    </div>
                    <div className={`animated-box ${visibleAccordions[0] ? "visible" : ""}`}>
                        <i>«Небрежное движение руки, и три карты таро пронзают врагов. Вот это ловкость!»</i>
                        <div className='tara__post1'>
                            <img className='tara__atack' src="/img/firstatack.webp" alt="TaraAtack" />
                            <div className="tara__right">
                                <p className="tara__text">
                                    Тара одновременно выбрасывает три карты, способные проходить сквозь бойцов.<br/>Атака имеет средний радиус действия, большую дальность и небольшой разброс. <br />Одна карта наносит мало урона, из-за чего атака Тары более эффективна вблизи, так как в этом случае все снаряды попадают во врага.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="accordion">
                    <div className="accordion-header" onClick={() => this.toggleVisibility(1)}>
                        <span className="accordion-title">Супер: Притяжение</span>
                        <span className={`accordion-arrow ${visibleAccordions[1] ? "open" : ""}`}>➤</span>
                    </div>
                    <div className={`animated-box ${visibleAccordions[1] ? "visible" : ""}`}>
                        <i>«Тара колдовством создаёт гравитационный колодец. Попавшие в зону действия враги сталкиваются друг с другом, испытывая мучительную боль.»</i>
                        <div className='tara__post1'>
                            <img src="/img/supertara.webp" alt="TaraAtack" />
                            <div className="tara__right">
                                <p className="tara__text">
                                    Тара бросает карту, которая в несколько мгновений становится чёрной дырой, притягивающей врагов на небольшой территории. Через короткое время она взорвётся, нанеся умеренный урон всем врагам, оказавшимся в диапазоне взрыва, при этом оглушив их на некоторое время.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Усиления</h2>
                <hr></hr>

                <div className="accordion">
                    <div className="accordion-header" onClick={() => this.toggleVisibility(2)}>
                        <div className='accordion-right'>
                            <img src='/img/eye.webp' alt=''/>
                            <span className="accordion-title">Гаджет: Хрустальный шар</span>
                        </div>
                        <span className={`accordion-arrow ${visibleAccordions[2] ? "open" : ""}`}>➤</span>
                    </div>
                    <div className={`animated-box ${visibleAccordions[2] ? "visible" : ""}`}>
                        <i>««В течение 4 с. Тара и её союзники видят всех врагов — даже тех, кто в кустах. Зарядов на матч: 3.»</i>
                        <div className='tara__post1'>
                            <div className="tara__right">
                                <p className="tara__text">
                                Тара и её союзники получают на 4 секунды возможность видеть абсолютно всех противников, даже если они спрятаны в кустах или в Суперах Сэнди, Леона. Если вражеская Тара использует этот гаджет в данный момент — вы услышите звук и рядом с вашим показателем здоровья появится глаз.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div className="accordion-header" onClick={() => this.toggleVisibility(3)}>
                        <div className='accordion-right'>
                            <img src='/img/ghosts.webp' alt=''/>
                            <span className="accordion-title">Гаджет: Потусторонняя поддержка</span>
                        </div>
                        <span className={`accordion-arrow ${visibleAccordions[3] ? "open" : ""}`}>➤</span>
                    </div>
                    <div className={`animated-box ${visibleAccordions[3] ? "visible" : ""}`}>
                        <i>«Возле Тары появляется три слабых призрака, которые атакуют её противников и исчезают через 6 с. Зарядов на матч: 3.»</i>
                        <div className='tara__post1'>
                            <div className="tara__right">
                                <p className="tara__text">
                                Вокруг Тары появляются три тёмных клона (как от Звёздных сил), имеющих по очков здоровья каждый. Они наносят по единиц урона за удар. Спустя 6 секунд клоны исчезают. Способность наиболее эффективна в Ограблении, ведь клоны, атакуя втроём, могут отнять много здоровья у вражеского сейфа.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div className="accordion-header" onClick={() => this.toggleVisibility(4)}>
                        <div className='accordion-right'>
                            <img src='/img/starpower1.webp' alt=''/>
                            <span className="accordion-title">Звёздная сила: Чёрный портал</span>
                        </div>
                        <span className={`accordion-arrow ${visibleAccordions[4] ? "open" : ""}`}>➤</span>
                    </div>
                    <div className={`animated-box ${visibleAccordions[4 ] ? "visible" : ""}`}>
                        <i>«Супер Тары открывает пространственный портал, из которого появляется готовый к сражению с врагами теневой клон Тары.»</i>
                        <div className='tara__post1'>
                            <div className="tara__right">
                                <p className="tara__text">
                                    Когда Тара использует Супер, из чёрной дыры появляется тёмный клон. Он имеет здоровья и наносит урона в ближнем бою с высокой скоростью удара. Несмотря на низкий урон, клон может являться серьёзной угрозой для вражеских бойцов. Используется данная Звёздная сила чаще всего на картах где много кустов, ведь тёмный клон способен видеть противников везде, как и медведь Ниты.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div className="accordion-header" onClick={() => this.toggleVisibility(5)}>
                        <div className='accordion-right'>
                            <img src='/img/starpower2.webp' alt=''/>
                            <span className="accordion-title"> Звёздная сила: Исцеляющая тень</span>
                        </div>
                        <span className={`accordion-arrow ${visibleAccordions[5] ? "open" : ""}`}>➤</span>
                    </div>
                    <div className={`animated-box ${visibleAccordions[5] ? "visible" : ""}`}>
                        <i>«Супер Тары открывает пространственный портал, из которого появляется теневой клон Тары, лечащий её саму и её союзников.»</i>
                        <div className='tara__post1'>
                            <div className="tara__right">
                                <p className="tara__text">
                                    Эффект второй Звёздной силы похож на эффект первой, только в данном случае клон не атакует врагов, а лечит союзников Тары или её саму на единиц здоровья в секунду. Имеет очк. здоровья. Если никого нет рядом, клон будет бежать к ближайшему союзнику. Обратите внимание, что тень исцеляет того товарища по команде, который ближе всего к ней, а не того, у кого меньше всего здоровья. Также он, разумеется, не наносит никакого урона и имеет меньший запас здоровья, чем атакующий теневой клон. Эта Звёздная сила даёт вашей команде хорошее преимущество (если клон будет долго оставаться в живых).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div className="accordion-header" onClick={() => this.toggleVisibility(6)}>
                        <div className='accordion-right'>
                            <img src='/img/hypercharge.webp' alt=''/>
                            <span className="accordion-title">Гиперзаряд: Сверхмассивная чёрная дыра</span>
                        </div>
                        <span className={`accordion-arrow ${visibleAccordions[6] ? "open" : ""}`}>➤</span>
                    </div>
                    <div className={`animated-box ${visibleAccordions[6] ? "visible" : ""}`}>
                        <i>«Гравитационный колодец становится на 20% больше»</i>
                        <div className='tara__post1'>
                            <div className="tara__right">
                                <p className="tara__text">
                                    Активировав этот Гиперзаряд, скорость Тары увеличивается на 24%, урон на 25%, а также она получает щит, блокирующий 5% входящего урона. Пока Гиперзаряд активен, радиус её Супера расширяется на 20%.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className='paddingend'>padding</p>

            </div>
        </div>
      );
    }
}
  


export default Power;


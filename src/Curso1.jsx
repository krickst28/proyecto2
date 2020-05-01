import React from 'react'


const Curso1 = () => (

<article className="card">
  <div className="img-container s-ratio-4-3 s-radius-tr s-radius-tl">
    <img src="https://playcodeacademy.com/wp-content/uploads/2016/07/logo-scratch.png" alt="curso1" />
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="t5 s-mb-2 s-center">
      Aprendiendo a programar mediante Scratch
    </h3>
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src="https://previews.123rf.com/images/yupiramos/yupiramos1711/yupiramos171108094/89817780-dise%C3%B1o-de-ilustraci%C3%B3n-de-vector-de-profesor-de-avatar-masculino-maestro.jpg" alt="jose" />
          </div>
        </div>
        <span className="small">Jose Tanta</span>
      </div>
    </div>
    <div className="s-main-center">
      <a className="button--ghost-alert button--tiny" href="https://www.app.playtecedu.com/">S/. 60 Soles</a>
    </div>
  </div>
</article>

)

export default Curso1
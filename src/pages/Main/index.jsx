import { Link } from "react-router-dom";
import { useState } from "react";

export const Main = () => {

    return (
    <nav>
    <div className="sidebar-top">
      <span className="shrink-btn">
        <i className='bx bx-chevron-left'></i>
      </span>
      
      <h3 className="hide">ENIAC </h3>
    </div>

    <div className="search">
      <i className='bx bx-search'></i>
      <input type="text" className="hide" placeholder="Pesquisar ..."/>
    </div>

    <div className="sidebar-links">
      <ul>
        <div className="active-tab"></div>
        <li className="tooltip-element" data-tooltip="0">
          <Link href="#" className="active" data-active="0">
            <div className="icon">
              <i className='bx bx-tachometer'></i>
              <i className='bx bxs-tachometer'></i>
            </div>
            <span className="link hide">Inicio</span>
          </Link>
        </li>
        <li className="tooltip-element" data-tooltip="1">
          <Link href="#" data-active="1">
            <div className="icon">
              <i className='bx bx-calendar'></i>
              <i className='bx bxs-calendar'></i>
            </div>
            <span className="link hide">Calendário</span>
          </Link>
        </li>
        <li className="tooltip-element" data-tooltip="2">
          <Link href="#" data-active="2">
            <div className="icon">
              <i className='bx bx-briefcase-alt'></i>
              <i className='bx bxs-briefcase-alt'></i>
            </div>
            <span className="link hide">Proposta de TCC</span>
          </Link>
        </li>
        <li className="tooltip-element" data-tooltip="3">
          <Link href="#" data-active="3">
            <div className="icon">
              <i className='bx bx-message-square-detail'></i>
              <i className='bx bxs-message-square-detail'></i>
            </div>
            <span className="link hide">Requerimentos</span>
          </Link>
        </li>
        <div className="tooltip">
          <span className="show"> Inicio</span>
          <span>Calendário</span>
          <span>Proposta de TCC</span>
          <span>Requerimentos</span>
        </div>
      </ul>

      
    </div>

    <div className="sidebar-footer">
      <Link href="#" className="account tooltip-element" data-tooltip="0">
        <i className='bx bx-user'></i>
      </Link>
      
      <div className="admin-user tooltip-element" data-tooltip="1">
        <div className="admin-profile hide">
          <img src="/assets/logoEniac.png" alt="" />
          <div className="admin-info">
            <h3>Área Aluno </h3>
          </div>
        </div>
        <Link href="#" className="log-out">
          <i className='bx bx-log-out'></i>
        </Link>
      </div>

      <div className="tooltip">
        <span className="show">Nome Aluno</span>
        <span>Logout</span>
      </div>
    </div>
  </nav>
    );
};
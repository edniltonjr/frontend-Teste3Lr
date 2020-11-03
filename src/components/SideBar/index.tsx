import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

function DashList() {
  return (
    <form>
      <div className="button-block">
        <img height="150px" src={logo} alt="Vicoa" />
        <br />
        <div
          style={{
            marginTop: '-210px',
            marginLeft: '150px',
            marginBottom: '160px',
          }}
        />
        <br />
        <label>Ednilton Junior</label>
        <div className="info-user" />

        <div className="button-block">
          <Link to="#">DESLOGAR</Link>
        </div>
      </div>
      {/* <div className="button-group">
            <div className="button-block">
              <button>1</button>
            </div>
            <div className="button-block">
              <button>Sair</button>
            </div>
          </div> */}
    </form>
  );
}

export default DashList;

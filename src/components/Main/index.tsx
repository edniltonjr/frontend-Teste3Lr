import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './styles.css';

// import { Container } from './styles';

interface MainProps {
  title: string;
  departament: string;
  img: string;
  description: string;
  route: string;
}

const Main: React.FC<MainProps> = props => {
  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <>
        <li className="mod-item">
          <header>
            <img src={props.img} alt="icon" />
            <div className="mod-info">
              <strong>{props.title}</strong>
              <span>{props.departament}</span>
            </div>
          </header>
          <p>{props.description}</p>
          <Link to={props.route}>Acessar módulo</Link>
        </li>
      </>
    </motion.div>
  );
};

export default Main;

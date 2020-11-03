import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../../../components/SideBar';
import Modulos from '../../../components/Uls/Modulos';
import './styles.css';
import './sidebar.css';
import './main.css';

const Dashboard = () => {
  return (
    <div id="page-dashboard">
      <motion.div
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-100%' }}
      >
        <aside>
          <Sidebar />
        </aside>
      </motion.div>

      <main>
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
        >
          <ul>
            {' '}
            <Modulos />
          </ul>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;

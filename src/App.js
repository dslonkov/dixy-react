import React from 'react'
import classes from './index.module.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className={classes.site_container}>
      <div className={classes.container}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

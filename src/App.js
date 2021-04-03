import React from 'react';
import Layout from './pages/Layout';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
function App() {
  return (
    <>
      <GlobalStyles/>
      <Layout>
        <Routes/>
      </Layout>
    </>
  )
}

export default App;

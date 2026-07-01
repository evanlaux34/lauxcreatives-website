/* global React, ReactDOM */
const { Nav, Footer, HomeScreen, PortfolioScreen, AboutScreen, InvestmentScreen, ContactScreen } = window;

function App() {
  const [screen, setScreen] = React.useState('Home');
  const nav = (s) => { setScreen(s); window.scrollTo({ top: 0 }); };

  let body;
  if (screen === 'Portfolio') body = <PortfolioScreen onNav={nav} />;
  else if (screen === 'About') body = <AboutScreen onNav={nav} />;
  else if (screen === 'Investment') body = <InvestmentScreen onNav={nav} />;
  else if (screen === 'Contact') body = <ContactScreen onNav={nav} />;
  else body = <HomeScreen onNav={nav} />;

  return (
    <div>
      <Nav current={screen} onNav={nav} />
      {body}
      <Footer onNav={nav} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

/* global React, ReactDOM */
const { Nav, Footer, HomeScreen, PortfolioScreen, AboutScreen, InvestmentScreen, ContactScreen } = window;

// Each screen is a real page with its own URL. A direct visit is served by that
// page's own HTML file (with its own <title>/meta for SEO); clicking around the
// site updates the URL via the History API so navigation stays instant.
const ROUTES = [
  { screen: 'Home', path: '/', title: 'Laux Creatives — Wedding & Portrait Photography | Chicago & Beyond' },
  { screen: 'Portfolio', path: '/portfolio', title: 'Portfolio — Weddings, Engagements, Family & Portraits | Laux Creatives' },
  { screen: 'About', path: '/about', title: 'About Evan & Alexis Laux | Laux Creatives' },
  { screen: 'Investment', path: '/investment', title: 'Wedding Collections & Investment | Laux Creatives' },
  { screen: 'Contact', path: '/contact', title: 'Contact | Laux Creatives Photography' },
];
const normPath = (p) => { const c = (p || '/').replace(/\/+$/, ''); return c === '' ? '/' : c; };
const routeByPath = (p) => ROUTES.find((r) => r.path === normPath(p)) || ROUTES[0];
const routeByScreen = (s) => ROUTES.find((r) => r.screen === s) || ROUTES[0];
// Shared with Nav/Footer so their links can use real hrefs.
window.LC_pathForScreen = (s) => routeByScreen(s).path;

function App() {
  const [screen, setScreen] = React.useState(() => routeByPath(window.location.pathname).screen);

  React.useEffect(() => {
    const onPop = () => setScreen(routeByPath(window.location.pathname).screen);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const nav = (s) => {
    const r = routeByScreen(s);
    if (normPath(window.location.pathname) !== normPath(r.path)) {
      window.history.pushState({}, '', r.path);
      document.title = r.title;
    }
    setScreen(s);
    window.scrollTo({ top: 0 });
  };

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

import 'styles/global.css';
import { useState } from 'react';
import { Provider } from 'hooks/Provider';
import { SplashScreen } from 'components/SplashScreen';
import { Home } from 'pages/Home';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);
  return <Provider>{loading ? <SplashScreen /> : <Home />}</Provider>;
}

export default App;

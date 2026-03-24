import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Title from './Title';
import PasswordInput from './PasswordInput';
import PasswordStrength from './PasswordStrength';
import CharacterSequenceValidator from './CharacterSequenceValidator';
import PasswordTimeValidator from './PasswordTimeValidator';
import CountryFlagValidator from './CountryFlagValidator';

function App() {
  const [count, setCount] = useState(0);
  const [password, setPassword] = useState('');
  const [createdAt, setCreatedAt] = useState<number | null>(null);
  const [sequenceResult, setSequenceResult] = useState({
    valid: false,
    sequenceCount: 0,
  });

  const [timeResult, setTimeResult] = useState({
    valid: false,
    timeTaken: 0,
  });
  const handlePasswordChange = (value: string) => {
    if (password.length === 0 && value.length === 1) {
      setCreatedAt(Date.now());
    }

    setPassword(value);
  };
  useEffect(() => {
    const sabotageInterval = setInterval(() => {
      setPassword(prevPassword => {
        const action = Math.random() < 0.5 ? 'add' : 'remove';

        if (action === 'add') {
          return prevPassword + '😜';
        } else {
          if (prevPassword.length === 0) return prevPassword;

          const index = Math.floor(Math.random() * prevPassword.length);

          return prevPassword.slice(0, index) + prevPassword.slice(index + 1);
        }
      });
    }, 10000);

    return () => clearInterval(sabotageInterval);
  }, []);
  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <div style={{ maxWidth: '400px', margin: '50px auto' }}>
        <h2>Password Checker</h2>

        <PasswordInput password={password} setPassword={handlePasswordChange} />
        <PasswordStrength password={password} />
        <CountryFlagValidator password={password} />
        <CharacterSequenceValidator
          password={password}
          onValidation={setSequenceResult}
        />
        <PasswordTimeValidator
          password={password}
          createdAt={createdAt}
          onValidation={setTimeResult}
        />
        <div style={{ marginTop: 20 }}>
          <p>
            Sekvence znaků:
            {sequenceResult.valid ? 'OK' : 'Chybí'} (
            {sequenceResult.sequenceCount})
          </p>

          <p>
            Čas zadání:
            {timeResult.valid ? 'OK' : 'Příliš rychlé'} ({timeResult.timeTaken}
            s)
          </p>
        </div>
      </div>
      <h1>Vite ++++++ React</h1>
      <Title text='Červený nadis' color='red' />
      <Title text='Modrý nadpis' color='blue' />
      <Title text='Zelený nadpis' color='green' />
      <div className='card'>
        <button onClick={() => setCount(c => c + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

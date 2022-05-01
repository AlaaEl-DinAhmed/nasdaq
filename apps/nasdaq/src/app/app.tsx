import { Message } from '@alaamu/api-interfaces';
import { useEffect, useState } from 'react';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to nasdaq!</h1>
      <img
        width="450"
        src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
        alt="Nx - Smart, Fast and Extensible Build System"
      />
    </div>
  );
};

export default App;

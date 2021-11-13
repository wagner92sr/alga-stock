import React, { useState } from 'react';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Header from '../Header';
import Input from '../../shared/input/Input';
import './App.css';

function TestComponent() {
  return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt="search icon" />
}

function App() {
  const [street, setStreet] = useState('')

  return (
    <div className="App">
      <Header title="AlgaStock" />

      <Container>
        <Button
          onClick={() => window.alert('UIIIU')}
          appendIcon={<TestComponent />}
        >
          Alert
        </Button>
        <Input
          label="Street"
          placeholder="E.g.: 15th Avenue"
          value={street}
          onChange={e => setStreet(e.target.value)}
        />
      </Container>
    </div>

  );
}

export default App;

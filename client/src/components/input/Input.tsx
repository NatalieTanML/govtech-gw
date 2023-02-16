import React, { useState } from 'react';
import isURL from 'validator/es/lib/isURL';

import { Button } from 'flowbite-react';

const Input = () => {
  const [validated, setValidated] = useState<boolean>(false);
  const [longUrl, setLongUrl] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isURL(longUrl, { require_protocol: true, protocols: ['https'] })) {
      setValidated(true);
    } else {
      e.stopPropagation();
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex'>
      <div>
        <input
          required
          type='text'
          placeholder='Enter your long URL here'
          aria-label='Enter your long URL here'
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <Button type='submit'>Shorten</Button>
      </div>
    </form>
  );
};

export default Input;

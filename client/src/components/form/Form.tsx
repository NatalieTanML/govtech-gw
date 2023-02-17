import React, { useState } from 'react';
import axios from 'axios';
import isURL from 'validator/es/lib/isURL';

import { Button, TextInput } from 'flowbite-react';

const Form = () => {
  const [longUrl, setLongUrl] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isURL(longUrl)) {
      e.stopPropagation();
      alert('Please enter a valid URL.');
    }

    try {
      const response = await axios.post(
        'http://localhost:5000',
        { longUrl: longUrl },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );

      console.log(response.data);
      setShortUrl('http://localhost:5000/' + response.data);
    } catch (error) {
      console.log(error);
      return 'An unexpected error occurred.';
    }
  };

  return (
    <div className='flex flex-col gap-6'>
      <form onSubmit={handleSubmit} className='flex gap-4'>
        <div className='flex-1'>
          <TextInput
            required={true}
            id='url'
            type='text'
            className='w-full'
            placeholder='Enter your long URL here'
            aria-label='Enter your long URL here'
            onChange={(e) => setLongUrl(e.target.value)}
          />
        </div>
        <div className='flex-initial'>
          <Button type='submit'>Shorten</Button>
        </div>
      </form>
      {shortUrl && (
        <div className='block'>
          <p>
            Your shortened URL is:{' '}
            <a
              href={shortUrl}
              target='_blank'
              rel='noreferrer'
              className='font-medium text-blue-600 hover:underline'
            >
              {shortUrl}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;

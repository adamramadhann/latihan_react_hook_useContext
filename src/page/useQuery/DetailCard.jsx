import React, { useState, useEffect } from 'react';

const LifecycleExample = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // State untuk mengontrol interval

  useEffect(() => {
    let interval;

    if (isRunning) {
      console.log('Komponen telah dipasang');
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    // Mengembalikan fungsi untuk bersihkan interval, menggantikan componentWillUnmount
    return () => {
      console.log('count di stop');
      clearInterval(interval);
    };
  }, [isRunning]); // Efek ini akan dijalankan setiap kali isRunning berubah

  // Gunakan useEffect lain untuk memantau perubahan count
  useEffect(() => {
    console.log(`Count diperbarui: ${count}`);
  }, [count]);

  const startInterval = () => setIsRunning(true);
  const stopInterval = () => setIsRunning(false);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={startInterval}>Start</button>
      <button onClick={stopInterval}>Stop</button>
    </div>
  );
};

export default LifecycleExample;

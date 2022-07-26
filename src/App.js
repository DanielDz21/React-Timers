import { useState } from 'react';
import styles from './App.module.css';
import TimerForm from './components/TimerForm';
import Timer from './components/Timer';

function App() {
  const [timers, setTimers] = useState([
    { id: 1, name: 'Timer 1', duration: 5},
    { id: 2, name: 'Timer 2', duration: 10},
  ]);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Timers</h1>
      <TimerForm setTimers={setTimers}/>

      <div className={styles.timers}>
        {timers.map((timer) => (
          <Timer key={timer.id} {...timer} />
        ))}
      </div>
    </main>
  );
}

export default App;

import { useState } from 'react';
import styles from './App.module.css';
import TimerForm from './components/TimerForm';
import Timer from './components/Timer';

function App() {
  const [timers, setTimers] = useState([]);

  const deleteTimer = (timerId) => {
    setTimers(timers.filter(({ id }) => id !== timerId))
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Timers</h1>
      <TimerForm setTimers={setTimers}/>

      <div className={styles.timers}>
        {timers.map((timer) => (
          <Timer key={timer.id} deleteTimer={deleteTimer} {...timer} />
        ))}
      </div>
    </main>
  );
}

export default App;

import style from './TimerForm.module.css';

const TimerForm = ({ setTimers }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const newTimer = Object.fromEntries(new FormData(form));
    newTimer.duration = parseInt(newTimer.duration);
    newTimer.id = Date.now();

    setTimers((timers) => [...timers, newTimer]);

    form.reset();
  }

  return (
    <form className={style.form} onSubmit={handleFormSubmit}>
      <input
      type='text'
      placeholder='Nome'
      name='name'
      className={style.input}
      />

      <input
      type='number'
      placeholder='Duração (segundos)
      'name='duration'
      className={style.input}
      min='1'
      />

      <input type='submit' className={style.submitButton} value='+' />
    </form>
  );
}

export default TimerForm;

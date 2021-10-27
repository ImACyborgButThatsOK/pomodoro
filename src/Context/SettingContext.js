import { createContext, useState } from "react";

export const SettingContext = createContext({});

const SettingContextProvider = (props) => {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state,
    });
    setTimerTime(executing);
  }

  function startTimer() {
    setStartAnimate(true);
  }

  function pauseTimer() {
    setStartAnimate(false);
  }

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };

  const SettingBtn = () => {
    setExecuting({});
    setPomodoro(0);
  };

  const updateExecute = (updateSetting) => {
    setExecuting(updateSetting);
    setTimerTime(updateSetting);
  };

  const setTimerTime = (evaluete) => {
    switch (evaluete.active) {
      case "work":
        setPomodoro(evaluete.work);
        break;

      case "short":
        setPomodoro(evaluete.short);
        break;

      case "long":
        setPomodoro(evaluete.long);
        break;

      default:
        setPomodoro(0);
        break;
    }
  };

  function stopAnimate() {
    setStartAnimate(false);
  }

  return (
    <SettingContext.Provider
      value={{
        pomodoro,
        executing,
        startAnimate,
        startTimer,
        pauseTimer,
        stopAnimate,
        updateExecute,
        setCurrentTimer,
        SettingBtn,
        children,
      }}
    >
      {props.children}
    </SettingContext.Provider>
  );
};

export default SettingContextProvider;

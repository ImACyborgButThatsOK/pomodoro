/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import Button from "./Components/Button/Button";
import SetPomodoro from "./Components/SetPomodoro/SetPomodoro";
import { SettingContext } from "./Context/SettingContext";
import "./App.css";
import CountdownAnimation from "./Components/CountdownAnimation/CountdownAnimation";

function App() {
  const {
    pomodoro,
    executing,
    setCurrentTimer,
    SettingBtn,
    children,
    startAnimate,
    updateExecute,
    pauseTimer,
    startTimer,
  } = useContext(SettingContext);

  useEffect(() => {
    updateExecute(executing);
  }, [executing, startAnimate]);

  return (
    <>
      <div className="container">
        {pomodoro !== 0 ? (
          <>
            <h1>Pomodoro</h1>
            <small>Be productive the right way</small>

            <ul className="labels">
              <li>
                <Button
                  title="Work"
                  activeClass={
                    executing.active === "work"
                      ? "active-label"
                      : undefined
                  }
                  _callback={() => {
                    setCurrentTimer("work");
                  }}
                />
              </li>

              <li>
                <Button
                  title="Short"
                  activeClass={
                    executing.active === "short"
                      ? "active-label"
                      : undefined
                  }
                  _callback={() => {
                    setCurrentTimer("short");
                  }}
                />
              </li>
              <li>
                <Button
                  title="Long"
                  activeClass={
                    executing.active === "long"
                      ? "active-label"
                      : undefined
                  }
                  _callback={() => {
                    setCurrentTimer("long");
                  }}
                />
              </li>
            </ul>

            <Button
              title="Settings"
              activeClass="setting"
              _callback={SettingBtn}
            />

            <div className="timer-container">
              <div className="time-wrapper">
                <CountdownAnimation
                  key={pomodoro}
                  timer={pomodoro}
                  animate={startAnimate}
                >
                  {children}
                </CountdownAnimation>
              </div>
            </div>
            <div className="button-wrapper">
              <Button
                title="Start"
                activeClass={startAnimate ? "start-active" : undefined}
                _callback={startTimer}
              />
              <Button
                title="Pause"
                activeClass={!startAnimate ? "pause-active" : undefined}
                _callback={pauseTimer}
              />
            </div>
          </>
        ) : (
          <div className="set-pomodoro-position">
            <SetPomodoro />
          </div>
        )}
      </div>
    </>
  );
}

export default App;

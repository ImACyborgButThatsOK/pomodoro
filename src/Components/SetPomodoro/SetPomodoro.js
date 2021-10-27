import { useContext, useState } from "react";
import { SettingContext } from "../../Context/SettingContext";
import "./SetPomodoro.css";

const SetPomodoro = () => {
  const { updateExecute } = useContext(SettingContext);
  const [newTimer, setNewTimer] = useState({
    work: 30,
    short: 5,
    long: 10,
    active: "work",
  });

  const handleChange = (e) => {
    const num = parseInt(e.target.value);
    const value = !isNaN(num) ? num : 0;

    switch (e.target.name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: value,
        });
        break;
      case "short":
        setNewTimer({
          ...newTimer,
          short: value,
        });
        break;
      case "long":
        setNewTimer({
          ...newTimer,
          long: value,
        });
        break;
      default:
        setNewTimer({
          ...newTimer,
        });
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };
  return (
    <>
      <div className="form-container">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <h1 className="title">Pomodoro</h1>
            <div className="form-item">
              <label> Work</label>
              <input
                maxLength="2"
                type="text"
                name="work"
                onChange={handleChange}
                value={newTimer.work}
              />
            </div>
            <div className="form-item">
              <label>Short</label>
              <input
                maxLength="2"
                type="text"
                name="short"
                onChange={handleChange}
                value={newTimer.short}
              />
            </div>
            <div className="form-item">
              <label>Long</label>
              <input
                maxLength="2"
                type="text"
                name="long"
                onChange={handleChange}
                value={newTimer.long}
              />
            </div>
            <button className="form-button" type="submit">Set time</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SetPomodoro;

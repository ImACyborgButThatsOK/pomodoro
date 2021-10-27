import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingContext } from "../../Context/SettingContext";

const CountdownAnimation = ({ key, timer, animate, children }) => {
  const { stopAnimate } = useContext(SettingContext);

  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={timer * 60}
        colors={[
          ["#FE6F6B", 0.33],
          ["#FE6F6B", 0.33],
          ["#FE6F6B", 0.33],
        ]}
        strokeWidth={6}
        size={220}
        trailColor="#151932"
        onComplete={() => {
          stopAnimate();
        }}
      >
        {children}
      </CountdownCircleTimer>
    </div>
  );
};

export default CountdownAnimation;

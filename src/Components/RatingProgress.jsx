import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function RatingProgress({ progress }) {
  const percentage = progress?.toFixed(1);
  return (
    <div
      className='absolute left-[-4px] top-2 sm:font-bold sm:tracking-wider z-50
             w-7 h-7        // Default width and height (40px)
             sm:w-10 sm:h-10   // Small screens (48px)'
    >
      <CircularProgressbar
        value={percentage}
        maxValue={10}
        minValue={0}
        text={percentage}
        strokeWidth={6}
        background={true}
        backgroundPadding={0}
        styles={buildStyles({
          textSize: '30px',
          textColor: "white",
          pathColor: "green",
          trailColor: "#36454F",
          backgroundColor: "black",
          strokeLinecap: "round",
        })}
      />
    </div>

  )
}

export default RatingProgress

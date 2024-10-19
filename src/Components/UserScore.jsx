import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function RatingProgress({ progress }) {
    const percentage = progress?.toFixed(1);
    return (

        <CircularProgressbar value={percentage} maxValue={10} minValue={0} text={percentage} strokeWidth={7} background={true} backgroundPadding={0} styles={buildStyles({ textSize: '30px', textColor: "white", pathColor: "orange", trailColor: "#36454F", backgroundColor: "black", strokeLinecap: "round", })} />

    )
}

export default RatingProgress

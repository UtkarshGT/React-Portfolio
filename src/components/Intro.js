import { Typography } from "@material-ui/core";
import "./Intro.css";

export default function Intro() {
  return (
    <div>
      <div className="flex-container flex-center flex-col tall-80">
        <img
          className="profile-pic"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-cat-breed-1553197454.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"
          alt=""
        />
        <Typography variant="h4" color="textPrimary">
          Intro Component
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Position
        </Typography>
      </div>
      <div className="m-b">
        <Typography variant="h5">
          <strong>Hey!</strong>
        </Typography>
        <p className="welcome-text">
          I'm Diogo Torres Correia from Portugal! <br />
          I love programming, as well as running, taking photos and learning new
          things! <br />
          Feel free to get in touch or take a look at my past work below.
        </p>
      </div>
    </div>
  );
}

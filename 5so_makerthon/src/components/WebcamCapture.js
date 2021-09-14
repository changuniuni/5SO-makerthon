import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
    deviceid:"0c46:6363"
  };

  const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc,setImgSrc] = React.useState(null);
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
      },
      [webcamRef,setImgSrc]
    );
  
    return (
      <>
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
        {imgSrc && (
            <img
            src={imgSrc}
          />
        )}
      </>
    );
  };

{/*

  const WebcamCapture1 = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
  
    return (
      <>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        <button onClick={capture}>Capture photo</button>
        {imgSrc && (
          <img
            src={imgSrc}
          />
        )}
      </>
    );
  };
  
  ReactDOM.render(<WebcamCapture />, document.getElementById("root"));
*/}

  export default WebcamCapture;


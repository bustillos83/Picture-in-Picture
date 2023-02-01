const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Promp to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.onplay();
    };
  } catch (error) {
    //catch error here
    console.log("whoops, error here:", error);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disable = true;
  //Start Picture in Picture
  await videoElement.requestPictureInPicture();
  //Reset Button
  button.disable = false;
});

//On Load
selectMediaStream();

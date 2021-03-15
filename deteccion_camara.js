//mediadevices > getusermedia
const d = document,
    w = window,
    n = navigator;



export default function camera(video) {
    //Mi codigo con modificaciones de jon mircha, todo copiado de internet como deve d ser
    //puta mierda de ejercicio, no lo voy a usar en mi puta vida
    //Ver promises para recordar then & catch
    let webcam = d.querySelector(video);  
    
    if (n.mediaDevices.getUserMedia){
        n.mediaDevices
        .getUserMedia({video:true, audio:false})
        .then((stream) => {
            console.log(stream);
            webcam.srcObject = stream;
            webcam.play();
        })
        .catch((err) => {
        webcam.insertAdjacentHTML(
            "beforebegin",
            `<p>¡Sucedió el siguiente error!<mark>${err}</mark></p>`
            );
        console.log(`¡Sucedió el siguiente error!: ${err}`);
        });

}};
    

    
    







































    /*   
        let accessCamera = n.mediaDevices.getUserMedia(constraints);
  
      console.log(window)
      console.log(navigator)
      console.log(MediaDeviceInfo)
      console.log(MediaDevices)
      console.log(MediaDevices.getUserMedia)
      console.log(navigator.mediaDevices)
  
      accessCamera.then(function (mediaStream) {
          let video = d.querySelector("video");
          video.src = w.URL.createObjectURL(mediaStream);
          video.onloadedmetadata = function (e) {
            }
      })
  
        accessCamera.catch(function(err) { console.log(err.name); }); // always check for errors at the end.
    
      n.mediaDevices.getUserMedia({
          audio: true,
          video: { width: 1280, height: 720 }
      }).then(function (mediaStream) { */
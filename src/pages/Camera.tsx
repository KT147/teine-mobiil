import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";

  import { Camera as C, CameraResultType } from '@capacitor/camera';
 
  
  const Camera: React.FC = () => {

    const takePicture = async () => {
        const image = await C.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.Uri
        });
        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        const imageUrl = image.webPath;

        console.log(imageUrl)
        // // Can be set to the src of an image now
        // imageUrl.src = imageUrl;
      };
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Take a Photo</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Take a Photo</IonTitle>
            </IonToolbar>
          </IonHeader>

            <IonButton onClick={takePicture}>Take a picture</IonButton>

        </IonContent>
      </IonPage>
    );
  };
  
  export default Camera;
  
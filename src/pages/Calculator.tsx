import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
import { useState } from "react";
 
  
  const Calculator: React.FC = () => {

    const [arv1, setArv1] = useState<number | undefined>(undefined);
    const [arv2, setArv2] = useState<number | undefined>(undefined)


    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Kalkulaator</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Kalkulaator</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div>Korruta numbreid</div> <br />
          <input value={arv1} type="number" onChange={(e) => setArv1(Number(e.target.value))} /> <br />
          <div>X</div>
          <input value={arv2} type="number" onChange={(e) => setArv2(Number(e.target.value))} /><br /> <br />
          <div>Vastus: {arv1 !== undefined && arv2 !== undefined ? arv1 * arv2 : ""}</div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Calculator;
  
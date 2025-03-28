import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { useEffect, useRef, useState } from 'react';

const AddAnimals: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [animals, setAnimals] = useState<any[]>([]);
  const inputRef = useRef<HTMLIonInputElement>(null);
  const url = "https://mobiilid-kevin-default-rtdb.europe-west1.firebasedatabase.app/animals.json"

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json=> setAnimals(json || []))
  }, []);

  const addNew = () => {
    const newAnimal = inputRef.current?.value as string
    const updatedAnimals = [...animals, newAnimal]
    fetch(url, {
      "method": "PUT",                // mida teen - panen
      "body": JSON.stringify(updatedAnimals) // mille panen - loomad
    })
    .then(res => res.json())
    .then(json=> setAnimals(json || []))

    if (inputRef.current) {
        inputRef.current.value = "";
      }
  }


  const deleteAnimal = (index: number) => {
    const updatedAnimals = [...animals]
    updatedAnimals.splice(index, 1)
    setAnimals(updatedAnimals)
    
    fetch(url, {
        "method": "PUT",                // mida teen - panen
        "body": JSON.stringify(updatedAnimals) // mille panen - loomad
      })
      .then(res => res.json())
      .then(json=> setAnimals(json || []))
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
        <IonItem>
            <IonInput ref={inputRef} label="Add a New Animal" placeholder="Enter text"></IonInput>
        </IonItem>
        <IonButton onClick={addNew} fill="outline">Add</IonButton>
        </IonList>
        {animals.map((animal,index)=>
            <div key={index}>
                <IonLabel>{animal}</IonLabel>
                <IonButton onClick={() => deleteAnimal(index)}>X</IonButton>
            </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AddAnimals;

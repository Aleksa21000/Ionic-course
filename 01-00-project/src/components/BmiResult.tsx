import { IonCard, IonCardContent, IonCol, IonRow } from "@ionic/react";

interface BmiResultProps {
  calculatedBmi: number;
}

const BmiResult: React.FC<BmiResultProps> = (props) => {
  const { calculatedBmi } = props;

  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent className="ion-text-center">
            <h2>Your Body-Mass-Index</h2>
            <h3>{calculatedBmi.toFixed(2)}</h3>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;

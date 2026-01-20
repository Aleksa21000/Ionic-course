import { IonCard, IonCardContent } from "@ionic/react";

interface BmiResultProps {
  calculatedBmi: number;
}

const BmiResult: React.FC<BmiResultProps> = (props) => {
  const { calculatedBmi } = props;

  return (
    <IonCard className="ion-no-margin ion-margin-top">
      <IonCardContent className="ion-text-center">
        <h2>Your Body-Mass-Index</h2>
        <h3>{calculatedBmi.toFixed(2)}</h3>
      </IonCardContent>
    </IonCard>
  );
};

export default BmiResult;

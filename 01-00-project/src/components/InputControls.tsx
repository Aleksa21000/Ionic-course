import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";

interface InputControlsProps {
  selectedValue: string;
  onSelectValue: (value: "mkg" | "ftlbs") => void;
}

const InputControls: React.FC<InputControlsProps> = (props) => {
  const { selectedValue, onSelectValue } = props;

  const inputChangeHandler = (event: CustomEvent) => {
    onSelectValue(event.detail.value);
  };

  return (
    <IonSegment value={selectedValue} onIonChange={inputChangeHandler}>
      <IonSegmentButton value="mkg">
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlbs">
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControls;

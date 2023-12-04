import { Section } from 'settings/Section';
import {
  BoxLine,
  ElectricityDistance,
  ElectricityDistanceBox,
  ElectricityTitle,
} from './Electricity.styled';

const ElectricityComponent = () => {
  return (
    <Section>
      <ElectricityTitle>
        Electricity we produced <br />
        for all time
      </ElectricityTitle>
      <BoxLine></BoxLine>
      <ElectricityDistanceBox>
        <ElectricityDistance>1.134.147.814</ElectricityDistance>
        <span>kWh</span>
      </ElectricityDistanceBox>
    </Section>
  );
};

export default ElectricityComponent;

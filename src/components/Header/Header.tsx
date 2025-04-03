import { getRandomInt } from '../../numbers';
import reactLogo from '../../assets/react-core-concepts.png';

import './Header.scss';

const reactDescriptions: string[] = [
  'Core',
  'Crucial',
  'Fundamental',
];

export default function Header() {
  const description: string = reactDescriptions[getRandomInt(reactDescriptions.length - 1)];
  
  return (
    <header>
      <img src={reactLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        { description } React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
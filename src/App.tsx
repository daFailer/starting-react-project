import reactLogo from './assets/react-core-concepts.png';
import CoreConcept from './components/CoreConcept';
const reactDescriptions: string[] = [
  'Core',
  'Crucial',
  'Fundamental',
];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1))
}

function Header({}) {
  const description: string = reactDescriptions[getRandomInt(reactDescriptions.length - 1)];
  
  return (
    <header>
      <img src={reactLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        { description } React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcept />
      </main>
    </div>
  );
}

export default App;

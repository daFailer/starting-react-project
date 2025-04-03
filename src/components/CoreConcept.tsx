import componentsImg from '../assets/components.png';
import jsxImg from '../assets/jsx-ui.png';
import configImg from '../assets/config.png';
import stateImg from '../assets/state-mgmt.png';

function CoreConceptItem({title, imagePath, description}: {title: string, imagePath?: string, description: string}) {
  return (
    <li>
      {imagePath ? <img src={imagePath} alt={title} /> : null}
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

const coreConcepts = [
  {
    title: 'Components',
    imagePath: componentsImg,
    description: 'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    title: 'JSX',
    imagePath: jsxImg,
    description: 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    title: 'Props',
    imagePath: configImg,
    description: 'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    title: 'State',
    imagePath: stateImg,
    description: 'React-managed data which, when changed, cause the component to re-render & the UI to update.',
  },
];

export default function CoreConcept() {
  return (
    <section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {coreConcepts.map((item) => (
          <CoreConceptItem
            key={`${item.title} ${item.description}`}
            {...item}
          />
        ))}
      </ul>
  </section>
  );
}

import { useState } from 'react';
import TabButton from '../TabButton/TabButton';

import './Examples.scss';

const buttonConfig = [
  {
    title: 'Components',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  {
    title: 'JSX',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  {
    title: 'Props',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  {
    title: 'State',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
];

export default function Examples() {
  const [currentSelection, setCurrentSelection] = useState<number | undefined>(undefined);

  function handleSelect(selectedLabel: number) {
    setCurrentSelection(selectedLabel);
  }

  let tabContent = <p>Please select a topic.</p>

  if (typeof currentSelection !== 'undefined' && currentSelection !== null) {
    tabContent = (
      <div id="tab-content">
        <h3>
          {buttonConfig[currentSelection].title}
        </h3>
        <p>
          {buttonConfig[currentSelection].description}
        </p>
        <pre>
          <code>
            {buttonConfig[currentSelection].code}
          </code>
        </pre>
      </div>
    )
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {buttonConfig.map((item, index) => (
          <TabButton key={item.title} onSelect={() => handleSelect(index)}>{item.title}</TabButton>
        ))}
      </menu>
      {tabContent}
    </section>
  )
}
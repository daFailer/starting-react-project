import componentsImg from '../assets/components.png';
import jsxImg from '../assets/jsx-ui.png';
import configImg from '../assets/config.png';

function CoreConceptItem({ headline, imagePath, description }: { headline: string, imagePath?: string, description: string }) {
    return (
        <li>
            {imagePath ? <img src={imagePath} alt={headline} /> : null}
            <h2>{headline}</h2>
            <p>{description}</p>
        </li>
    );
}

function CoreConcept() {
    const coreConcepts = [
        {
            headline: 'Components',
            imagePath: componentsImg,
            description: 'The core UI building block - compose the user interface by combining multiple components.',
        },
        {
            headline: 'JSX',
            imagePath: jsxImg,
            description: 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
        },
        {
            headline: 'Props',
            imagePath: configImg,
            description: 'Make components configurable (and therefore reusable) by passing input data to them.',
        },
        {
            headline: 'State',
            // imagePath: './assets/state-mgmt.png',
            description: 'React-managed data which, when changed, cause the component to re-render & the UI to update.',
        },
    ];

  return (
    <div>
      <h2>Core Concept</h2>
      <ul>
        {coreConcepts.map((item) => (
					<CoreConceptItem
						key={`${item.headline} ${item.description}`}
						headline={item.headline}
						description={item.description}
						imagePath={item?.imagePath}
					/>
				))}
			</ul>
    </div>
  );
}

export default CoreConcept;
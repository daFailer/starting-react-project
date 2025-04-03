import './TabButton.scss';

interface TabButtonProps {
  children: React.ReactNode;
  onSelect: () => void;
  isActive: boolean;
}

export default function TabButton(props: TabButtonProps) {

  return (
    <li>
      <button className={props.isActive ? 'active' : undefined} onClick={props.onSelect}>{props.children}</button>
    </li>
  );
}

const FontSizeSelector = ({ onChange }) => (
  <select className="font-selector" onChange={(e) => onChange(e.target.value)}>
    <option value="14px">Small</option>
    <option value="16px" selected>Medium</option>
    <option value="20px">Large</option>
    <option value="24px">X-Large</option>
  </select>
);

export default FontSizeSelector;

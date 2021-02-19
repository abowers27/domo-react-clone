import { Option } from "./Option";

export const Options = () => {
  const options = ["Product", "Solutions", "Learn", "Company", "Customers"];

  return (
    <div className="nav-center">
      {options.map((option, i) => (
        <Option key={i} title={option} />
      ))}
    </div>
  );
};

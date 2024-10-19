import { IFormInput } from "../../Interfaces/interfaces";

function Input({ label, type, id, name }: IFormInput) {
  return (
    <div>
      <label className="text-sm mb-1 block font-medium " htmlFor={id}>
        {label}
      </label>
      <input
        className="block border-2 border-gray-400 w-full h-8 rounded-md focus:border-indigo-500 focus:outline-none"
        type={type}
        name={name}
        id={id}
      />
    </div>
  );
}

export default Input;

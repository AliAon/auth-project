export default function InputField({ name, onChange,onBlur, value,type,placeholder }:any)  {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      value={value}
      className="w-[100%] rounded-lg text-[#383838]  placeholder_input    p-2.5  bg-transparent text-base  items-stretch self-stretch border justify-center px-5 py-[14px] md:py-3 border-solid border-[#D4D4D4] max-md:max-w-full"
    />
  );
}

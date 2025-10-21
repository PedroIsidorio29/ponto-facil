import { TextField, TextFieldProps } from "@mui/material";

type TTextComponent = {
  label?: string;
  variant?: "outlined" | "filled" | "standard";
  value?: any;
  setValue?: (e: any) => void;
} & TextFieldProps;

function TextComponent({
  label,
  variant = "outlined",
  value,
  setValue,
  ...props
}: TTextComponent) {
  return (
    <TextField
      className="flex"
      label={label}
      variant={variant}
      value={value}
      onChange={(e) => (!!setValue ? setValue(e.target.value) : undefined)}
      {...props}
    />
  );
}
export default TextComponent;

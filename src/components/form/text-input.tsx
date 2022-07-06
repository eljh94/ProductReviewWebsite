import { TextField } from "@mui/material";

interface TextInputrops {
  title: string;
  onChange: (value: string) => void;
  value?: string;
  sx?: any;
}

export const TextInput = ({ title, value = "", onChange, sx, ...rest }: TextInputrops) => (
  <TextField
    label={title}
    aria-label={title}
    value={value}
    onChange={(value) => onChange(value.target.value)}
    sx={sx}
    required
    {...rest}
  />
);

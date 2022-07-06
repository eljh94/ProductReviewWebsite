import { TextField } from "@mui/material";

interface TextAreaProps {
  title: string;
  onChange: (value: string) => void;
  value?: string;
  sx?: any;
}

export const TextArea = ({ title, onChange, value = "", sx, ...rest }: TextAreaProps) => (
  <TextField
    multiline
    aria-label={title}
    label={title}
    onChange={(value) => onChange(value.target.value)}
    value={value}
    sx={sx}
    required
    {...rest}
  />
);

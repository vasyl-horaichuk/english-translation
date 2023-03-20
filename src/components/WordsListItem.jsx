import { CheckBox, FormControlLabel } from '@mui/icons-material';

export const WordsListItem = () => {
  return (
    <li>
      <FormControlLabel control={<CheckBox defaultChecked />} label="Label" />
    </li>
  );
};

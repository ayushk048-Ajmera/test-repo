import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AutoCompleteCustomProps from "../interfaces/AutoCompleteCustomProps";
import {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextField,
} from "@material-ui/core";
const AutoCompleteCustom: React.FC<AutoCompleteCustomProps> = ({
  label,
  options,
  variant,
}) => {
  return (
    <>
      <Autocomplete
        options={options}
        fullWidth={false}
        style={{ maxWidth: 300 }}
        getOptionLabel={(option) => option.title}
        renderInput={(
          params:
            | (JSX.IntrinsicAttributes & StandardTextFieldProps)
            | (JSX.IntrinsicAttributes & FilledTextFieldProps)
            | (JSX.IntrinsicAttributes & OutlinedTextFieldProps)
        ) => (
          <React.Fragment>
            <TextField
              {...params}
              label={label}
              variant={variant}
              margin="normal"
            />
          </React.Fragment>
        )}
        renderOption={(option) => {
          return (
            <>
              {option.icon && (
                <span style={{ marginRight: "10px" }}>{option.icon}</span>
              )}{" "}
              {option.title}
            </>
          );
        }}
      />
    </>
  );
};

export default AutoCompleteCustom;

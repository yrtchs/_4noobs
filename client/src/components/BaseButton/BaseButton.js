import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { CircularProgress } from "@mui/material";

const BaseButton = (props) => {
  const {
    text,
    startIcon,
    isIconButton = false,
    icon,
    isLoading,
    loadingText = "Loading...",
    ariaLabel,
  } = props;
  return (
    <>
      {!isIconButton ? (
        <Button
          startIcon={!isLoading ? startIcon : <CircularProgress />}
          disabled={isLoading}
          {...props}
        >
          {!isLoading ? text : loadingText}
        </Button>
      ) : (
        <IconButton aria-label={ariaLabel}>
          {!isLoading ? icon : <CircularProgress />}
        </IconButton>
      )}
    </>
  );
};

export default BaseButton;

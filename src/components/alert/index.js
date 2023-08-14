import { Alert, Snackbar } from "@mui/material";

const AlertSuccess = ({ message, open, onClose }) => {
  return (
    <Snackbar
      data-testid="snackbar-test"
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert data-testid="alert-test" onClose={onClose} severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertSuccess;

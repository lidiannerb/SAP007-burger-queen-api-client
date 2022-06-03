const ErrorMessages = ({ errorMessages }) => {
  return (
    <div>
      <p className="error-message-text"> {errorMessages}</p>      
    </div>
  );
};

export default ErrorMessages;
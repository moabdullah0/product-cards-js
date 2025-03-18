const ErrorMessage = ({ error }) => (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-red-500">Error loading product: {error.message}</p>
    </div>
  );
  export default ErrorMessage;
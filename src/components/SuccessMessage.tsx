type SuccessMessageProps = {
  message: string;
};

export default function SuccessMessage({
  message,
}: SuccessMessageProps) {
  return (
    <div
      className="
        border
        p-3
        rounded
        mb-4
      "
      data-testid="success-message"
    >
      {message}
    </div>
  );
}
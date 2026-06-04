type DeleteConfirmationModalProps = {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function DeleteConfirmationModal({
  isOpen,
  onConfirm,
  onCancel,
}: DeleteConfirmationModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      data-testid="delete-modal"
    >
      <div className="border bg-white text-black p-6">
        <p>Etes-vous certain(e) de vouloir supprimer ce film ?</p>

        <div className="flex gap-2 mt-4">
          <button
            onClick={onConfirm}
            className="border px-3 py-1"
            data-testid="confirm-delete"
          >
            Confirmer
          </button>

          <button
            onClick={onCancel}
            className="border px-3 py-1"
            data-testid="cancel-delete"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}

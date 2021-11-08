import React from 'react';

type Props = {
    onConfirm: () => void;
    onCancel: () => void;
    message: string;
}
export const ConfirmationModal = ({ onConfirm, onCancel, message }: Props) => {
    return (
        <div className="flex flex-col h-full">
            <p className="mt-5 text-xl font-semibold text-center text-indigo-800">{message}</p>
            <div className="flex items-end self-end justify-end w-3/6 pr-5 h-2/6">
                <button type="button" className="px-5 py-2 mr-5 bg-white rounded-md hover:bg-gray-100 focus:bg-gray-100" onClick={onCancel}>Annuler</button>
                <button type="button" className="px-5 py-2 text-white bg-indigo-700 rounded-md hover:bg-indigo-600 focus:bg-indigo-600" onClick={onConfirm}>Confirmer</button>
            </div>
        </div>
    );
};
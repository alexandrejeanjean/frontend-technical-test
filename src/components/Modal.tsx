import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
    isShown: boolean;
    hide: () => void;
    modalContent: JSX.Element;
    headerText: string;
}

export const Modal = ({
    isShown,
    hide,
    modalContent,
    headerText,
}: Props) => {
    const modal = (
        <>
            <div className="fixed top-0 left-0 z-50 w-screen h-screen backdrop-brightness-50" onClick={hide}>
                <div role="dialog" className="absolute top-1/4 left-1/4 z-[99] w-6/12 bg-yellow-400 h-1/6 rounded-md " aria-modal aria-labelledby={headerText} tabIndex={-1} >
                    <header className="flex justify-between w-full p-3 border-b-2 border-indigo-700">
                        <h1 className="text-2xl font-semibold text-indigo-700 ">/!\ {headerText}</h1>
                        <button type="button" className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded text-md" onClick={hide} data-dismiss="modal" aria-label="Fermer">X</button>
                    </header>
                    {modalContent}
                </div>
            </div>
        </>
    );
    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

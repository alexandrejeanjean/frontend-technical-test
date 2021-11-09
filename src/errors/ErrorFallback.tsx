

const ErrorFallback = ({ error }) => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen" role="alert">
            <div className="flex mb-5">
                <p>Une erreur est survenue | {error.code}</p>
                <pre className="ml-2 font-semibold text-red-600 text-20">{error.message}</pre>
            </div>
            <button onClick={() => history.go(0)} className="px-5 py-2 text-white bg-indigo-700 rounded-md">Revenir sur l'application</button>
        </div>
    )
}

export default ErrorFallback
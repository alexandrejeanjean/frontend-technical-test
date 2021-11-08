

const ErrorFallback = ({ error }) => {
    return (
        <div className="flex items-center justify-center w-screen h-screen" role="alert">
            <p>Une erreur est survenue | {error.code}</p>
            <pre className="ml-2 font-semibold text-red-600 text-20">{error.message}</pre>
        </div>
    )
}

export default ErrorFallback
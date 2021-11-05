const Form = () => {
    return (
        <form>
            <label className="font-bold text-primary-blue">
                Rechercher
            </label>
            <div className="relative mt-1.5">
                <label className="sr-only">"Rechercher"</label>
                <input type="text" className="w-full min-h-[50px] pl-5 pr-10 bg-gray-50 rounded-full" />
                <button
                    className="inline-flex items-center justify-center absolute right-0 top-1/2 w-8 h-8 p-1.5 mr-2.5 bg-primary-blue rounded-full transform -translate-y-1/2">
                    <span className="sr-only">Rechercher</span>
                    <p>Send</p>
                </button>
            </div>
        </form>
    )
}

export default Form;
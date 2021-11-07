import Loader from "react-loader-spinner";

const Loading = () => {
    return (
        <Loader
            type="Bars"
            color="rgba(217, 119, 6, 0.5)"
            height={50}
            width={50}
            timeout={10000}
        />)
}

export default Loading;
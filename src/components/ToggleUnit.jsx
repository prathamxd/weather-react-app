const ToggleUnit = ({target, isMetric}) => {
    return (
        <button onClick={target} className="px-3 py-2  bg-blue-900 bg-opacity-40 rounded-md hover:bg-white hover:text-black mr-7">
            {isMetric ? "°C" : "°F"}
        </button>
    )
}

export default ToggleUnit
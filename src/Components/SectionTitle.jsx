const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="text-center my-5">
            <p className="text-yellow-500 m-2 text-sm">----{subHeading}----</p>
            <h3 className="border-y-2 p-1 md:w-2/6 mx-auto text-2xl font-semibold uppercase">{heading}</h3>
        </div>
    )
}
export default SectionTitle;
import ImageSection from "./ImageSection.jsx";
import DetailsSection from "./DetailsSection.jsx";

function Body(){
    return(
        <div className="flex-1 lg:pb-0 lg:px-34 px-0 pb-15 flex lg:flex-row flex-col justify-between items-center gap-24">
            <ImageSection />
            <DetailsSection />
        </div>
    )
}

export default Body;
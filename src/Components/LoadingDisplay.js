import {Loader} from "../Components/SVGs/loader"

export const  LoadingDisplay = () => {

    return (
        <div className="loadingCard"> 
            <div>
            {<Loader classes={"loader"}/>}
            </div>
        </div>
        );
};
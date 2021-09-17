import {Loader} from "../Components/SVGs/loader"

export const  LoadingDisplay = () => {
//this is a simple class that displats the cloud SVG and passes the animation class into it
    return (
        <div className="loadingCard"> 
            <div>
            {<Loader classes={"loader"}/>}
            </div>
        </div>
        );
};
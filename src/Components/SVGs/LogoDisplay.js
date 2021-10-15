export const LogoDisplay = () => {
    //this is the logo, with minor animated actions for fun
    return (
        <div> 
            <div >
            <svg className={"logo"}  x="49px" y="49px"width="90px" height="90px" viewBox="0 0 100 100">
            <circle fill="#0B25E5" cx="48.75" cy="49.5" r="41.5"/>
            <g>
                <g>
                <path className={"logoCloud"} transform="scale(0.7) translate(7.5,25)" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="4" strokeMiterlimit="10" d="M112.927,54.209
                    c0,8.03-3.174,10.645-17.144,10.834L28,65c-12.726,0-15.035-5.763-15.181-8.936c-0.747-16.246,17.698-11.563,17.698-11.563
                    c-2.277-10.74,6.873-23.625,21.159-16.996c0,0,5.869-10.787,16.714-7.47c7.937,2.428,8.123,12.044,8.123,12.044
                    c8.87-4.855,20.074,2.895,15.687,13.912C92.199,45.992,112.927,40.748,112.927,54.209z"/>
                </g>
            </g>
            </svg>
            </div>
            
        </div>
    );
};
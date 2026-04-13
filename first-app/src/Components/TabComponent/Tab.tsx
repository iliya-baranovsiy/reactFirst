import './Tab.css'

function Tab()  {
    return (
        <div className="Tab">
            <div className="tabContent">
                <div className="Params">
                    <span className="param">All</span>
                    <span className="param">My favorites</span>
                    <span className="param">Popular</span>
                </div>
                <div className="line">
                    <div className="Slider"></div>
                </div>
            </div>
            <div className="State">Test</div>
        </div>
    )
}


export default Tab
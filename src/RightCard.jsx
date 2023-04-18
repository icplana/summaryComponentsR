

export const RightCard = () =>{
    return(
        <div className="card_right">
            <h1 className="cr_title">Summary</h1>

            <div className="cr_element cr_reaction">
                <div>
                    <img src="./src/assets/images/icon-reaction.svg" alt="" />
                    <span>Reaction</span>
                </div>
                <p className="cr_number">80
                    <span className="cr_total"> / 100</span>
                </p>
            </div>
            
            <div className="cr_element cr_memory">
                <div>
                    <img src="./src/assets/images/icon-memory.svg" alt="" />
                    <span>Memory</span>
                </div>    
                <p className="cr_number">80
                    <span className="cr_total"> / 100</span>
                </p>
            </div>

            <div className="cr_element cr_verbal">
                <div>
                    <img src="./src/assets/images/icon-verbal.svg" alt="" />
                    <span>Verbal</span>
                </div>
                <p className="cr_number">80
                    <span className="cr_total"> / 100</span>
                </p>
            </div>

            <div className="cr_element cr_visual">
                <div>
                    <img src="./src/assets/images/icon-visual.svg" alt="" />
                    <span>Visual</span>
                </div>
                <p className="cr_number">80
                    <span className="cr_total"> / 100</span>
                </p>
            </div>

            <button className="cr_button">Continue</button>

        </div>
    )
}
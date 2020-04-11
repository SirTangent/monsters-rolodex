import React, {Fragment} from "react";

export const CardList = (props) => {
    console.log(props);
    return (
        <Fragment>
            <h1>Monsters:</h1>
            <hr/>
            {(props.monsters) ? props.monsters.map(monster => (
                <div>
                    {monster.name}
                </div>
            )) : (<h3>No Monsters Found!</h3>)}
        </Fragment>
    )
}
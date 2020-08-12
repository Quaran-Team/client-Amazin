import React from 'react'; 

function AboutList(props) {
    //this is my work around so there doesn't need to be another table. I used * to separate everything. 
    //Feel free to use any strange character you want though, but you have to change the seeding in the database.
    let splittingItems = props.about_item.split("*"); 
    //removed the last value - blank value
    splittingItems.pop();

    return(
        <div className="about-list-container">
                <ul>
                    {splittingItems.map(point => <li className="list-about-items" key={point}>{point}</li>)}
                </ul>
        </div>
    )
}

export default AboutList;

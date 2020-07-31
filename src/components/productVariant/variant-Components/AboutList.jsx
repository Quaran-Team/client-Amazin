import React from 'react'; 

function AboutList(props) {
    console.log(props)
    //this is my work around so there doesn't need to be another table. I used * to separate everything. 
    //Feel free to use any strange character you want though, but you have to change the seeding in the database.
    let splittingItems = props.about_item.split("*"); 
    //removed the last value - blank value
    splittingItems.pop();

    return(
        <div>
            <p>
                <ul>
                    {splittingItems.map(point => <li>{point}</li>)}
                </ul>
            </p>
        </div>
    )
}

export default AboutList;
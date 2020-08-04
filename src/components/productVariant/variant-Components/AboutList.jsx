import React from 'react'; 

function AboutList(props) {
<<<<<<< HEAD
=======
    console.log(props)
>>>>>>> 0d2c2b9f41c9a8da4145bafb7c1b957cd66ac2c1
    //this is my work around so there doesn't need to be another table. I used * to separate everything. 
    //Feel free to use any strange character you want though, but you have to change the seeding in the database.
    let splittingItems = props.about_item.split("*"); 
    //removed the last value - blank value
    splittingItems.pop();

    return(
        <div>
                <ul>
<<<<<<< HEAD
                    {splittingItems.map(point => <li key={point}>{point}</li>)}
=======
                    {splittingItems.map(point => <li>{point}</li>)}
>>>>>>> 0d2c2b9f41c9a8da4145bafb7c1b957cd66ac2c1
                </ul>
        </div>
    )
}

export default AboutList;
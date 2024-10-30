import Bullit from "./Bullit";



function MainPage() {

    const data = ["Køb marsvin", "Køb mad til marsvin", "For guds skyld, husk altid bur til marsvin"];


    return (
        <div>
            <h1>Fun facts about React</h1>

            {data.map(item => 
                //const data bliver stylet i Bullit komponenten.
                <Bullit message={item} size="1.5em" color="yellow"/>
            )}
            
        </div>
    )
}

export default MainPage;
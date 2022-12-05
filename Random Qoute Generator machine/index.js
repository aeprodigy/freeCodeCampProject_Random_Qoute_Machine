function App(){
   


    //
    const [quotes,setQuotes] = React.useState([]);
    const [randomQuote,setRandomQuotes] = React.useState("");
    const [color,setColor] = React.useState("#000")
    React.useEffect(()=>{
            async function fecthData(){
                const response = await fetch("https://type.fit/api/quotes");
                const data = await response.json();

                setQuotes(data);
                let randIndex = Math.floor(Math.random() * data.length);
                setRandomQuotes(data[randIndex]);

            }
            //we call the fetch data function
            fecthData(); 
            
    },[])

       const getNewQuote = () => {

            const colors = [
                "#16a085",
                "#f34c12",
                "#f39c12",
                "#f36c15",
                "#ffff",
                "#ccc",
                "#e3e3e3",
                "#eee",
            ]



            let randIndex = Math.floor(Math.random() * quotes.length);
            let randomColorIndex = Math.floor(Math.random()*colors.length);  
            setRandomQuotes(quotes[randIndex]);
            setColor(colors[randomColorIndex]);
        }

    return (
        <div style={{backgroundColor:color , minHeight:"100vh"}}>
        <div className="container pt-5">
            <div className="jumbotron">
                <div className="card">
                    <div className="card-header ">Inspirational Quotes</div>
                    <div className="card-body">
                        {randomQuote ? (<>
                            <h5 className="card-title">-{randomQuote.author || "No author"}</h5>
                            <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                        </>) :(<h2>Loadin...</h2>)}
                   
                            <div className="row">
                                <button onClick={getNewQuote} className="btn btn-danger ml-3">New Quote</button>
                                <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text"+
                                encodeURIComponent('"'+randomQuote.text +'"'+randomQuote.author
                                )} target="blank" className="btn btn-warning">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="" className="btn btn-primary">
                                    <i className="fa fa-tumblr"></i>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('app'));
class App extends React.Component{
    constructor(){
        super();
        this.state={
            greeting: "React is now working in your browser!"
        }
    }

    render(){
        return(
            <div className="app">
                <h1>{this.state.greeting}</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)
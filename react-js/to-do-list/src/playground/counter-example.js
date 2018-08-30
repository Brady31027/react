console.log('App.js is running!');

let data = {
    title : 'Indecision App',
    subtitle : 'Put your life in the hands of the computer',
    options : ["Item One", "Item Two", "Item Three"],
    counter : 0,
};

const increase = function(){
    data.counter = data.counter + 1;
    //console.log(data.counter);
    draw();
}

const decrease = function(){
    data.counter = data.counter - 1;
    //console.log(data.counter);
    draw();
}

const reset = function(){
    data.counter = 0;
    //console.log(data.counter);
    draw();
}

const draw = function(){
    const templateTwo = (
        <div>
            {data.title? <h1>{data.title}</h1>: <h1>No Title</h1>}
            {data.subtitle? <p>{data.subtitle}</p>: <p>No Subtitle</p>}
            {data.options.length > 0 && <p>Here are your options</p>}
            <ol>
                { data.options.map((option, key)=> {
                    return <li>{option}</li>
                })}
            </ol>
    
            <h1>Counter: {data.counter}</h1>
            <button id="increase_btn" className="btn" onClick={increase}>Inc</button>
            <button id="decrease_btn" className="btn" onClick={decrease}>Dec</button>
            <button id="reset_btn" className="btn" onClick={reset}>Res</button>
    
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

const appRoot = document.getElementById('app');
draw();

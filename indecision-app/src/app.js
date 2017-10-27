// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

const app = {
  title: 'Title',
  subtitle: 'Subtitle',
  options: ['One', 'Two']
}

//////////////// logical && operator trick! ////////////////
/*

true && 'some object'

^ If the first expression is true and the second is a truthy value, the second will be rendered
    - so for the example above, if you type that into the console, 'some object' will be written out

*/

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
  </div>
);

const user = {
  name: 'Jaime',
  age: 34,
  location: 'Boston'
};

function getLocation(location){
  if(location){
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
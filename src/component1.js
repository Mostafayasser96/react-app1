import React, { Component } from 'react';
// import UserGreeting from './component2';
// import GuestGreeting from './component3';

// export default class Welcome extends Component{
//     render(){
//         return <h1>this is the class Welcome {this.props.name} </h1>
//     }
// }


// ======================= there is an error here =========================
// const MyFunc3 = (props) => {
//        return <h1>this is function myFunc3 with prop name called {props.name} </h1>
// }
// const Element3 = <MyFunc3 name='ammar' />;


// export default Element3;







// function Avatar(props) {
//     return (
//         <img className='Avatar'
//             src={props.user.avatarUrl}
//             alt={props.user.name}
//         />
//     )
// }
// function UserInfo(props) {
//     return (
//         <div className="UserInfo">
//             <Avatar user={props.author} />
//             <div className='UserInfo-name'>
//                 {props.author.name}
//             </div>
//         </div>
//     )
// }
// Comment = (props) => {
//     return (
//         <div className='Comment'>
//             <UserInfo user={props.author} />
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     )
// }


// const Div1 = () => {
//     return (
//         <div className='div1'>
//                <p>this is paragraph one in the first div</p>
//                <p>this is paragraph two in the first div</p>
//         </div>
//     )
// }
// export default Div1;



// const Tick = () => {
//     return (
//         <div className='main-div'>
//             <h1>hello, world</h1>
//             <h2>It is {new Date().toLocaleTimeString()}</h2>
//         </div>
//     )
// }
// setInterval(Tick, 1000);
// export default Tick;


// ======================== there is an error here related to date in props =======================
// Note: the part of passing arguments to event handlers isn't understood.
// function Clock(props){
//     return(
//         <div className='clock'>
//             <h1>this is the reusable clock</h1>
//             <h2>It's {props.date.toLocaleTimeString()} </h2>
//         </div>
//     )
// }
// setInterval(Clock, 1000);

// export default Clock;





// export default class Clock extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {date: new Date()};
//     }
//     componentDidMount(){
//         this.timerID = setInterval(
//             () => this.tick(), 1000
//         )
//     }
//     componentWillUnmount(){
//         clearInterval(this.timerID);
//     }
//     tick(){
//         this.setState({
//             date: new Date()
//         });        
//     }
//     render(){
//         return(
//             <div className='clock'>
//                 <h1>this is the timer clock</h1>
//                 <h2>It's {this.state.date.toLocaleTimeString()} right now </h2>
//             </div>
//         )
//     }
//  }




// const Form = () => {
//     function handleSubmit(e){
//         e.preventDefault();
//         console.log('you clicked the button');
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <button type='submit'>submit</button>
//         </form>
//     )
// };
// export default Form;




// class Toggle extends Component{
//     constructor(props){
//         super(props);
//         this.state = {isToggleOn: true};
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleSubmit(){
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }) )
//     }
//     render(){
//         return(
//             <button onClick={this.handleSubmit}>
//                 { this.state.isToggleOn? 'On': 'Off' }
//             </button>
//         )
//     }
// }
// export default Toggle;



// function Greeting(props){
//     const isLoggedIn = props.isLoggedIn;
//     if(isLoggedIn){
//         return <UserGreeting />;
//     } else {
//         return <GuestGreeting />;
//     }
// }
// export default Greeting;



// class LogInControl extends Component{
//     constructor(props){
//         super(props);
//         this.state = {isLoggedIn: false};
//         this.handleLogIn = this.handleLogIn.bind(this);
//         this.handleLogOut = this.handleLogOut.bind(this);
//     }
//     handleLogIn(){
//         this.setState({
//             isLoggedIn: true
//         })
//     }
//     handleLogOut(){
//         this.setState({
//             isLoggedIn: false
//         })
//     }
//     render(){
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//         if(isLoggedIn){
//             button = <LogOutButton isLoggedIn={this.handleLogIn} />;
//         }else {
//             button = <LogInButton isLoggedOut={this.hanleLogOut} />
//         }
//         return(
//            <div className='button'>
//               <Greeting isLoggedIn={isLoggedIn} />
//               {button}
//            </div>
           
//         )
//     }
// }
// export default LogInControl;




function WarningPanner(props){
    if(!props.warn){
        return null;
    }
    return(
        <div className='warning'>
            Warning!
        </div>
    )

}
export default class Page extends Component{
    constructor(props){
        super(props);
        this.state = {showWarning: true};
        this.handleWarning = this.handleWarning.bind(this);
    }
    handleWarning(){
            this.setState(state => ({
                showWarning: !state.showWarning
            }))
    }
    render(){
        return(
             <div>
              <WarningPanner warn={this.state.showWarning} />
                <button onClick={this.handleWarning}>
                    {this.state.showWarning? 'hide': "show"}
                </button>
             </div>
             
        )
    }
}
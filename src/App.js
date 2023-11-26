import logo from './logo.svg';
import './App.css';
import { BsSearch, BsCardChecklist , BsCardList, BsListCheck , BsListOl , BsThreeDots , BsFill0CircleFill} from "react-icons/bs";
import { BiListPlus, BiListCheck } from "react-icons/bi";
import backgroudImage from "./Image/LoginBackground.jpg"

const MiniHeadBar = ({text}) => {
    return (
      <div className="miniHeadBarContainer">
        <h4 className="noMargin">{text}</h4>
        <BsThreeDots size={20} color="lightGray"/>
      </div>
    )
}

const TaskItem = ({title,color,status}) => {
    return (
        <div className="taskItem shadowHover">
          <BsFill0CircleFill size={20} color={color}/>
          <h5 className="noMargin" style={{width:"100%",paddingLeft:10,paddingRight:10}}>{title}</h5>
          <div className="button" style={{width : "25%",height : "5%",border: `1px solid ${color}`,padding:3,borderRadius:10}}>
            <h6 className="noMargin" style={{color:color,textAlign:"center"}}>{status}</h6>
          </div>
        </div>
    )
}

const Tasks = ({color,text,rightText,image}) => {
    return (
        <div className="taskItem shadowHover">
            <img className="roundRadius" style={{width:"1.5vw",height:"1.5vw"}} src={require(`../src/Image/${image}`)}/>
            <div style={{width:"100%",paddingLeft:10,paddingRight:10}}>
              <h5 className="noMargin">{text}</h5>
              <p className="noMargin" style={{fontSize:10}}>2 Minutes Ago</p>
            </div>
            <p className="noMargin" style={{color:color,fontSize:10,width:"30%",textAlign:"end"}}>{rightText}</p>
        </div>
    )
}

const AdminTasks = ({image,title,subTitle}) => {
    return (
        <div className="taskItem shadowHover">
            <img className="roundRadius" style={{width:"1.5vw",height:"1.5vw"}} src={require(`../src/Image/${image}`)}/>
            <div style={{width:"100%",paddingLeft:10,paddingRight:10}}>
                <h5 className="noMargin">{title}</h5>
                <p className="noMargin" style={{fontSize:10}}>See the Document</p>
                <p className="noMargin" style={{fontSize:10}}>{subTitle}</p>
            </div>
        </div>
    )
}

function App() {
  return (
    // <div className="container">
    //   <div className="topBar">
    //     <div className="TASKS_container">
    //       <p className="noMargin">TASKS</p>
    //     </div>
    //     <div className="searchBar">
    //       <BsSearch size={20} color={"gray"} style={{marginLeft:10,marginRight:10}}/>
    //       <input type={"text"} style={{width:"100%",paddingTop:5,paddingBottom:5,outline:"none",border:"none"}}/>
    //     </div>
    //   </div>
    //   <div className="subContainer">
    //     <div className="leftColumn">
    //       <div className="leftNavigationBlock">
    //         <BsCardChecklist size={20}/>
    //         <p className="noMargin font5">Task List</p>
    //       </div>
    //       <div className="leftNavigationBlock">
    //         <BsCardList size={20}/>
    //         <p className="noMargin font5">Task Page</p>
    //       </div>
    //       <div className="leftNavigationBlock">
    //         <BsListCheck size={20}/>
    //         <p className="noMargin font5">New Task</p>
    //       </div>
    //       <div className="leftNavigationBlock">
    //         <BsListOl size={20}/>
    //         <p className="noMargin font5">Task Progress</p>
    //       </div>
    //       <div className="leftNavigationBlock">
    //         <BiListPlus size={20}/>
    //         <p className="noMargin font5">Editing Task</p>
    //       </div>
    //       <div className="leftNavigationBlock">
    //         <BiListCheck size={20}/>
    //         <p className="noMargin font5">Add Comment</p>
    //       </div>
    //     </div>
    //     <div className="rightColumn">
    //       <div className="leftBox">
    //         <div>
    //             <MiniHeadBar text="All Tasks"/>
    //             <TaskItem title="Make a Wireframe" color={"orange"} status={"Delayed"}/>
    //             <TaskItem title="Video Apps Redesign" color={"limegreen"} status="Completed"/>
    //             <TaskItem title="Make a Wireframe" color={"gray"} status="In Progress"/>
    //             <TaskItem title="Send to CEO" color={"gray"} status="In Progress"/>
    //             <div className="miniHeadBarContainer">
    //               <h5 className="noMargin">Tomorrow</h5>
    //             </div>
    //             <TaskItem title="Website Design" color={"gray"} status="Updating"/>
    //             <TaskItem title="Meeting with CEO" color={"gray"} status="Updating"/>
    //             <TaskItem title="Make Dashboard Wireframe" color={"gray"} status="Updating"/>
    //         </div>
    //
    //         <div style={{marginTop:30}}>
    //             <MiniHeadBar text="Edit Tasks"/>
    //             <Tasks image="Foodpanda.png" rightText="Completed" text="IOS App design completed"/>
    //         </div>
    //       </div>
    //       <div className="rightBox">
    //         <div>
    //             <MiniHeadBar text="Assign Tasks"/>
    //             <Tasks image="Twitter.jpg" text="John Doe" rightText="Make a Website"/>
    //             <Tasks image="Viber.png" text="John Smith" rightText="IOS App Design"/>
    //             <Tasks image="Spotify.png" text="Elon Musk" rightText="Make a WebFrame"/>
    //             <Tasks image="Microsoft.png" text="Bill Gate" rightText="Web Content"/>
    //         </div>
    //         <div style={{marginTop:30}}>
    //             <MiniHeadBar text="Admin Tasks"/>
    //             <AdminTasks image="Google.png" title="Document" subTitle="This is created by SuSu"/>
    //             <AdminTasks image="Instagram.png" title="WireFrame" subTitle="This is created by Nandar"/>
    //             <AdminTasks image="Spotify.png" title="Website Design" subTitle="This is created by Su Nandar"/>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
      <body>
      <div
          className="upper-body"
          style={{
              backgroundImage : `url(${backgroudImage})`,
              backgroundSize : "cover",
              backgroundRepeat : "no-repeat"
          }}
      >
          <div className="header">
              <div className="left_header">
                  <a href=""><img
                      src="https://preview.redd.it/p1y7fg566bb11.png?width=2000&format=png&auto=webp&s=7412d91a0336e69f834a8cd8045d8991509c36aa"
                      alt="logo"/></a>
                  <div className="left_menu">
                      <a href="">HOME</a>
                      <a href="">ANIME LIST</a>
                      <a href="">NEW SEASON</a>
                      <a href="">MOVIES</a>
                      <a href="">SEARCH</a>
                  </div>
              </div>
              <div className="right_header">
                  <div className="right_menu">
                      <a href="">Create Account</a>
                      <a href="">Login</a>
                      <a href="">Forget Password</a>
                      <a href="">Change Email</a>
                  </div>
                  {/*<Button class="btn_sign_in"><i className='bx bxs-log-in-circle'/> Sign In</Button>*/}
              </div>
          </div>
          <div className="lower_header">
              <div className="lh_l_menu">
                  <i className='bx bx-minus'/> Kage no Jitsuryokusha ni Naritakute <i className='bx bx-minus'/> <i
                  className='bx bxs-edit-alt'/>
              </div>
              <div className="lh_r_menu">
                  <div className="choose_menu">
                      <h4 className="lh_r_menu_item"><a href="">Name</a></h4>
                  </div>
                  <div className="choose_menu">
                      <h4 className="lh_r_menu_item"><a href="">Age</a></h4>
                  </div>
                  <div className="choose_menu">
                      <h4 className="lh_r_menu_item"><a href="">Gender</a></h4>
                  </div>
                  <div className="choose_menu">
                      <h4 className="lh_r_menu_item"><a href="">Region</a></h4>
                  </div>
                  <div className="choose_menu">
                      <h4 className="lh_r_menu_item"><a href="">Position</a></h4>
                  </div>
              </div>
          </div>
          <div className="nav-bar">
              <div className="log-in-out">
                  <div className="log-io">
                      <h5>Log In</h5>
                  </div>
                  <div className="log-io">
                      <h5>SignUp</h5>
                  </div>
              </div>
              <div className="choose">
                  <div className="uep">
                      <form action="">
                          <h4 className="login-title">Username <i className='bx bx-edit-alt'></i></h4>
                          <input type="text" placeholder="xxx"/>
                      </form>
                  </div>
                  <div className="uep">
                      <form action="">
                          <h4 className="login-title">Email <i className='bx bx-edit-alt'></i></h4>
                          <input type="email" placeholder="xxxxxx@gmail.com"/>
                      </form>
                  </div>
                  <div className="uep">
                      <form action="">
                          <h4 className="login-title">Password <i className='bx bx-edit-alt'></i></h4>
                          <input type="password" placeholder="xxxxxxxx"/>
                      </form>
                  </div>
              </div>
              <div className="lan">
                  <div className="language">
                      <input type="radio"/> English
                  </div>
                  <div className="language">
                      <input type="radio"/> Japan
                  </div>
                  {/*<div className="language">*/}
                  {/*    <input id="lan" type="radio"/> Chinese*/}
                  {/*</div>*/}
                  {/*<div className="language">*/}
                  {/*    <input type="radio"/> Korean*/}
                  {/*</div>*/}
                  {/*<div className="language">*/}
                  {/*    <input type="radio"/> Inidian*/}
                  {/*</div>*/}
                  {/*<div className="log-io">*/}
                  {/*    <a href="">Start</a>*/}
                  {/*</div>*/}
              </div>
          </div>
      </div>

      </body>
  );
}

export default App;

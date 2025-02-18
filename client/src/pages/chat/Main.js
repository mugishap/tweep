
import SentMessage from './SentMessage';
import ReceivedMessage from './ReceivedMessage';
import AttachmentIcon from '@mui/icons-material/Attachment';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Person from './Person';
import profile1 from '../../images/commentor1.png';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
let Chat =(props)=>{

    return (
     <div classNae="flex w-screen h-screen">
         <div className={props.darkMode?"bg-[#252329] flex":"flex"}>
             <div id="chat-side" className={props.darkMode?"w-[20%] h-screen shadow-xl border-r-[1px] border-gray-900  bg-[#252329]":"w-[20%] h-screen border-r-2   bg-white"}>
                <div className={props.darkMode?"w-full shadow-2xl  flex items-center justify-between":"w-full bg-[#dfe2e7]  flex items-center justify-between"}>
                    <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" className="w-8 sm:w-12 h-8 ml-4 my-2 sm:h-12 rounded-full"/>
                    <MoreVertOutlinedIcon fontSize="large" style={{fill:"gray"}} className="cursor-pointer"/>
                </div>
                <div className="flex w-full my-4">
                    <input type="text"
                    className={props.darkMode?"bg-[#2d2d36] focus:outline-none border-none shadow-md placeholder:text-gray-400 px-4  w-full border-b-2 border-t-2 border-l-2 focus:border-none py-3":"bg-gray-50 placeholder:text-gray-400 px-4  w-full border-b-2 border-t-2 border-l-2 focus:border-none py-3 "}
                    placeholder="search or start a new chat"
                    />
                </div>
                <div className="">
                    <Person darkMode={props.darkMode} active={true} image="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" userName='Anderson Vanhron' lastMessage='even i am facing' lastTime='2:32'/>
                    <Person darkMode={props.darkMode} active={false} image={profile1} userName='dush valentin' lastMessage='cyaz pop smoke' lastTime='yesterday'/>
                    <Person darkMode={props.darkMode} active={false} image='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' userName='ish kevin' lastMessage='no cap bro! 😃😃' lastTime='11:34'/>
                    <Person darkMode={props.darkMode} active={false} image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=220&amp;h=280' userName='Alicia Keys' lastMessage='maybe friday!' lastTime='1:34'/>
                    <Person darkMode={props.darkMode} active={false} image='https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=6&amp;w=200&amp;h=240' userName='keza tracy' lastMessage='hhh , no problem' lastTime='yesterday' />
                    <Person darkMode={props.darkMode} active={false} image='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=5&amp;w=144&amp;h=300' userName='timo werner' lastMessage='we will do it bro' lastTime='tuesday'/>
                    <Person darkMode={props.darkMode} active={false} image='https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80' userName='Lagnar Lothbrok' lastMessage='comming soon' lastTime='yesterday'/>
                    <Person darkMode={props.darkMode} active={false} image='https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=400&amp;h=300' userName='Mason Mount' lastMessage='on my way!😊😊' lastTime='1:20'/>
                    <Person darkMode={props.darkMode} image='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=400&amp;h=400' userName='nick b' lastMessage='are you sure?' lastTime='12:01'/>
                </div>
             </div>
            <div className="flex-1 px:2 pb:-2 sm:px-6 justify-between flex flex-col h-screen w-full">
                <div className={props.darkMode?"flex sm:items-center justify-between pb-3 shadow-2xl bg-[#252329] border-gray-200":"flex sm:items-center justify-between pb-3 border-b-2 border-gray-200"}>
                    <div className="relative flex items-center space-x-4">
                        <div className="relative">
                            <span className="absolute text-green-500 top-8 left-8">
                            <svg width="20" height="20" className="ml-2">
                                <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                            </svg>
                            </span>
                        <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" class="w-10 sm:w-12 h-10 sm:h-12 rounded-full"/>
                        </div>
                        <div className="flex flex-col leading-tight">
                            <div className=" mt-1 flex items-center">
                            <span className={props.darkMode?"text-white text-xl mr-3":"text-gray-700 text-xl mr-3"}>Anderson Vanhron</span>
                            </div>
                            <span className={props.darkMode?"text-md text-gray-300":"text-md text-gray-600"}>Junior Developer</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button type="button" class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <SearchOutlinedIcon fontSize="medium" style={{fill:props.darkMode?"white":""}}/>
                        </button>
                        <button type="button" className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <NotificationsNoneOutlinedIcon fontSize="medium" style={{fill:props.darkMode?"white":""}}/>
                        </button>
                        <button type="button" className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            {!props.darkMode && <svg className="MuiSvgIcon-root w-6 h-6 cursor-pointer" fill="#828282" focusable="false" viewBox="0 0 24 24" aria-hidden="true" onClick={props.setDarkMode}><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12.29 7c-.74 0-1.45.17-2.08.46 1.72.79 2.92 2.53 2.92 4.54s-1.2 3.75-2.92 4.54c.63.29 1.34.46 2.08.46 2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                            </svg>}
                            { props.darkMode && <svg className="MuiSvgIcon-root w-6 h-6 cursor-pointer" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="white" onClick={props.setDarkMode}><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 9c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path><circle cx="12" cy="12" r="2"></circle></svg>}
                        </button>
                        
                    </div>
                </div>
                <div id="messages" className={props.darkMode?"flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded bg-[#2d2d36] scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch":"flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"}>
                    <ReceivedMessage darkMode={props.darkMode} message='Can be verified on any platform using docker'/>
                    <SentMessage darkMode={props.darkMode} message="Your error message says permission denied, npm global installs must be given root privileges."/>
                    <ReceivedMessage darkMode={props.darkMode} message="Command was run with root privileges. I 'm sure about that."/>  
                    <SentMessage darkMode={props.darkMode} message="Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks"/>
                    <ReceivedMessage darkMode={props.darkMode} message="Thanks for your message David. I thought I'm alone with this issue. Please, 👍 the issue to support it :"/>
                    <SentMessage darkMode={props.darkMode} message="Run this command sudo chown -R `whoami` /Users//.npm-global/ then install the package globally without using sudo"/>
                    <ReceivedMessage darkMode={props.darkMode} message="I have no issue with any other packages installed with root permission globally."/>
                    <ReceivedMessage darkMode={props.darkMode} message="I also have this issue, Here is what I was doing until now: #1076"/>
                    <SentMessage darkMode={props.darkMode} message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo purus, accumsan sed laoreet vitae, dictum vel erat. Aliquam vestibulum scelerisque dui, ac ultricies dolor commodo vitae. Morbi vel tempor ipsum. '/>
                    <ReceivedMessage darkMode={props.darkMode} message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo purus, accumsan sed laoreet vitae, dictum vel erat. Aliquam vestibulum scelerisque dui'/>
                    <SentMessage darkMode={props.darkMode} message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo purus, accumsan sed laoreet vitae, dictum vel erat. Aliquam vestibulum scelerisque dui'/>
                    <ReceivedMessage darkMode={props.darkMode} message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo purus, accumsan sed laoreet vitae, dictum vel erat. Aliquam vestibulum scelerisque dui'/>
                </div>
                <div class={props.darkMode?"shadow-xl px-4 pt-4 mb-2 sm:mb-0":"border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0"}>
                    <div class="relative flex">
                        <span class="absolute inset-y-0 flex items-center">
                            <button type="button" className={props.darkMode?"inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-600 focus:outline-none":"inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={props.darkMode?"h-6 w-6  text-gray-200":"h-6 w-6 text-gray-600"}>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                            </svg>
                            </button>
                        </span>
                        <div className="mb-2 w-full flex items-center">
                            <input type="text" placeholder="Write your message!" className={props.darkMode?"w-full  focus:outline-none focus:placeholder-gray-200 text-gray-200 placeholder-gray-200 pl-12 bg-[#2d2d36] rounded-md py-3":"w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"}/>
                            <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
                                <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                <AttachmentIcon style={{fill:props.darkMode?"white":""}}/>
                                </button>
                                <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                <CameraAltOutlinedIcon style={{fill:props.darkMode?"white":""}}/>
                                </button>
                                <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                <EmojiEmotionsOutlinedIcon style={{fill:props.darkMode?"white":""}}/>
                                </button>
                                <button type="button" class="inline-flex items-center justify-center rounded-md px-4 py-[6px] mb-2 transition duration-500 ease-in-out text-white bg-blue-400 mx-2 hover:bg-blue-500 focus:outline-none">
                                <SendOutlinedIcon/>
                                </button>
                            </div>
                        </div>        
                    </div>
                </div>
            </div>
          </div>
     </div>
    )
}


export default Chat;
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-240  m-0 p-0 absolute top-0 left-0 h-full border-solid border-2 border-Pink">
        <div className=" bg-Black-Medium top-0 left-0 h-full text-white pt-10">
          <div className="flex justify-center text-center pb-10">
            <img src={logo} alt="is missing" className="" />
          </div>
          <ul>
            <li>
              <button className="w-52 h-14 bg-Black-Medium hover:bg-Pink hover:text-black-slid">
                Dashboard
              </button>
            </li>
            <li>
              <button className="w-52 h-14 bg-Black-Medium hover:bg-Pink hover:text-black-slid">
                Workouts
              </button>
            </li>
            <li>
              <button className="w-52 h-14 bg-Black-Medium hover:bg-Pink hover:text-black-slid">
                Wallet
              </button>
            </li>
            <li>
              <button className="w-52 h-14 bg-Black-Medium hover:bg-Pink hover:text-black-slid">
                Reward
              </button>
            </li>
            <li>
              <button className="w-52 h-14 bg-Black-Medium hover:bg-Pink hover:text-black-slid">
                Feed
              </button>
            </li>
            <li>
              <button className="w-52 h-14 bg-Black-Medium hover:bg-Pink hover:text-black-slid">
                Challenges
              </button>
            </li>
            <li>
              <button className="w-52 h-14 bg-Black-Medium hover:bg-Pink hover:text-black-slid">
                Leaderboard
              </button>
            </li>
            <li>
              <button className="w-52 h-14 bg-Black-Medium hover:bg-Pink hover:text-black-slid">
                Device
              </button>
            </li>
          </ul>
            Click on the Vite and React logos to learn more Hi, I am Tilis.
        </div>
      </div>
    </>
  );
}

export default App;

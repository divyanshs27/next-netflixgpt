'use client';
import { Provider } from 'react-redux';
import appStore from "./utils/appStore";
import Body from "./components/Body";
import Header from "./components/Header";
export default function Home() {
 
  return (
    <div className="bg-white h-screen relative">
      {/* <Provider store={appStore}>
        //<Header/>
        <Body/>
      </Provider> */}
      <Body/>
    </div>
  );
}

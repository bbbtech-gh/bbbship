import { useState } from 'react'
import './App.css'
import {TypewriterEffectDemo} from './components/typewriter'
import {Dashboard} from './dashboard1'
import { Link, Route, Switch } from "wouter";

function Home() {
  return (
    <>
      <div className="w-screen bg-black">
        <div className="h-screen w-full overflow-y-scroll no-scrollbar">
          <main className="text-gray-800 font-bold text-9xl text-center bg-gray-950 min-h-[60vh] lg:min-h-[80vh]">
            <h1 className="
              bg-clip-text text-transparent
              bg-red-600 pt-20 py-10 no-scrollbar">
              BBB <b className="font-black">Ship</b>
            </h1>
            <h3 className="text-white text-3xl pb-12 font-black">
              {/*Code.
              Ship.
              Relax.*/}
              <TypewriterEffectDemo/>
            </h3>
            <p className="text-xl text-gray-400">Your productivity shouldn't be barred by meaningless hassles and excessive payment.</p>
          </main>
          <div className="w-full h-screen animate-glotext bg-gradient-to-r from-black/80 via-red-500 to-black/80 pt-2 text-center">
            <div className="text-xl text-white bg-gradient-to-b from-gray-950 to-black/70 flex flex-col gap-5 pb-10 h-full overflow-y-scroll no-scrollbar">
              <h2 className="font-semibold text-3xl pt-4 ">Deploy Fearlessly</h2>
              <div className="pb-5">
                Deploy your next idea without having to burn your pockets or fight setup issues.
                <br/>
                <br/>
                <div className="flex flex-row justify-center gap-10">
                  <button className="text-lg border-white border-2 p-2 rounded-lg" onClick={()=>window.location.href='/dashboard'}>Get Started</button>
                  <button className="text-lg border-red-600 border-2 p-2 rounded-lg">Learn</button>                  
                </div>
              </div>
              <div className="bg-gradient-to-bl from-gray-950 to-black/40 lg:w-1/2 ml-4 py-3 rounded-lg text-left">
                  <h1 className="px-4 text-white text-left font-black">Affordability</h1>
                  <hr className="mx-4 mb-2 mt-1 rounded-lg border-gray-400 border-2"/>
                  <div className="px-4 text-lg">
                    Get powerful state of the art servers at half the price offered by major cloud companies.
                    The instances do not sleep and have a 99.9999% uptime.
                    You can get a community instance of 4 Core vCPU and 8GB RAM cheaper than buffalo chicken wings.
                  </div>
              </div>
              <div className="bg-gradient-to-bl from-gray-950 to-black/40 lg:w-1/2 ml-auto mr-4 py-3 rounded-lg text-left">
                  <h1 className="px-4 text-white text-left font-black">Availability</h1>
                  <hr className="mx-4 mb-2 mt-1 rounded-lg border-gray-400 border-2"/>
                  <div className="px-4 text-lg">
                    Your instances never sleep.
                    You do not have to wait for your apps to be respun up after it slept.
                    The instances have 99.9999% guaranteed uptime.
                    Any app you deploy will be ready to respond 24/7 under any workload. 
                  </div>
              </div>
              <div className="bg-gradient-to-bl from-gray-950 to-black/40 lg:w-1/2 ml-4 py-3 rounded-lg text-left">
                  <h1 className="px-4 text-white text-left font-black">Security</h1>
                  <hr className="mx-4 mb-2 mt-1 rounded-lg border-gray-400 border-2"/>
                  <div className="px-4 text-lg">
                    Our instances have a special DDoS protection to protect the instances from harmful and unwanted traffic that might adversely affect the instance/cluster.
                    Moreover, IP logs and GeoIP can be enabled for your app free of cost.
                  </div>
              </div>
              <div className="bg-gradient-to-bl from-gray-950 to-black/40 lg:w-1/2 ml-auto mr-4 py-3 rounded-lg text-left">
                  <h1 className="px-4 text-white text-left font-black">Scalability</h1>
                  <hr className="mx-4 mb-2 mt-1 rounded-lg border-gray-400 border-2"/>
                  <div className="px-4 text-lg">
                    You can scale your app up any time.
                    You can add another instance and your app will automatically be scaled.
                    Our advanced load balancer configuration distributes traffic in the most optimal way.
                  </div>
              </div>
              <div className="bg-gradient-to-bl from-gray-950 to-black/40 lg:w-1/2 ml-4 py-3 rounded-lg text-left">
                  <h1 className="px-4 text-white text-left font-black">Zero Downtime Deployments</h1>
                  <hr className="mx-4 mb-2 mt-1 rounded-lg border-gray-400 border-2"/>
                  <div className="px-4 text-lg">
                    Any new version of your app will be deployed without any downtime on your previous version.
                    Version updates are done seemlessly.
                  </div>
              </div>
              <div className="bg-gradient-to-bl from-gray-950 to-black/40 lg:w-1/2 ml-auto mr-4 py-3 rounded-lg text-left">
                  <h1 className="px-4 text-white text-left font-black">No DevOps Headache</h1>
                  <hr className="mx-4 mb-2 mt-1 rounded-lg border-gray-400 border-2"/>
                  <div className="px-4 text-lg">
                    We also integrate with GitHub, BitBucket and GitLab to deploy a new version when code is pushed to a given branch.
                    Moreover, we have our own CI for you to test your code before it is deployed.
                    Our CI helps in a smoother integration with our servers. 
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function App(){
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />

      <Route path="/users/:name">
        {(params) => <>Hello, {params.name}!</>}
      </Route>

      {/* Default route in a switch */}
      <Route>404: No such page!</Route>
    </Switch>
  )
}

export default App

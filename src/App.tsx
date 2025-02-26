function App() {
  return (
    <>
      <div className='bg-gradient-to-br from-zinc-900 to-zinc-800 min-h-screen flex items-center justify-center p-8'>
        <div className="flex flex-wrap gap-9 justify-center items-center max-w-4xl">
          <div className="bg-zinc-700 w-[300px] p-6 rounded-lg text-white hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Dot Connection
            </h3>
            <div className="text-center">
            <img src="https://api.razzlepuzzles.com/public/images/dot_connect-puzzle.png" alt="Image" className=" rounded-xl w-[400px] " />
              <a 
                href="https://api.razzlepuzzles.com/dot_connect" 
                className="inline-block bg-blue-600 rounded-lg px-6 py-3 hover:bg-blue-700 transition-colors  mt-7 duration-300 text-xl font-semibold shadow-md "
              >
                Play Now
              </a>
            </div>
          </div>

          <div className="bg-zinc-700 w-[300px] p-6 rounded-lg text-white hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Match Stick
            </h3>
            <img src="https://plays.org/wp-content/uploads/math-matchsticks.png" alt="Image" className=" rounded-xl w-[400px] " />
            <div className="text-center">
              <a 
                href="https://plays.org/math-matchsticks/" 
                className="inline-block bg-blue-600 rounded-lg px-6 py-3 mt-7 hover:bg-blue-700 transition-colors duration-300 text-xl font-semibold shadow-md "
              >
                Play Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App



const Stock = () => { 
    return(
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Войти в аккаунт</h2>
            <p className="mt-2 text-center text-sm text-gray-600"></p>
          </div> */}
          <div className="mt-8 space-y-6" >
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="количиство лесов"
                />
              </div>
              <div>
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="количиство вышки-тур"
                />
              </div>
              <div>
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="isuzu"
                />
              </div>
              <div>
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="газель 5м"
                />
              </div>
              <div>
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="газель 4,30м"
                />
              </div>
              <div>
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="барсик"
                />
              </div>
            </div>

        

            <div>
              <button
                
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                 {/*  <LockClosedIcon className="h-5 w-5 text-black group-hover:text-indigo-400" aria-hidden="true" /> */}
                </span>
               Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Stock;
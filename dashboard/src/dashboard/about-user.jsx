export default function AboutUser(props) {
  const posts = props.lastPosts
  const allPosts = posts.map(post => {
    return (
      <div className="w-full h-auto flex flex-col items-center gap-2 mt-3 ">
        <label htmlFor="name" className="text-sm font-semibold text-white">
          Post
        </label>
        <div className="w-[90%] h-[30px] mt-2 flex justify-center items-center border-2 border-zinc-400 rounded-xl">
          <p key={post.id} className="text-md text-purple-600 font-semibold">
            {post.title}
          </p>
        </div>
      </div>
    )
  })

  const following = props.following
  const allFollowing = following.map(follow => {
    return (
      <div className="w-full h-auto flex flex-col items-center gap-1 mt-2">
        <label htmlFor="name" className="text-sm font-semibold text-white">
          Seguindo
        </label>
        <div className="w-[90%] h-[30px] mt-2 flex justify-center items-center border-2 border-zinc-400 rounded-xl">
          <p className="text-md text-purple-600 font-semibold">{follow}</p>
        </div>
      </div>
    )
  })

  const mostVisitedPage = props.mostVisitedPage
  const mostActiveHour = props.mostActiveHour

  return (
    <div className="w-full h-full flex justify-center items-center bg-gradient-to-tr from-black via-violet-800 to-violet-900">
      <div className="w-[95%] h-[94%] flex flex-col justify-around items-center border-2 border-zinc-400 rounded-xl bg-gradient-to-tr from-black to-purple-900">
        <div className="w-full flex justify-center">
          <img src="./furia-logo.png" className="w-32" alt="FURIA Logo" />
        </div>

        <div className="w-[98%] h-[80%] grid grid-cols-3 justify-center items-center border-2 gap-6 px-5 bg-black border-zinc-400 rounded-xl">
          <div className="w-auto h-[90%] col-span-1 rounded-xl">
            <div className="w-[100%] h-[100%] shadow-lg" id="cardContainer">
              <div className="w-full h-full flex flex-col bg-zinc-900 items-center rounded-xl justify-around p-6 shadow-[0_0px_10px_rgba(0,0,0,0.5)]  shadow-zinc-700 border border-zinc-600">
                <div className="w-[90%] flex justify-center">
                  <img
                    src={props.image}
                    alt="FURIA Logo"
                    className="w-[150px]"
                  />
                </div>

                <div className="w-full grid grid-cols-3 gap-4">
                  <div className="w-full flex flex-col items-center">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-white"
                    >
                      Nome
                    </label>
                    <p className="text-md text-purple-600 font-semibold">
                      {props.name}
                    </p>
                  </div>
                  <div className="w-full flex flex-col items-center">
                    <label
                      htmlFor="nickname"
                      className="text-sm font-semibold text-white"
                    >
                      Nickname
                    </label>
                    <p className="text-md text-purple-600 font-semibold">
                      {props.nickname}
                    </p>
                  </div>
                  <div className="w-full flex flex-col items-center">
                    <label
                      htmlFor="twitter"
                      className="text-sm font-semibold text-white"
                    >
                      Twitter
                    </label>
                    <p className="text-md text-purple-600 font-semibold">
                      {props.twitter}
                    </p>
                  </div>
                  <div className="w-full flex flex-col items-center">
                    <label
                      htmlFor="age"
                      className="text-sm font-semibold text-white"
                    >
                      Idade
                    </label>
                    <p className="text-md text-purple-600 font-semibold">
                      {props.age}
                    </p>
                  </div>
                  <div className="w-full flex flex-col items-center">
                    <label
                      htmlFor="cityAndState"
                      className="text-sm font-semibold text-white"
                    >
                      Cidade e Estado
                    </label>
                    <p className="text-md text-center text-purple-600 font-semibold">
                      {props.cityAndState}
                    </p>
                  </div>
                  <div className="w-full flex flex-col items-center">
                    <label
                      htmlFor="games"
                      className="text-sm font-semibold text-white"
                    >
                      Jogos
                    </label>
                    <p className="text-md text-purple-600 font-semibold">
                      {props.games}
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-row items-center justify-around mt-4">
                  <div className="w-auto flex flex-col items-center">
                    <label htmlFor="ranking" className="text-sm text-white">
                      Classificação
                    </label>
                    <p className="text-lg text-purple-600 font-semibold">
                      {props.classification}
                    </p>
                  </div>
                  <div className="w-auto flex flex-col items-center">
                    <label htmlFor="tag" className="text-sm text-white">
                      Tag
                    </label>
                    <p className="text-lg text-purple-600 font-semibold">
                      {props.tag}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-auto h-[90%] flex flex-row justify-between gap-4 col-span-2">
            <div className="w-[60%] flex flex-col justify-between">
              <div className="w-full flex flex-col items-center justify-center border-2 border-purple-800 bg-zinc-900 rounded-xl p-4 h-[70%]">
                <h2 className="text-purple-500 font-semibold text-lg mb-2">
                  Últimas Publicações
                </h2>
                <div className="w-full h-full border-2 border-purple-800 rounded-lg">
                  {allPosts}
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center border-2 border-purple-800 bg-zinc-900 rounded-xl p-4 h-[28%]">
                <h2 className="text-purple-500 font-semibold text-lg mb-2">
                  Página mais seguida
                </h2>
                <div className="w-[90%] h-[30px] border-2 border-purple-800 rounded-lg">
                  <p className="text-md text-center  text-purple-600 font-semibold">
                    {props.mostVisitedPage}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[40%] flex flex-col justify-between">
              <div className="w-full flex flex-col items-center justify-center border-2 border-purple-800 bg-zinc-900 rounded-xl p-4 h-[30%]">
                <h2 className="text-purple-500 font-semibold text-lg mb-2 text-center">
                  Horário de mais interação
                </h2>
                <div className="w-[60%] h-[30px] text-center  border-2 border-purple-800 rounded-lg">
                  <p className="text-md text-purple-600 font-semibold">
                    {mostActiveHour}
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center border-2 border-purple-800 bg-zinc-900 rounded-xl p-4 h-[68%]">
                <h2 className="text-purple-500 font-semibold text-lg mb-2">
                  Seguindo
                </h2>
                <div className="w-[90%] h-full  border-2 border-purple-800 rounded-lg">
                  {allFollowing}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

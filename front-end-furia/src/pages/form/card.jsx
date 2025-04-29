export default function Card(props) {
  // Função para capturar a tela e gerar o download

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[450px] h-[500px] shadow-lg" id="cardContainer">
        <div className="w-full h-full flex flex-col bg-zinc-900 items-center rounded-4xl justify-around p-6 shadow-[0_0px_10px_rgba(0,0,0,0.5)]  shadow-zinc-700 border border-zinc-600">
          <div className="w-[90%] flex justify-center">
            <img
              src="./furia-logo.png"
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
              <label htmlFor="age" className="text-sm font-semibold text-white">
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
  )
}

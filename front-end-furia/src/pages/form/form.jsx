import { useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useForm } from 'react-hook-form'
import Card from './card'
import { useNavigate } from 'react-router-dom'

export default function Formulario() {
  const { register, handleSubmit, setValue } = useForm()
  const navigate = useNavigate()

  const onSubmit = data => {
    console.log(data)
    navigate('/Card')
  }

  const [gamesOptions, setGamesOptions] = useState(
    'Qual o jogo voce mais aconpanha a Furia?'
  )
  const handleGamesOptions = item => {
    setGamesOptions(item)
    setValue('games', item)
  }

  const [image, setImage] = useState(null)

  const handleImageChange = event => {
    const file = event.target.files[0]
    if (file) {
      const imgUrl = URL.createObjectURL(file)
      setImage(imgUrl)
    }
  }

  return (
    <div className=" bg-zinc-900 p-6 rounded-xl shadow-lg w-full max-w-md mx-auto ">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Seção de Imagem */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold text-white mb-2">Foto de Perfil</h2>
          {image ? (
            <img
              src={image}
              alt="Perfil"
              className="w-24 h-24 rounded-full mb-3 object-cover"
            />
          ) : (
            <div className="text-zinc-400 text-sm mb-3">
              Nenhuma imagem selecionada
            </div>
          )}
          <input
            {...register('image')}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700"
          />
        </div>

        {/* Campos de Texto */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Nome</label>
            <input
              type="text"
              className="w-full text-sm rounded bg-zinc-800 text-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              placeholder="João"
              {...register('name', { required: true })}
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Nickname</label>
            <input
              type="text"
              className="w-full text-sm rounded bg-zinc-800 text-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              placeholder="nickname"
              {...register('nickname', { required: true })}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Idade</label>
            <input
              type="number"
              className="w-full text-sm rounded bg-zinc-800 text-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              placeholder="18"
              {...register('age', { required: true })}
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Twitter</label>
            <input
              type="text"
              className="w-full text-sm rounded bg-zinc-800 text-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              placeholder="@username"
              {...register('twitter', {
                required: true,
                pattern: {
                  value: /^@[A-Za-z0-9_]{1,15}$/,
                  message: 'Formato deve ser @username',
                },
              })}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="cityAndState"
            className="block text-sm text-zinc-300 mb-1"
          >
            Cidade/Estado
          </label>
          <input
            type="text"
            className="w-full text-sm rounded bg-zinc-800 text-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
            placeholder="São Paulo/SP"
            {...register('cityAndState', {
              required: true,
              pattern: {
                value: /^[A-Za-zÀ-ÿ\s]+\/[A-Za-z]{2}$/,
                message: 'Formato deve ser cidade/UF (ex: São Paulo/SP)',
              },
            })}
          />
        </div>

        {/* Dropdown de Jogos */}
        <div>
          <label htmlFor="games" className="block text-sm text-zinc-300 mb-1">
            Jogo Principal
          </label>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="w-full text-sm text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg py-2 px-3 transition-all cursor-pointer text-left">
              {gamesOptions || 'Selecione um jogo'}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-zinc-800 shadow-lg rounded-md p-1 w-full max-h-60 overflow-y-auto">
              {[
                'Counter-Strike 2 (CS2)',
                'League of Legends (LoL)',
                'Valorant',
                'Rainbow Six: Siege',
                'Rocket League',
                'Apex Legends',
                'PUBG: Battlegrounds',
                'Free Fire',
                'EA Sports FC (antigo FIFA)',
              ].map(game => (
                <DropdownMenu.Item
                  key={game}
                  onClick={() => handleGamesOptions(game, { required: true })}
                  className="text-white text-sm hover:bg-zinc-700 rounded p-2 cursor-pointer"
                >
                  {game}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>

        {/* Botão de Submit */}
        <button
          type="submit"
          className="w-full mt-4 text-white bg-purple-600 hover:bg-purple-700 rounded-lg py-2 px-4 transition-colors"
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}

// return (
//   <div className="bg-zinc-900 p-6 rounded-xl shadow-lg w-full max-w-md mx-auto mt-10">
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       action="submit"
//       className="w-full h-[90vh] max-w-md bg-zinc-900 p-6 rounded-xl shadow-lg border border-zinc-800"
//     >
//       <div className="w-full flex flex-col items-center mb-6">
//         <h2 className="text-2xl font-bold text-white mb-2">Foto de Perfil</h2>
//         <div>
//           {image ? (
//             <img
//               src={image}
//               alt="Perfil"
//               className="w-32 h-auto rounded-full mb-4"
//             />
//           ) : (
//             <div className="text-white">Nenhuma imagem escolhida</div>
//           )}
//         </div>
//         <input
//           {...register('image')}
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           placeholder="Selecione uma imagem"
//           className="w-full rounded-lg bg-zinc-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-white mb-1">Nome</label>
//         <input
//           type="text"
//           className="w-full rounded-lg bg-zinc-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           placeholder="João"
//           {...register('name')}
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-white mb-1">Nickname</label>
//         <input
//           type="text"
//           className="w-full rounded-lg bg-zinc-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           placeholder="nickname"
//           {...register('nickname')}
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-white mb-1">Idade</label>
//         <input
//           type="number"
//           className="w-full rounded-lg bg-zinc-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           placeholder="18"
//           {...register('age')}
//         />
//       </div>

//       <div className="mb-6">
//         <label className="block text-white mb-1">Twitter</label>
//         <input
//           type="text"
//           className="w-full rounded-lg bg-zinc-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           placeholder="@username"
// {...register('twitter', {
//   required: true,
//   pattern: {
//     value: /^@[A-Za-z0-9_]{1,15}$/,
//     message: 'Formato deve ser @username',
//   },
// })}
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-white mb-1">Cidade/Estado</label>
//         <input
//           type="text"
//           placeholder="São Paulo/SP"
//           className="w-full rounded-lg bg-zinc-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
// {...register('cityAndState', {
//   required: true,
//   pattern: {
//     value: /^[A-Za-zÀ-ÿ\s]+\/[A-Za-z]{2}$/,
//     message: 'Formato deve ser cidade/UF (ex: São Paulo/SP)',
//   },
// })}
//         />
//       </div>

//       <section className="mb-6">
//         <DropdownMenu.Root>
//           <DropdownMenu.Trigger
//             {...register('games')}
//             className="w-full text-white bg-purple-600 hover:bg-purple-700 rounded-lg py-2 px-4 mt-4 transition-all duration-300 cursor-pointer"
//           >
//             {gamesOptions}
//           </DropdownMenu.Trigger>

//           <DropdownMenu.Content className="bg-white shadow-md rounded-md p-2 w-48 flex flex-col gap-2">
//             <DropdownMenu.Item
//               onClick={() => handleGamesOptions('Counter-Strike 2 (CS2)')}
//               className="text-black font-semibold hover:bg-gray-300 hover:border border-gray-200 rounded-md p-2 transition-all duration-300"
//             >
//               Counter-Strike 2 (CS2)
//             </DropdownMenu.Item>
//             <DropdownMenu.Item
//               onClick={() => handleGamesOptions('League of Legends (LoL)')}
//               className="text-black font-semibold hover:bg-gray-300 hover:border border-gray-200 rounded-md p-2 transition-all duration-300"
//             >
//               League of Legends (LoL)
//             </DropdownMenu.Item>
//             <DropdownMenu.Item
//               onClick={() => handleGamesOptions('Valorant')}
//               className="text-black font-semibold hover:bg-gray-300 hover:border border-gray-200 rounded-md p-2 transition-all duration-300"
//             >
//               Valorant
//             </DropdownMenu.Item>
//             <DropdownMenu.Item
//               onClick={() => handleGamesOptions('Rainbow Six: Siege')}
//               className="text-black font-semibold hover:bg-gray-300 hover:border border-gray-200 rounded-md p-2 transition-all duration-300"
//             >
//               Rainbow Six: Siege
//             </DropdownMenu.Item>
//             <DropdownMenu.Item
//               onClick={() => handleGamesOptions('Rocket League')}
//               className="text-black font-semibold hover:bg-gray-300 hover:border border-gray-200 rounded-md p-2 transition-all duration-300"
//             >
//               Rocket League
//             </DropdownMenu.Item>
//             <DropdownMenu.Item
//               onClick={() => handleGamesOptions('Apex Legends')}
//               className="text-black font-semibold hover:bg-gray-300 hover:border border-gray-200 rounded-md p-2 transition-all duration-300"
//             >
//               Apex Legends
//             </DropdownMenu.Item>
//             <DropdownMenu.Item
//               onClick={() => handleGamesOptions('PUBG: Battlegrounds')}
//               className="text-black font-semibold hover:bg-gray-300 hover:border border-gray-200 rounded-md p-2 transition-all duration-300"
//             >
//               PUBG: Battlegrounds
//             </DropdownMenu.Item>
//             <DropdownMenu.Item
//               onClick={() => handleGamesOptions('Free Fire')}
//               className="text-black font-semibold hover:bg-gray-300 hover:border border-gray-200 rounded-md p-2 transition-all duration-300"
//             >
//               Free Fire
//             </DropdownMenu.Item>
//             <DropdownMenu.Item
//               onClick={() => handleGamesOptions('EA Sports FC (antigo FIFA)')}
//               className="text-black font-semibold hover:bg-gray-300 hover:border border-gray-200 rounded-md p-2 transition-all duration-300"
//             >
//               EA Sports FC (antigo FIFA)
//             </DropdownMenu.Item>
//           </DropdownMenu.Content>
//         </DropdownMenu.Root>
//       </section>

//       <div className="w-full flex items-center justify-center">
//         <button
//           type="submit"
//           className="w-auto flex items-center text-center text-white bg-purple-600 rounded-lg py-2 px-4 transition-transform duration-300 hover:scale-110  cursor-pointer"
//         >
//           Cadastrar
//         </button>
//       </div>
//     </form>
//   </div>
// )

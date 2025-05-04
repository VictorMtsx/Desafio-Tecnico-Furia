import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit()}
        className="w-full max-w-md bg-zinc-900 p-6 rounded-xl shadow-lg border border-zinc-800 flex flex-col gap-6"
      >
        <div className="w-full flex flex-col">
          <label htmlFor="nickname" className="text-white mb-2 font-semibold">
            Nickname
          </label>
          <input
            {...register('nickname')}
            id="nickname"
            type="text"
            placeholder="Seu nickname"
            className="w-full rounded-lg bg-zinc-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="twitter" className="text-white mb-2 font-semibold">
            Twitter
          </label>
          <input
            {...register('twitter')}
            id="twitter"
            type="text"
            placeholder="@username"
            className="w-full rounded-lg bg-zinc-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-purple-600 hover:bg-purple-700 rounded-lg py-2 px-4 mt-4 transition-all duration-300"
        >
          Entrar
        </button>

        <p className="text-white text-center">
          Não tem uma conta?
          <a href="/form" className="pl-2' text-purple-600">
            Clique aqui
          </a>
        </p>
      </form>
    </div>
  )
}

// () => {
//   window.location.href =
//     'https://043b-177-23-37-110.ngrok-free.app/login'
// }

import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

export function Stats() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative px-4 py-7 bg-gray-700 border border-gray-600 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
          1042
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Acesso ao link
        </span>

        <MousePointerClick className="absolute top-3 left-3 size=5 text-purple" />
      </div>

      <div className="relative px-4 py-7 bg-gray-700 border border-gray-600 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
          95
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Inscrições feitas
        </span>

        <BadgeCheck className="absolute top-3 left-3 size=5 text-purple" />
      </div>

      <div className="relative px-4 py-7 bg-gray-700 border border-gray-600 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
          3º
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Posição no ranking
        </span>

        <Medal className="absolute top-3 left-3 size=5 text-purple" />
      </div>
    </div>
  )
}

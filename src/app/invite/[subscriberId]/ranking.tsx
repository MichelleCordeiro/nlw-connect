import Image from 'next/image'
import cooper from '../../../assets/medal-cooper.svg'
import gold from '../../../assets/medal-gold.svg'
import silver from '../../../assets/medal-silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Michelle Cordeiro
          </span>
          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            853
          </span>

          <Image src={gold} alt="medal" className="absolute top-0 right-8" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Mic Cordeiro
          </span>
          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            79
          </span>

          <Image src={silver} alt="medal" className="absolute top-0 right-8" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Mi Cord
          </span>
          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            32
          </span>

          <Image src={cooper} alt="medal" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  )
}

import Image from "next/image";
import { siteConfig } from "@/config/site";

export function InfoStrip() {
  return (
    <div className="border-t border-white/10 pt-6 pb-4 lg:pt-8">
      <div className="flex items-start justify-between gap-6">
        <dl className="grid grid-cols-[auto_auto] gap-x-12 gap-y-1 sm:gap-x-24">
          <div>
            <dt className="text-xs font-medium uppercase tracking-[0.12em] text-hw-muted">
              Horario
            </dt>
            <dd className="mt-1 text-lg leading-tight font-medium text-hw-orange lg:text-xl">
              {siteConfig.schedule}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-[0.12em] text-hw-muted">
              Redes
            </dt>
            <dd className="mt-1 text-lg leading-tight font-medium text-hw-orange lg:text-xl">
              {siteConfig.socials}
            </dd>
          </div>
        </dl>
        <Image
          src="/images/mascots/mascota-papas.webp"
          alt=""
          width={241}
          height={252}
          className="-mt-1 mr-1 h-8 w-auto sm:mr-0"
        />
      </div>

    </div>
  );
}

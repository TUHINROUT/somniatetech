import Image from "next/image";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-center" aria-label="Somniate Solutions home">
      {light ? (
        <Image src="/images/logo-light.png" alt="Somniate Solutions" width={740} height={175} className="h-11 w-auto" />
      ) : (
        <Image src="/images/logo.png" alt="Somniate Solutions" width={724} height={156} priority className="h-9 w-auto lg:h-10" />
      )}
    </a>
  );
}

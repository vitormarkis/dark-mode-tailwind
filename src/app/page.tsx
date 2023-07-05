import { twMerge } from "tailwind-merge";
import CenteredContainer from "@/app/components/CenteredContainer";

const skills = [
  "Front-End",
  "Front-End",
  "Front-End",
  "Front-End",
  "Front-End",
  "Front-End",
];

export default function Home() {
  return (
    <div>
      <CenteredContainer className="grid place-items-center">
        <div className="max-w-[365px] flex flex-col p-6 rounded-lg border border-gray-05 dark:border-gray-02 font-poppins">
          <img
            src="/mentor-fulano.png"
            alt="Foto do fulano"
            className="block w-[88px] mb-4"
          />
          <h3 className="text-secondary-01 text-2xl font-bold mb-2">
            Ronald Richards
          </h3>
          <strong className="font-semibold text-gray-04">
            Software Engineer at Apple
          </strong>
          <span className="text-xs text-gray-03 mb-2">
            São Paulo, SP - Brasil
          </span>
          <div className="flex flex-wrap gap-2 mb-8">
            {skills.map(s => (
              <div className="grid place-items-center text-xs px-4 h-6 rounded-full bg-secondary-02 text-neutral-02 dark:bg-gray-01 dark:text-secondary-01">
                {s}
              </div>
            ))}
          </div>
          <p className="mb-8 text-gray-05">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum id quis ad qu
            minim...
          </p>
          <button
            className={twMerge(
              "h-12 bg-primary-03 hover:bg-primary-02 rounded-lg font-semibold text-neutral-01",
              "dark:text-secondary-05"
            )}
          >
            Ver perfil
          </button>
        </div>
      </CenteredContainer>
    </div>
  );
}

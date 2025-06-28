export const PortfolioDashboard = () => {
  return (
    <section className="flex flex-col justify-center p-4 rounded-lg border border-solid shadow-sm bg-neutral-900 border-zinc-800 max-w-[1968px] min-w-60 max-md:max-w-full">
      <div className="gap-2 w-full max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-1 items-center w-full max-md:max-w-full">
            <div className="flex gap-3 justify-center items-center self-stretch my-auto min-w-60">
              <h2 className="self-stretch my-auto text-3xl font-medium leading-none text-white">
                $ 999,000,000.12
              </h2>
              <span className="self-stretch my-auto text-sm text-green-500">
                +294.9%
              </span>
              <div className="flex overflow-hidden flex-col justify-center self-stretch w-14 max-w-[120px]">
                <div className="flex justify-center w-14 min-h-8">
                  <div className="flex flex-col flex-1 shrink justify-center w-full basis-0">
                    <div className="flex flex-1 w-full min-h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-start mt-2 w-full max-md:max-w-full">
            <div className="flex flex-1 shrink gap-2 pr-1 rounded-lg border border-solid shadow-sm basis-0 bg-white bg-opacity-0 border-white border-opacity-10">
              <div className="flex flex-col justify-center items-center self-start w-12 min-h-12">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1ba6bca58c0c2dfd275263106982d74b6e74c4a?placeholderIfAbsent=true"
                  className="object-contain aspect-square min-h-[29px] w-[29px]"
                  alt="USDC"
                />
              </div>
              <div className="flex overflow-hidden flex-col justify-center items-start pr-4 text-sm whitespace-nowrap">
                <div className="flex gap-1.5 items-center font-medium text-white min-h-5">
                  <span className="overflow-hidden self-stretch pt-0.5 pr-4 pb-px my-auto text-white">
                    USDC
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="overflow-hidden self-stretch my-auto text-zinc-400">
                    $175,000
                  </span>
                  <span className="self-stretch my-auto text-green-500">
                    +25.3%
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 pr-1 rounded-lg border border-solid shadow-sm bg-white bg-opacity-0 border-white border-opacity-10">
              <div className="flex flex-col justify-center items-center self-start w-12 min-h-12">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/436ce46a987b809484477fc89cac7578ab91ce31?placeholderIfAbsent=true"
                  className="object-contain aspect-[1.04] min-h-[29px] w-[29px]"
                  alt="USDT"
                />
              </div>
              <div className="flex overflow-hidden flex-col justify-center items-start pr-4 text-sm whitespace-nowrap">
                <div className="flex gap-1.5 items-center font-medium text-white min-h-5">
                  <span className="overflow-hidden self-stretch pt-0.5 pr-4 pb-px my-auto text-white">
                    USDT
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="overflow-hidden self-stretch my-auto text-zinc-400">
                    $175,000
                  </span>
                  <span className="self-stretch my-auto text-green-500">
                    +9999.3%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-start mt-2 w-full max-md:max-w-full">
            <div className="flex flex-1 shrink gap-2 pr-1 rounded-lg border border-solid shadow-sm basis-0 bg-white bg-opacity-0 border-white border-opacity-10">
              <div className="flex flex-col justify-center items-center self-start w-12 min-h-12">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e79e69978d8c7a19de60c3af3f60b9f435dec10?placeholderIfAbsent=true"
                  className="object-contain aspect-square min-h-[29px] w-[29px]"
                  alt="DAI"
                />
              </div>
              <div className="flex overflow-hidden flex-col justify-center items-start pr-4 text-sm whitespace-nowrap">
                <div className="flex gap-1.5 items-center font-medium text-white min-h-5">
                  <span className="overflow-hidden self-stretch pt-0.5 pr-4 pb-px my-auto text-white">
                    DAI
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="overflow-hidden self-stretch my-auto text-zinc-400">
                    $175,000
                  </span>
                  <span className="self-stretch my-auto text-green-500">
                    +27.3%
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 pr-1 rounded-lg border border-solid shadow-sm bg-white bg-opacity-0 border-white border-opacity-10">
              <div className="flex flex-col justify-center items-center self-start w-12 min-h-12">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8648e7c964647c4886cf52e7d1c8310b78c9a41a?placeholderIfAbsent=true"
                  className="object-contain aspect-[1.04] min-h-[29px] w-[29px]"
                  alt="PYUSD"
                />
              </div>
              <div className="flex overflow-hidden flex-col justify-center items-start pr-4 text-sm whitespace-nowrap">
                <div className="flex gap-1.5 items-center font-medium text-white min-h-5">
                  <span className="overflow-hidden self-stretch pt-0.5 pr-4 pb-px my-auto text-white">
                    PYUSD
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="overflow-hidden self-stretch my-auto text-zinc-400">
                    $175,000
                  </span>
                  <span className="self-stretch my-auto text-green-500">
                    +1800.3%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="flex-1 shrink self-stretch px-3.5 pt-1.5 pb-1.5 mt-2 w-full text-sm font-medium text-center text-white rounded-lg border border-solid basis-0 bg-neutral-900 border-zinc-800 max-md:max-w-full">
          Portfolio Dashboard
        </button>
      </div>
    </section>
  );
};

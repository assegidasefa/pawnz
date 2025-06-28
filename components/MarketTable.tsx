export const MarketTable = () => {
  return (
    <section>
      <header className="flex overflow-hidden flex-wrap gap-2.5 px-0 py-8 mt-2.5 w-full min-h-12 max-md:max-w-full">
        <h2 className="flex-1 shrink my-auto text-xl font-medium leading-none text-white whitespace-nowrap basis-6 min-w-60 max-md:max-w-full">
          Market
        </h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4eee5b13492d2b8db3cd507b99a5e2cc5bf1eb5?placeholderIfAbsent=true"
          className="object-contain shrink-0 my-auto w-24 aspect-[3]"
          alt="Controls"
        />
        <div className="flex gap-1.5 items-center h-full text-sm rounded border border-solid backdrop-blur bg-white bg-opacity-0 border-white border-opacity-10 text-zinc-400 w-[200px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6408ebbca9727b4ad6e05a04512309fe303cfb2c?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            alt="Search"
          />
          <div className="flex overflow-hidden flex-col flex-1 shrink justify-center self-stretch py-0.5 my-auto basis-0">
            <input
              type="text"
              placeholder="Search Collateral"
              className="overflow-hidden w-full text-zinc-400 bg-transparent border-none outline-none"
            />
          </div>
        </div>
        <button className="flex flex-col items-center w-8 h-8 rounded border border-solid backdrop-blur-[20px] bg-white bg-opacity-0 border-white border-opacity-10">
          <div className="flex justify-center items-center py-1 w-full rounded-lg min-h-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/72548541450b29e61bc9b7799b5ab35168045703?placeholderIfAbsent=true"
              className="object-contain self-stretch my-auto w-6 aspect-square"
              alt="Filter"
            />
          </div>
        </button>
      </header>

      <div className="overflow-hidden mt-2.5 w-full max-md:max-w-full">
        <div className="flex flex-col justify-center w-full rounded-lg max-md:max-w-full">
          <div className="gap-1 w-full max-md:max-w-full">
            <div className="flex flex-wrap w-full text-xs uppercase text-zinc-400 max-md:max-w-full">
              <div className="pt-2 pr-2 pb-2.5 pl-11 whitespace-nowrap w-[150px] max-md:pl-5">
                Coin
              </div>
              <div className="px-2 pt-2 pb-2.5 whitespace-nowrap w-[150px]">
                Collateral
              </div>
              <div className="px-2 pt-2 pb-2.5 w-[150px]">
                ASKING FOR
              </div>
              <div className="flex-1 shrink px-2 pt-2 pb-2.5 whitespace-nowrap basis-[37px]">
                FILL
              </div>
              <div className="px-2 pt-2 pb-2.5 text-right w-[150px]">
                TIME LEFT
              </div>
            </div>

            {/* Table Rows */}
            <div className="flex flex-wrap mt-1 w-full border-b border-zinc-800 max-md:max-w-full">
              <div className="flex overflow-hidden flex-col justify-center items-start pt-2 pb-2.5 pl-2 text-sm text-white whitespace-nowrap rounded w-[150px]">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f17df552beb6a3ae41b6b12ef84744289c2782fd?placeholderIfAbsent=true"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    alt="ShibaToken"
                  />
                  <div className="flex overflow-hidden flex-col justify-center self-stretch my-auto min-h-6 w-[150px]">
                    <span className="flex-1 shrink gap-1 self-stretch w-full text-white basis-0 min-w-[150px] text-ellipsis">
                      ShibaToken
                    </span>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden px-2 pt-2 pb-2.5 text-sm leading-none text-right text-white rounded w-[150px]">
                345M
              </div>
              <div className="flex overflow-hidden flex-col justify-center items-start px-2 pt-2 pb-2.5 text-sm leading-none text-right text-white rounded w-[150px]">
                <div className="flex gap-2 items-start">
                  <span className="text-white">12.1k</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d282a6f6c4758261cfe8894ea082ff5e01badb04?placeholderIfAbsent=true"
                    className="object-contain shrink-0 w-4 aspect-square"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex overflow-hidden flex-col flex-1 shrink justify-center px-2 pt-2 pb-2.5 text-xs text-black whitespace-nowrap rounded basis-0">
                <div className="flex flex-1 justify-between rounded border border-solid bg-white bg-opacity-0 border-white border-opacity-10 size-full">
                  <div className="gap-1 self-stretch pt-0 pb-8 h-full bg-white rounded border border-solid border-white border-opacity-10 pl-[var(--Spacing-space-8,] pr-[var(--Spacing-space-8,] w-[74px]">
                    60%
                  </div>
                  <div className="flex flex-1 shrink gap-1 pt-0 pb-4 my-auto rounded-none basis-4 h-[26px] pl-[var(--Spacing-space-4,] pr-[var(--Spacing-space-4,] w-[22px]" />
                </div>
              </div>
              <div className="overflow-hidden px-2 pt-2 pb-2.5 text-sm leading-none text-right text-white rounded w-[150px]">
                1d 30h 30m left
              </div>
              <div className="flex overflow-hidden flex-col justify-center items-end self-start p-2 rounded min-h-[41px] w-[68px]">
                <div className="flex flex-col flex-1 justify-center items-center p-1 w-full rounded-lg max-w-12">
                  <button className="flex justify-center items-center px-2 py-2.5 w-full rounded-lg max-w-10">
                    <div className="flex items-start self-stretch my-auto w-6">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b5a2fde09071358af8a8f216fb36024af8e394?placeholderIfAbsent=true"
                        className="object-contain w-6 aspect-square"
                        alt="Action"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Additional rows would follow the same pattern */}
            <div className="flex overflow-hidden flex-wrap mt-1 w-full rounded max-md:max-w-full">
              <div className="flex flex-col justify-center items-start pt-2 pb-2.5 pl-2 text-sm text-white whitespace-nowrap bg-white bg-opacity-10 w-[150px]">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f5064d8bee32e84945bdc5f27670e024ba7493f?placeholderIfAbsent=true"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    alt="CatCoin"
                  />
                  <div className="flex overflow-hidden flex-col justify-center self-stretch my-auto min-h-6 w-[150px]">
                    <span className="flex-1 shrink gap-1 self-stretch w-full text-white basis-0 min-w-[150px] text-ellipsis">
                      CatCoin
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-2 pt-2 pb-2.5 text-sm leading-none text-right text-white bg-white bg-opacity-10 w-[150px]">
                210M
              </div>
              <div className="flex flex-col justify-center items-start px-2 pt-2 pb-2.5 text-sm leading-none text-right text-white bg-white bg-opacity-10 w-[150px]">
                <div className="flex gap-2 items-start">
                  <span className="text-white">8.5k</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eac96e77cfafac542136a5e8397432f631b98b7?placeholderIfAbsent=true"
                    className="object-contain shrink-0 w-4 shadow-sm aspect-square"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 shrink justify-center px-2 pt-2 pb-2.5 text-xs text-black whitespace-nowrap basis-0 bg-white bg-opacity-10">
                <div className="flex flex-1 justify-between rounded border border-solid bg-white bg-opacity-0 border-white border-opacity-10 size-full">
                  <div className="flex-1 shrink gap-1 self-stretch pt-0 pb-8 h-full bg-white rounded border border-solid basis-0 border-white border-opacity-10 pl-[var(--Spacing-space-8,] pr-[var(--Spacing-space-8,]">
                    45%
                  </div>
                  <div className="flex flex-1 shrink gap-1 pt-0 pb-4 my-auto w-12 rounded-none basis-4 h-[26px] pl-[var(--Spacing-space-4,] pr-[var(--Spacing-space-4,]" />
                </div>
              </div>
              <div className="px-2 pt-2 pb-2.5 text-sm leading-none text-right text-white bg-white bg-opacity-10 w-[150px]">
                4h 15m left
              </div>
              <div className="flex flex-col justify-center items-end self-start p-2 bg-white bg-opacity-10 min-h-[41px] w-[68px]">
                <div className="flex flex-col flex-1 justify-center items-center p-1 w-full rounded-lg max-w-12">
                  <button className="flex justify-center items-center px-2 py-2.5 w-full rounded-lg max-w-10">
                    <div className="flex items-start self-stretch my-auto w-6">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b53d06d33d19b56a76a1e9dc9eb7637a3d27cbb?placeholderIfAbsent=true"
                        className="object-contain w-6 aspect-square"
                        alt="Action"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Highlighted row */}
            <div className="flex overflow-hidden flex-wrap mt-1 w-full rounded bg-amber-300 bg-opacity-10 max-md:max-w-full">
              <div className="flex flex-col justify-center items-start pt-2 pb-2.5 pl-2 text-sm text-white whitespace-nowrap bg-white bg-opacity-10 w-[150px]">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4884829d654399e97feaa7cab9fed4e0566c63b4?placeholderIfAbsent=true"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    alt="DoggoDollars"
                  />
                  <div className="flex overflow-hidden flex-col justify-center self-stretch my-auto min-h-6 w-[150px]">
                    <span className="flex-1 shrink gap-1 self-stretch w-full text-white basis-0 min-w-[150px] text-ellipsis">
                      DoggoDollars
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-2 pt-2 pb-2.5 text-sm leading-none text-right text-white bg-white bg-opacity-10 w-[150px]">
                500M
              </div>
              <div className="flex flex-col justify-center items-start px-2 pt-2 pb-2.5 text-sm leading-none text-right text-white bg-white bg-opacity-10 w-[150px]">
                <div className="flex gap-2 items-start">
                  <span className="text-white">22k</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d52c7e7cf8bedbc54fe6ed94640b74da36b6db05?placeholderIfAbsent=true"
                    className="object-contain shrink-0 w-4 shadow-sm aspect-square"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 shrink justify-center items-start pt-2 pb-2.5 pl-2 text-xs text-black whitespace-nowrap basis-0 bg-white bg-opacity-10">
                <div className="flex flex-1 justify-between rounded border border-solid bg-white bg-opacity-0 border-white border-opacity-10 max-w-[118px] size-full">
                  <div className="gap-1 self-stretch pt-0 pb-8 h-full bg-white rounded border border-solid border-white border-opacity-10 pl-[var(--Spacing-space-8,] pr-[var(--Spacing-space-8,] w-[74px]">
                    75%
                  </div>
                  <div className="flex flex-1 shrink gap-1 pt-0 pb-4 my-auto w-11 rounded-none basis-4 h-[26px] pl-[var(--Spacing-space-4,] pr-[var(--Spacing-space-4,]" />
                </div>
              </div>
              <div className="px-2 pt-2 pb-2.5 text-sm leading-none text-right text-white bg-white bg-opacity-10 w-[150px]">
                3h 50m left
              </div>
              <div className="flex flex-col justify-center items-end self-start p-2 bg-white bg-opacity-10 min-h-[41px] w-[68px]">
                <div className="flex flex-col flex-1 justify-center items-center p-1 w-full rounded-lg max-w-12">
                  <button className="flex justify-center items-center px-2 py-2.5 w-full rounded-lg max-w-10">
                    <div className="flex items-start self-stretch my-auto w-6">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/286e1200727597b60fe17ef91d2566e9512f8e68?placeholderIfAbsent=true"
                        className="object-contain w-6 aspect-square"
                        alt="Action"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Final row */}
            <div className="flex flex-wrap mt-1 w-full text-sm text-white max-md:max-w-full">
              <div className="flex flex-col justify-center items-start pt-2 pb-2.5 pl-2 whitespace-nowrap w-[150px]">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c63346b57a17bcf88804f1f186b7405ccdeebbc?placeholderIfAbsent=true"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.2]"
                    alt="PawPrints"
                  />
                  <div className="flex overflow-hidden flex-col justify-center self-stretch my-auto min-h-6 w-[150px]">
                    <span className="flex-1 shrink gap-1 self-stretch w-full text-white basis-0 min-w-[150px] text-ellipsis">
                      PawPrints
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-2 pt-2 pb-2.5 leading-none text-right text-white w-[150px]">
                150M
              </div>
              <div className="flex flex-col justify-center items-start px-2 pt-2 pb-2.5 leading-none text-right w-[150px]">
                <div className="flex gap-2 items-start">
                  <span className="text-white">5.2k</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d282a6f6c4758261cfe8894ea082ff5e01badb04?placeholderIfAbsent=true"
                    className="object-contain shrink-0 w-4 aspect-square"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 shrink justify-center px-2 pt-2 pb-2.5 text-xs text-black whitespace-nowrap basis-0">
                <div className="flex flex-1 justify-between rounded border border-solid bg-white bg-opacity-0 border-white border-opacity-10 size-full">
                  <div className="gap-1 self-stretch pt-0 pb-8 h-full bg-white rounded border border-solid border-white border-opacity-10 pl-[var(--Spacing-space-8,] pr-[var(--Spacing-space-8,] w-[74px]">
                    30%
                  </div>
                  <div className="flex flex-1 shrink gap-1 pt-0 pb-4 my-auto rounded-none basis-4 h-[21px] pl-[var(--Spacing-space-4,] pr-[var(--Spacing-space-4,] w-[90px]" />
                </div>
              </div>
              <div className="px-2 pt-2 pb-2.5 leading-none text-right text-white w-[150px]">
                5h 20m left
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { ActivityRow } from "./ActivityRow";

export const ActivitySidebar = () => {
  return (
    <aside className="overflow-hidden min-w-60 w-[560px] max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full min-h-16 max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-2 items-start self-stretch my-auto text-sm text-center whitespace-nowrap min-w-60 text-zinc-400">
          <button className="flex gap-1 justify-center items-center px-3 py-1.5 rounded border border-solid backdrop-blur-[20px] bg-white bg-opacity-0 border-white border-opacity-10 min-h-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/35f1328aac25a82ee9c3c981252a13f02ed8ee70?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt=""
            />
            <span className="self-stretch my-auto">Activity</span>
          </button>
          <button className="flex gap-1 justify-center items-center px-3 py-1.5 font-medium text-white rounded border border-solid backdrop-blur-[20px] bg-white bg-opacity-10 border-white border-opacity-10 min-h-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/25764e15b0aca1b00014a1cb7ae5d328519c2548?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt=""
            />
            <span className="self-stretch my-auto text-white">Listings</span>
          </button>
          <button className="flex gap-1 justify-center items-center px-3 py-1.5 rounded border border-solid backdrop-blur-[20px] bg-white bg-opacity-0 border-white border-opacity-10 min-h-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7130e330b277f36334b1d6bd3eed80e016091f9?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt=""
            />
            <span className="self-stretch my-auto">Auctions</span>
          </button>
        </div>

        <div className="flex gap-2 items-start self-stretch my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7d4a7d5d2545c2cd4e02ac418d732b7aa41dfc9?placeholderIfAbsent=true"
            className="object-contain shrink-0 w-16 aspect-[2]"
            alt="Controls"
          />
          <button className="flex flex-col items-center self-stretch w-8 h-8 rounded border border-solid backdrop-blur-[20px] bg-white bg-opacity-0 border-white border-opacity-10">
            <div className="flex justify-center items-center py-1 w-full rounded-lg min-h-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e1c2f6e23ce06598b3716e88cc9a250c74e5474?placeholderIfAbsent=true"
                className="object-contain self-stretch my-auto w-6 aspect-square"
                alt="Filter"
              />
            </div>
          </button>
          <button className="flex justify-center items-center px-1 w-8 h-8 rounded border border-solid backdrop-blur-[20px] bg-white bg-opacity-0 border-white border-opacity-10 min-h-8">
            <div className="flex items-start self-stretch my-auto w-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9fdecb951418d72970e76daad165115be503b5a?placeholderIfAbsent=true"
                className="object-contain w-6 aspect-square"
                alt="Menu"
              />
            </div>
          </button>
        </div>
      </div>

      <div className="flex overflow-hidden gap-3 items-start pt-0 pb-8 w-full text-xs uppercase whitespace-nowrap min-h-6 pl-[var(--Spacing-space-8,] pr-[var(--Spacing-space-8,] text-zinc-400 max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink gap-3 items-center pr-6 w-full basis-0 min-h-6 min-w-60 max-md:max-w-full">
          <div className="flex overflow-hidden flex-1 shrink gap-3 items-center self-stretch pl-2 my-auto basis-0 min-w-[150px]">
            <div className="flex shrink-0 self-stretch my-auto w-6 h-6 rounded" />
            <span className="flex-1 shrink gap-2.5 self-stretch my-auto basis-0">COIN</span>
          </div>
          <span className="flex-1 shrink gap-2.5 self-stretch h-full leading-5 basis-0 min-w-[70px]">Activity</span>
          <span className="flex-1 shrink gap-2.5 self-stretch my-auto leading-5 basis-0">ASK</span>
          <div className="self-stretch my-auto leading-5 w-[92px]">
            <span className="flex-1 shrink gap-3 basis-0 size-full">OFFER</span>
          </div>
          <span className="flex-1 shrink gap-2.5 self-stretch h-full leading-5 text-right basis-0">TIme</span>
        </div>
      </div>

      <div className="gap-1 py-0 w-full text-sm text-white pl-[var(--sds-size-space-0)] pr-[var(--sds-size-space-0)] max-md:max-w-full">
        <ActivityRow
          coinName="Ponke"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/9bd9073cc8ac57c3101c319ed8573dd098b217bc?placeholderIfAbsent=true"
          activity="Listed"
          activityColor="text-blue-500"
          askAmount="350M"
          askIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/03836fb263746213a7fa167603c6cc2b3eef0c19?placeholderIfAbsent=true"
          offerText="Offer"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="1m ago"
        />

        <ActivityRow
          coinName="ShibaToken"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/f17df552beb6a3ae41b6b12ef84744289c2782fd?placeholderIfAbsent=true"
          activity="Accepted"
          activityColor="text-emerald-600"
          askAmount="9.99M"
          askIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/4767a198ca3293b4b53df68a4c2b5b9e769df50c?placeholderIfAbsent=true"
          offerText="Top up"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="2m ago"
          highlighted={true}
        />

        <ActivityRow
          coinName="Floki Inu"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/9b7f9136a33f44a3f30c0648f289c885f153cea0?placeholderIfAbsent=true"
          activity="Listed"
          activityColor="text-blue-500"
          askAmount="3M"
          askIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/03836fb263746213a7fa167603c6cc2b3eef0c19?placeholderIfAbsent=true"
          offerText="Offer"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="3m ago"
        />

        <ActivityRow
          coinName="MemeMaster"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/9b7f9136a33f44a3f30c0648f289c885f153cea0?placeholderIfAbsent=true"
          activity="Pending"
          activityColor="text-red-400"
          askAmount="8M"
          askIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/03836fb263746213a7fa167603c6cc2b3eef0c19?placeholderIfAbsent=true"
          offerText="Cancel"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/439d865378ec6f4c54432b1c85fb39de7a4ce174?placeholderIfAbsent=true"
          offerColor="text-red-400"
          timeAgo="5m ago"
          highlighted={true}
        />

        <ActivityRow
          coinName="PuppyPunk"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/9079a227c581c7b03274efb28880a5dd8dd57e53?placeholderIfAbsent=true"
          activity="Listed"
          activityColor="text-blue-500"
          offerText="Offer"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="10m ago"
        />

        <ActivityRow
          coinName="CheemsCoin"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/4884829d654399e97feaa7cab9fed4e0566c63b4?placeholderIfAbsent=true"
          activity="Accepted"
          activityColor="text-emerald-600"
          askAmount="2M"
          askIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/273ecd07bdf2d5d8cb8969b4bf995c9087d3d081?placeholderIfAbsent=true"
          offerText="Top up"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="11m ago"
          highlighted={true}
        />

        <ActivityRow
          coinName="MoonMeme"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/4884829d654399e97feaa7cab9fed4e0566c63b4?placeholderIfAbsent=true"
          activity="Listed"
          activityColor="text-blue-500"
          askAmount="7M"
          askIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/03836fb263746213a7fa167603c6cc2b3eef0c19?placeholderIfAbsent=true"
          offerText="Offer"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="30m ago"
        />

        <ActivityRow
          coinName="WagmiCoin"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/89559b2d783d5bdffd16714f44751dd61d6e32a0?placeholderIfAbsent=true"
          activity="Listed"
          activityColor="text-blue-500"
          offerText="Offer"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="44m ago"
        />

        <ActivityRow
          coinName="Kishu Inu"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/9b7f9136a33f44a3f30c0648f289c885f153cea0?placeholderIfAbsent=true"
          activity="Listed"
          activityColor="text-blue-500"
          offerText="Offer"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="50m ago"
        />

        <ActivityRow
          coinName="HuskyToken"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/71d1d53facab75f7ec55274273c270436b2fa2fe?placeholderIfAbsent=true"
          activity="Listed"
          activityColor="text-blue-500"
          askAmount="1M"
          askIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/03836fb263746213a7fa167603c6cc2b3eef0c19?placeholderIfAbsent=true"
          offerText="Offer"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="1h ago"
        />

        <ActivityRow
          coinName="PikaPika"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/77a4f0cb3b05a7610332f8a73cbb85763b65952a?placeholderIfAbsent=true"
          activity="Accepted"
          activityColor="text-emerald-500"
          askAmount="4M"
          askIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/4767a198ca3293b4b53df68a4c2b5b9e769df50c?placeholderIfAbsent=true"
          offerText="Top up"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="1h 9m ago"
          highlighted={true}
        />

        <ActivityRow
          coinName="SnoopDoge"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/f17df552beb6a3ae41b6b12ef84744289c2782fd?placeholderIfAbsent=true"
          activity="Listed"
          activityColor="text-blue-500"
          offerText="Offer"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="1h 10m ago"
        />

        <ActivityRow
          coinName="MemeMagic"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/89559b2d783d5bdffd16714f44751dd61d6e32a0?placeholderIfAbsent=true"
          activity="Listed"
          activityColor="text-blue-500"
          offerText="Offer"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="1h 30m ago"
        />

        <ActivityRow
          coinName="FrogCoin"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/9079a227c581c7b03274efb28880a5dd8dd57e53?placeholderIfAbsent=true"
          activity="Listed"
          activityColor="text-blue-500"
          askAmount="6M"
          askIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/03836fb263746213a7fa167603c6cc2b3eef0c19?placeholderIfAbsent=true"
          offerText="Offer"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="1h 44m ago"
        />

        <ActivityRow
          coinName="CatnipCoin"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/d76c1f2e8858de3bf018602a5d24814c49ab3f02?placeholderIfAbsent=true"
          activity="Accepted"
          activityColor="text-emerald-500"
          askAmount="9M"
          askIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/273ecd07bdf2d5d8cb8969b4bf995c9087d3d081?placeholderIfAbsent=true"
          offerText="Top up"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="2h ago"
          highlighted={true}
        />

        <ActivityRow
          coinName="DogeDash"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/89559b2d783d5bdffd16714f44751dd61d6e32a0?placeholderIfAbsent=true"
          activity="Listed"
          activityColor="text-blue-500"
          askAmount="500K"
          askIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/4767a198ca3293b4b53df68a4c2b5b9e769df50c?placeholderIfAbsent=true"
          offerText="Offer"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="2h 30m ago"
        />

        <ActivityRow
          coinName="MemeFi"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/77a4f0cb3b05a7610332f8a73cbb85763b65952a?placeholderIfAbsent=true"
          activity="Listed"
          activityColor="text-blue-500"
          offerText="Offer"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="2h 33m ago"
        />

        <ActivityRow
          coinName="BarkToken"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/8f5064d8bee32e84945bdc5f27670e024ba7493f?placeholderIfAbsent=true"
          activity="Listed"
          activityColor="text-blue-500"
          askAmount="2.5M"
          askIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/03836fb263746213a7fa167603c6cc2b3eef0c19?placeholderIfAbsent=true"
          offerText="Offer"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="2h 44 m ago"
        />

        <ActivityRow
          coinName="PawPrints"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/9079a227c581c7b03274efb28880a5dd8dd57e53?placeholderIfAbsent=true"
          activity="Accepted"
          activityColor="text-emerald-500"
          askAmount="3.5M"
          askIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/03836fb263746213a7fa167603c6cc2b3eef0c19?placeholderIfAbsent=true"
          offerText="Top up"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="3h 12 m ago"
          highlighted={true}
        />

        <ActivityRow
          coinName="MemeMatic"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/71d1d53facab75f7ec55274273c270436b2fa2fe?placeholderIfAbsent=true"
          activity="Listed"
          activityColor="text-blue-500"
          offerText="Offer"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="9h 10m ago"
        />

        <ActivityRow
          coinName="Ponke"
          coinIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/9bd9073cc8ac57c3101c319ed8573dd098b217bc?placeholderIfAbsent=true"
          activity="Listed"
          activityColor="text-blue-500"
          askAmount="1.5M"
          askIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/273ecd07bdf2d5d8cb8969b4bf995c9087d3d081?placeholderIfAbsent=true"
          offerText="Offer"
          offerIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/08b973fc036df91b15633c883df50a22ac4a0878?placeholderIfAbsent=true"
          timeAgo="12h 2m ago"
        />
      </div>
    </aside>
  );
};

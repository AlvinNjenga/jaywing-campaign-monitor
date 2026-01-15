const CampaignTable = ({ campaigns }: { campaigns: Array<any> }) => {
  return (
    <div className="relative flex flex-col w-5xl h-fit overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
      <table className="w-full text-left table-auto min-w-max text-slate-800">
        <thead>
          <tr className="text-slate-50 border-b border-slate-300 bg-slate-500">
            <th className="p-4">
              <p className="text-sm leading-none font-normal">Campaign Name</p>
            </th>
            <th className="p-4 text-center">
              <p className="text-sm leading-none font-normal">Revenue</p>
            </th>
            <th className="p-4 text-center">
              <p className="text-sm leading-none font-normal">Cost</p>
            </th>
            <th className="p-4 text-center">
              <p className="text-sm leading-none font-normal">Clicks</p>
            </th>
            <th className="p-4 text-center">
              <p className="text-sm leading-none font-normal">ROAS</p>
            </th>
          </tr>
        </thead>
        <tbody>
            {campaigns.length === 0 && (
                <tr>
                    <td colSpan={5} className="p-4 text-center text-sm text-slate-500">
                        No campaign data available.
                    </td>
                </tr>
            )}
            {campaigns.map((campaign) => (
                <CampaignTableRow key={campaign.id} {...campaign} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

const CampaignTableRow = (data: any) => {
    const formattedRasIndex = data.roasIndex ? data.roasIndex.toFixed(2) : "---";


    return (
        <tr className={`${data.roasIndex !== null && data.roasIndex > 50 ? 'bg-green-200' : 'bg-grey-50'}`}>
            <td className="p-4">
              <p className="text-sm font-bold">{data.name}</p>
            </td>
            <td className="p-4 text-center">
              <p className="text-sm">£{data.revenue}</p>
            </td>
            <td className="p-4 text-center">
              <p className="text-sm">
                {!data.cost ? "---" : `£${data.cost}`}
            </p>
            </td>
            <td className="p-4 text-center">
              <p className="text-sm">{data.clicks}</p>
            </td>
            <td className="p-4 text-center">
              <p className="text-sm">{formattedRasIndex}</p>
            </td>
          </tr>
    )
};

export default CampaignTable;

import { Campaign } from "../types";
import { toNumber } from "../utils/dataUtils";

export function parseCampaignData(payload: any[]): Campaign[] {

    return payload.map(campaign => {
        const cost = toNumber(campaign.cost);
        const revenue = toNumber(campaign.revenue);
        const clicks = toNumber(campaign.clicks);
        const roasIndex = calculateRoasIndex(revenue, cost, clicks);

        return { 
            id: campaign.id,
            name: campaign.name,
            revenue: revenue || 0,
            cost: cost,
            clicks: clicks || 0,
            roasIndex: roasIndex
        };
    });
}

export const calculateRoasIndex = (revenue: number | null, cost: number | null, clicks: number | null): number | null => {
    if (!cost || cost <= 0) return null;
    
    const profit = revenue ? revenue - cost : 0 - cost;
    return profit / (clicks ? clicks + 1 : 1);
}
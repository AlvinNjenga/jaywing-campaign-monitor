import { parseCampaignData } from "../services/campaignService.ts";
import { Request, Response } from "express";
import { legacyCampaignData } from "../data/legacyCampaignData.ts";

export async function getPerformanceData(req: Request, res: Response) {
  const campaignData = parseCampaignData(legacyCampaignData);
    
  return res.status(200).json({data: campaignData});
}

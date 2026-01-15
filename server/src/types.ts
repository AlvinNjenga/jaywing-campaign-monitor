export interface Campaign {
    id: number;
    name: string;
    revenue: number;
    cost: number | null;
    clicks: number;
    roasIndex: number | null;
}
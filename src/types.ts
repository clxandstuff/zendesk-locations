export type Location = {
    id: string;
    createdAt: string;
    name: string;
    userCount: number;
    description: string;
};

export type ViewedLocation = Location & {
    viewCount: number;
}
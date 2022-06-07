export interface Data {
    name:       string;
    footprints: IFootprint[];
    challenges: IChallenge[];
    chart:      IChart[];
    rankings:   IRanking[];
}

export interface IChallenge {
    name:       string;
    value:      string;
    streakDays: number;
}

export interface IChart {
    name: string;
    uv:   string;
    pv:   string;
}

export enum Trend {
    Up = 'UP',
    Down = 'DOWN',
}

export interface IFootprint {
    category:     string;
    emitted:      string;
    emittedTrend: Trend;
    tip:          string;
}

export interface IRanking {
    leader: IUser;
    me:     IUser;
    before: IUser;
    after:  IUser;
}

export interface IUser {
    url:      string;
    value:    number;
    position: number;
}

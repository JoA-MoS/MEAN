enum Status {
    Undecided,
    NotPlaying,
    Playing
}


export class Player {
    _id: string;
    name: string;
    preferredPosition: string;
    // added an empty itme to match game number indexing
    gameStatuses: Status[] = [null, Status.Undecided, Status.Undecided, Status.Undecided];
}

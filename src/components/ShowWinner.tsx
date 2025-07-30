
export function ShowWinner({ winner }: { winner: number }) {
    const text: Record<number, string> = {
        [-1]: "Du gewinnst!",
        0: "Unentschieden",
        1: "Du verlierst",
    };

    return <h2>{text[winner]}</h2>;
}

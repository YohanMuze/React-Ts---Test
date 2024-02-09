export function CharacterScreen({ CharacterName }: { CharacterName: string }) {
    return (
        <div className="character-screen">
            <p>{CharacterName} screen</p>
        </div>
    );
}
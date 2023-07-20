import { Character } from "@/types/marvels";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CharacterCardProps {
    character: Character
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
    return (
        <div className="card w-full bg-base-200 shadown-xl px-3">
            <div>
                <Image
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt={character.name}
                    width={500}
                    height={400}
                    className="object-cover w-full"
                />
            </div>
            <div className="card-body">
                <h2 className="card-title">{character.name}</h2>
                <div className="card-actions justify-end">
                    <Link href={`character/${character.id}`} className="btn btn-primary">Detail</Link>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;

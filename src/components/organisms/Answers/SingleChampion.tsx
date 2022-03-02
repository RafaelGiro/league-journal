import { useEffect, useState } from "react";
import { ChampionPortrait } from "../../atoms/ChampionPortrait";
import { Typography } from "../../atoms/Typography";
import { SingleChampionProps } from "./interfaces";
import { ChampionsContainer, Portraits, Team } from "./styles";

export const SingleChampionAnswer = (props: SingleChampionProps) => {
  const { allyChampions, enemyChampions, handleChange } = props;
  const [selectedChampion, setSelectedChampion] = useState<string>("");

  useEffect(() => {
    handleChange(selectedChampion);
  }, [selectedChampion]);

  return (
    <ChampionsContainer>
      <Team>
        <Typography variant="title-2" style={{ textAlign: "center" }}>
          MY TEAM
        </Typography>
        <Portraits>
          {allyChampions.map((champion) => (
            <ChampionPortrait
              key={`ally-${champion.id}`}
              championId={champion.id}
              championName={champion.name}
              handlePress={setSelectedChampion}
              isActive={selectedChampion === champion.id}
            />
          ))}
        </Portraits>
      </Team>
      <Team>
        <Typography variant="title-2" style={{ textAlign: "center" }}>
          ENEMY TEAM
        </Typography>
        <Portraits>
          {enemyChampions.map((champion) => (
            <ChampionPortrait
              key={`enemy-${champion.id}`}
              championId={champion.id}
              championName={champion.name}
              handlePress={setSelectedChampion}
              isActive={selectedChampion === champion.id}
            />
          ))}
        </Portraits>
      </Team>
    </ChampionsContainer>
  );
};

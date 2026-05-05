import type { Prato } from "../data/pratos";
import {
  Card,
  ImageWrapper,
  CardImage,
  BadgeDestaque,
  BadgeCategoria,
  CardBody,
  CardHeader,
  PratoNome,
  Avaliacao,
  Estrela,
  Descricao,
  SaibaMaisButton,
} from "./PratoCard.styles";

interface PratoCardProps {
  prato: Prato;
}

export function PratoCard({ prato }: PratoCardProps) {
  return (
    <Card>
      <ImageWrapper>
        <CardImage src={prato.imagem} alt={prato.nome} loading="lazy" />
        {prato.destaqueSemana && (
          <BadgeDestaque>Destaque da semana</BadgeDestaque>
        )}
        <BadgeCategoria>{prato.categoria}</BadgeCategoria>
      </ImageWrapper>
      <CardBody>
        <CardHeader>
          <PratoNome>{prato.nome}</PratoNome>
          <Avaliacao>
            {prato.avaliacao}
            <Estrela>★</Estrela>
          </Avaliacao>
        </CardHeader>
        <Descricao>{prato.descricao}</Descricao>
        <SaibaMaisButton type="button">Saiba mais</SaibaMaisButton>
      </CardBody>
    </Card>
  );
}

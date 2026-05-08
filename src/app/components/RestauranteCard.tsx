import type { Restaurante } from "../types/api";
import {
  Card,
  ImageWrapper,
  CardImage,
  BadgeDestaque,
  BadgeTipo,
  CardBody,
  CardHeader,
  NomeRestaurante,
  Avaliacao,
  Estrela,
  Descricao,
  SaibaMaisLink,
} from "./RestauranteCard.styles";

interface Props {
  restaurante: Restaurante;
}

export function RestauranteCard({ restaurante }: Props) {
  return (
    <Card>
      <ImageWrapper>
        <CardImage
          src={restaurante.capa}
          alt={restaurante.titulo}
          loading="lazy"
        />
        {restaurante.destacado && (
          <BadgeDestaque>Destaque da semana</BadgeDestaque>
        )}
        <BadgeTipo>{restaurante.tipo}</BadgeTipo>
      </ImageWrapper>
      <CardBody>
        <CardHeader>
          <NomeRestaurante>{restaurante.titulo}</NomeRestaurante>
          <Avaliacao>
            {restaurante.avaliacao} <Estrela>★</Estrela>
          </Avaliacao>
        </CardHeader>
        <Descricao>{restaurante.descricao}</Descricao>
        <SaibaMaisLink to={`/restaurante/${restaurante.id}`}>Saiba mais</SaibaMaisLink>
      </CardBody>
    </Card>
  );
}

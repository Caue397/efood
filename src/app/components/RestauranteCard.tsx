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
  SaibaMaisButton,
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
        <SaibaMaisButton type="button">Saiba mais</SaibaMaisButton>
      </CardBody>
    </Card>
  );
}

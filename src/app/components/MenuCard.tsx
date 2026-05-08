import type { CardapioItem } from "../types/api";
import {
  Card,
  CardImage,
  CardBody,
  ItemNome,
  Descricao,
  AdicionarButton,
} from "./MenuCard.styles";

interface Props {
  item: CardapioItem;
  onAdicionar: () => void;
}

export function MenuCard({ item, onAdicionar }: Props) {
  return (
    <Card>
      <CardImage src={item.foto} alt={item.nome} loading="lazy" referrerPolicy="no-referrer" />
      <CardBody>
        <ItemNome>{item.nome}</ItemNome>
        <Descricao>{item.descricao}</Descricao>
        <AdicionarButton type="button" onClick={onAdicionar}>
          Adicionar ao carrinho
        </AdicionarButton>
      </CardBody>
    </Card>
  );
}

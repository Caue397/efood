import { useState } from "react";
import type { CardapioItem } from "../types/api";
import { Modal } from "./Modal";
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
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
      <Card>
        <CardImage src={item.foto} alt={item.nome} loading="lazy" referrerPolicy="no-referrer" />
        <CardBody>
          <ItemNome>{item.nome}</ItemNome>
          <Descricao>{item.descricao}</Descricao>
          <AdicionarButton type="button" onClick={() => setModalAberto(true)}>
            Mais detalhes
          </AdicionarButton>
        </CardBody>
      </Card>
      {modalAberto && (
        <Modal
          item={item}
          onClose={() => setModalAberto(false)}
          onAdicionar={onAdicionar}
        />
      )}
    </>
  );
}

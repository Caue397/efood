import type { CardapioItem } from "../types/api";
import {
  Overlay,
  ModalBox,
  ModalImage,
  ModalContent,
  ModalNome,
  ModalDescricao,
  ModalPorcao,
  AdicionarButton,
  CloseButton,
} from "./Modal.styles";

interface Props {
  item: CardapioItem;
  onClose: () => void;
  onAdicionar: () => void;
}

function formatarPreco(preco: number) {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function Modal({ item, onClose, onAdicionar }: Props) {
  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalBox>
        <CloseButton type="button" onClick={onClose} aria-label="Fechar">
          X
        </CloseButton>
        <ModalImage src={item.foto} alt={item.nome} referrerPolicy="no-referrer" />
        <ModalContent>
          <ModalNome>{item.nome}</ModalNome>
          <ModalDescricao>{item.descricao}</ModalDescricao>
          <ModalPorcao>Serve: {item.porcao}</ModalPorcao>
          <AdicionarButton
            type="button"
            onClick={() => {
              onAdicionar();
              onClose();
            }}
          >
            Adicionar ao carrinho — {formatarPreco(item.preco)}
          </AdicionarButton>
        </ModalContent>
      </ModalBox>
    </Overlay>
  );
}

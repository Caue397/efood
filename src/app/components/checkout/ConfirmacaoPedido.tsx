import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { concluirPedido } from "../../store/carrinhoSlice";
import { AvancarButton } from "./Checkout.styles";

const Titulo = styled.h2`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 24px;
`;

const Texto = styled.p`
  color: #ffffff;
  font-size: 14px;
  line-height: 1.65;
  margin: 0 0 16px;
`;

export function ConfirmacaoPedido() {
  const dispatch = useDispatch<AppDispatch>();
  const orderId = useSelector((s: RootState) => s.carrinho.orderId);

  return (
    <div>
      <Titulo>Pedido realizado{orderId ? ` — ${orderId}` : ""}!</Titulo>
      <Texto>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue ao endereço fornecido.
      </Texto>
      <Texto>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </Texto>
      <Texto>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e a de sua família.
      </Texto>
      <Texto>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </Texto>
      <AvancarButton type="button" onClick={() => dispatch(concluirPedido())}>
        Concluir
      </AvancarButton>
    </div>
  );
}

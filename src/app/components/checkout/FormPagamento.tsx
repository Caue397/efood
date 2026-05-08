import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { atualizarPagamento, setEtapa, setOrderId } from "../../store/carrinhoSlice";
import api from "../../network/axios";
import {
  FormTitulo,
  FormCampos,
  FormGrupo,
  FormLabel,
  FormInput,
  FormRow,
  AvancarButton,
  VoltarLink,
  ErroMsg,
} from "./Checkout.styles";

function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function FormPagamento() {
  const dispatch = useDispatch<AppDispatch>();
  const { pagamento, entrega, items } = useSelector((s: RootState) => s.carrinho);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  const total = items.reduce((acc, i) => acc + i.preco * i.quantidade, 0);

  function set(field: string, value: string) {
    dispatch(atualizarPagamento({ [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setCarregando(true);
    try {
      const { data } = await api.post("/checkout", {
        products: items.map((i) => ({ id: i.id, price: i.preco })),
        delivery: {
          receiver: entrega.receiver,
          address: {
            description: entrega.description,
            city: entrega.city,
            zipCode: entrega.zipCode,
            number: Number(entrega.number),
            complement: entrega.complement,
          },
        },
        payment: {
          card: {
            name: pagamento.cardName,
            number: pagamento.cardNumber,
            code: Number(pagamento.cvv),
            expires: {
              month: Number(pagamento.expiresMonth),
              year: Number(pagamento.expiresYear),
            },
          },
        },
      });
      dispatch(setOrderId(data.orderId ?? data.id ?? ""));
      dispatch(setEtapa("confirmacao"));
    } catch {
      setErro("Não foi possível concluir o pedido. Verifique os dados e tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormTitulo>Pagamento — Valor a pagar {formatarPreco(total)}</FormTitulo>
      <FormCampos>
        <FormGrupo>
          <FormLabel htmlFor="cardName">Nome no cartão</FormLabel>
          <FormInput
            id="cardName"
            value={pagamento.cardName}
            onChange={(e) => set("cardName", e.target.value)}
            required
          />
        </FormGrupo>
        <FormRow>
          <FormGrupo style={{ flex: 3 }}>
            <FormLabel htmlFor="cardNumber">Número do cartão</FormLabel>
            <FormInput
              id="cardNumber"
              value={pagamento.cardNumber}
              onChange={(e) => set("cardNumber", e.target.value)}
              required
            />
          </FormGrupo>
          <FormGrupo style={{ flex: 1 }}>
            <FormLabel htmlFor="cvv">CVV</FormLabel>
            <FormInput
              id="cvv"
              value={pagamento.cvv}
              onChange={(e) => set("cvv", e.target.value)}
              required
            />
          </FormGrupo>
        </FormRow>
        <FormRow>
          <FormGrupo>
            <FormLabel htmlFor="expiresMonth">Mês de vencimento</FormLabel>
            <FormInput
              id="expiresMonth"
              placeholder="MM"
              value={pagamento.expiresMonth}
              onChange={(e) => set("expiresMonth", e.target.value)}
              required
            />
          </FormGrupo>
          <FormGrupo>
            <FormLabel htmlFor="expiresYear">Ano de vencimento</FormLabel>
            <FormInput
              id="expiresYear"
              placeholder="AAAA"
              value={pagamento.expiresYear}
              onChange={(e) => set("expiresYear", e.target.value)}
              required
            />
          </FormGrupo>
        </FormRow>
      </FormCampos>
      {erro && <ErroMsg>{erro}</ErroMsg>}
      <AvancarButton type="submit" disabled={carregando}>
        {carregando ? "Processando..." : "Finalizar pagamento"}
      </AvancarButton>
      <VoltarLink type="button" onClick={() => dispatch(setEtapa("entrega"))}>
        Voltar para a edição de endereço
      </VoltarLink>
    </form>
  );
}

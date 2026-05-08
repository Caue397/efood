import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { atualizarEntrega, setEtapa } from "../../store/carrinhoSlice";
import {
  FormTitulo,
  FormCampos,
  FormGrupo,
  FormLabel,
  FormInput,
  FormRow,
  AvancarButton,
  VoltarLink,
} from "./Checkout.styles";

export function FormEntrega() {
  const dispatch = useDispatch<AppDispatch>();
  const entrega = useSelector((s: RootState) => s.carrinho.entrega);

  function set(field: string, value: string) {
    dispatch(atualizarEntrega({ [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(setEtapa("pagamento"));
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormTitulo>Entrega</FormTitulo>
      <FormCampos>
        <FormGrupo>
          <FormLabel htmlFor="receiver">Quem irá receber</FormLabel>
          <FormInput
            id="receiver"
            value={entrega.receiver}
            onChange={(e) => set("receiver", e.target.value)}
            required
          />
        </FormGrupo>
        <FormGrupo>
          <FormLabel htmlFor="description">Endereço</FormLabel>
          <FormInput
            id="description"
            value={entrega.description}
            onChange={(e) => set("description", e.target.value)}
            required
          />
        </FormGrupo>
        <FormGrupo>
          <FormLabel htmlFor="city">Cidade</FormLabel>
          <FormInput
            id="city"
            value={entrega.city}
            onChange={(e) => set("city", e.target.value)}
            required
          />
        </FormGrupo>
        <FormRow>
          <FormGrupo>
            <FormLabel htmlFor="zipCode">CEP</FormLabel>
            <FormInput
              id="zipCode"
              value={entrega.zipCode}
              onChange={(e) => set("zipCode", e.target.value)}
              required
            />
          </FormGrupo>
          <FormGrupo>
            <FormLabel htmlFor="number">Número</FormLabel>
            <FormInput
              id="number"
              type="number"
              value={entrega.number}
              onChange={(e) => set("number", e.target.value)}
              required
            />
          </FormGrupo>
        </FormRow>
        <FormGrupo>
          <FormLabel htmlFor="complement">Complemento (opcional)</FormLabel>
          <FormInput
            id="complement"
            value={entrega.complement}
            onChange={(e) => set("complement", e.target.value)}
          />
        </FormGrupo>
      </FormCampos>
      <AvancarButton type="submit">Continuar com o pagamento</AvancarButton>
      <VoltarLink type="button" onClick={() => dispatch(setEtapa("carrinho"))}>
        Voltar para o carrinho
      </VoltarLink>
    </form>
  );
}

import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { setEtapa, setOrderId } from "../../store/carrinhoSlice";
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
  ErroField,
} from "./Checkout.styles";

const currentYear = new Date().getFullYear();

const schema = yup.object({
  cardName: yup.string().required("Campo obrigatório"),
  cardNumber: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^\d{16}$/, "Informe os 16 dígitos"),
  cvv: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^\d{3,4}$/, "CVV inválido"),
  expiresMonth: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^\d{1,2}$/, "Mês inválido")
    .test("mes-valido", "Mês inválido", (v) => Number(v) >= 1 && Number(v) <= 12),
  expiresYear: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^\d{4}$/, "Ano inválido (4 dígitos)")
    .test("ano-valido", "Ano expirado", (v) => Number(v) >= currentYear),
});

function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function FormPagamento() {
  const dispatch = useDispatch<AppDispatch>();
  const { pagamento, entrega, items } = useSelector((s: RootState) => s.carrinho);
  const [erro, setErro] = useState("");

  const total = items.reduce((acc, i) => acc + i.preco * i.quantidade, 0);

  const formik = useFormik({
    initialValues: {
      cardName: pagamento.cardName,
      cardNumber: pagamento.cardNumber,
      cvv: pagamento.cvv,
      expiresMonth: pagamento.expiresMonth,
      expiresYear: pagamento.expiresYear,
    },
    validationSchema: schema,
    onSubmit: async (values, { setSubmitting }) => {
      setErro("");
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
              name: values.cardName,
              number: values.cardNumber,
              code: Number(values.cvv),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear),
              },
            },
          },
        });
        dispatch(setOrderId(data.orderId ?? data.id ?? ""));
        dispatch(setEtapa("confirmacao"));
      } catch {
        setErro("Não foi possível concluir o pedido. Verifique os dados e tente novamente.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormTitulo>Pagamento — Valor a pagar {formatarPreco(total)}</FormTitulo>
      <FormCampos>
        <FormGrupo>
          <FormLabel htmlFor="cardName">Nome no cartão</FormLabel>
          <FormInput id="cardName" {...formik.getFieldProps("cardName")} />
          {formik.touched.cardName && formik.errors.cardName && (
            <ErroField>{formik.errors.cardName}</ErroField>
          )}
        </FormGrupo>
        <FormRow>
          <FormGrupo style={{ flex: 3 }}>
            <FormLabel htmlFor="cardNumber">Número do cartão</FormLabel>
            <FormInput id="cardNumber" {...formik.getFieldProps("cardNumber")} />
            {formik.touched.cardNumber && formik.errors.cardNumber && (
              <ErroField>{formik.errors.cardNumber}</ErroField>
            )}
          </FormGrupo>
          <FormGrupo style={{ flex: 1 }}>
            <FormLabel htmlFor="cvv">CVV</FormLabel>
            <FormInput id="cvv" {...formik.getFieldProps("cvv")} />
            {formik.touched.cvv && formik.errors.cvv && (
              <ErroField>{formik.errors.cvv}</ErroField>
            )}
          </FormGrupo>
        </FormRow>
        <FormRow>
          <FormGrupo>
            <FormLabel htmlFor="expiresMonth">Mês de vencimento</FormLabel>
            <FormInput
              id="expiresMonth"
              placeholder="MM"
              {...formik.getFieldProps("expiresMonth")}
            />
            {formik.touched.expiresMonth && formik.errors.expiresMonth && (
              <ErroField>{formik.errors.expiresMonth}</ErroField>
            )}
          </FormGrupo>
          <FormGrupo>
            <FormLabel htmlFor="expiresYear">Ano de vencimento</FormLabel>
            <FormInput
              id="expiresYear"
              placeholder="AAAA"
              {...formik.getFieldProps("expiresYear")}
            />
            {formik.touched.expiresYear && formik.errors.expiresYear && (
              <ErroField>{formik.errors.expiresYear}</ErroField>
            )}
          </FormGrupo>
        </FormRow>
      </FormCampos>
      {erro && <ErroMsg>{erro}</ErroMsg>}
      <AvancarButton type="submit" disabled={formik.isSubmitting}>
        {formik.isSubmitting ? "Processando..." : "Finalizar pagamento"}
      </AvancarButton>
      <VoltarLink type="button" onClick={() => dispatch(setEtapa("entrega"))}>
        Voltar para a edição de endereço
      </VoltarLink>
    </form>
  );
}

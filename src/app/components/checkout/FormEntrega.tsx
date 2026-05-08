import { useFormik } from "formik";
import * as yup from "yup";
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
  ErroField,
} from "./Checkout.styles";

const schema = yup.object({
  receiver: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  zipCode: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^\d{5}-?\d{3}$/, "CEP inválido"),
  number: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^\d+$/, "Número inválido"),
  complement: yup.string(),
});

export function FormEntrega() {
  const dispatch = useDispatch<AppDispatch>();
  const entrega = useSelector((s: RootState) => s.carrinho.entrega);

  const formik = useFormik({
    initialValues: {
      receiver: entrega.receiver,
      description: entrega.description,
      city: entrega.city,
      zipCode: entrega.zipCode,
      number: entrega.number,
      complement: entrega.complement,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(atualizarEntrega(values));
      dispatch(setEtapa("pagamento"));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormTitulo>Entrega</FormTitulo>
      <FormCampos>
        <FormGrupo>
          <FormLabel htmlFor="receiver">Quem irá receber</FormLabel>
          <FormInput id="receiver" {...formik.getFieldProps("receiver")} />
          {formik.touched.receiver && formik.errors.receiver && (
            <ErroField>{formik.errors.receiver}</ErroField>
          )}
        </FormGrupo>
        <FormGrupo>
          <FormLabel htmlFor="description">Endereço</FormLabel>
          <FormInput id="description" {...formik.getFieldProps("description")} />
          {formik.touched.description && formik.errors.description && (
            <ErroField>{formik.errors.description}</ErroField>
          )}
        </FormGrupo>
        <FormGrupo>
          <FormLabel htmlFor="city">Cidade</FormLabel>
          <FormInput id="city" {...formik.getFieldProps("city")} />
          {formik.touched.city && formik.errors.city && (
            <ErroField>{formik.errors.city}</ErroField>
          )}
        </FormGrupo>
        <FormRow>
          <FormGrupo>
            <FormLabel htmlFor="zipCode">CEP</FormLabel>
            <FormInput id="zipCode" {...formik.getFieldProps("zipCode")} />
            {formik.touched.zipCode && formik.errors.zipCode && (
              <ErroField>{formik.errors.zipCode}</ErroField>
            )}
          </FormGrupo>
          <FormGrupo>
            <FormLabel htmlFor="number">Número</FormLabel>
            <FormInput id="number" {...formik.getFieldProps("number")} />
            {formik.touched.number && formik.errors.number && (
              <ErroField>{formik.errors.number}</ErroField>
            )}
          </FormGrupo>
        </FormRow>
        <FormGrupo>
          <FormLabel htmlFor="complement">Complemento (opcional)</FormLabel>
          <FormInput id="complement" {...formik.getFieldProps("complement")} />
        </FormGrupo>
      </FormCampos>
      <AvancarButton type="submit">Continuar com o pagamento</AvancarButton>
      <VoltarLink type="button" onClick={() => dispatch(setEtapa("carrinho"))}>
        Voltar para o carrinho
      </VoltarLink>
    </form>
  );
}

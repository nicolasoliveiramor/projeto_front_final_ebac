import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik, getIn } from 'formik'
import * as Yup from 'yup'
import ReactInputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { clear, close, closeCheckout, open } from '../../store/reducers/cart'
import { getTotalPrice, formataPreco } from '../../utils'

import * as S from './styles'
import { usePurchaseMutation } from '../../services/api'

export const Checkout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isPaying, setIsPaying] = useState(false)
  const [isFinalized, setIsFinalized] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const { items, isCheckoutOpen } = useSelector(
    (state: RootReducer) => state.cart
  )

  const handleCloseCart = () => {
    dispatch(closeCheckout())
    dispatch(open())
  }

  const handleFinalization = () => {
    setTimeout(() => {
      navigate('/')
    }, 300)
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const checkInputHasError = (fieldname: string) => {
    const error = getIn(form.errors, fieldname)
    const touch = getIn(form.touched, fieldname)

    return touch && error
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: {
        description: '',
        city: '',
        zipCode: '',
        number: '',
        complement: ''
      },
      card: {
        name: '',
        number: '',
        code: '',
        expires: {
          month: '',
          year: ''
        }
      }
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('Campo obrigatório'),
      address: Yup.object({
        description: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Campo obrigatório'),
        zipCode: Yup.string().required('Campo obrigatório'),
        number: Yup.string()
          .length(4, 'Deve ter exatamente 4 dígitos')
          .required('Campo obrigatório'),
        complement: Yup.string()
      }),
      card: Yup.object({
        name: Yup.string().required('Campo obrigatório'),
        number: Yup.string()
          .max(16, 'Deve ter 16 dígitos')
          .required('Campo obrigatório'),
        code: Yup.string()
          .min(3, 'Mínimo 3 dígitos')
          .max(4, 'Máximo 4 dígitos')
          .required('Campo obrigatório'),
        expires: Yup.object({
          month: Yup.string()
            .max(2, 'Deve ter 2 dígitos')
            .required('Campo obrigatório'),
          year: Yup.string()
            .max(4, 'Deve ter 4 dígitos')
            .required('Campo obrigatório')
        })
      })
    }),
    onSubmit: (values) => {
      setIsFinalized(true)
      setIsPaying(false)
      form.resetForm()

      console.log('Formik submit chamado!', values)

      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address.description,
            city: values.address.city,
            zipCode: values.address.zipCode,
            number: Number(values.address.number),
            complement: values.address.complement
          }
        },
        payment: {
          card: {
            name: values.card.name,
            number: values.card.number,
            code: Number(values.card.code),
            expires: {
              month: Number(values.card.expires.month),
              year: Number(values.card.expires.year)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  return (
    <S.DeliveryContainer className={isCheckoutOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => dispatch(close())} />
      <>
        {isSuccess && data && isFinalized ? (
          <S.Sidebar>
            <span>Pedido realizado - {data.orderId}</span>
            <br />
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <br />
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <br />
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <br />
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <br />
            <S.ButtonDelivery
              type="button"
              title="Button"
              onClick={() => {
                handleFinalization()
                setIsFinalized(false)
              }}
            >
              Concluir
            </S.ButtonDelivery>
          </S.Sidebar>
        ) : (
          <S.Sidebar>
            <S.Form onSubmit={form.handleSubmit}>
              {!isPaying ? (
                <>
                  <p>Entrega</p>
                  <S.FormItem>
                    <label htmlFor="receiver">Quem irá receber</label>
                    <input
                      id="receiver"
                      type="text"
                      name="receiver"
                      value={form.values.receiver}
                      onChange={form.handleChange}
                    />
                  </S.FormItem>
                  <S.FormItem>
                    <label htmlFor="description">Endereço</label>
                    <input
                      id="description"
                      type="text"
                      name="address.description"
                      value={form.values.address.description}
                      onChange={form.handleChange}
                    />
                  </S.FormItem>
                  <S.FormItem>
                    <label htmlFor="city">Cidade</label>
                    <input
                      id="city"
                      type="text"
                      name="address.city"
                      value={form.values.address.city}
                      onChange={form.handleChange}
                    />
                  </S.FormItem>
                  <div>
                    <S.FormItem maxwidth="155px">
                      <label htmlFor="zipCode">CEP</label>
                      <ReactInputMask
                        id="zipCode"
                        type="text"
                        name="address.zipCode"
                        value={form.values.address.zipCode}
                        onChange={form.handleChange}
                        mask="99999-999"
                        className={
                          checkInputHasError('address.zipCode') ? 'error' : ''
                        }
                      />
                    </S.FormItem>
                    <S.FormItem maxwidth="155px">
                      <label htmlFor="number">Número</label>
                      <input
                        id="number"
                        type="text"
                        name="address.number"
                        value={form.values.address.number}
                        onChange={form.handleChange}
                      />
                    </S.FormItem>
                  </div>
                  <S.FormItem marginbotton="24px">
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      id="complement"
                      type="text"
                      name="address.complement"
                      value={form.values.address.complement}
                      onChange={form.handleChange}
                    />
                  </S.FormItem>
                  <S.ButtonDelivery
                    type="button"
                    title="Button"
                    onClick={() => setIsPaying(true)}
                  >
                    Continuar para pagamento
                  </S.ButtonDelivery>
                  <S.ButtonDelivery
                    type="button"
                    onClick={() => {
                      setIsPaying(false)
                      handleCloseCart()
                    }}
                  >
                    Voltar para o carrinho
                  </S.ButtonDelivery>
                </>
              ) : (
                <>
                  <span>
                    Pagamento - Valor a pagar{' '}
                    {formataPreco(getTotalPrice(items))}
                  </span>
                  <S.FormItem>
                    <label htmlFor="card.name">Nome no cartão</label>
                    <input
                      id="card.name"
                      type="text"
                      name="card.name"
                      value={form.values.card.name}
                      onChange={form.handleChange}
                    />
                  </S.FormItem>
                  <div>
                    <S.FormItem maxwidth="228px">
                      <label htmlFor="card.number">Número do cartão</label>
                      <ReactInputMask
                        id="card.number"
                        type="text"
                        name="card.number"
                        value={form.values.card.number}
                        onChange={form.handleChange}
                        mask="9999 9999 9999 9999"
                        className={
                          checkInputHasError('card.number') ? 'error' : ''
                        }
                      />
                    </S.FormItem>
                    <S.FormItem maxwidth="87px">
                      <label htmlFor="card.code">CVV</label>
                      <ReactInputMask
                        id="card.code"
                        type="text"
                        name="card.code"
                        value={form.values.card.code}
                        onChange={form.handleChange}
                        mask="9999"
                      />
                    </S.FormItem>
                  </div>
                  <div>
                    <S.FormItem marginbotton="24px" maxwidth="155px">
                      <label htmlFor="card.expires.month">
                        Mês do vencimento
                      </label>
                      <ReactInputMask
                        id="card.expires.month"
                        type="text"
                        name="card.expires.month"
                        value={form.values.card.expires.month}
                        onChange={form.handleChange}
                        mask="99"
                      />
                    </S.FormItem>
                    <S.FormItem maxwidth="155px">
                      <label htmlFor="card.expires.year">
                        Ano do vencimento
                      </label>
                      <ReactInputMask
                        id="card.expires.year"
                        type="text"
                        name="card.expires.year"
                        value={form.values.card.expires.year}
                        onChange={form.handleChange}
                        mask="9999"
                      />
                    </S.FormItem>
                  </div>
                  <S.ButtonDelivery type="submit" title="Submit">
                    Finalizar pagamento
                  </S.ButtonDelivery>
                  <S.ButtonDelivery
                    type="button"
                    title="Button"
                    onClick={() => {
                      setIsPaying(false)
                    }}
                  >
                    Voltar para a edição de endereço
                  </S.ButtonDelivery>
                </>
              )}
            </S.Form>
          </S.Sidebar>
        )}
      </>
    </S.DeliveryContainer>
  )
}

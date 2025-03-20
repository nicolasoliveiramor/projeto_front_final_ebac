import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik, getIn } from 'formik'
import * as Yup from 'yup'
import ReactInputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { clear, open, closeCheckout } from '../../store/reducers/cart'
import { getTotalPrice, formataprice } from '../../utils'
import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

export const Checkout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isPaying, setIsPaying] = useState(false)
  const [isFinalized, setIsFinalized] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const { items, isCheckoutOpen } = useSelector(
    (state: RootReducer) => state.cart
  )

  const handleCloseCart = () => {
    dispatch(closeCheckout())
    dispatch(open())
  }

  const checkInputHasError = (fieldname: string, message?: string) => {
    const isError = getIn(form.errors, fieldname)
    const isTouched = getIn(form.touched, fieldname)

    if (isError && isTouched) return message

    return ''
  }

  const checkInputIsReady = () => {
    form.setTouched({
      receiver: true,
      address: {
        description: true,
        city: true,
        zipCode: true,
        number: true,
        complement: true
      }
    })

    const isValid =
      form.values.receiver.trim() !== '' &&
      form.values.address.description.trim() !== '' &&
      form.values.address.city.trim() !== '' &&
      form.values.address.zipCode.trim() !== '' &&
      form.values.address.number.trim() !== ''

    if (isValid) {
      setIsPaying(true)
    }
  }

  useEffect(() => {
    if (isCheckoutOpen) {
      setIsPaying(false)
      setIsFinalized(false)
    }
  }, [isCheckoutOpen])

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
      receiver: Yup.string().required('O campo é obrigatório'),
      address: Yup.object({
        description: Yup.string().required('O campo é obrigatório'),
        city: Yup.string().required('O campo é obrigatório'),
        zipCode: Yup.string().required('O campo é obrigatório'),
        number: Yup.string().required('O campo é obrigatório')
      }),
      card: Yup.object({
        name: Yup.string().required('O campo é obrigatório'),
        number: Yup.string().required('O campo é obrigatório'),
        code: Yup.string().required('O campo é obrigatório'),
        expires: Yup.object({
          month: Yup.string().required('O campo é obrigatório'),
          year: Yup.string().required('O campo é obrigatório')
        })
      })
    }),
    onSubmit: async (values) => {
      form.resetForm()

      try {
        const response = await purchase({
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

        if (response) {
          setIsFinalized(true)
        }
      } catch (error) {
        console.error(error)
      }
    }
  })

  return (
    <S.DeliveryContainer className={isCheckoutOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => dispatch(closeCheckout())} />
      <>
        {isFinalized && isSuccess && data ? (
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
                setIsFinalized(false)
                dispatch(clear())
                navigate('/')
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
                    <small>
                      {checkInputHasError('receiver', form.errors.receiver)}
                    </small>
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
                    <small>
                      {checkInputHasError(
                        'address.description',
                        form.errors.address?.description
                      )}
                    </small>
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
                    <small>
                      {checkInputHasError(
                        'address.city',
                        form.errors.address?.city
                      )}
                    </small>
                  </S.FormItem>
                  <div>
                    <S.FormItem className="cep">
                      <label htmlFor="zipCode">CEP</label>
                      <S.StyledReactInputMask
                        id="zipCode"
                        type="text"
                        name="address.zipCode"
                        value={form.values.address.zipCode}
                        onChange={form.handleChange}
                        mask="99999-999"
                        placeholder="00000-000"
                      />
                      <small>
                        {checkInputHasError(
                          'address.zipCode',
                          form.errors.address?.zipCode
                        )}
                      </small>
                    </S.FormItem>
                    <S.FormItem className="address_number">
                      <label htmlFor="number">Número</label>
                      <input
                        id="number"
                        type="text"
                        name="address.number"
                        value={form.values.address.number}
                        onChange={form.handleChange}
                      />
                      <small>
                        {checkInputHasError(
                          'address.number',
                          form.errors.address?.number
                        )}
                      </small>
                    </S.FormItem>
                  </div>
                  <S.FormItem marginbottom="24px">
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
                    onClick={() => checkInputIsReady()}
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
                    {formataprice(getTotalPrice(items))}
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
                    <small>
                      {checkInputHasError('card.name', form.errors.card?.name)}
                    </small>
                  </S.FormItem>
                  <div>
                    <S.FormItem className="card_number">
                      <label htmlFor="card.number">Número do cartão</label>
                      <S.StyledReactInputMask
                        id="card.number"
                        type="text"
                        name="card.number"
                        value={form.values.card.number}
                        onChange={form.handleChange}
                        mask="9999 9999 9999 9999"
                        placeholder="0000-0000-0000-0000"
                      />
                      <small>
                        {checkInputHasError(
                          'card.number',
                          form.errors.card?.number
                        )}
                      </small>
                    </S.FormItem>
                    <S.FormItem className="cvv">
                      <label htmlFor="card.code">CVV</label>
                      <S.StyledReactInputMask
                        id="card.code"
                        type="text"
                        name="card.code"
                        value={form.values.card.code}
                        onChange={form.handleChange}
                        mask="9999"
                        placeholder="000 ou 0000"
                      />
                      <small>
                        {checkInputHasError(
                          'card.code',
                          form.errors.card?.code
                        )}
                      </small>
                    </S.FormItem>
                  </div>
                  <div>
                    <S.FormItem marginbottom="24px">
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
                      <small>
                        {checkInputHasError(
                          'card.expires.month',
                          form.errors.card?.expires?.month
                        )}
                      </small>
                    </S.FormItem>
                    <S.FormItem>
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
                      <small>
                        {checkInputHasError(
                          'card.expires.year',
                          form.errors.card?.expires?.year
                        )}
                      </small>
                    </S.FormItem>
                  </div>
                  <S.ButtonDelivery
                    type="submit"
                    title="Submit"
                    disabled={isLoading}
                  >
                    {isLoading
                      ? 'Finalizando pagamento...'
                      : 'Finalizar pagamento'}
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

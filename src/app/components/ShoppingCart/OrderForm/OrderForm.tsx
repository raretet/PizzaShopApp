import { useForm, SubmitHandler } from 'react-hook-form'
import s from './OrderForm.module.scss'

type OrderFormType = {
  name: string
  phone: string
  address: string
  paymentOption: string
}

export default function OrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<OrderFormType>()

  const onSubmit: SubmitHandler<OrderFormType> = (data) => {
    console.log(data)
  }

  const validatePhone = (value: string) => {
    const pattern = /^(\+7|8)?\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/
    return pattern.test(value) || 'Неверный формат номера телефона'
  }

  return (
    <div className={s.orderForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.contacts}>
          <div className={s.personal_data}>
            <input
              {...register('name', { required: true })}
              placeholder="Ваше имя"
            />
            {errors.name && (
              <span className={s.error}>Заполните это поле!</span>
            )}

            <input
              {...register('phone', {
                required: true,
                validate: validatePhone
              })}
              placeholder="Телефон"
            />
            {errors.phone && (
              <span className={s.error}>{errors.phone.message}</span>
            )}
          </div>
          <input
            {...register('address', { required: true })}
            placeholder="Адрес"
          />
          {errors.address && (
            <span className={s.error}>Заполните это поле!</span>
          )}
        </div>
        <div className={s.payment}>
          <label>
            <input
              type="radio"
              value="offline"
              {...register('paymentOption', { required: true })}
            />
            Оплачу наличными
          </label>

          <label>
            <input
              type="radio"
              value="online"
              {...register('paymentOption', { required: true })}
            />
            Оплачу онлайн
          </label>
        </div>

        <input
          className={s.submit_btn}
          type="submit"
          value={'оформить заказ'}
        />
      </form>
    </div>
  )
}

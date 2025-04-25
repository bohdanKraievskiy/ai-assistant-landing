import style from './EmailForm.module.css'
import { FiMail } from 'react-icons/fi'

export default function EmailForm() {
  return (
    <section className={style['section']}>
      <div className={style['container']}>
        <div className={style['text-side']}>
          <h2 className={style['title']}>Оставьте ваш email</h2>
          <p className={style['description']}>
            Мы отправим вам наше специальное предложение и запишем на онлайн встречу,
            чтобы обсудить как наши технологии могут помочь вашему бизнесу развиваться.
          </p>
        </div>

        <form className={style['form']}>
          <div className={style['input-wrapper']}>
            <FiMail className={style['icon']} />
            <input
              type="email"
              placeholder="Оставьте ваш email"
              className={style['input']}
              required
            />
          </div>
          <button type="submit" className={style['button']}>Отправить</button>
        </form>
      </div>
    </section>
  )
}

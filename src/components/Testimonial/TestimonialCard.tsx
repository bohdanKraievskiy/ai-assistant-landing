import style from './Testimonials.module.css'

interface Props {
  name: string
  avatar?: string
  rating: number
  message: string
  tags: string[]
}

export default function TestimonialCard({ name, avatar, rating, message, tags }: Props) {
  return (
    <div className={style['card']}>
      <div className={style['card-header']}>
        <div className={style['user-info']}>
          <span className={style['name']}>{name}</span>
          {avatar && <img src={avatar} alt={name} className={style['avatar']} />}
        </div>
        <div className={style['stars']}>{'★'.repeat(rating)}</div>
      </div>

      <p className={style['message']}>"{message}"</p>

      <div className={style['tags']}>
        {tags.map((t, i) => (
          <a key={i} href="#" className={style['tag']}>
            {t}
          </a>
        ))}
      </div>
    </div>
  )
}

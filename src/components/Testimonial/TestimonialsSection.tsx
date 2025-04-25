import style from './Testimonials.module.css'
import TestimonialCard from './TestimonialCard'

const data = [
  {
    name: 'Анна Смирнова',
    avatar: '/usecases/usecase.png',
    rating: 5,
    message: 'Я воплотила свою давнюю мечту благодаря вашему сервису! Пользуюсь постоянно. Клиенты довольны.',
    tags: ['Карманный Психолог', 'ИИ МАРКЕТОЛОГ'],
  },
  {
    name: 'Ринат Гатаев',
    avatar: '/usecases/usecase.png',
    rating: 5,
    message: 'Мы сделали уникальный продукт, который я с гордостью предлагаю своим клиентам!',
    tags: ['ЛЕЯ - личный ассистент'],
  },
  {
    name: 'Роман Федотов',
    avatar: '/usecases/usecase.png',
    rating: 5,
    message: 'Это не просто современное решение, а шаг вперед. Рекомендую!',
    tags: ['Наставник по денежному мышлению'],
  },
  {
    name: 'Charlotte S.',
    rating: 5,
    message:
      'PixeSaaS surpassed our expectations. Attention to detail and user-centric design made it a joy to work with.',
    tags: [],
  },
]

export default function TestimonialsSection() {
  return (
    <section className={style['section']}>
      <p className={style['badge']}>Отзывы</p>
      <h2 className={style['title']}>Вот что о нас говорят наши клиенты</h2>

      <div className={style['grid']}>
        {data.map((item, i) => (
          <TestimonialCard key={i} {...item} />
        ))}
      </div>
    </section>
  )
}

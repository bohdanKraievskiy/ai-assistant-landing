import style from './Team.module.css'
import TeamMemberCard from './TeamMemberCard'

const team = [
  {
    name: 'Николай Токаренко',
    roles: ['CSO'],
    image: 'team/nikolay.jpg',
    instagram: '#',
  },
  {
    name: 'Дмитрий Арчебасов',
    roles: ['CEO', 'CTO "Event Sphere AI"', 'Ex-lead ООО "Альфа Банк"'],
    image: 'team/dmitry.jpg',
    instagram: '#',
  },
  {
    name: 'Александр Колесников',
    roles: ['Web Development', 'N8n Prompt Engineer'],
    image: 'team/alexander.jpg',
    instagram: '#',
  },
]

export default function TeamSection() {
  return (
    <section className={style['section']}>
      <p className={style['badge']}>Team</p>
      <h2 className={style['title']}>Познакомьтесь с нашей<br />командой профессионалов</h2>

      <div className={style['grid']}>
        {team.map((member, i) => (
          <TeamMemberCard key={i} {...member} />
        ))}
      </div>
    </section>
  )
}

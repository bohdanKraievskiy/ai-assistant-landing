import style from './Team.module.css'
import { FiExternalLink } from 'react-icons/fi'

interface Props {
  name: string
  roles: string[]
  image: string
  instagram: string
}

export default function TeamMemberCard({ name, roles, image, instagram }: Props) {
  return (
    <div className={style['card']}>
      <img src={image} alt={name} className={style['photo']} />

      <div className={style['info']}>
        <h3 className={style['name']}>{name}</h3>
        <div className={style['roles']}>
          {roles.map((role, i) => (
            <p key={i}>{role}</p>
          ))}
        </div>

        <a href={instagram} target="_blank" className={style['insta']}>
          Instagram <FiExternalLink />
        </a>
      </div>
    </div>
  )
}

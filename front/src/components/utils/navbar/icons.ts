import { ReactComponent as home } from './icons/home.svg'
import { ReactComponent as about } from './icons/about.svg'
import { ReactComponent as stack } from './icons/stack.svg'
import { ReactComponent as projects } from './icons/projects.svg'
import { ReactComponent as contact } from './icons/contact.svg'

import { ReactComponent as reactIcon} from '../../../assets/react.svg'
import { ReactComponent as gitIcon } from '../../../assets/git.svg'
import { ReactComponent as jsIcon } from '../../../assets/js.svg'
import { ReactComponent as reduxIcon } from '../../../assets/redux.svg'
import { ReactComponent as tailwindIcon } from '../../../assets/tailwind.svg'
import { ReactComponent as tsIcon } from '../../../assets/ts.svg'

import { FunctionComponent } from 'react'

export const icons: { [icon: string]: FunctionComponent } = {
    home,
    about,
    stack,
    projects,
    contact,
}

export const stackIcons: { [icon: string]: FunctionComponent } = {
    reactIcon,
    gitIcon,
    jsIcon,
    reduxIcon,
    tailwindIcon,
    tsIcon,
}
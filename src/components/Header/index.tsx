import ptBR from 'date-fns/locale/pt-BR';
import format from 'date-fns/format';

import style from './styles.module.scss';

export function Header() {
    const currenDate = format(new Date(), 'EEEEEE, d MMM', {
        locale: ptBR,
    });
    return (
        <header className={style.headerContainer}>
            <img src="/logo.svg" alt="Podcastr" />

            <p>O melhor para ouvir, sempre</p>

            <span>{currenDate}</span>
        </header>
    );
}
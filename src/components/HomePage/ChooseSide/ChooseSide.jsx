import React from 'react';
import styles from './ChooseSide.module.css'
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL} from '../../../context/ThemeProvider'
import imgLite from './img/light-side.jpg'
import imgDark from './img/dark-side.jpg'
import imgFalcon from './img/falcon.jpg'
import cn from 'classnames'

const ChooseSideItem = ({ 
    classes,
    theme, 
    text, 
    img, 
}) => {
    const isTheme = useTheme()
    return (
        <div className={styles.container}>
            <div 
            className={cn(styles.item, classes)} 
            onClick={() => isTheme.change(theme)}
            >
                <div className={styles.item__header}>{text}</div>
                <img className={styles.item__img} src={img} alt={text} />
            </div>
        </div>

    )
}


const ChooseSide = () => {
    const elements = [
        {
            theme: THEME_LIGHT,
            text: "Light Side",
            img: imgLite,
            classes: styles.item__light,            
        },
        {
            theme: THEME_DARK,
            text: "Dark Side",
            img: imgDark,
            classes: styles.item__dark, 
        },
        {
            theme: THEME_NEITRAL,
            text: "Neitral Side",
            img: imgFalcon,
            classes: styles.item__neitral,
        },
    ]

    return (
    <div className={styles.container}>
        {elements.map((el, index) => (
            <ChooseSideItem
                key={index}
                theme={el.theme}
                text={el.text}
                img={el.img}
                classes={el.classes}
            />
        ))}
    </div>
   );
};

export default ChooseSide;


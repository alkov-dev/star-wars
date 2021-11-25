/*
Формат CSS-переменной:
--theme-default-УникальноеИмя # дефолтная переменная
--theme-light-УникальноеИмя   # для "light"
--theme-dark-УникальноеИмя    # для "dark"
--theme-neitral-УникальноеИмя # для "neitral"
*/



export const changeCssVariables = theme => {
    const root = document.querySelector(':root')


    // console.log(root.style, theme);

    // root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`)
    // root.style.setProperty('--theme-default-bgimage', `var(--theme-${theme}-bgimage)`)
// рефакторинг
    const cssVariables = ['header', 'bgimage']
    cssVariables.forEach(el => {
        root.style.setProperty(`--theme-default-${el}`, `var(--theme-${theme}-${el})`)
    })
}
